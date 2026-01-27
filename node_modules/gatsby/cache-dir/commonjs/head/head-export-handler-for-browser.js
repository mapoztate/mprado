"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.headHandlerForBrowser = headHandlerForBrowser;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireWildcard(require("react"));
var _gatsby = require("gatsby");
var _reachRouter = require("@gatsbyjs/reach-router");
var _reactDomUtils = require("../react-dom-utils");
var _fireCallbackInEffect = require("./components/fire-callback-in-effect");
var _utils = require("./utils");
var _apiRunnerBrowser = require("../api-runner-browser");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const hiddenRoot = document.createElement(`div`);
const keysOfHtmlAndBodyAttributes = {
  html: [],
  body: []
};
const onHeadRendered = () => {
  const {
    validHeadNodes,
    htmlAndBodyAttributes
  } = (0, _utils.getValidHeadNodesAndAttributes)(hiddenRoot);
  keysOfHtmlAndBodyAttributes.html = Object.keys(htmlAndBodyAttributes.html);
  keysOfHtmlAndBodyAttributes.body = Object.keys(htmlAndBodyAttributes.body);
  (0, _utils.applyHtmlAndBodyAttributes)(htmlAndBodyAttributes);

  /**
   * The rest of the code block below is a diffing mechanism to ensure that
   * the head elements aren't duplicated on every re-render.
   */
  const existingHeadElements = document.querySelectorAll(`[data-gatsby-head]`);
  if (existingHeadElements.length === 0) {
    document.head.append(...validHeadNodes);
    return;
  }
  const newHeadNodes = [];
  (0, _utils.diffNodes)({
    oldNodes: existingHeadElements,
    newNodes: validHeadNodes,
    onStale: node => node.parentNode.removeChild(node),
    onNew: node => newHeadNodes.push(node)
  });
  document.head.append(...newHeadNodes);
};
if (process.env.BUILD_STAGE === `develop`) {
  // sigh ... <html> and <body> elements are not valid descedents of <div> (our hidden element)
  // react-dom in dev mode will warn about this. There doesn't seem to be a way to render arbitrary
  // user Head without hitting this issue (our hidden element could be just "new Document()", but
  // this can only have 1 child, and we don't control what is being rendered so that's not an option)
  // instead we continue to render to <div>, and just silence warnings for <html> and <body> elements
  // https://github.com/facebook/react/blob/e2424f33b3ad727321fc12e75c5e94838e84c2b5/packages/react-dom-bindings/src/client/validateDOMNesting.js#L498-L520
  const originalConsoleError = console.error.bind(console);
  console.error = (...args) => {
    var _args$, _args$$includes;
    if (Array.isArray(args) && args.length >= 2 && (_args$ = args[0]) !== null && _args$ !== void 0 && (_args$$includes = _args$.includes) !== null && _args$$includes !== void 0 && _args$$includes.call(_args$, `validateDOMNesting(...): %s cannot appear as`) && (args[1] === `<html>` || args[1] === `<body>`)) {
      return undefined;
    }
    return originalConsoleError(...args);
  };

  /* We set up observer to be able to regenerate <head> after react-refresh
     updates our hidden element.
  */
  const observer = new MutationObserver(onHeadRendered);
  observer.observe(hiddenRoot, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  });
}

// TODO(serhalp): Expose these as a new public API to allows us to gradually phase out
// the existing `<html>` and `<body>` features in the Head API, allowing us to remove
// the various workounds we have in place for React 19.
function Html(props) {
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    "data-original-tag": "html"
  }, props));
}
function Body(props) {
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    "data-original-tag": "body"
  }, props));
}

// React 19 does not allow rendering a second `<html>` or `<body>` anywhere in the tree:
// https://github.com/facebook/react/blob/50e7ec8a694072fd6fcd52182df8a75211bf084d/packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js#L3739
// Unfortunately, our Head API relies on users being able to render these elements, which we then
// render in a hidden `<div>` to extract attributes to apply to the real `<html>` and `<body>`.
// We explored several alternatives, but none were viable given React's constraints.
// To work around this, we intercept attempts to render these elements inside of
// Head and replace them with custom components that render as `<div>`s with a
// `data-original-tag` attribute. We can then use this attribute later to apply
// attributes to the real `<html>` and `<body>` elements.
const IsHeadRenderContext = /*#__PURE__*/_react.default.createContext(false);
// De-risk monkey patch by only applying it when needed (React 19+, not React 18)
const reactMajor = parseInt(_react.default.version.split(`.`)[0], 10);
if (reactMajor !== 18) {
  const originalCreateElement = _react.default.createElement;
  _react.default.createElement = (type, ...rest) => {
    if (type === `html` || type === `body`) {
      const isHeadRender = _react.default.useContext(IsHeadRenderContext);
      // De-risk monkey patch by only applying it within a `Head()` render.
      if (isHeadRender) {
        type = type === `html` ? Html : Body;
      }
    }
    return originalCreateElement(type, ...rest);
  };
}
function headHandlerForBrowser({
  pageComponent,
  staticQueryResults,
  pageComponentProps
}) {
  (0, _react.useEffect)(() => {
    if (pageComponent !== null && pageComponent !== void 0 && pageComponent.Head) {
      (0, _utils.headExportValidator)(pageComponent.Head);
      const {
        render
      } = (0, _reactDomUtils.reactDOMUtils)();
      const HeadElement =
      /*#__PURE__*/
      // Wrap in an SVG to work around conflict between React 19's new document metadata tag
      // hoisting and Gatsby's own preexisting Head API. React will leave metadata tags (like
      // `<title>`) with an `<svg>` ancestor intact, letting Gatsby process them as usual. See
      // https://github.com/facebook/react/blob/fd524fe02a86c3e92a207d90da970941320f337f/packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js#L765-L779.
      _react.default.createElement("svg", {
        "data-gatsby-head-react-19-workaround": "true"
      }, /*#__PURE__*/_react.default.createElement(pageComponent.Head, (0, _utils.filterHeadProps)(pageComponentProps)));
      const WrapHeadElement = (0, _apiRunnerBrowser.apiRunner)(`wrapRootElement`, {
        element: HeadElement
      }, HeadElement, ({
        result
      }) => {
        return {
          element: result
        };
      }).pop();
      render(
      /*#__PURE__*/
      // just a hack to call the callback after react has done first render
      // Note: In dev, we call onHeadRendered twice( in FireCallbackInEffect and after mutualution observer dectects initail render into hiddenRoot) this is for hot reloading
      // In Prod we only call onHeadRendered in FireCallbackInEffect to render to head
      _react.default.createElement(_fireCallbackInEffect.FireCallbackInEffect, {
        callback: onHeadRendered
      }, /*#__PURE__*/_react.default.createElement(IsHeadRenderContext.Provider, {
        value: true
      }, /*#__PURE__*/_react.default.createElement(_gatsby.StaticQueryContext.Provider, {
        value: staticQueryResults
      }, /*#__PURE__*/_react.default.createElement(_reachRouter.LocationProvider, null, WrapHeadElement)))), hiddenRoot);
    }
    return () => {
      (0, _utils.removePrevHeadElements)();
      (0, _utils.removeHtmlAndBodyAttributes)(keysOfHtmlAndBodyAttributes);
    };
  });
}
//# sourceMappingURL=head-export-handler-for-browser.js.map