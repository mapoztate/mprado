"use strict";
exports.id = "component---src-pages-404-js";
exports.ids = ["component---src-pages-404-js"];
exports.modules = {

/***/ "./node_modules/react-kawaii/lib/es/components/common/face/Face.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/common/face/Face.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "./node_modules/react-kawaii/lib/es/components/common/face/paths.js");
var _excluded = ["mood", "uniqueId"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Face = function Face(_ref) {
  var mood = _ref.mood,
      uniqueId = _ref.uniqueId,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", _extends({
    id: "kawaii-face"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].defs,
    id: "kawaii-face__path-1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "kawaii-face__mouth",
    transform: "translate(18.000000, 16.000000)"
  }, (mood === 'blissful' || mood === 'lovestruck' || mood === 'excited') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "kawaii-face__mouth__joy",
    transform: "translate(0.000000, 1.000000)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mask", {
    id: "kawaii-face__mask-2-".concat(uniqueId),
    fill: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    xlinkHref: "#kawaii-face__path-1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    id: "Combined-Shape",
    fill: "#000000",
    xlinkHref: "#kawaii-face__path-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].tongue,
    id: "kawaii-face__tongue",
    fill: "#E74144",
    mask: "url(#kawaii-face__mask-2-".concat(uniqueId),
    transform: "translate(15.000000, 11.431885) scale(1, -1) translate(-15.000000, -11.431885)"
  })), mood === 'happy' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].happy,
    id: "kawaii-face__mouth__happy",
    fill: "#000000"
  }), mood === 'shocked' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ellipse", {
    id: "kawaii-face__mouth__shocked",
    cx: "15",
    cy: "14",
    rx: "9",
    ry: "10",
    fill: "#000000"
  }), (mood === 'sad' || mood === 'ko') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].sad,
    id: "kawaii-face__mouth__sad",
    fill: "#000000",
    transform: "translate(14.999999, 5.500000) scale(1, -1) translate(-14.999999, -5.500000)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "kawaii-face__blush",
    transform: "translate(0.000000, 15.000000)",
    fill: "#000000",
    opacity: "0.2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "3",
    cy: "3",
    r: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "63",
    cy: "3",
    r: "3"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "kawaii-face__eyes",
    transform: "translate(2.000000, 0.000000)",
    fill: "#000000"
  }, mood === 'blissful' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "kawaii-face__eyes__arc",
    transform: "translate(1.000000, 0.000000)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].bliss1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].bliss2
  })), (mood === 'happy' || mood === 'sad' || mood === 'shocked' || mood === 'excited') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "kawaii-face__eyes__circle",
    transform: "translate(1.000000, 2.000000)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "4.5",
    cy: "4.5",
    r: "4.5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "56.5",
    cy: "4.5",
    r: "4.5"
  })), mood === 'lovestruck' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "kawaii-face__eyes__heart",
    transform: "translate(0.000000, 2.000000)",
    fillRule: "nonzero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].lovestruck1,
    id: "Shape"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].lovestruck2,
    id: "Shape"
  })), mood === 'ko' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "kawaii-face__eyes__ko",
    transform: "translate(1.500000, 1.000000)",
    fillRule: "nonzero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].ko1,
    id: "Cross"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].ko2,
    id: "Cross"
  }))));
};

Face.propTypes = {
  mood: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko'])
};
Face.defaultProps = {
  mood: 'blissful'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Face);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/common/face/paths.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/common/face/paths.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var paths = {
  defs: 'M1.45656876,3.14684877 C1.45656876,3.14684877 1.45656876,3.14684877 1.45656876,3.14684877 L0,3.14685315 C0,2.31818182 0.346033696,1.50734266 0.949429952,0.922027972 C1.55390756,0.335664336 2.38979521,0 3.2440659,0 L25.9525272,0 C26.8067979,0 27.6416041,0.335664336 28.2460818,0.922027972 C28.8505594,1.50734266 29.1965931,2.31818182 29.1965931,3.14685315 C29.1890236,5.85734266 28.240675,8.44825175 26.7127199,10.6814685 C25.1771954,12.9104895 23.0317865,14.8122378 20.4040931,16.0227273 C18.6544603,16.8251748 16.6809868,17.3087413 14.5982965,17.3076923 C11.4666916,17.3076923 8.61299495,16.2241259 6.33025392,14.5951049 C4.0399434,12.9587413 2.264358,10.779021 1.16245695,8.33811189 C0.431460764,6.70909091 0.0010813553,4.95314685 0,3.14685315 L1.45656896,3.14685315 Z',
  tongue: 'M9.59865983,9.95467851 C9.59865983,9.95467851 9.59865983,9.95467851 9.59865983,9.95467851 L9,9.95467851 C9,9.66740582 9.14222222,9.38631493 9.39022222,9.18340586 C9.63866667,8.98013316 10.3333333,8 15,8 C19.6666667,8 20.3608889,8.98013316 20.6093333,9.18340586 C20.8577778,9.38631493 21,9.66740582 21,9.95467851 C20.9968889,10.8943148 20.6071111,11.7924965 19.9791111,12.5666783 C19.348,13.3394055 18.4662222,13.9986781 17.3862222,14.4183144 C16.6671111,14.6964962 15.856,14.8641326 15,14.8637689 C13.7128889,14.8637689 12.54,14.4881326 11.6017778,13.9234054 C10.6604444,13.3561327 9.93066667,12.6004964 9.47777778,11.7543147 C9.17733333,11.1895875 9.00044444,10.5808603 9,9.95467851 L9.59865983,9.95467851 Z',
  happy: 'M6,1.9999998 C6.00066667,3.14799969 6.26599997,4.26466625 6.7166666,5.29933281 C7.39599986,6.85066599 8.49066642,8.23599919 9.90199962,9.27666575 C11.3099995,10.311999 13.0693326,10.9999989 14.9999991,10.9999989 C16.283999,11.0006656 17.5006655,10.6939989 18.5793321,10.1833323 C20.1993319,9.41466574 21.5219985,8.20599919 22.468665,6.788666 C23.4106649,5.36999947 23.9953316,3.72333297 23.9999982,1.9999998 C23.9999982,0.895333245 23.104665,0 21.9999984,0 C20.8953319,0 19.9999986,0.895333245 19.9999986,1.9999998 C20.0006653,2.51933308 19.8739986,3.11066636 19.6166653,3.7006663 C19.233332,4.58733288 18.5526654,5.4513328 17.7299988,6.0519994 C16.9033323,6.65733268 15.9686657,6.99999931 14.9999991,6.99999931 C14.3513325,6.99999931 13.7259992,6.84799932 13.1299993,6.56666602 C12.2373327,6.14866606 11.4226661,5.4193328 10.8599995,4.57066622 C10.2919996,3.7246663 9.99533294,2.77733306 9.99999961,1.9999998 C9.99999961,0.895333245 9.10466636,0 7.9999998,0 C6.89533325,0 6,0.895333245 6,1.9999998',
  sad: 'M6,1.9999998 C6.00066667,3.14799969 6.26599997,4.26466625 6.7166666,5.29933281 C7.39599986,6.85066599 8.49066642,8.23599919 9.90199962,9.27666575 C11.3099995,10.311999 13.0693326,10.9999989 14.9999991,10.9999989 C16.283999,11.0006656 17.5006655,10.6939989 18.5793321,10.1833323 C20.1993319,9.41466574 21.5219985,8.20599919 22.468665,6.788666 C23.4106649,5.36999947 23.9953316,3.72333297 23.9999982,1.9999998 C23.9999982,0.895333245 23.104665,7.10542736e-15 21.9999984,7.10542736e-15 C20.8953319,7.10542736e-15 19.9999986,0.895333245 19.9999986,1.9999998 C20.0006653,2.51933308 19.8739986,3.11066636 19.6166653,3.7006663 C19.233332,4.58733288 18.5526654,5.4513328 17.7299988,6.0519994 C16.9033323,6.65733268 15.9686657,6.99999931 14.9999991,6.99999931 C14.3513325,6.99999931 13.7259992,6.84799932 13.1299993,6.56666602 C12.2373327,6.14866606 11.4226661,5.4193328 10.8599995,4.57066622 C10.2919996,3.7246663 9.99533294,2.77733306 9.99999961,1.9999998 C9.99999961,0.895333245 9.10466636,7.10542736e-15 7.9999998,7.10542736e-15 C6.89533325,7.10542736e-15 6,0.895333245 6,1.9999998',
  bliss1: 'M11.3298651,9.72876106 C9.83321993,9.72876106 8.62018766,8.55758439 8.62018766,7.11258087 C8.62018766,6.27104292 7.91115541,5.58647579 7.03954249,5.58647579 C6.16883282,5.58647579 5.45889734,6.27104292 5.45889734,7.11258087 C5.45889734,8.55758439 4.2467683,9.72876106 2.74921991,9.72876106 C1.25257476,9.72876106 0.0395424927,8.55758439 0.0395424927,7.11258087 C0.0395424927,3.38626826 3.18005862,0.354115435 7.03954249,0.354115435 C10.8999296,0.354115435 14.0395425,3.38626826 14.0395425,7.11258087 C14.0395425,8.55758439 12.8274135,9.72876106 11.3298651,9.72876106',
  bliss2: 'M57.3298651,9.72876106 C55.8332199,9.72876106 54.6201877,8.55758439 54.6201877,7.11258087 C54.6201877,6.27104292 53.9111554,5.58647579 53.0395425,5.58647579 C52.1688328,5.58647579 51.4588973,6.27104292 51.4588973,7.11258087 C51.4588973,8.55758439 50.2467683,9.72876106 48.7492199,9.72876106 C47.2525748,9.72876106 46.0395425,8.55758439 46.0395425,7.11258087 C46.0395425,3.38626826 49.1800586,0.354115435 53.0395425,0.354115435 C56.8999296,0.354115435 60.0395425,3.38626826 60.0395425,7.11258087 C60.0395425,8.55758439 58.8274135,9.72876106 57.3298651,9.72876106',
  lovestruck1: 'M11.980165,2.98190092 C11.8050001,1.25390423 10.4403753,0.000206846623 8.73257491,0.000206846623 C7.5948106,0.000206846623 6.55305237,0.548970938 5.96686143,1.42848278 C5.38597852,0.537594374 4.38691529,0 3.26738291,0 C1.55981331,0 0.194957712,1.25369738 0.0200235653,2.98169407 C0.00617653522,3.05802048 -0.0505962882,3.45971662 0.12203002,4.11479988 C0.370814995,5.05967525 0.945466744,5.91912297 1.78344285,6.59964836 C1.78344285,6.59964836 4.36682268,10 5.96409202,10 C7.56136137,10 10.216515,6.59985521 10.216515,6.59985521 C11.0544911,5.91912297 11.6291428,5.0598821 11.8779278,4.11479988 C12.0505541,3.45992347 11.9937813,3.05822732 11.980165,2.98190092 Z',
  lovestruck2: 'M62.980165,2.98190092 C62.8050001,1.25390423 61.4403753,0.000206846623 59.7325749,0.000206846623 C58.5948106,0.000206846623 57.5530524,0.548970938 56.9668614,1.42848278 C56.3859785,0.537594374 55.3869153,0 54.2673829,0 C52.5598133,0 51.1949577,1.25369738 51.0200236,2.98169407 C51.0061765,3.05802048 50.9494037,3.45971662 51.12203,4.11479988 C51.370815,5.05967525 51.9454667,5.91912297 52.7834428,6.59964836 C52.7834428,6.59964836 55.3668227,10 56.964092,10 C58.5613614,10 61.216515,6.59985521 61.216515,6.59985521 C62.0544911,5.91912297 62.6291428,5.0598821 62.8779278,4.11479988 C63.0505541,3.45992347 62.9937813,3.05822732 62.980165,2.98190092 Z',
  shocked1: 'M5.29976191,8.12776191 L7.18533333,10.0133333 C7.576,10.404 8.088,10.5993333 8.6,10.5993333 C9.11133333,10.5993333 9.62333333,10.404 10.014,10.0133333 C10.7953333,9.23266667 10.7953333,7.966 10.014,7.18533333 L8.12814284,5.29966667 L10.014,3.414 C10.7953333,2.63333333 10.7953333,1.36666667 10.014,0.586 C9.23266667,-0.195333333 7.96666667,-0.195333333 7.18533333,0.586 L5.29976191,2.47157143 L3.414,0.586 C2.63266667,-0.195333333 1.36733333,-0.195333333 0.586,0.586 C-0.195333333,1.36666667 -0.195333333,2.63333333 0.586,3.414 L2.47166667,5.29966667 L0.586,7.18533333 C-0.195333333,7.966 -0.195333333,9.23266667 0.586,10.0133333 C0.976666667,10.404 1.488,10.5993333 2,10.5993333 C2.512,10.5993333 3.02333333,10.404 3.414,10.0133333 L5.29976191,8.12776191 Z',
  shocked2: 'M51.2997619,8.12776191 L53.1853333,10.0133333 C53.576,10.404 54.088,10.5993333 54.6,10.5993333 C55.1113333,10.5993333 55.6233333,10.404 56.014,10.0133333 C56.7953333,9.23266667 56.7953333,7.966 56.014,7.18533333 L54.1281428,5.29966667 L56.014,3.414 C56.7953333,2.63333333 56.7953333,1.36666667 56.014,0.586 C55.2326667,-0.195333333 53.9666667,-0.195333333 53.1853333,0.586 L51.2997619,2.47157143 L49.414,0.586 C48.6326667,-0.195333333 47.3673333,-0.195333333 46.586,0.586 C45.8046667,1.36666667 45.8046667,2.63333333 46.586,3.414 L48.4716667,5.29966667 L46.586,7.18533333 C45.8046667,7.966 45.8046667,9.23266667 46.586,10.0133333 C46.9766667,10.404 47.488,10.5993333 48,10.5993333 C48.512,10.5993333 49.0233333,10.404 49.414,10.0133333 L51.2997619,8.12776191 Z',
  ko1: 'M52.9142136,5.03553391 L50.4393398,2.56066017 C49.8535534,1.97487373 49.8535534,1.02512627 50.4393398,0.439339828 C51.0251263,-0.146446609 51.9748737,-0.146446609 52.5606602,0.439339828 L55.0355339,2.91421356 L57.5104076,0.439339828 C58.0961941,-0.146446609 59.0459415,-0.146446609 59.631728,0.439339828 C60.2175144,1.02512627 60.2175144,1.97487373 59.631728,2.56066017 L57.1568542,5.03553391 L59.631728,7.51040764 C60.2175144,8.09619408 60.2175144,9.04594155 59.631728,9.63172798 C59.0459415,10.2175144 58.0961941,10.2175144 57.5104076,9.63172798 L55.0355339,7.15685425 L52.5606602,9.63172798 C51.9748737,10.2175144 51.0251263,10.2175144 50.4393398,9.63172798 C49.8535534,9.04594155 49.8535534,8.09619408 50.4393398,7.51040764 L52.9142136,5.03553391 Z',
  ko2: 'M2.91421356,5.03553391 L0.439339828,2.56066017 C-0.146446609,1.97487373 -0.146446609,1.02512627 0.439339828,0.439339828 C1.02512627,-0.146446609 1.97487373,-0.146446609 2.56066017,0.439339828 L5.03553391,2.91421356 L7.51040764,0.439339828 C8.09619408,-0.146446609 9.04594155,-0.146446609 9.63172798,0.439339828 C10.2175144,1.02512627 10.2175144,1.97487373 9.63172798,2.56066017 L7.15685425,5.03553391 L9.63172798,7.51040764 C10.2175144,8.09619408 10.2175144,9.04594155 9.63172798,9.63172798 C9.04594155,10.2175144 8.09619408,10.2175144 7.51040764,9.63172798 L5.03553391,7.15685425 L2.56066017,9.63172798 C1.97487373,10.2175144 1.02512627,10.2175144 0.439339828,9.63172798 C-0.146446609,9.04594155 -0.146446609,8.09619408 0.439339828,7.51040764 L2.91421356,5.03553391 Z'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paths);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Wrapper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', _objectSpread(_objectSpread({}, props), {}, {
    style: _objectSpread({
      position: 'relative'
    }, props.style || {})
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/ghost/Ghost.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/ghost/Ghost.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paths */ "./node_modules/react-kawaii/lib/es/components/ghost/paths.js");
/* harmony import */ var _utils_getUniqueId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/getUniqueId */ "./node_modules/react-kawaii/lib/es/utils/getUniqueId.js");
/* harmony import */ var _common_face_Face__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/face/Face */ "./node_modules/react-kawaii/lib/es/components/common/face/Face.js");
/* harmony import */ var _common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/wrapper/Wrapper */ "./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js");







var Ghost = function Ghost(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: size * 0.77,
    height: size,
    viewBox: "0 0 130 168",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "kawaii-ghost"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "kawaii-ghost__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_3__["default"].shape,
    id: "kawaii-ghost__shape",
    fill: color
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_3__["default"].shadow,
    id: "kawaii-ghost__shadow",
    fillOpacity: ".1",
    fill: "#000000"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_face_Face__WEBPACK_IMPORTED_MODULE_4__["default"], {
    mood: mood,
    transform: "translate(34 57)",
    uniqueId: (0,_utils_getUniqueId__WEBPACK_IMPORTED_MODULE_5__["default"])()
  }))));
};

Ghost.propTypes = {
  /**
   * Size of the width
   * */
  size: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  mood: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Ghost.defaultProps = {
  size: 240,
  mood: 'blissful',
  color: '#E0E4E8'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ghost);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/ghost/paths.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/ghost/paths.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var paths = {
  shape: 'M63.004.034C27.572 1.238 0 36.002 0 76.472v76.272c0 8.116 5.832 14.718 13 14.718s13-6.602 13-14.718c0-2.705 1.944-4.906 4.333-4.906 2.39 0 4.334 2.2 4.334 4.906 0 8.116 5.831 14.718 13 14.718 3.472 0 6.737-1.53 9.192-4.31 2.456-2.78 3.808-6.477 3.807-10.408 0-2.712 1.939-4.906 4.334-4.906 2.39 0 4.333 2.2 4.333 4.906 0 8.116 5.832 14.718 13 14.718 7.169 0 13-6.602 13-14.718 0-2.705 1.944-4.906 4.334-4.906 2.39 0 4.333 2.2 4.333 4.906 0 8.116 5.832 14.718 13 14.718s13-6.602 13-14.718V73.592c0-41.028-29.82-74.82-66.996-73.558z',
  shadow: 'M111.5 166.08c4.427-2.35 7.5-7.444 7.5-13.336V73.592C119 35.918 93.857 4.346 60.962.412a6.603 6.603 0 0 1 2.042-.378C100.181-1.228 130 32.564 130 73.592v79.152c0 8.116-5.832 14.718-13 14.718-1.965 0-3.829-.496-5.5-1.383z'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paths);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/utils/getUniqueId.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/utils/getUniqueId.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
To prevent the SVGs masks being used with the same id
*/
var getUniqueId = function getUniqueId() {
  if (typeof window === 'undefined') return;
  var id = Math.random().toString(36).substring(2, 15);
  return id;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUniqueId);

/***/ }),

/***/ "./public/page-data/sq/d/2555585279.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2555585279.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"data":{"site":{"siteMetadata":{"socialLinks":[{"name":"_","url":"/"}]}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/2841359383.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2841359383.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Matthew Prado","description":"Fun blogs about life, liberty, and taxes.","social":{"twitter":"mapoztate"}}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3159585216.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3159585216.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Matthew Prado"}}}}');

/***/ }),

/***/ "./src/components/container.js":
/*!*************************************!*\
  !*** ./src/components/container.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const Container = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "container__Container"
})(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1300px;\n  padding-left: var(--size-700);\n  padding-right: var(--size-700);\n  height: 100%;\n\n  @media screen and (max-width: 1000px) {\n    & {\n      padding-left: var(--size-400);\n      padding-right: var(--size-400);\n    }\n  }\n"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ "./src/components/container.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _social_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-links */ "./src/components/social-links.js");




const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledFooter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_social_links__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterAttribution, null, "\xA9", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/mapoztate/mprado"
  }, "Matthew Prado"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);
const StyledFooter = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].footer.withConfig({
  displayName: "footer__StyledFooter"
})(["\n  padding-top: var(--size-300);\n  padding-bottom: var(--size-300);\n"]);
const FooterAttribution = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "footer__FooterAttribution"
})(["\n  font-size: var(--size-300);\n\n  & a {\n    color: inherit;\n  }\n"]);
const FooterWrapper = /*#__PURE__*/(0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_container__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "footer__FooterWrapper"
})(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n"]);

/***/ }),

/***/ "./src/components/global-styles.js":
/*!*****************************************!*\
  !*** ./src/components/global-styles.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const GlobalStyle = /*#__PURE__*/(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\nhtml {\n  height: -webkit-fill-available;\n}\n\nbody {\n  min-height: 100vh;\n  min-height: -webkit-fill-available;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\nhtml {\n  width:100vw;\n  overflow-x:hidden;\n}\n\nbody::-webkit-scrollbar {\n    width: 10px;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background-color: rgba(44, 47, 51, .4);\n}\n\nbody::-webkit-scrollbar-track {\n    background: transparent;\n}\n\n:root {\n  scroll-behavior: smooth;\n  --size-300: 0.75rem;\n  --size-400: 1rem;\n  --size-500: 1.33rem;\n  --size-600: 1.77rem;\n  --size-700: 2.36rem;\n  --size-800: 3.15rem;\n  --size-900: 4.2rem;\n}\n\nbody {\n  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue,\n    helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;\n  color: #f5f2f3;\n  background-attachment: fixed;\n  background-color: #23272A;\n  background-image: #23272A;\n\n}\n\nh1,\nh2,\nh3,\nh4 {\n  line-height: 1.125;\n}\n\nh1,\nh2,\nh3 {\n  font-weight: 700;\n}\n\nh1 {\n  font-size: var(--size-800);\n}\n\nh2 {\n  font-size: var(--size-700);\n}\n\nh3 {\n  font-size: var(--size-600);\n}\n\np {\n  font-size: var(--size-400);\n}\n\n::selection {\n  background: rgba(0, 0, 255, 0.7);\n}\n\np, li {\n    max-width: none;\n}\n\n.gatsby-resp-image-wrapper {\n    width: 100%;\n}\n\n\n"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3159585216_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3159585216.json */ "./public/page-data/sq/d/3159585216.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container */ "./src/components/container.js");





const Header = () => {
  const {
    site
  } = _public_page_data_sq_d_3159585216_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, site.siteMetadata.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderNavList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/blog"
  }, "Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/about"
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/contact"
  }, "Contact")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);
const HeaderNavList = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledNav, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledNavList, null, children));
};
const HeaderNavListItem = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledNavListItem, null, children);
};
const StyledHeader = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header.withConfig({
  displayName: "header__StyledHeader"
})(["\n  padding-top: var(--size-300);\n"]);
const HeaderWrapper = /*#__PURE__*/(0,styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_container__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "header__HeaderWrapper"
})(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);
const HeaderTitle = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "header__HeaderTitle"
})(["\n  & a {\n    text-transform: uppercase;\n    text-decoration: none;\n    font-size: var(--size-400);\n    color: inherit;\n  }\n"]);
const StyledNav = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].nav.withConfig({
  displayName: "header__StyledNav"
})(["\n  position: static;\n  padding: 0;\n  background: transparent;\n  backdrop-filter: unset;\n"]);
const StyledNavList = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul.withConfig({
  displayName: "header__StyledNavList"
})(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  padding: 0;\n  list-style-type: none;\n"]);
const StyledNavListItem = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.withConfig({
  displayName: "header__StyledNavListItem"
})(["\n  &:not(:last-of-type) {\n    margin-right: 2rem;\n  }\n  @media screen and (max-width: 700px) {\n    &:not(:last-of-type) {\n      margin-right: 1rem;\n    }\n  }\n  & a {\n    color: inherit;\n    text-transform: uppercase;\n    font-size: var(--size-300);\n    text-decoration: none;\n    letter-spacing: 0.1rem;\n  }\n  @media screen and (max-width: 700px) {\n    & a {\n      font-size: 0.7rem;\n    }\n  }\n"]);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seo */ "./src/components/seo.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ "./src/components/container.js");
/* harmony import */ var _global_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-styles */ "./src/components/global-styles.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");







const Layout = ({
  children,
  title,
  description,
  socialImage = ''
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_global_styles__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_seo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    description: description,
    socialImage: socialImage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LayoutWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container__WEBPACK_IMPORTED_MODULE_4__["default"], null, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);
const LayoutWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "layout__LayoutWrapper"
})(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n\n  & main {\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n\n  & footer {\n    margin-top: auto;\n  }\n\n  & a {\n    color: white;  \n  }\n"]);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2841359383_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2841359383.json */ "./public/page-data/sq/d/2841359383.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");




const SEO = ({
  description,
  lang,
  meta,
  title
}) => {
  var _site$siteMetadata, _site$siteMetadata2, _site$siteMetadata2$s;
  const {
    site
  } = _public_page_data_sq_d_2841359383_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, {
    htmlAttributes: {
      lang
    },
    title: title,
    titleTemplate: `%s - ${defaultTitle}`,
    defaultTitle: defaultTitle,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: title
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    }, {
      name: `twitter:creator`,
      content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : (_site$siteMetadata2$s = _site$siteMetadata2.social) === null || _site$siteMetadata2$s === void 0 ? void 0 : _site$siteMetadata2$s.twitter) || ``
    }, {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta)
  });
};
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};
SEO.propTypes = {
  description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  lang: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ "./src/components/social-links.js":
/*!****************************************!*\
  !*** ./src/components/social-links.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2555585279_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2555585279.json */ "./public/page-data/sq/d/2555585279.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");



const SocialLinks = () => {
  const data = _public_page_data_sq_d_2555585279_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const socialLinks = data.site.siteMetadata.socialLinks.map(link => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SocialLinkItem, {
      key: link.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      href: link.url
    }, link.name));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SocialLinkList, null, socialLinks);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialLinks);
const SocialLinkList = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "social-links__SocialLinkList"
})(["\n  padding: 0;\n  list-style: none;\n  display: flex;\n"]);
const SocialLinkItem = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "social-links__SocialLinkItem"
})(["\n  margin-right: var(--size-400);\n  text-transform: uppercase;\n\n  & a {\n    color: inherit;\n    font-size: var(--size-300);\n  }\n"]);

/***/ }),

/***/ "./src/pages/404.js?export=default":
/*!*****************************************!*\
  !*** ./src/pages/404.js?export=default ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var react_kawaii__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-kawaii */ "./node_modules/react-kawaii/lib/es/components/ghost/Ghost.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");




const NotFoundPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "404 Not Found"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NotFoundPageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_kawaii__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 240,
    mood: "sad",
    color: "#E0E4E8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, ":/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "404 - Page not found.")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);
const NotFoundPageWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "sc-404__NotFoundPageWrapper"
})(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map