import matter from 'gray-matter';
import tomlFormatter from './toml';
import yamlFormatter from './yaml';
import jsonFormatter from './json';
const Languages = {
  YAML: 'yaml',
  TOML: 'toml',
  JSON: 'json'
};
const parsers = {
  toml: {
    parse: input => tomlFormatter.fromFile(input),
    stringify: (metadata, opts) => {
      const {
        sortedKeys
      } = opts || {};
      return tomlFormatter.toFile(metadata, sortedKeys);
    }
  },
  json: {
    parse: input => {
      let JSONinput = input.trim();
      // Fix JSON if leading and trailing brackets were trimmed.
      if (JSONinput.slice(0, 1) !== '{') {
        JSONinput = '{' + JSONinput + '}';
      }
      return jsonFormatter.fromFile(JSONinput);
    },
    stringify: metadata => {
      let JSONoutput = jsonFormatter.toFile(metadata).trim();
      // Trim leading and trailing brackets.
      if (JSONoutput.slice(0, 1) === '{' && JSONoutput.slice(-1) === '}') {
        JSONoutput = JSONoutput.slice(1, -1);
      }
      return JSONoutput;
    }
  },
  yaml: {
    parse: input => yamlFormatter.fromFile(input),
    stringify: (metadata, opts) => {
      const {
        sortedKeys,
        comments
      } = opts || {};
      return yamlFormatter.toFile(metadata, sortedKeys, comments);
    }
  }
};
function inferFrontmatterFormat(str) {
  const lineEnd = str.indexOf('\n');
  const firstLine = str.slice(0, lineEnd !== -1 ? lineEnd : 0).trim();
  if (firstLine.length > 3 && firstLine.slice(0, 3) === '---') {
    // No need to infer, `gray-matter` will handle things like `---toml` for us.
    return;
  }
  switch (firstLine) {
    case '---':
      return getFormatOpts(Languages.YAML);
    case '+++':
      return getFormatOpts(Languages.TOML);
    case '{':
      return getFormatOpts(Languages.JSON);
    default:
      console.warn('Unrecognized front-matter format.');
  }
}
export function getFormatOpts(format, customDelimiter) {
  if (!format) {
    return undefined;
  }
  const formats = {
    yaml: {
      language: Languages.YAML,
      delimiters: '---'
    },
    toml: {
      language: Languages.TOML,
      delimiters: '+++'
    },
    json: {
      language: Languages.JSON,
      delimiters: ['{', '}']
    }
  };
  const {
    language,
    delimiters
  } = formats[format];
  return {
    language,
    delimiters: customDelimiter || delimiters
  };
}
export class FrontmatterFormatter {
  constructor(format, customDelimiter) {
    this.format = getFormatOpts(format, customDelimiter);
  }
  fromFile(content) {
    const format = this.format || inferFrontmatterFormat(content);
    const result = matter(content, {
      engines: parsers,
      ...format
    });
    // in the absent of a body when serializing an entry we use an empty one
    // when calling `toFile`, so we don't want to add it when parsing.
    return {
      ...result.data,
      ...(result.content.trim() && {
        body: result.content
      })
    };
  }
  toFile(data, sortedKeys, comments) {
    const {
      body = '',
      ...meta
    } = data;

    // Stringify to YAML if the format was not set
    const format = this.format || getFormatOpts(Languages.YAML);

    // gray-matter always adds a line break at the end which trips our
    // change detection logic
    // https://github.com/jonschlinkert/gray-matter/issues/96
    const trimLastLineBreak = body.slice(-1) !== '\n';
    const file = matter.stringify(body, meta, {
      engines: parsers,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore `sortedKeys` is not recognized by gray-matter, so it gets passed through to the parser
      sortedKeys,
      comments,
      ...format
    });
    return trimLastLineBreak && file.slice(-1) === '\n' ? file.slice(0, -1) : file;
  }
}
export const FrontmatterInfer = new FrontmatterFormatter();
export function frontmatterYAML(customDelimiter) {
  return new FrontmatterFormatter(Languages.YAML, customDelimiter);
}
export function frontmatterTOML(customDelimiter) {
  return new FrontmatterFormatter(Languages.TOML, customDelimiter);
}
export function frontmatterJSON(customDelimiter) {
  return new FrontmatterFormatter(Languages.JSON, customDelimiter);
}