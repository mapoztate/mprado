import { Map } from 'immutable';
import get from 'lodash/get';
import trimEnd from 'lodash/trimEnd';
import truncate from 'lodash/truncate';
import dayjs from 'dayjs';
import { basename, dirname, extname } from 'path';
const filters = [{
  pattern: /^upper$/,
  transform: str => str.toUpperCase()
}, {
  pattern: /^lower$/,
  transform: str => str.toLowerCase()
}, {
  pattern: /^date\('(.+)'\)$/,
  transform: (str, match) => dayjs(str).format(match[1])
}, {
  pattern: /^default\('(.+)'\)$/,
  transform: (str, match) => str ? str : match[1]
}, {
  pattern: /^ternary\('(.*)',\s*'(.*)'\)$/,
  transform: (str, match) => str ? match[1] : match[2]
}, {
  pattern: /^truncate\(([0-9]+)(?:(?:,\s*['"])([^'"]*)(?:['"]))?\)$/,
  transform: (str, match) => {
    const omission = match[2] || '...';
    const length = parseInt(match[1]) + omission.length;
    return truncate(str, {
      length,
      omission
    });
  }
}];
const FIELD_PREFIX = 'fields.';
const templateContentPattern = ' *([^}{| ]+)';
const filterPattern = '( \\| ([^}{]+?))? *';
const templateVariablePattern = `{{${templateContentPattern}${filterPattern}}}`;

// prepends a Zero if the date has only 1 digit
function formatDate(date) {
  return `0${date}`.slice(-2);
}
export const dateParsers = {
  year: date => `${date.getUTCFullYear()}`,
  month: date => formatDate(date.getUTCMonth() + 1),
  day: date => formatDate(date.getUTCDate()),
  hour: date => formatDate(date.getUTCHours()),
  minute: date => formatDate(date.getUTCMinutes()),
  second: date => formatDate(date.getUTCSeconds())
};
export function parseDateFromEntry(entry, dateFieldName) {
  if (!dateFieldName) {
    return;
  }
  const entryData = entry.getIn(['data']);
  return parseDateFromEntryData(entryData, dateFieldName);
}
export function parseDateFromEntryData(entryData, dateFieldName) {
  if (!dateFieldName) {
    return;
  }
  const dateValue = entryData.getIn([dateFieldName]);
  const dateDayjs = dateValue && dayjs(dateValue);
  if (dateDayjs && dateDayjs.isValid()) {
    return dateDayjs.toDate();
  }
}
export const SLUG_MISSING_REQUIRED_DATE = 'SLUG_MISSING_REQUIRED_DATE';
export function keyToPathArray(key) {
  if (!key) {
    return [];
  }
  const parts = [];
  const separator = '';
  const chars = key.split(separator);
  let currentChar;
  let currentStr = [];
  while (currentChar = chars.shift()) {
    if (['[', ']', '.'].includes(currentChar)) {
      if (currentStr.length > 0) {
        parts.push(currentStr.join(separator));
      }
      currentStr = [];
    } else {
      currentStr.push(currentChar);
    }
  }
  if (currentStr.length > 0) {
    parts.push(currentStr.join(separator));
  }
  return parts;
}
export function expandPath({
  data,
  path,
  paths = []
}) {
  if (path.endsWith('.*')) {
    path = path + '.';
  }
  const sep = '.*.';
  const parts = path.split(sep);
  if (parts.length === 1) {
    paths.push(path);
  } else {
    const partialPath = parts[0];
    const value = get(data, partialPath);
    if (Array.isArray(value)) {
      value.forEach((_, index) => {
        expandPath({
          data,
          path: trimEnd(`${partialPath}.${index}.${parts.slice(1).join(sep)}`, '.'),
          paths
        });
      });
    }
  }
  return paths;
}

// Allow `fields.` prefix in placeholder to override built in replacements
// like "slug" and "year" with values from fields of the same name.
function getExplicitFieldReplacement(key, data) {
  if (!key.startsWith(FIELD_PREFIX)) {
    return;
  }
  const fieldName = key.slice(FIELD_PREFIX.length);
  const value = data.getIn(keyToPathArray(fieldName));
  if (typeof value === 'object' && value !== null) {
    return JSON.stringify(value);
  }
  return value;
}
function getFilterFunction(filterStr) {
  if (filterStr) {
    let match = null;
    const filter = filters.find(filter => {
      match = filterStr.match(filter.pattern);
      return !!match;
    });
    if (filter) {
      return str => filter.transform(str, match);
    }
  }
  return null;
}
export function compileStringTemplate(template, date, identifier = '', data = Map(), processor) {
  let missingRequiredDate;

  // Turn off date processing (support for replacements like `{{year}}`), by passing in
  // `null` as the date arg.
  const useDate = date !== null;
  const compiledString = template.replace(RegExp(templateVariablePattern, 'g'), (_full, key, _part, filter) => {
    let replacement;
    const explicitFieldReplacement = getExplicitFieldReplacement(key, data);
    if (explicitFieldReplacement) {
      replacement = explicitFieldReplacement;
    } else if (dateParsers[key] && !date) {
      missingRequiredDate = true;
      return '';
    } else if (dateParsers[key]) {
      replacement = dateParsers[key](date);
    } else if (key === 'slug') {
      replacement = identifier;
    } else {
      replacement = data.getIn(keyToPathArray(key), '');
    }
    if (processor) {
      return processor(replacement);
    } else {
      const filterFunction = getFilterFunction(filter);
      if (filterFunction) {
        replacement = filterFunction(replacement);
      }
    }
    return replacement;
  });
  if (useDate && missingRequiredDate) {
    const err = new Error();
    err.name = SLUG_MISSING_REQUIRED_DATE;
    throw err;
  } else {
    return compiledString;
  }
}
export function extractTemplateVars(template) {
  const regexp = RegExp(templateVariablePattern, 'g');
  const contentRegexp = RegExp(templateContentPattern, 'g');
  const matches = template.match(regexp) || [];
  return matches.map(elem => {
    const match = elem.match(contentRegexp);
    return match ? match[0] : '';
  });
}

/**
 * Appends `dirname`, `filename` and `extension` to the provided `fields` map.
 * @param entryPath
 * @param fields
 * @param folder - optionally include a folder that the dirname will be relative to.
 *   eg: `addFileTemplateFields('foo/bar/baz.ext', fields, 'foo')`
 *       will result in: `{ dirname: 'bar', filename: 'baz', extension: 'ext' }`
 */
export function addFileTemplateFields(entryPath, fields, folder = '') {
  if (!entryPath) {
    return fields;
  }
  const extension = extname(entryPath);
  const filename = basename(entryPath, extension);
  const dirnameExcludingFolder = dirname(entryPath).replace(new RegExp(`^(/?)${folder}/?`), '$1');
  fields = fields.withMutations(map => {
    map.set('dirname', dirnameExcludingFolder);
    map.set('filename', filename);
    map.set('extension', extension === '' ? extension : extension.slice(1));
  });
  return fields;
}