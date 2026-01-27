import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { ClassNames } from '@emotion/react';
import { Map } from 'immutable';
import uniq from 'lodash/uniq';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import { v4 as uuid } from 'uuid';
import { UnControlled as ReactCodeMirror } from 'react-codemirror2';
import CodeMirror from 'codemirror';
import 'codemirror/keymap/vim';
import 'codemirror/keymap/sublime';
import 'codemirror/keymap/emacs';
/* babel-plugin-inline-import 'codemirror/lib/codemirror.css' */
const codeMirrorStyles = "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor .CodeMirror-line::selection,\n.cm-fat-cursor .CodeMirror-line > span::selection, \n.cm-fat-cursor .CodeMirror-line > span > span::selection { background: transparent; }\n.cm-fat-cursor .CodeMirror-line::-moz-selection,\n.cm-fat-cursor .CodeMirror-line > span::-moz-selection,\n.cm-fat-cursor .CodeMirror-line > span > span::-moz-selection { background: transparent; }\n.cm-fat-cursor { caret-color: transparent; }\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 50px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -50px; margin-right: -50px;\n  padding-bottom: 50px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n  z-index: 0;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 50px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n  outline: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -50px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n";
/* babel-plugin-inline-import 'codemirror/theme/material.css' */
const materialTheme = "/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material.CodeMirror {\n  background-color: #263238;\n  color: #EEFFFF;\n}\n\n.cm-s-material .CodeMirror-gutters {\n  background: #263238;\n  color: #546E7A;\n  border: none;\n}\n\n.cm-s-material .CodeMirror-guttermarker,\n.cm-s-material .CodeMirror-guttermarker-subtle,\n.cm-s-material .CodeMirror-linenumber {\n  color: #546E7A;\n}\n\n.cm-s-material .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n.cm-s-material.cm-fat-cursor .CodeMirror-cursor {\n  background-color: #5d6d5c80 !important;\n}\n.cm-s-material .cm-animate-fat-cursor {\n  background-color: #5d6d5c80 !important;\n}\n\n.cm-s-material div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-line::selection,\n.cm-s-material .CodeMirror-line>span::selection,\n.cm-s-material .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-line::-moz-selection,\n.cm-s-material .CodeMirror-line>span::-moz-selection,\n.cm-s-material .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material .cm-variable-3,\n.cm-s-material .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material .cm-comment {\n  color: #546E7A;\n}\n\n.cm-s-material .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material .cm-variable-3,\n.cm-s-material .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n";
import SettingsPane from './SettingsPane';
import SettingsButton from './SettingsButton';
import { jsx as ___EmotionJSX } from "@emotion/react";
const languageData = [{
  label: "AGS Script",
  identifiers: ["ags", "asc", "ash"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-c++src"
}, {
  label: "APL",
  identifiers: ["apl", "dyalog"],
  codemirror_mode: "apl",
  codemirror_mime_type: "text/apl"
}, {
  label: "ASN.1",
  identifiers: ["asn"],
  codemirror_mode: "asn.1",
  codemirror_mime_type: "text/x-ttcn-asn"
}, {
  label: "ASP",
  identifiers: ["asp", "aspx", "asax", "ascx", "ashx", "asmx", "axd"],
  codemirror_mode: "htmlembedded",
  codemirror_mime_type: "application/x-aspx"
}, {
  label: "Alpine Abuild",
  identifiers: ["abuild", "apkbuild"],
  codemirror_mode: "shell",
  codemirror_mime_type: "text/x-sh"
}, {
  label: "AngelScript",
  identifiers: ["angelscript", "as"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-c++src"
}, {
  label: "Ant Build System",
  identifiers: [],
  codemirror_mode: "xml",
  codemirror_mime_type: "application/xml"
}, {
  label: "Apex",
  identifiers: ["apex", "cls"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-java"
}, {
  label: "Asymptote",
  identifiers: ["asymptote", "asy"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-kotlin"
}, {
  label: "BibTeX",
  identifiers: ["bibtex", "bib"],
  codemirror_mode: "stex",
  codemirror_mime_type: "text/x-stex"
}, {
  label: "Brainfuck",
  identifiers: ["brainfuck", "b", "bf"],
  codemirror_mode: "brainfuck",
  codemirror_mime_type: "text/x-brainfuck"
}, {
  label: "C",
  identifiers: ["c", "cats", "h", "idc"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-csrc"
}, {
  label: "C#",
  identifiers: ["csharp", "cs", "cake", "csx"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-csharp"
}, {
  label: "C++",
  identifiers: ["cpp", "cc", "cp", "cxx", "h", "hh", "hpp", "hxx", "inc", "inl", "ino", "ipp", "re", "tcc", "tpp"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-c++src"
}, {
  label: "C2hs Haskell",
  identifiers: ["chs"],
  codemirror_mode: "haskell",
  codemirror_mime_type: "text/x-haskell"
}, {
  label: "CMake",
  identifiers: ["cmake"],
  codemirror_mode: "cmake",
  codemirror_mime_type: "text/x-cmake"
}, {
  label: "COBOL",
  identifiers: ["cobol", "cob", "cbl", "ccp", "cpy"],
  codemirror_mode: "cobol",
  codemirror_mime_type: "text/x-cobol"
}, {
  label: "COLLADA",
  identifiers: ["collada", "dae"],
  codemirror_mode: "xml",
  codemirror_mime_type: "text/xml"
}, {
  label: "CSON",
  identifiers: ["cson"],
  codemirror_mode: "coffeescript",
  codemirror_mime_type: "text/x-coffeescript"
}, {
  label: "CSS",
  identifiers: ["css"],
  codemirror_mode: "css",
  codemirror_mime_type: "text/css"
}, {
  label: "Cabal Config",
  identifiers: ["Cabal", "cabal"],
  codemirror_mode: "haskell",
  codemirror_mime_type: "text/x-haskell"
}, {
  label: "ChucK",
  identifiers: ["chuck", "ck"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-java"
}, {
  label: "Clojure",
  identifiers: ["clojure", "clj", "boot", "cljc", "cljs", "cljscm", "cljx", "hic"],
  codemirror_mode: "clojure",
  codemirror_mime_type: "text/x-clojure"
}, {
  label: "Closure Templates",
  identifiers: ["soy"],
  codemirror_mode: "soy",
  codemirror_mime_type: "text/x-soy"
}, {
  label: "Cloud Firestore Security Rules",
  identifiers: [],
  codemirror_mode: "css",
  codemirror_mime_type: "text/css"
}, {
  label: "CoffeeScript",
  identifiers: ["coffeescript", "coffee", "cake", "cjsx", "iced"],
  codemirror_mode: "coffeescript",
  codemirror_mime_type: "text/x-coffeescript"
}, {
  label: "Common Lisp",
  identifiers: ["lisp", "asd", "cl", "l", "lsp", "ny", "podsl", "sexp"],
  codemirror_mode: "commonlisp",
  codemirror_mime_type: "text/x-common-lisp"
}, {
  label: "Common Workflow Language",
  identifiers: ["cwl"],
  codemirror_mode: "yaml",
  codemirror_mime_type: "text/x-yaml"
}, {
  label: "Component Pascal",
  identifiers: ["delphi", "objectpascal", "cp", "cps"],
  codemirror_mode: "pascal",
  codemirror_mime_type: "text/x-pascal"
}, {
  label: "Crystal",
  identifiers: ["crystal", "cr"],
  codemirror_mode: "crystal",
  codemirror_mime_type: "text/x-crystal"
}, {
  label: "Cuda",
  identifiers: ["cuda", "cu", "cuh"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-c++src"
}, {
  label: "Cycript",
  identifiers: ["cycript", "cy"],
  codemirror_mode: "javascript",
  codemirror_mime_type: "text/javascript"
}, {
  label: "Cython",
  identifiers: ["cython", "pyrex", "pyx", "pxd", "pxi"],
  codemirror_mode: "python",
  codemirror_mime_type: "text/x-cython"
}, {
  label: "D",
  identifiers: ["d", "di"],
  codemirror_mode: "d",
  codemirror_mime_type: "text/x-d"
}, {
  label: "DTrace",
  identifiers: ["dtrace", "d"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-csrc"
}, {
  label: "Dart",
  identifiers: ["dart"],
  codemirror_mode: "dart",
  codemirror_mime_type: "application/dart"
}, {
  label: "Dhall",
  identifiers: ["dhall"],
  codemirror_mode: "haskell",
  codemirror_mime_type: "text/x-haskell"
}, {
  label: "Diff",
  identifiers: ["diff", "udiff", "patch"],
  codemirror_mode: "diff",
  codemirror_mime_type: "text/x-diff"
}, {
  label: "Dockerfile",
  identifiers: ["dockerfile"],
  codemirror_mode: "dockerfile",
  codemirror_mime_type: "text/x-dockerfile"
}, {
  label: "Dylan",
  identifiers: ["dylan", "dyl", "intr", "lid"],
  codemirror_mode: "dylan",
  codemirror_mime_type: "text/x-dylan"
}, {
  label: "EBNF",
  identifiers: ["ebnf"],
  codemirror_mode: "ebnf",
  codemirror_mime_type: "text/x-ebnf"
}, {
  label: "ECL",
  identifiers: ["ecl", "eclxml"],
  codemirror_mode: "ecl",
  codemirror_mime_type: "text/x-ecl"
}, {
  label: "EQ",
  identifiers: ["eq"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-csharp"
}, {
  label: "Eagle",
  identifiers: ["eagle", "sch", "brd"],
  codemirror_mode: "xml",
  codemirror_mime_type: "text/xml"
}, {
  label: "Easybuild",
  identifiers: ["easybuild", "eb"],
  codemirror_mode: "python",
  codemirror_mime_type: "text/x-python"
}, {
  label: "Ecere Projects",
  identifiers: ["epj"],
  codemirror_mode: "javascript",
  codemirror_mime_type: "application/json"
}, {
  label: "EditorConfig",
  identifiers: ["editorconfig"],
  codemirror_mode: "properties",
  codemirror_mime_type: "text/x-properties"
}, {
  label: "Edje Data Collection",
  identifiers: ["edc"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-c++src"
}, {
  label: "Eiffel",
  identifiers: ["eiffel", "e"],
  codemirror_mode: "eiffel",
  codemirror_mime_type: "text/x-eiffel"
}, {
  label: "Elm",
  identifiers: ["elm"],
  codemirror_mode: "elm",
  codemirror_mime_type: "text/x-elm"
}, {
  label: "Emacs Lisp",
  identifiers: ["elisp", "emacs", "el"],
  codemirror_mode: "commonlisp",
  codemirror_mime_type: "text/x-common-lisp"
}, {
  label: "EmberScript",
  identifiers: ["emberscript", "em"],
  codemirror_mode: "coffeescript",
  codemirror_mime_type: "text/x-coffeescript"
}, {
  label: "Erlang",
  identifiers: ["erlang", "erl", "es", "escript", "hrl", "xrl", "yrl"],
  codemirror_mode: "erlang",
  codemirror_mime_type: "text/x-erlang"
}, {
  label: "F#",
  identifiers: ["fsharp", "fs", "fsi", "fsx"],
  codemirror_mode: "mllike",
  codemirror_mime_type: "text/x-fsharp"
}, {
  label: "Factor",
  identifiers: ["factor"],
  codemirror_mode: "factor",
  codemirror_mime_type: "text/x-factor"
}, {
  label: "Forth",
  identifiers: ["forth", "fth", "f", "for", "fr", "frt", "fs"],
  codemirror_mode: "forth",
  codemirror_mime_type: "text/x-forth"
}, {
  label: "Fortran",
  identifiers: ["fortran", "f", "for", "fpp"],
  codemirror_mode: "fortran",
  codemirror_mime_type: "text/x-fortran"
}, {
  label: "GCC Machine Description",
  identifiers: ["md"],
  codemirror_mode: "commonlisp",
  codemirror_mime_type: "text/x-common-lisp"
}, {
  label: "GN",
  identifiers: ["gn", "gni"],
  codemirror_mode: "python",
  codemirror_mime_type: "text/x-python"
}, {
  label: "Game Maker Language",
  identifiers: ["gml"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-c++src"
}, {
  label: "Genshi",
  identifiers: ["genshi", "kid"],
  codemirror_mode: "xml",
  codemirror_mime_type: "text/xml"
}, {
  label: "Gentoo Ebuild",
  identifiers: ["ebuild"],
  codemirror_mode: "shell",
  codemirror_mime_type: "text/x-sh"
}, {
  label: "Gentoo Eclass",
  identifiers: ["eclass"],
  codemirror_mode: "shell",
  codemirror_mime_type: "text/x-sh"
}, {
  label: "Git Attributes",
  identifiers: ["gitattributes"],
  codemirror_mode: "shell",
  codemirror_mime_type: "text/x-sh"
}, {
  label: "Git Config",
  identifiers: ["gitconfig", "gitmodules"],
  codemirror_mode: "properties",
  codemirror_mime_type: "text/x-properties"
}, {
  label: "Glyph",
  identifiers: ["glyph", "glf"],
  codemirror_mode: "tcl",
  codemirror_mime_type: "text/x-tcl"
}, {
  label: "Go",
  identifiers: ["go", "golang"],
  codemirror_mode: "go",
  codemirror_mime_type: "text/x-go"
}, {
  label: "Grammatical Framework",
  identifiers: ["gf"],
  codemirror_mode: "haskell",
  codemirror_mime_type: "text/x-haskell"
}, {
  label: "Groovy",
  identifiers: ["groovy", "grt", "gtpl", "gvy"],
  codemirror_mode: "groovy",
  codemirror_mime_type: "text/x-groovy"
}, {
  label: "Groovy Server Pages",
  identifiers: ["gsp"],
  codemirror_mode: "htmlembedded",
  codemirror_mime_type: "application/x-jsp"
}, {
  label: "HCL",
  identifiers: ["hcl", "terraform", "tf", "tfvars", "workflow"],
  codemirror_mode: "ruby",
  codemirror_mime_type: "text/x-ruby"
}, {
  label: "HTML",
  identifiers: ["html", "xhtml", "htm", "inc", "st", "xht"],
  codemirror_mode: "htmlmixed",
  codemirror_mime_type: "text/html"
}, {
  label: "HTML+Django",
  identifiers: ["django", "htmldjango", "njk", "nunjucks", "jinja", "mustache"],
  codemirror_mode: "django",
  codemirror_mime_type: "text/x-django"
}, {
  label: "HTML+ECR",
  identifiers: ["ecr"],
  codemirror_mode: "htmlmixed",
  codemirror_mime_type: "text/html"
}, {
  label: "HTML+EEX",
  identifiers: ["eex"],
  codemirror_mode: "htmlmixed",
  codemirror_mime_type: "text/html"
}, {
  label: "HTML+ERB",
  identifiers: ["erb"],
  codemirror_mode: "htmlembedded",
  codemirror_mime_type: "application/x-erb"
}, {
  label: "HTML+PHP",
  identifiers: ["phtml"],
  codemirror_mode: "php",
  codemirror_mime_type: "application/x-httpd-php"
}, {
  label: "HTML+Razor",
  identifiers: ["razor", "cshtml"],
  codemirror_mode: "htmlmixed",
  codemirror_mime_type: "text/html"
}, {
  label: "HTTP",
  identifiers: ["http"],
  codemirror_mode: "http",
  codemirror_mime_type: "message/http"
}, {
  label: "Hack",
  identifiers: ["hack", "hh", "php"],
  codemirror_mode: "php",
  codemirror_mime_type: "application/x-httpd-php"
}, {
  label: "Haml",
  identifiers: ["haml"],
  codemirror_mode: "haml",
  codemirror_mime_type: "text/x-haml"
}, {
  label: "Haskell",
  identifiers: ["haskell", "hs", "hsc"],
  codemirror_mode: "haskell",
  codemirror_mime_type: "text/x-haskell"
}, {
  label: "Haxe",
  identifiers: ["haxe", "hx", "hxsl"],
  codemirror_mode: "haxe",
  codemirror_mime_type: "text/x-haxe"
}, {
  label: "HolyC",
  identifiers: ["holyc", "hc"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-csrc"
}, {
  label: "IDL",
  identifiers: ["idl", "pro", "dlm"],
  codemirror_mode: "idl",
  codemirror_mime_type: "text/x-idl"
}, {
  label: "INI",
  identifiers: ["ini", "dosini", "cfg", "lektorproject", "prefs", "pro", "properties"],
  codemirror_mode: "properties",
  codemirror_mime_type: "text/x-properties"
}, {
  label: "IRC log",
  identifiers: ["irc", "irclog", "weechatlog"],
  codemirror_mode: "mirc",
  codemirror_mime_type: "text/mirc"
}, {
  label: "Ignore List",
  identifiers: ["ignore", "gitignore"],
  codemirror_mode: "shell",
  codemirror_mime_type: "text/x-sh"
}, {
  label: "JSON",
  identifiers: ["json", "avsc", "geojson", "gltf", "har", "ice", "jsonl", "mcmeta", "tfstate", "topojson", "webapp", "webmanifest", "yy", "yyp"],
  codemirror_mode: "javascript",
  codemirror_mime_type: "application/json"
}, {
  label: "JSON with Comments",
  identifiers: ["jsonc"],
  codemirror_mode: "javascript",
  codemirror_mime_type: "text/javascript"
}, {
  label: "JSON5",
  identifiers: [],
  codemirror_mode: "javascript",
  codemirror_mime_type: "application/json"
}, {
  label: "JSONLD",
  identifiers: ["jsonld"],
  codemirror_mode: "javascript",
  codemirror_mime_type: "application/json"
}, {
  label: "JSONiq",
  identifiers: ["jsoniq", "jq"],
  codemirror_mode: "javascript",
  codemirror_mime_type: "application/json"
}, {
  label: "JSX",
  identifiers: ["jsx"],
  codemirror_mode: "jsx",
  codemirror_mime_type: "text/jsx"
}, {
  label: "Java",
  identifiers: ["java"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-java"
}, {
  label: "Java Properties",
  identifiers: ["properties"],
  codemirror_mode: "properties",
  codemirror_mime_type: "text/x-properties"
}, {
  label: "Java Server Pages",
  identifiers: ["jsp"],
  codemirror_mode: "htmlembedded",
  codemirror_mime_type: "application/x-jsp"
}, {
  label: "JavaScript",
  identifiers: ["javascript", "js", "node", "bones", "es", "frag", "gs", "jake", "jsb", "jscad", "jsfl", "jsm", "jss", "mjs", "njs", "pac", "sjs", "ssjs", "xsjs", "xsjslib"],
  codemirror_mode: "javascript",
  codemirror_mime_type: "text/javascript"
}, {
  label: "JavaScript+ERB",
  identifiers: [],
  codemirror_mode: "javascript",
  codemirror_mime_type: "application/javascript"
}, {
  label: "Julia",
  identifiers: ["julia", "jl"],
  codemirror_mode: "julia",
  codemirror_mime_type: "text/x-julia"
}, {
  label: "Jupyter Notebook",
  identifiers: ["ipynb"],
  codemirror_mode: "javascript",
  codemirror_mime_type: "application/json"
}, {
  label: "KiCad Layout",
  identifiers: ["pcbnew"],
  codemirror_mode: "commonlisp",
  codemirror_mime_type: "text/x-common-lisp"
}, {
  label: "Kit",
  identifiers: ["kit"],
  codemirror_mode: "htmlmixed",
  codemirror_mime_type: "text/html"
}, {
  label: "Kotlin",
  identifiers: ["kotlin", "kt", "ktm", "kts"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-kotlin"
}, {
  label: "LFE",
  identifiers: ["lfe"],
  codemirror_mode: "commonlisp",
  codemirror_mime_type: "text/x-common-lisp"
}, {
  label: "LTspice Symbol",
  identifiers: ["asy"],
  codemirror_mode: "spreadsheet",
  codemirror_mime_type: "text/x-spreadsheet"
}, {
  label: "LabVIEW",
  identifiers: ["labview", "lvproj"],
  codemirror_mode: "xml",
  codemirror_mime_type: "text/xml"
}, {
  label: "Latte",
  identifiers: ["latte"],
  codemirror_mode: "smarty",
  codemirror_mime_type: "text/x-smarty"
}, {
  label: "Less",
  identifiers: ["less"],
  codemirror_mode: "css",
  codemirror_mime_type: "text/css"
}, {
  label: "Literate Haskell",
  identifiers: ["lhaskell", "lhs"],
  codemirror_mode: "haskell-literate",
  codemirror_mime_type: "text/x-literate-haskell"
}, {
  label: "LiveScript",
  identifiers: ["livescript", "ls"],
  codemirror_mode: "livescript",
  codemirror_mime_type: "text/x-livescript"
}, {
  label: "LookML",
  identifiers: ["lookml"],
  codemirror_mode: "yaml",
  codemirror_mime_type: "text/x-yaml"
}, {
  label: "Lua",
  identifiers: ["lua", "fcgi", "nse", "rbxs", "wlua"],
  codemirror_mode: "lua",
  codemirror_mime_type: "text/x-lua"
}, {
  label: "M",
  identifiers: ["m", "mumps"],
  codemirror_mode: "mumps",
  codemirror_mime_type: "text/x-mumps"
}, {
  label: "MATLAB",
  identifiers: ["matlab", "octave", "m"],
  codemirror_mode: "octave",
  codemirror_mime_type: "text/x-octave"
}, {
  label: "MTML",
  identifiers: ["mtml"],
  codemirror_mode: "htmlmixed",
  codemirror_mime_type: "text/html"
}, {
  label: "MUF",
  identifiers: ["muf", "m"],
  codemirror_mode: "forth",
  codemirror_mime_type: "text/x-forth"
}, {
  label: "Makefile",
  identifiers: ["makefile", "bsdmake", "make", "mf", "mak", "d", "mk", "mkfile"],
  codemirror_mode: "cmake",
  codemirror_mime_type: "text/x-cmake"
}, {
  label: "Markdown",
  identifiers: ["markdown", "pandoc", "md", "mdown", "mdwn", "mdx", "mkd", "mkdn", "mkdown", "ronn", "workbook"],
  codemirror_mode: "gfm",
  codemirror_mime_type: "text/x-gfm"
}, {
  label: "Marko",
  identifiers: ["marko", "markojs"],
  codemirror_mode: "htmlmixed",
  codemirror_mime_type: "text/html"
}, {
  label: "Mathematica",
  identifiers: ["mathematica", "mma", "cdf", "m", "ma", "mt", "nb", "nbp", "wl", "wlt"],
  codemirror_mode: "mathematica",
  codemirror_mime_type: "text/x-mathematica"
}, {
  label: "Maven POM",
  identifiers: [],
  codemirror_mode: "xml",
  codemirror_mime_type: "text/xml"
}, {
  label: "Max",
  identifiers: ["max", "maxmsp", "maxpat", "maxhelp", "maxproj", "mxt", "pat"],
  codemirror_mode: "javascript",
  codemirror_mime_type: "application/json"
}, {
  label: "Metal",
  identifiers: ["metal"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-c++src"
}, {
  label: "Mirah",
  identifiers: ["mirah", "druby", "duby"],
  codemirror_mode: "ruby",
  codemirror_mime_type: "text/x-ruby"
}, {
  label: "Modelica",
  identifiers: ["modelica", "mo"],
  codemirror_mode: "modelica",
  codemirror_mime_type: "text/x-modelica"
}, {
  label: "NSIS",
  identifiers: ["nsis", "nsi", "nsh"],
  codemirror_mode: "nsis",
  codemirror_mime_type: "text/x-nsis"
}, {
  label: "NetLogo",
  identifiers: ["netlogo", "nlogo"],
  codemirror_mode: "commonlisp",
  codemirror_mime_type: "text/x-common-lisp"
}, {
  label: "NewLisp",
  identifiers: ["newlisp", "nl", "lisp", "lsp"],
  codemirror_mode: "commonlisp",
  codemirror_mime_type: "text/x-common-lisp"
}, {
  label: "Nginx",
  identifiers: ["nginx", "nginxconf", "vhost"],
  codemirror_mode: "nginx",
  codemirror_mime_type: "text/x-nginx-conf"
}, {
  label: "Nu",
  identifiers: ["nu", "nush"],
  codemirror_mode: "scheme",
  codemirror_mime_type: "text/x-scheme"
}, {
  label: "NumPy",
  identifiers: ["numpy", "numpyw", "numsc"],
  codemirror_mode: "python",
  codemirror_mime_type: "text/x-python"
}, {
  label: "OCaml",
  identifiers: ["ocaml", "ml", "eliom", "eliomi", "mli", "mll", "mly"],
  codemirror_mode: "mllike",
  codemirror_mime_type: "text/x-ocaml"
}, {
  label: "Objective-C",
  identifiers: ["objc", "objectivec", "m", "h"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-objectivec"
}, {
  label: "Objective-C++",
  identifiers: ["mm"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-objectivec"
}, {
  label: "OpenCL",
  identifiers: ["opencl", "cl"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-csrc"
}, {
  label: "OpenRC runscript",
  identifiers: ["openrc"],
  codemirror_mode: "shell",
  codemirror_mime_type: "text/x-sh"
}, {
  label: "Oz",
  identifiers: ["oz"],
  codemirror_mode: "oz",
  codemirror_mime_type: "text/x-oz"
}, {
  label: "PHP",
  identifiers: ["php", "inc", "aw", "ctp", "fcgi", "phps", "phpt"],
  codemirror_mode: "php",
  codemirror_mime_type: "application/x-httpd-php"
}, {
  label: "PLSQL",
  identifiers: ["plsql", "pls", "bdy", "ddl", "fnc", "pck", "pkb", "pks", "plb", "prc", "spc", "sql", "tpb", "tps", "trg", "vw"],
  codemirror_mode: "sql",
  codemirror_mime_type: "text/x-plsql"
}, {
  label: "PLpgSQL",
  identifiers: ["plpgsql", "pgsql", "sql"],
  codemirror_mode: "sql",
  codemirror_mime_type: "text/x-sql"
}, {
  label: "Pascal",
  identifiers: ["pascal", "pas", "dfm", "dpr", "inc", "lpr", "pp"],
  codemirror_mode: "pascal",
  codemirror_mime_type: "text/x-pascal"
}, {
  label: "Perl",
  identifiers: ["perl", "cperl", "pl", "al", "cgi", "fcgi", "ph", "plx", "pm", "psgi", "t"],
  codemirror_mode: "perl",
  codemirror_mime_type: "text/x-perl"
}, {
  label: "Perl 6",
  identifiers: ["nqp", "pl", "pm", "t"],
  codemirror_mode: "perl",
  codemirror_mime_type: "text/x-perl"
}, {
  label: "Pic",
  identifiers: ["pic", "chem"],
  codemirror_mode: "troff",
  codemirror_mime_type: "text/troff"
}, {
  label: "Pod",
  identifiers: ["pod"],
  codemirror_mode: "perl",
  codemirror_mime_type: "text/x-perl"
}, {
  label: "PowerShell",
  identifiers: ["powershell", "posh", "pwsh"],
  codemirror_mode: "powershell",
  codemirror_mime_type: "application/x-powershell"
}, {
  label: "Protocol Buffer",
  identifiers: ["protobuf", "proto"],
  codemirror_mode: "protobuf",
  codemirror_mime_type: "text/x-protobuf"
}, {
  label: "Public Key",
  identifiers: ["asc", "pub"],
  codemirror_mode: "asciiarmor",
  codemirror_mime_type: "application/pgp"
}, {
  label: "Pug",
  identifiers: ["pug", "jade"],
  codemirror_mode: "pug",
  codemirror_mime_type: "text/x-pug"
}, {
  label: "Puppet",
  identifiers: ["puppet", "pp"],
  codemirror_mode: "puppet",
  codemirror_mime_type: "text/x-puppet"
}, {
  label: "PureScript",
  identifiers: ["purescript", "purs"],
  codemirror_mode: "haskell",
  codemirror_mime_type: "text/x-haskell"
}, {
  label: "Python",
  identifiers: ["python", "rusthon", "py", "bzl", "cgi", "fcgi", "gyp", "gypi", "lmi", "pyde", "pyi", "pyp", "pyt", "pyw", "rpy", "spec", "tac", "wsgi", "xpy"],
  codemirror_mode: "python",
  codemirror_mime_type: "text/x-python"
}, {
  label: "R",
  identifiers: ["r", "R", "Rscript", "splus", "rd", "rsx"],
  codemirror_mode: "r",
  codemirror_mime_type: "text/x-rsrc"
}, {
  label: "RAML",
  identifiers: ["raml"],
  codemirror_mode: "yaml",
  codemirror_mime_type: "text/x-yaml"
}, {
  label: "RHTML",
  identifiers: ["rhtml"],
  codemirror_mode: "htmlembedded",
  codemirror_mime_type: "application/x-erb"
}, {
  label: "RMarkdown",
  identifiers: ["rmarkdown", "rmd"],
  codemirror_mode: "gfm",
  codemirror_mime_type: "text/x-gfm"
}, {
  label: "RPM Spec",
  identifiers: ["specfile", "spec"],
  codemirror_mode: "rpm",
  codemirror_mime_type: "text/x-rpm-spec"
}, {
  label: "Reason",
  identifiers: ["reason", "re", "rei"],
  codemirror_mode: "rust",
  codemirror_mime_type: "text/x-rustsrc"
}, {
  label: "Roff",
  identifiers: ["roff", "groff", "man", "manpage", "mdoc", "nroff", "troff", "l", "me", "ms", "n", "nr", "rno", "tmac"],
  codemirror_mode: "troff",
  codemirror_mime_type: "text/troff"
}, {
  label: "Roff Manpage",
  identifiers: ["man", "mdoc"],
  codemirror_mode: "troff",
  codemirror_mime_type: "text/troff"
}, {
  label: "Rouge",
  identifiers: ["rouge", "rg"],
  codemirror_mode: "clojure",
  codemirror_mime_type: "text/x-clojure"
}, {
  label: "Ruby",
  identifiers: ["ruby", "jruby", "macruby", "rake", "rb", "rbx", "builder", "eye", "fcgi", "gemspec", "god", "jbuilder", "mspec", "pluginspec", "podspec", "rabl", "rbuild", "rbw", "ru", "spec", "thor", "watchr"],
  codemirror_mode: "ruby",
  codemirror_mime_type: "text/x-ruby"
}, {
  label: "Rust",
  identifiers: ["rust", "rs"],
  codemirror_mode: "rust",
  codemirror_mime_type: "text/x-rustsrc"
}, {
  label: "SAS",
  identifiers: ["sas"],
  codemirror_mode: "sas",
  codemirror_mime_type: "text/x-sas"
}, {
  label: "SCSS",
  identifiers: ["scss"],
  codemirror_mode: "css",
  codemirror_mime_type: "text/x-scss"
}, {
  label: "SPARQL",
  identifiers: ["sparql", "rq"],
  codemirror_mode: "sparql",
  codemirror_mime_type: "application/sparql-query"
}, {
  label: "SQL",
  identifiers: ["sql", "cql", "ddl", "inc", "mysql", "prc", "tab", "udf", "viw"],
  codemirror_mode: "sql",
  codemirror_mime_type: "text/x-sql"
}, {
  label: "SQLPL",
  identifiers: ["sqlpl", "sql"],
  codemirror_mode: "sql",
  codemirror_mime_type: "text/x-sql"
}, {
  label: "SRecode Template",
  identifiers: ["srt"],
  codemirror_mode: "commonlisp",
  codemirror_mime_type: "text/x-common-lisp"
}, {
  label: "SVG",
  identifiers: ["svg"],
  codemirror_mode: "xml",
  codemirror_mime_type: "text/xml"
}, {
  label: "Sage",
  identifiers: ["sage", "sagews"],
  codemirror_mode: "python",
  codemirror_mime_type: "text/x-python"
}, {
  label: "SaltStack",
  identifiers: ["saltstack", "saltstate", "salt", "sls"],
  codemirror_mode: "yaml",
  codemirror_mime_type: "text/x-yaml"
}, {
  label: "Sass",
  identifiers: ["sass"],
  codemirror_mode: "sass",
  codemirror_mime_type: "text/x-sass"
}, {
  label: "Scala",
  identifiers: ["scala", "kojo", "sbt", "sc"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-scala"
}, {
  label: "Scheme",
  identifiers: ["scheme", "scm", "sch", "sld", "sls", "sps", "ss"],
  codemirror_mode: "scheme",
  codemirror_mime_type: "text/x-scheme"
}, {
  label: "Shell",
  identifiers: ["shell", "sh", "bash", "zsh", "bats", "cgi", "command", "fcgi", "ksh", "tmux", "tool"],
  codemirror_mode: "shell",
  codemirror_mime_type: "text/x-sh"
}, {
  label: "ShellSession",
  identifiers: ["shellsession", "console"],
  codemirror_mode: "shell",
  codemirror_mime_type: "text/x-sh"
}, {
  label: "Slim",
  identifiers: ["slim"],
  codemirror_mode: "slim",
  codemirror_mime_type: "text/x-slim"
}, {
  label: "Smalltalk",
  identifiers: ["smalltalk", "squeak", "st", "cs"],
  codemirror_mode: "smalltalk",
  codemirror_mime_type: "text/x-stsrc"
}, {
  label: "Smarty",
  identifiers: ["smarty", "tpl"],
  codemirror_mode: "smarty",
  codemirror_mime_type: "text/x-smarty"
}, {
  label: "Squirrel",
  identifiers: ["squirrel", "nut"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-c++src"
}, {
  label: "Standard ML",
  identifiers: ["sml", "ML", "fun", "sig"],
  codemirror_mode: "mllike",
  codemirror_mime_type: "text/x-ocaml"
}, {
  label: "Svelte",
  identifiers: ["svelte"],
  codemirror_mode: "htmlmixed",
  codemirror_mime_type: "text/html"
}, {
  label: "Swift",
  identifiers: ["swift"],
  codemirror_mode: "swift",
  codemirror_mime_type: "text/x-swift"
}, {
  label: "SystemVerilog",
  identifiers: ["systemverilog", "sv", "svh", "vh"],
  codemirror_mode: "verilog",
  codemirror_mime_type: "text/x-systemverilog"
}, {
  label: "TOML",
  identifiers: ["toml"],
  codemirror_mode: "toml",
  codemirror_mime_type: "text/x-toml"
}, {
  label: "TSX",
  identifiers: ["tsx"],
  codemirror_mode: "jsx",
  codemirror_mime_type: "text/jsx"
}, {
  label: "Tcl",
  identifiers: ["tcl", "adp", "tm"],
  codemirror_mode: "tcl",
  codemirror_mime_type: "text/x-tcl"
}, {
  label: "Tcsh",
  identifiers: ["tcsh", "csh"],
  codemirror_mode: "shell",
  codemirror_mime_type: "text/x-sh"
}, {
  label: "TeX",
  identifiers: ["tex", "latex", "aux", "bbx", "cbx", "cls", "dtx", "ins", "lbx", "ltx", "mkii", "mkiv", "mkvi", "sty", "toc"],
  codemirror_mode: "stex",
  codemirror_mime_type: "text/x-stex"
}, {
  label: "Terra",
  identifiers: ["terra", "t"],
  codemirror_mode: "lua",
  codemirror_mime_type: "text/x-lua"
}, {
  label: "Textile",
  identifiers: ["textile"],
  codemirror_mode: "textile",
  codemirror_mime_type: "text/x-textile"
}, {
  label: "Turtle",
  identifiers: ["turtle", "ttl"],
  codemirror_mode: "turtle",
  codemirror_mime_type: "text/turtle"
}, {
  label: "Twig",
  identifiers: ["twig"],
  codemirror_mode: "twig",
  codemirror_mime_type: "text/x-twig"
}, {
  label: "TypeScript",
  identifiers: ["typescript", "ts"],
  codemirror_mode: "javascript",
  codemirror_mime_type: "application/typescript"
}, {
  label: "Unified Parallel C",
  identifiers: ["upc"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-csrc"
}, {
  label: "Unity3D Asset",
  identifiers: ["anim", "asset", "mat", "meta", "prefab", "unity"],
  codemirror_mode: "yaml",
  codemirror_mime_type: "text/x-yaml"
}, {
  label: "Uno",
  identifiers: ["uno"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-csharp"
}, {
  label: "UnrealScript",
  identifiers: ["unrealscript", "uc"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-java"
}, {
  label: "V",
  identifiers: ["v", "vlang"],
  codemirror_mode: "go",
  codemirror_mime_type: "text/x-go"
}, {
  label: "VHDL",
  identifiers: ["vhdl", "vhd", "vhf", "vhi", "vho", "vhs", "vht", "vhw"],
  codemirror_mode: "vhdl",
  codemirror_mime_type: "text/x-vhdl"
}, {
  label: "Verilog",
  identifiers: ["verilog", "v", "veo"],
  codemirror_mode: "verilog",
  codemirror_mime_type: "text/x-verilog"
}, {
  label: "Visual Basic",
  identifiers: ["vbnet", "vb", "bas", "cls", "frm", "frx", "vba", "vbhtml", "vbs"],
  codemirror_mode: "vb",
  codemirror_mime_type: "text/x-vb"
}, {
  label: "Volt",
  identifiers: ["volt"],
  codemirror_mode: "d",
  codemirror_mime_type: "text/x-d"
}, {
  label: "WebAssembly",
  identifiers: ["webassembly", "wast", "wasm", "wat"],
  codemirror_mode: "commonlisp",
  codemirror_mime_type: "text/x-common-lisp"
}, {
  label: "WebIDL",
  identifiers: ["webidl"],
  codemirror_mode: "webidl",
  codemirror_mime_type: "text/x-webidl"
}, {
  label: "Windows Registry Entries",
  identifiers: ["reg"],
  codemirror_mode: "properties",
  codemirror_mime_type: "text/x-properties"
}, {
  label: "X BitMap",
  identifiers: ["xbm"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-csrc"
}, {
  label: "X PixMap",
  identifiers: ["xpm", "pm"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-csrc"
}, {
  label: "XC",
  identifiers: ["xc"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-csrc"
}, {
  label: "XML",
  identifiers: ["xml", "rss", "xsd", "wsdl", "adml", "admx", "ant", "axml", "builds", "ccproj", "ccxml", "clixml", "cproject", "cscfg", "csdef", "csl", "csproj", "ct", "depproj", "dita", "ditamap", "ditaval", "dotsettings", "filters", "fsproj", "fxml", "glade", "gml", "gmx", "grxml", "iml", "ivy", "jelly", "jsproj", "kml", "launch", "mdpolicy", "mjml", "mm", "mod", "mxml", "natvis", "ncl", "ndproj", "nproj", "nuspec", "odd", "osm", "pkgproj", "pluginspec", "proj", "props", "pt", "rdf", "resx", "sch", "scxml", "sfproj", "shproj", "srdf", "storyboard", "targets", "tml", "ts", "tsx", "ui", "urdf", "ux", "vbproj", "vcxproj", "vsixmanifest", "vssettings", "vstemplate", "vxml", "wixproj", "workflow", "wsf", "wxi", "wxl", "wxs", "xacro", "xaml", "xib", "xlf", "xliff", "xmi", "xproj", "xspec", "xul", "zcml"],
  codemirror_mode: "xml",
  codemirror_mime_type: "text/xml"
}, {
  label: "XML Property List",
  identifiers: ["plist", "stTheme", "tmCommand", "tmLanguage", "tmPreferences", "tmSnippet", "tmTheme"],
  codemirror_mode: "xml",
  codemirror_mime_type: "text/xml"
}, {
  label: "XPages",
  identifiers: ["xpages"],
  codemirror_mode: "xml",
  codemirror_mime_type: "text/xml"
}, {
  label: "XProc",
  identifiers: ["xproc", "xpl"],
  codemirror_mode: "xml",
  codemirror_mime_type: "text/xml"
}, {
  label: "XQuery",
  identifiers: ["xquery", "xq", "xql", "xqm", "xqy"],
  codemirror_mode: "xquery",
  codemirror_mime_type: "application/xquery"
}, {
  label: "XS",
  identifiers: ["xs"],
  codemirror_mode: "clike",
  codemirror_mime_type: "text/x-csrc"
}, {
  label: "XSLT",
  identifiers: ["xslt", "xsl"],
  codemirror_mode: "xml",
  codemirror_mime_type: "text/xml"
}, {
  label: "YAML",
  identifiers: ["yaml", "yml", "mir", "reek", "rviz", "syntax"],
  codemirror_mode: "yaml",
  codemirror_mime_type: "text/x-yaml"
}, {
  label: "edn",
  identifiers: ["edn"],
  codemirror_mode: "clojure",
  codemirror_mime_type: "text/x-clojure"
}, {
  label: "reStructuredText",
  identifiers: ["restructuredtext", "rst", "rest"],
  codemirror_mode: "rst",
  codemirror_mime_type: "text/x-rst"
}, {
  label: "wisp",
  identifiers: ["wisp"],
  codemirror_mode: "clojure",
  codemirror_mime_type: "text/x-clojure"
}]; // TODO: relocate as a utility function
function getChangedProps(previous, next, keys) {
  const propNames = keys || uniq(Object.keys(previous), Object.keys(next));
  const changedProps = propNames.reduce((acc, prop) => {
    if (previous[prop] !== next[prop]) {
      acc[prop] = next[prop];
    }
    return acc;
  }, {});
  if (!isEmpty(changedProps)) {
    return changedProps;
  }
}
const languages = languageData.map(lang => ({
  label: lang.label,
  name: lang.identifiers[0],
  mode: lang.codemirror_mode,
  mimeType: lang.codemirror_mime_type
}));
const styleString = `
  padding: 0;
`;
const defaultLang = {
  name: '',
  mode: '',
  label: 'none'
};
function valueToOption(val) {
  if (typeof val === 'string') {
    return {
      value: val,
      label: val
    };
  }
  return {
    value: val.name,
    label: val.label || val.name
  };
}
const modes = languages.map(valueToOption);
const themes = ['default', 'material'];
const settingsPersistKeys = {
  theme: 'cms.codemirror.theme',
  keyMap: 'cms.codemirror.keymap'
};
export default class CodeControl extends React.Component {
  static propTypes = {
    field: ImmutablePropTypes.map.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.node,
    forID: PropTypes.string.isRequired,
    classNameWrapper: PropTypes.string.isRequired,
    widget: PropTypes.object.isRequired,
    isParentListCollapsed: PropTypes.bool
  };
  keys = this.getKeys(this.props.field);
  state = {
    isActive: false,
    isLangInitialized: false,
    unknownLang: null,
    lang: '',
    keyMap: localStorage.getItem(settingsPersistKeys['keyMap']) || 'default',
    settingsVisible: false,
    codeMirrorKey: uuid(),
    theme: localStorage.getItem(settingsPersistKeys['theme']) || themes[themes.length - 1],
    lastKnownValue: this.valueIsMap() ? this.props.value?.get(this.keys.code) : this.props.value
  };
  visibility = {
    isInvisibleOnInit: this.props.isParentListCollapsed === true,
    isRefreshedAfterInvisible: false
  };
  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.state, nextState) || this.props.classNameWrapper !== nextProps.classNameWrapper || this.visibility.isInvisibleOnInit && !this.visibility.isRefreshedAfterInvisible;
  }
  componentDidMount() {
    // Manually validate PropTypes - React 19 breaking change
    PropTypes.checkPropTypes(CodeControl.propTypes, this.props, 'prop', 'CodeControl');
    this.setState({
      lang: this.getInitialLang() || ''
    });
  }
  componentDidUpdate(prevProps, prevState) {
    this.updateCodeMirrorProps(prevState);
    // when initially hidden and then shown, codeMirror content is not visible
    if (this.visibility.isInvisibleOnInit && !this.visibility.isRefreshedAfterInvisible && !this.props.isParentListCollapsed) {
      this.refreshCodeMirrorInstance();
    }
  }
  updateCodeMirrorProps(prevState) {
    const keys = ['lang', 'theme', 'keyMap'];
    const changedProps = getChangedProps(prevState, this.state, keys);
    if (changedProps) {
      // Check if this is the initial setting of the language prop
      const shouldIgnoreLangChange = !this.state.isLangInitialized && !!changedProps?.lang && Object.keys(changedProps).length === 1;
      this.setState({
        isLangInitialized: true
      });
      this.handleChangeCodeMirrorProps(changedProps, shouldIgnoreLangChange);
    }
  }
  refreshCodeMirrorInstance() {
    if (this.cm?.getWrapperElement().offsetHeight) {
      this.cm.refresh();
      this.visibility.isRefreshedAfterInvisible = true;
    }
  }
  getLanguageByName = name => {
    return languages.find(lang => lang.name === name);
  };
  getKeyMapOptions = () => {
    return Object.keys(CodeMirror.keyMap).sort().filter(keyMap => ['emacs', 'vim', 'sublime', 'default'].includes(keyMap)).map(keyMap => ({
      value: keyMap,
      label: keyMap
    }));
  };

  // This widget is not fully controlled, it only takes a value through props
  // upon initialization.
  getInitialLang = () => {
    const {
      value,
      field
    } = this.props;
    const lang = this.valueIsMap() && value && value.get(this.keys.lang) || field.get('default_language');
    const langInfo = this.getLanguageByName(lang);
    if (lang && !langInfo) {
      this.setState({
        unknownLang: lang
      });
    }
    return lang;
  };

  // If `allow_language_selection` is not set, default to true. Otherwise, use
  // its value.
  allowLanguageSelection = !this.props.field.has('allow_language_selection') || !!this.props.field.get('allow_language_selection');
  toValue = this.valueIsMap() ? (type, value) => (this.props.value || Map()).set(this.keys[type], value) : (type, value) => type === 'code' ? value : this.props.value;

  // If the value is a map, keys can be customized via config.
  getKeys(field) {
    const defaults = {
      code: 'code',
      lang: 'lang'
    };

    // Force default keys if widget is an editor component code block.
    if (this.props.isEditorComponent) {
      return defaults;
    }
    const keys = field.get('keys', Map()).toJS();
    return {
      ...defaults,
      ...keys
    };
  }

  // Determine if the persisted value is a map rather than a plain string. A map
  // value allows both the code string and the language to be persisted.
  valueIsMap() {
    const {
      field,
      isEditorComponent
    } = this.props;
    return !field.get('output_code_only') || isEditorComponent;
  }
  async handleChangeCodeMirrorProps(changedProps, ignoreLangChange = false) {
    const {
      onChange
    } = this.props;
    if (changedProps.lang) {
      const {
        mode
      } = this.getLanguageByName(changedProps.lang) || {};
      if (mode) {
        require(`codemirror/mode/${mode}/${mode}.js`);
      }
    }

    // Changing CodeMirror props requires re-initializing the
    // detached/uncontrolled React CodeMirror component, so here we save and
    // restore the selections and cursor position after the state change.
    if (this.cm) {
      const cursor = this.cm.doc.getCursor();
      const selections = this.cm.doc.listSelections();
      this.setState({
        codeMirrorKey: uuid()
      }, () => {
        this.cm.doc.setCursor(cursor);
        this.cm.doc.setSelections(selections);
      });
    }
    for (const key of ['theme', 'keyMap']) {
      if (changedProps[key]) {
        localStorage.setItem(settingsPersistKeys[key], changedProps[key]);
      }
    }

    // Only persist the language change if supported - requires the value to be
    // a map rather than just a code string.
    if (changedProps.lang && !ignoreLangChange && this.valueIsMap()) {
      onChange(this.toValue('lang', changedProps.lang));
    }
  }
  handleChange(newValue) {
    const cursor = this.cm.doc.getCursor();
    const selections = this.cm.doc.listSelections();
    this.setState({
      lastKnownValue: newValue
    });
    this.props.onChange(this.toValue('code', newValue), {
      cursor,
      selections
    });
  }
  showSettings = () => {
    this.setState({
      settingsVisible: true
    });
  };
  hideSettings = () => {
    if (this.state.settingsVisible) {
      this.setState({
        settingsVisible: false
      });
    }
    this.cm.focus();
  };
  handleFocus = () => {
    this.hideSettings();
    this.props.setActiveStyle();
    this.setActive();
  };
  handleBlur = () => {
    this.setInactive();
    this.props.setInactiveStyle();
  };
  setActive = () => this.setState({
    isActive: true
  });
  setInactive = () => this.setState({
    isActive: false
  });
  render() {
    const {
      classNameWrapper,
      forID,
      widget,
      isNewEditorComponent
    } = this.props;
    const {
      lang,
      settingsVisible,
      keyMap,
      codeMirrorKey,
      theme,
      lastKnownValue
    } = this.state;
    const langInfo = this.getLanguageByName(lang);
    const mode = langInfo?.mimeType || langInfo?.mode;
    return ___EmotionJSX(ClassNames, null, ({
      css,
      cx
    }) => ___EmotionJSX("div", {
      className: cx(classNameWrapper, css`
                ${codeMirrorStyles};
                ${materialTheme};
                ${styleString};
              `)
    }, !settingsVisible && ___EmotionJSX(SettingsButton, {
      onClick: this.showSettings
    }), settingsVisible && ___EmotionJSX(SettingsPane, {
      hideSettings: this.hideSettings,
      forID: forID,
      modes: modes,
      mode: valueToOption(langInfo || defaultLang),
      theme: themes.find(t => t === theme),
      themes: themes,
      keyMap: {
        value: keyMap,
        label: keyMap
      },
      keyMaps: this.getKeyMapOptions(),
      allowLanguageSelection: this.allowLanguageSelection,
      onChangeLang: newLang => this.setState({
        lang: newLang
      }),
      onChangeTheme: newTheme => this.setState({
        theme: newTheme
      }),
      onChangeKeyMap: newKeyMap => this.setState({
        keyMap: newKeyMap
      })
    }), ___EmotionJSX(ReactCodeMirror, {
      key: codeMirrorKey,
      id: forID,
      className: css`
                height: 100%;
                border-radius: 0 3px 3px;
                overflow: hidden;

                .CodeMirror {
                  height: auto !important;
                  cursor: text;
                  min-height: 300px;
                }

                .CodeMirror-scroll {
                  min-height: 300px;
                }
              `,
      options: {
        lineNumbers: true,
        ...widget.codeMirrorConfig,
        extraKeys: {
          'Shift-Tab': 'indentLess',
          Tab: 'indentMore',
          ...(widget.codeMirrorConfig.extraKeys || {})
        },
        theme,
        mode,
        keyMap,
        viewportMargin: Infinity
      },
      detach: true,
      editorDidMount: cm => {
        this.cm = cm;
        if (isNewEditorComponent) {
          this.handleFocus();
        }
      },
      value: lastKnownValue,
      onChange: (editor, data, newValue) => this.handleChange(newValue),
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    })));
  }
}