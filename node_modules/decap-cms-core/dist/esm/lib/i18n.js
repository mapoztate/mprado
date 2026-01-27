import { Map, List } from 'immutable';
import set from 'lodash/set';
import groupBy from 'lodash/groupBy';
import escapeRegExp from 'lodash/escapeRegExp';
import { selectEntrySlug } from '../reducers/collections';
export const I18N = 'i18n';
export let I18N_STRUCTURE = /*#__PURE__*/function (I18N_STRUCTURE) {
  I18N_STRUCTURE["MULTIPLE_FOLDERS"] = "multiple_folders";
  I18N_STRUCTURE["MULTIPLE_FILES"] = "multiple_files";
  I18N_STRUCTURE["SINGLE_FILE"] = "single_file";
  return I18N_STRUCTURE;
}({});
export let I18N_FIELD = /*#__PURE__*/function (I18N_FIELD) {
  I18N_FIELD["TRANSLATE"] = "translate";
  I18N_FIELD["DUPLICATE"] = "duplicate";
  I18N_FIELD["NONE"] = "none";
  return I18N_FIELD;
}({});
export function hasI18n(collection) {
  return collection.has(I18N);
}
export function getI18nInfo(collection) {
  if (!hasI18n(collection)) {
    return {};
  }
  const {
    structure,
    locales,
    default_locale: defaultLocale
  } = collection.get(I18N).toJS();
  return {
    structure,
    locales,
    defaultLocale
  };
}
export function getI18nFilesDepth(collection, depth) {
  const {
    structure
  } = getI18nInfo(collection);
  if (structure === I18N_STRUCTURE.MULTIPLE_FOLDERS) {
    return depth + 1;
  }
  return depth;
}
export function isFieldTranslatable(field, locale, defaultLocale) {
  const isTranslatable = locale !== defaultLocale && field.get(I18N) === I18N_FIELD.TRANSLATE;
  return isTranslatable;
}
export function isFieldDuplicate(field, locale, defaultLocale) {
  const isDuplicate = locale !== defaultLocale && field.get(I18N) === I18N_FIELD.DUPLICATE;
  return isDuplicate;
}
export function isFieldHidden(field, locale, defaultLocale) {
  const isHidden = locale !== defaultLocale && field.get(I18N) === I18N_FIELD.NONE;
  return isHidden;
}
export function getLocaleDataPath(locale) {
  return [I18N, locale, 'data'];
}
export function getDataPath(locale, defaultLocale) {
  const dataPath = locale !== defaultLocale ? getLocaleDataPath(locale) : ['data'];
  return dataPath;
}
export function getFilePath(structure, extension, path, slug, locale) {
  switch (structure) {
    case I18N_STRUCTURE.MULTIPLE_FOLDERS:
      return path.replace(`/${slug}`, `/${locale}/${slug}`);
    case I18N_STRUCTURE.MULTIPLE_FILES:
      return path.replace(new RegExp(`${escapeRegExp(extension)}$`), `${locale}.${extension}`);
    case I18N_STRUCTURE.SINGLE_FILE:
    default:
      return path;
  }
}
export function getLocaleFromPath(structure, extension, path) {
  switch (structure) {
    case I18N_STRUCTURE.MULTIPLE_FOLDERS:
      {
        const parts = path.split('/');
        // filename
        parts.pop();
        // locale
        return parts.pop();
      }
    case I18N_STRUCTURE.MULTIPLE_FILES:
      {
        const parts = path.slice(0, -`.${extension}`.length);
        return parts.split('.').pop();
      }
    case I18N_STRUCTURE.SINGLE_FILE:
    default:
      return '';
  }
}
export function getFilePaths(collection, extension, path, slug) {
  const {
    structure,
    locales
  } = getI18nInfo(collection);
  if (structure === I18N_STRUCTURE.SINGLE_FILE) {
    return [path];
  }
  const paths = locales.map(locale => getFilePath(structure, extension, path, slug, locale));
  return paths;
}
export function normalizeFilePath(structure, path, locale) {
  switch (structure) {
    case I18N_STRUCTURE.MULTIPLE_FOLDERS:
      return path.replace(`${locale}/`, '');
    case I18N_STRUCTURE.MULTIPLE_FILES:
      return path.replace(`.${locale}`, '');
    case I18N_STRUCTURE.SINGLE_FILE:
    default:
      return path;
  }
}
export function getI18nFiles(collection, extension, entryDraft, entryToRaw, path, slug, newPath) {
  const {
    structure,
    defaultLocale,
    locales
  } = getI18nInfo(collection);
  if (structure === I18N_STRUCTURE.SINGLE_FILE) {
    const data = locales.reduce((map, locale) => {
      const dataPath = getDataPath(locale, defaultLocale);
      return map.set(locale, entryDraft.getIn(dataPath));
    }, Map({}));
    const draft = entryDraft.set('data', data);
    return [{
      path: getFilePath(structure, extension, path, slug, locales[0]),
      slug,
      raw: entryToRaw(draft),
      ...(newPath && {
        newPath: getFilePath(structure, extension, newPath, slug, locales[0])
      })
    }];
  }
  const dataFiles = locales.map(locale => {
    const dataPath = getDataPath(locale, defaultLocale);
    const draft = entryDraft.set('data', entryDraft.getIn(dataPath));
    return {
      path: getFilePath(structure, extension, path, slug, locale),
      slug,
      raw: draft.get('data') ? entryToRaw(draft) : '',
      ...(newPath && {
        newPath: getFilePath(structure, extension, newPath, slug, locale)
      })
    };
  }).filter(dataFile => dataFile.raw);
  return dataFiles;
}
export function getI18nBackup(collection, entry, entryToRaw) {
  const {
    locales,
    defaultLocale
  } = getI18nInfo(collection);
  const i18nBackup = locales.filter(l => l !== defaultLocale).reduce((acc, locale) => {
    const dataPath = getDataPath(locale, defaultLocale);
    const data = entry.getIn(dataPath);
    if (!data) {
      return acc;
    }
    const draft = entry.set('data', data);
    return {
      ...acc,
      [locale]: {
        raw: entryToRaw(draft)
      }
    };
  }, {});
  return i18nBackup;
}
export function formatI18nBackup(i18nBackup, formatRawData) {
  const i18n = Object.entries(i18nBackup).reduce((acc, [locale, {
    raw
  }]) => {
    const entry = formatRawData(raw);
    return {
      ...acc,
      [locale]: {
        data: entry.data
      }
    };
  }, {});
  return i18n;
}
function applyDefaultI18nValues(collection, value, defaultLocaleValue) {
  if (collection.get('fields') === undefined) {
    return;
  }
  collection.get('fields').forEach(field => {
    if (field && field.get(I18N) === I18N_FIELD.DUPLICATE) {
      const data = value.data[field.get('name')];
      if (!data) {
        value.data[field.get('name')] = defaultLocaleValue.data[field.get('name')];
      }
    }
  });
}
function mergeValues(collection, structure, defaultLocale, values) {
  let defaultEntry = values.find(e => e.locale === defaultLocale);
  if (!defaultEntry) {
    defaultEntry = values[0];
    console.warn(`Could not locale entry for default locale '${defaultLocale}'`);
  }
  const i18n = values.filter(e => e.locale !== defaultEntry.locale).reduce((acc, {
    locale,
    value
  }) => {
    const dataPath = getLocaleDataPath(locale);
    if (defaultEntry) {
      applyDefaultI18nValues(collection, value, defaultEntry.value);
    }
    return set(acc, dataPath, value.data);
  }, {});
  const path = normalizeFilePath(structure, defaultEntry.value.path, defaultLocale);
  const slug = selectEntrySlug(collection, path);
  const entryValue = {
    ...defaultEntry.value,
    raw: '',
    ...i18n,
    path,
    slug
  };
  return entryValue;
}
function mergeSingleFileValue(entryValue, defaultLocale, locales) {
  const data = entryValue.data[defaultLocale] || {};
  const i18n = locales.filter(l => l !== defaultLocale).map(l => ({
    locale: l,
    value: entryValue.data[l]
  })).filter(e => e.value).reduce((acc, e) => {
    return {
      ...acc,
      [e.locale]: {
        data: e.value
      }
    };
  }, {});
  return {
    ...entryValue,
    data,
    i18n,
    raw: ''
  };
}
export async function getI18nEntry(collection, extension, path, slug, getEntryValue) {
  const {
    structure,
    locales,
    defaultLocale
  } = getI18nInfo(collection);
  let entryValue;
  if (structure === I18N_STRUCTURE.SINGLE_FILE) {
    entryValue = mergeSingleFileValue(await getEntryValue(path), defaultLocale, locales);
  } else {
    const entryValues = await Promise.all(locales.map(async locale => {
      const entryPath = getFilePath(structure, extension, path, slug, locale);
      const value = await getEntryValue(entryPath).catch(() => null);
      return {
        value,
        locale
      };
    }));
    const nonNullValues = entryValues.filter(e => e.value !== null);
    entryValue = mergeValues(collection, structure, defaultLocale, nonNullValues);
  }
  return entryValue;
}
export function groupEntries(collection, extension, entries) {
  const {
    structure,
    defaultLocale,
    locales
  } = getI18nInfo(collection);
  if (structure === I18N_STRUCTURE.SINGLE_FILE) {
    return entries.map(e => mergeSingleFileValue(e, defaultLocale, locales));
  }
  const grouped = groupBy(entries.map(e => ({
    locale: getLocaleFromPath(structure, extension, e.path),
    value: e
  })), ({
    locale,
    value: e
  }) => {
    return normalizeFilePath(structure, e.path, locale);
  });
  const groupedEntries = Object.values(grouped).reduce((acc, values) => {
    const entryValue = mergeValues(collection, structure, defaultLocale, values);
    return [...acc, entryValue];
  }, []);
  return groupedEntries;
}
export function getI18nDataFiles(collection, extension, path, slug, diffFiles) {
  const {
    structure
  } = getI18nInfo(collection);
  if (structure === I18N_STRUCTURE.SINGLE_FILE) {
    return diffFiles;
  }
  const paths = getFilePaths(collection, extension, path, slug);
  const dataFiles = paths.reduce((acc, path) => {
    const dataFile = diffFiles.find(file => file.path === path);
    if (dataFile) {
      return [...acc, dataFile];
    } else {
      return [...acc, {
        path,
        id: '',
        newFile: false
      }];
    }
  }, []);
  return dataFiles;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function duplicateDefaultI18nFields(collection, dataFields) {
  const {
    locales,
    defaultLocale
  } = getI18nInfo(collection);
  const i18nFields = Object.fromEntries(locales.filter(locale => locale !== defaultLocale).map(locale => [locale, {
    data: dataFields
  }]));
  return i18nFields;
}
export function duplicateI18nFields(entryDraft, field, locales, defaultLocale, fieldPath = [field.get('name')]) {
  const value = entryDraft.getIn(['entry', 'data', ...fieldPath]);
  if (field.get(I18N) === I18N_FIELD.DUPLICATE) {
    locales.filter(l => l !== defaultLocale).forEach(l => {
      entryDraft = entryDraft.setIn(['entry', ...getDataPath(l, defaultLocale), ...fieldPath], value);
    });
  }
  if (field.has('field') && !List.isList(value)) {
    const fields = [field.get('field')];
    fields.forEach(field => {
      entryDraft = duplicateI18nFields(entryDraft, field, locales, defaultLocale, [...fieldPath, field.get('name')]);
    });
  } else if (field.has('fields') && !List.isList(value)) {
    const fields = field.get('fields').toArray();
    fields.forEach(field => {
      entryDraft = duplicateI18nFields(entryDraft, field, locales, defaultLocale, [...fieldPath, field.get('name')]);
    });
  }
  return entryDraft;
}
export function getPreviewEntry(entry, locale, defaultLocale) {
  if (locale === defaultLocale) {
    return entry;
  }
  return entry.set('data', entry.getIn([I18N, locale, 'data']));
}
export function serializeI18n(collection, entry,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
serializeValues) {
  const {
    locales,
    defaultLocale
  } = getI18nInfo(collection);
  locales.filter(locale => locale !== defaultLocale).forEach(locale => {
    const dataPath = getLocaleDataPath(locale);
    entry = entry.setIn(dataPath, serializeValues(entry.getIn(dataPath)));
  });
  return entry;
}