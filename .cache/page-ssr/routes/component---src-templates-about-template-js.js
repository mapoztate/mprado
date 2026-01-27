"use strict";
exports.id = "component---src-templates-about-template-js";
exports.ids = ["component---src-templates-about-template-js"];
exports.modules = {

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

module.exports = /*#__PURE__*/JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Matthew Prado","description":"Fun blogs about life, liberty, and the pursuit of data science.","social":{"twitter":"mapoztate"}}}}}');

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

/***/ "./src/templates/about-template.js?export=default":
/*!********************************************************!*\
  !*** ./src/templates/about-template.js?export=default ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");



const AboutTemplate = ({
  data
}) => {
  const {
    html,
    frontmatter
  } = data.markdownRemark;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: frontmatter.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AboutWrapper, null, frontmatter.profile_image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AboutImage, {
    src: frontmatter.profile_image,
    alt: "Profile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AboutCopy, {
    dangerouslySetInnerHTML: {
      __html: html
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutTemplate);
const AboutWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "about-template__AboutWrapper"
})(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  height: 100%;\n  \n  @media screen and (max-width: 1000px) {\n    & {\n      flex-direction: column;\n    }\n    \n    & > * {\n      margin-top: 2rem;\n      width: 100%;\n      text-align: center;\n    }\n  }\n"]);
const AboutImage = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "about-template__AboutImage"
})(["\n  display: block;\n  border-radius: 50%;\n  height: 300px;\n  width: 300px;\n  object-fit: cover;\n"]);
const AboutCopy = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "about-template__AboutCopy"
})(["\n  max-width: 60ch;\n  \n  & p {\n    font-size: var(--size-400);\n  }\n"]);
const pageQuery = "1176786333";

/***/ })

};
;
//# sourceMappingURL=component---src-templates-about-template-js.js.map