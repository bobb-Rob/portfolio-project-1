/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/popup.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/popup.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".project-modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: auto;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  backdrop-filter: blur(4px);\r\n}\r\n\r\n.popup-container {\r\n  background-color: var(--white);\r\n  padding: 1.5rem;\r\n  position: relative;\r\n}\r\n\r\n.popup-container h2 {\r\n  font-size: 2rem;\r\n  line-height: 2.75rem;\r\n  font-style: normal;\r\n  color: #172b4d;\r\n}\r\n\r\n.tech-stack {\r\n  display: flex;\r\n  margin-bottom: 1.325rem;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n}\r\n\r\n.tech-stack > li {\r\n  list-style: none;\r\n  margin: 0 0.5rem 0 0.5rem;\r\n  padding: 0.5rem;\r\n  border: 1px solid #979493;\r\n  color: var(--lightdark);\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 13px;\r\n  line-height: 16px;\r\n}\r\n\r\n.popup-img-p {\r\n  display: flex;\r\n}\r\n\r\n.popup-btn-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n.popup-btn-wrapper > p {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #344563;\r\n}\r\n\r\n.popup-btn {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n  color: var(--white);\r\n  margin-top: 0.625rem;\r\n}\r\n\r\n.popup-btn > a {\r\n  text-decoration: none;\r\n  color: var(--white);\r\n}\r\n\r\n.popup-btn > a:hover {\r\n  color: var(--orange);\r\n}\r\n\r\n.popup-btn > a > img:hover {\r\n  filter:\r\n    invert(42%) sepia(65%) saturate(2553%) hue-rotate(2deg)\r\n    brightness(106%) contrast(102%);\r\n}\r\n\r\n/* Email Validation */\r\n\r\n.email-check-message {\r\n  position: absolute;\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n}\r\n\r\n.valid-email {\r\n  color: rgb(7, 175, 47);\r\n}\r\n\r\n.invalid-email {\r\n  color: var(--orange);\r\n}\r\n\r\n/* Mobile view pop-up */\r\n@media screen and (max-width: 768px) {\r\n  .popup-container {\r\n    width: 80%;\r\n    margin: 15% auto;\r\n    height: min-content;\r\n  }\r\n\r\n  .popup-container h2 {\r\n    font-family: \"Roboto\", sans-serif;\r\n    font-weight: 700;\r\n    padding-bottom: 35px;\r\n  }\r\n\r\n  .popup-img-p {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .email-check-message {\r\n    top: 68%;\r\n    padding-left: 12px;\r\n  }\r\n}\r\n\r\n/* Desktop view pop-up */\r\n@media screen and (min-width: 48rem) {\r\n  .popup-container {\r\n    width: 85%;\r\n    margin: 5% auto;\r\n    height: min-content;\r\n  }\r\n\r\n  .popup-container > h2 {\r\n    font-family: \"Crete Round\", serif;\r\n    font-weight: 400;\r\n  }\r\n\r\n  .popup-img-p > img {\r\n    flex: 2 1 auto;\r\n    width: 60%;\r\n    object-fit: cover;\r\n    box-shadow: 1px 1px 5px -1px rgb(70, 72, 70);\r\n  }\r\n\r\n  .popup-btn-wrapper {\r\n    margin-left: 1.5625rem;\r\n  }\r\n\r\n  .popup-btn-wrapper > p {\r\n    min-height: 21rem;\r\n  }\r\n\r\n  .popup-btn {\r\n    margin: 1rem 0.625rem 0 0;\r\n    display: inline-block;\r\n    font-family: \"Inter\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 17px;\r\n    line-height: 24px;\r\n    color: var(--white);\r\n  }\r\n\r\n  .email-check-message {\r\n    top: 69%;\r\n    padding-left: 12px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1180px) {\r\n  .popup-img-p {\r\n    flex-direction: column;\r\n    align-content: center;\r\n  }\r\n\r\n  .popup-btn-wrapper {\r\n    margin-left: 0 !important;\r\n  }\r\n\r\n  .popup-btn-wrapper > p {\r\n    min-height: 0 !important;\r\n    max-width: 690px;\r\n  }\r\n\r\n  .popup-img-p > img {\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/popup.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,UAAU;EACV,YAAY;EACZ,WAAW;EACX,cAAc;EACd,8BAA8B;EAC9B,0BAA0B;AAC5B;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,eAAe;EACf,yBAAyB;EACzB,uBAAuB;EACvB,kCAAkC;EAClC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE;;mCAEiC;AACnC;;AAEA,qBAAqB;;AAErB;EACE,kBAAkB;EAClB,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;AACtB;;AAEA,uBAAuB;AACvB;EACE;IACE,UAAU;IACV,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,iCAAiC;IACjC,gBAAgB;IAChB,oBAAoB;EACtB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,QAAQ;IACR,kBAAkB;EACpB;AACF;;AAEA,wBAAwB;AACxB;EACE;IACE,UAAU;IACV,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,iCAAiC;IACjC,gBAAgB;EAClB;;EAEA;IACE,cAAc;IACd,UAAU;IACV,iBAAiB;IACjB,4CAA4C;EAC9C;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,yBAAyB;IACzB,qBAAqB;IACrB,gCAAgC;IAChC,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,QAAQ;IACR,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,sBAAsB;IACtB,qBAAqB;EACvB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,wBAAwB;IACxB,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;EACrB;AACF","sourcesContent":[".project-modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: auto;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  backdrop-filter: blur(4px);\r\n}\r\n\r\n.popup-container {\r\n  background-color: var(--white);\r\n  padding: 1.5rem;\r\n  position: relative;\r\n}\r\n\r\n.popup-container h2 {\r\n  font-size: 2rem;\r\n  line-height: 2.75rem;\r\n  font-style: normal;\r\n  color: #172b4d;\r\n}\r\n\r\n.tech-stack {\r\n  display: flex;\r\n  margin-bottom: 1.325rem;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n}\r\n\r\n.tech-stack > li {\r\n  list-style: none;\r\n  margin: 0 0.5rem 0 0.5rem;\r\n  padding: 0.5rem;\r\n  border: 1px solid #979493;\r\n  color: var(--lightdark);\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 13px;\r\n  line-height: 16px;\r\n}\r\n\r\n.popup-img-p {\r\n  display: flex;\r\n}\r\n\r\n.popup-btn-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n.popup-btn-wrapper > p {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #344563;\r\n}\r\n\r\n.popup-btn {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n  color: var(--white);\r\n  margin-top: 0.625rem;\r\n}\r\n\r\n.popup-btn > a {\r\n  text-decoration: none;\r\n  color: var(--white);\r\n}\r\n\r\n.popup-btn > a:hover {\r\n  color: var(--orange);\r\n}\r\n\r\n.popup-btn > a > img:hover {\r\n  filter:\r\n    invert(42%) sepia(65%) saturate(2553%) hue-rotate(2deg)\r\n    brightness(106%) contrast(102%);\r\n}\r\n\r\n/* Email Validation */\r\n\r\n.email-check-message {\r\n  position: absolute;\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n}\r\n\r\n.valid-email {\r\n  color: rgb(7, 175, 47);\r\n}\r\n\r\n.invalid-email {\r\n  color: var(--orange);\r\n}\r\n\r\n/* Mobile view pop-up */\r\n@media screen and (max-width: 768px) {\r\n  .popup-container {\r\n    width: 80%;\r\n    margin: 15% auto;\r\n    height: min-content;\r\n  }\r\n\r\n  .popup-container h2 {\r\n    font-family: \"Roboto\", sans-serif;\r\n    font-weight: 700;\r\n    padding-bottom: 35px;\r\n  }\r\n\r\n  .popup-img-p {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .email-check-message {\r\n    top: 68%;\r\n    padding-left: 12px;\r\n  }\r\n}\r\n\r\n/* Desktop view pop-up */\r\n@media screen and (min-width: 48rem) {\r\n  .popup-container {\r\n    width: 85%;\r\n    margin: 5% auto;\r\n    height: min-content;\r\n  }\r\n\r\n  .popup-container > h2 {\r\n    font-family: \"Crete Round\", serif;\r\n    font-weight: 400;\r\n  }\r\n\r\n  .popup-img-p > img {\r\n    flex: 2 1 auto;\r\n    width: 60%;\r\n    object-fit: cover;\r\n    box-shadow: 1px 1px 5px -1px rgb(70, 72, 70);\r\n  }\r\n\r\n  .popup-btn-wrapper {\r\n    margin-left: 1.5625rem;\r\n  }\r\n\r\n  .popup-btn-wrapper > p {\r\n    min-height: 21rem;\r\n  }\r\n\r\n  .popup-btn {\r\n    margin: 1rem 0.625rem 0 0;\r\n    display: inline-block;\r\n    font-family: \"Inter\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 17px;\r\n    line-height: 24px;\r\n    color: var(--white);\r\n  }\r\n\r\n  .email-check-message {\r\n    top: 69%;\r\n    padding-left: 12px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1180px) {\r\n  .popup-img-p {\r\n    flex-direction: column;\r\n    align-content: center;\r\n  }\r\n\r\n  .popup-btn-wrapper {\r\n    margin-left: 0 !important;\r\n  }\r\n\r\n  .popup-btn-wrapper > p {\r\n    min-height: 0 !important;\r\n    max-width: 690px;\r\n  }\r\n\r\n  .popup-img-p > img {\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/projects.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/projects.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".recent-works {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 120px 24px;\r\n}\r\n\r\n.recent-works-header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0;\r\n}\r\n\r\n.recent-works-header > h2 {\r\n  font-family: \"Crete Round\", serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 30px;\r\n  line-height: 52px;\r\n  height: 83px;\r\n  color: #fff5e1;\r\n  color: var(--deepDark);\r\n}\r\n\r\n.thin-line {\r\n  border: 1px solid #5a594d;\r\n  height: 0;\r\n  width: 90%;\r\n  margin: 0 0 80px 0;\r\n}\r\n\r\n.my-works {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0;\r\n}\r\n\r\n.featured {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 5%;\r\n  border: 1px solid #dddcd9;\r\n  border-radius: 10px;\r\n}\r\n\r\n.featured .first-card-img-desktop {\r\n  display: none;\r\n}\r\n\r\n.featured .first-card-img-mobile {\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.featured .first-card-image-container {\r\n  width: 100%;\r\n}\r\n\r\n.first-card {\r\n  font-family: 'inter', serif;\r\n  margin-top: 15px;\r\n}\r\n\r\n.first-card > span {\r\n  font-family: 'crete round', serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 24px;\r\n  color: var(--orange);\r\n}\r\n\r\n.first-card > h3 {\r\n  font-family: 'crete round', serif;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 30px;\r\n  line-height: 25px;\r\n  color: var(--blue-like);\r\n  margin: 10px 0 30px;\r\n}\r\n\r\n.first-card > p {\r\n  font-family: 'inter', serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  color: var(--blue-like);\r\n  margin: 0 0 30px;\r\n}\r\n\r\n.first-card > ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.card-description li {\r\n  padding: 10px 12px;\r\n  height: 40px;\r\n  background: rgba(255, 255, 255, 0.74);\r\n  margin: 0 12px 0 0;\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  line-height: 20px;\r\n  color: var(--deepDark);\r\n  border-radius: 5px;\r\n}\r\n\r\n.first-card > ul > li {\r\n  font-family: 'inter', serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  color: var(--blue-like);\r\n  margin: 0 10px 0.6rem 0;\r\n  border: 1px solid var(--hawkesBlue);\r\n  padding: 0.5rem;\r\n  border-radius: 10px;\r\n}\r\n\r\n.project-card-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(319px, 1fr));\r\n  column-gap: 24px;\r\n  row-gap: 24px;\r\n  width: 100%;\r\n}\r\n\r\n.project-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 400px;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border: 1px solid #dddcd9;\r\n  margin: 1.5rem 0;\r\n  border-radius: 10px;\r\n  box-shadow: 0 10px 30px -15px #000;\r\n  position: relative;\r\n}\r\n\r\n.project-card > .card-description {\r\n  padding: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  background-color: rgba(3, 3, 3, 0.9);\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  transition: 0.5s ease-in-out;\r\n  flex: 1;\r\n}\r\n\r\n.project-card > .card-description:hover {\r\n  opacity: 0;\r\n}\r\n\r\n.btn-card {\r\n  width: 100%;\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n  color: #fff;\r\n  bottom: -1px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  transition: 0.5s ease-in-out;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.card-description > h3 {\r\n  font-family: \"Crete Round\", serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 32px;\r\n  line-height: 44px;\r\n  color: #fff;\r\n  height: 81px;\r\n}\r\n\r\n.card-description > p {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #fff;\r\n  margin: 12px 0;\r\n}\r\n\r\n.description-tags {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  padding: 0;\r\n  height: 40px;\r\n  list-style: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/projects.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,SAAS;EACT,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,qCAAqC;EACrC,kBAAkB;EAClB,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,uBAAuB;EACvB,uBAAuB;EACvB,mCAAmC;EACnC,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,gBAAgB;EAChB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,4BAA4B;EAC5B,sBAAsB;EACtB,yBAAyB;EACzB,gBAAgB;EAChB,mBAAmB;EACnB,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,oCAAoC;EACpC,4BAA4B;EAC5B,6BAA6B;EAC7B,4BAA4B;EAC5B,OAAO;AACT;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,4BAA4B;EAC5B,4BAA4B;AAC9B;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB","sourcesContent":[".recent-works {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 120px 24px;\r\n}\r\n\r\n.recent-works-header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0;\r\n}\r\n\r\n.recent-works-header > h2 {\r\n  font-family: \"Crete Round\", serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 30px;\r\n  line-height: 52px;\r\n  height: 83px;\r\n  color: #fff5e1;\r\n  color: var(--deepDark);\r\n}\r\n\r\n.thin-line {\r\n  border: 1px solid #5a594d;\r\n  height: 0;\r\n  width: 90%;\r\n  margin: 0 0 80px 0;\r\n}\r\n\r\n.my-works {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0;\r\n}\r\n\r\n.featured {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 5%;\r\n  border: 1px solid #dddcd9;\r\n  border-radius: 10px;\r\n}\r\n\r\n.featured .first-card-img-desktop {\r\n  display: none;\r\n}\r\n\r\n.featured .first-card-img-mobile {\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.featured .first-card-image-container {\r\n  width: 100%;\r\n}\r\n\r\n.first-card {\r\n  font-family: 'inter', serif;\r\n  margin-top: 15px;\r\n}\r\n\r\n.first-card > span {\r\n  font-family: 'crete round', serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 24px;\r\n  color: var(--orange);\r\n}\r\n\r\n.first-card > h3 {\r\n  font-family: 'crete round', serif;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 30px;\r\n  line-height: 25px;\r\n  color: var(--blue-like);\r\n  margin: 10px 0 30px;\r\n}\r\n\r\n.first-card > p {\r\n  font-family: 'inter', serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  color: var(--blue-like);\r\n  margin: 0 0 30px;\r\n}\r\n\r\n.first-card > ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.card-description li {\r\n  padding: 10px 12px;\r\n  height: 40px;\r\n  background: rgba(255, 255, 255, 0.74);\r\n  margin: 0 12px 0 0;\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  line-height: 20px;\r\n  color: var(--deepDark);\r\n  border-radius: 5px;\r\n}\r\n\r\n.first-card > ul > li {\r\n  font-family: 'inter', serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  color: var(--blue-like);\r\n  margin: 0 10px 0.6rem 0;\r\n  border: 1px solid var(--hawkesBlue);\r\n  padding: 0.5rem;\r\n  border-radius: 10px;\r\n}\r\n\r\n.project-card-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(319px, 1fr));\r\n  column-gap: 24px;\r\n  row-gap: 24px;\r\n  width: 100%;\r\n}\r\n\r\n.project-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 400px;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border: 1px solid #dddcd9;\r\n  margin: 1.5rem 0;\r\n  border-radius: 10px;\r\n  box-shadow: 0 10px 30px -15px #000;\r\n  position: relative;\r\n}\r\n\r\n.project-card > .card-description {\r\n  padding: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  background-color: rgba(3, 3, 3, 0.9);\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  transition: 0.5s ease-in-out;\r\n  flex: 1;\r\n}\r\n\r\n.project-card > .card-description:hover {\r\n  opacity: 0;\r\n}\r\n\r\n.btn-card {\r\n  width: 100%;\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n  color: #fff;\r\n  bottom: -1px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  transition: 0.5s ease-in-out;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.card-description > h3 {\r\n  font-family: \"Crete Round\", serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 32px;\r\n  line-height: 44px;\r\n  color: #fff;\r\n  height: 81px;\r\n}\r\n\r\n.card-description > p {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #fff;\r\n  margin: 12px 0;\r\n}\r\n\r\n.description-tags {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  padding: 0;\r\n  height: 40px;\r\n  list-style: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../illustrations/Rectangle55.png */ "./src/illustrations/Rectangle55.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../illustrations/Rectangle56.png */ "./src/illustrations/Rectangle56.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../illustrations/Rectangle57.png */ "./src/illustrations/Rectangle57.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../illustrations/Illustrationillustration.svg */ "./src/illustrations/Illustrationillustration.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../illustrations/about-section-img.svg */ "./src/illustrations/about-section-img.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../illustrations/Illustration-headerdesktop.png */ "./src/illustrations/Illustration-headerdesktop.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../illustrations/Desktop-Aboutme-illustration.svg */ "./src/illustrations/Desktop-Aboutme-illustration.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Crete+Round&family=Inter&family=Poppins&family=Roboto:ital,wght@0,400;0,500;0,900;1,100&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Tangerine:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --lightdark: #3c3a39;\r\n  --faded-dark: #5a594d;\r\n  --white: #fff;\r\n  --deepDark: #1c1a19;\r\n  --blue-like: #091e42;\r\n  --orange: #ff6b00;\r\n  --faded-orange: #f9f871;\r\n  --btn-disabledBGcolor: #f4f1f0;\r\n  --hawkesBlue: #dfe1e6;\r\n\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n#main-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#header {\r\n  background: var(--lightdark);\r\n  height: 68px;\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 12px 24px 12px 24px;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  line-height: 24px;\r\n}\r\n\r\n#header a {\r\n  text-decoration: none;\r\n}\r\n\r\n#logo {\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  line-height: 24px;\r\n  color: var(--white);\r\n  transition-property: color;\r\n  transition-duration: 0.5s;\r\n\r\n  /* font-family: 'Tangerine', cursive;\r\n  font-family: 'Berkshire Swash', cursive; */\r\n  font-family: \"Crete Round\", serif;\r\n}\r\n\r\n#logo:hover {\r\n  color: #ff6b00;\r\n}\r\n\r\n.icon-btn {\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n.hamburger-btn:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n#headline-section {\r\n  background-color: var(--deepDark);\r\n  padding: 100px 24px 24px 24px;\r\n  height: 590px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\n.headline-text-wrapper {\r\n  max-width: 566px;\r\n}\r\n\r\n#headline-section .headline-primary-text {\r\n  font-family: \"Crete Round\", serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 50px;\r\n  line-height: 64px;\r\n  letter-spacing: 0.37px;\r\n  color: var(--orange);\r\n}\r\n\r\n#headline-section h4 {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 24px;\r\n  line-height: 32px;\r\n  color: #fff5e1;\r\n}\r\n\r\n.headline-desc {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  line-height: 24px;\r\n  color: #fff;\r\n  margin-top: 12px;\r\n}\r\n\r\n.headline-social-media {\r\n  display: flex;\r\n  margin-top: 12px;\r\n}\r\n\r\n.headline-social-media li {\r\n  list-style: none;\r\n  background-color: none;\r\n  border-radius: 20px;\r\n  transition: background-color 1s;\r\n}\r\n\r\n/*\r\n.featured {\r\n  display: flex;\r\n}\r\n\r\n.first-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n}\r\n\r\n.first-card > h3 {\r\n  font-family: \"Crete Round\", serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 36px;\r\n  line-height: 44px;\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--blue-like);\r\n  margin: 12px 0;\r\n}\r\n\r\n.first-card > p {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: var(--blue-like);\r\n  margin: 12px 0;\r\n}\r\n\r\n.first-card > ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  padding: 0;\r\n  width: 297px;\r\n  height: 40px;\r\n  list-style: none;\r\n} */\r\n\r\n/* .tags {\r\n  background: #fff;\r\n  border: 1px solid #8993a4;\r\n  box-sizing: border-box;\r\n  height: 40px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  margin: 0 12px 0 0;\r\n} */\r\n\r\n.btn {\r\n  padding: 12px;\r\n  background: var(--orange);\r\n  height: 48px;\r\n  border: none;\r\n  transition: border 2s, color 2s, background-color 1s;\r\n  border-radius: 10px;\r\n}\r\n\r\n.btn-feature {\r\n  width: 124px;\r\n  margin: 12px 0 0 0;\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n  align-self: flex-start;\r\n  color: #fff;\r\n}\r\n\r\n.btn:hover {\r\n  border: 1px solid var(--orange);\r\n  color: var(--orange);\r\n  background-color: #fff5e1;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-feature:disabled {\r\n  border: none;\r\n  color: #5b5957;\r\n  background-color: var(--btn-disabledBGcolor);\r\n}\r\n\r\n/*\r\n.project-card {\r\n  margin: 24px 0 0 0;\r\n  list-style: none;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  max-width: 369px;\r\n  box-shadow: 1px 1px 8px -2px #262626;\r\n}\r\n\r\n.card-description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  padding: 8px 16px;\r\n  margin: 70px 0 14px 0;\r\n}\r\n\r\n.card-description > h3 {\r\n  font-family: \"Crete Round\", serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 32px;\r\n  line-height: 44px;\r\n  color: #fff;\r\n  height: 81px;\r\n}\r\n\r\n.card-description > p {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #fff;\r\n  margin: 12px 0;\r\n}\r\n\r\n.description-tags {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  padding: 0;\r\n  height: 40px;\r\n  list-style: none;\r\n}\r\n\r\n.card-description li {\r\n  padding: 10px 12px;\r\n  height: 40px;\r\n  background: rgba(255, 255, 255, 0.24);\r\n  margin: 0 12px 0 0;\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  line-height: 20px;\r\n  color: #fff;\r\n} */\r\n\r\n.headline-social-media li:hover {\r\n  cursor: pointer;\r\n  background-color: var(--lightdark);\r\n}\r\n\r\n#about-and-skill-section {\r\n  background: var(--deepDark);\r\n}\r\n\r\n#about-section {\r\n  padding: 120px 24px;\r\n}\r\n\r\n.about-me-header {\r\n  width: 100%;\r\n}\r\n\r\n.about-me-header h3 {\r\n  font-family: \"Crete Round\", serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 72px;\r\n  line-height: 88px;\r\n  letter-spacing: 0.37px;\r\n  color: var(--orange);\r\n}\r\n\r\n.about-description {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #f4f5f7;\r\n  margin: 24px 0;\r\n}\r\n\r\n.btn-about-me {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n  color: #fff;\r\n}\r\n\r\n.btn-about-me:hover {\r\n  border: 1px solid var(--orange);\r\n  color: var(--orange);\r\n  background-color: #fff5e1;\r\n}\r\n\r\n.btn-about-me:disabled {\r\n  border: none;\r\n  color: #5b5957;\r\n  background-color: #f4f1f0;\r\n}\r\n\r\n.about-section-divider {\r\n  height: 0;\r\n  border: 1px solid #fff;\r\n}\r\n\r\n#skill-section {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 120px 24px;\r\n  color: #fff;\r\n  font-family: \"Inter\", sans-serif;\r\n}\r\n\r\n.skill-category {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 32px;\r\n  line-height: 44px;\r\n}\r\n\r\n.skill-list-item {\r\n  margin: 16px 0;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 22px;\r\n  line-height: 43px;\r\n  text-align: center;\r\n  list-style: none;\r\n}\r\n\r\n.skill-list-item:hover {\r\n  cursor: pointer;\r\n  color: var(--orange);\r\n}\r\n\r\n.skill-list-wrap {\r\n  margin: 12px 0;\r\n}\r\n\r\n.language,\r\n.framework,\r\n.skills {\r\n  position: relative;\r\n}\r\n\r\n.language::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  position: absolute;\r\n  left: -40px;\r\n}\r\n\r\n.framework::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  position: absolute;\r\n  left: -30px;\r\n}\r\n\r\n.skills::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  position: absolute;\r\n  left: -30px;\r\n}\r\n\r\n#contact-form-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 120px 24px;\r\n}\r\n\r\n.contact-form-header {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 32px;\r\n  line-height: 44px;\r\n  text-align: center;\r\n  color: #172b4d;\r\n}\r\n\r\n#contact-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0;\r\n  margin: 58px 0 0 0;\r\n  min-width: 327px;\r\n  position: relative;\r\n}\r\n\r\n.text-input {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  color: #979493;\r\n  height: 48px;\r\n  padding: 12px;\r\n  border: none;\r\n  border-bottom: 1px solid #dbd8d7;\r\n}\r\n\r\n#contact-text-area {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  width: 82%;\r\n  height: 114px;\r\n  padding: 12px;\r\n  margin-top: 12px;\r\n  border: none;\r\n  background: #fbf8f7;\r\n  border-bottom: 1px solid #dbd8d7;\r\n}\r\n\r\n.btn-form-submit {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n  margin: 30px 0;\r\n  color: #fff;\r\n}\r\n\r\n.btn-form-submit:disabled {\r\n  border: none;\r\n  color: #5b5957;\r\n  background-color: var(--btn-disabledBGcolor);\r\n}\r\n\r\n#bottom-nav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-top: 1px solid var(--hawkesBlue);\r\n  padding-top: 10px;\r\n}\r\n\r\n.bottom-line {\r\n  background-color: #0d151e;\r\n  height: 5px;\r\n  width: 134px;\r\n  border-radius: 10px;\r\n  margin: 15px 0 8px 0;\r\n}\r\n\r\n.contact-social-media {\r\n  display: flex;\r\n  list-style: none;\r\n  height: 40px;\r\n  filter:\r\n    invert(37%) sepia(12%) saturate(1086%) hue-rotate(179deg)\r\n    brightness(92%) contrast(88%);\r\n}\r\n\r\n.social-media {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.social-media:hover {\r\n  background: var(--lightdark);\r\n  border-radius: 5px;\r\n}\r\n\r\n#nav-links {\r\n  list-style: none;\r\n}\r\n\r\n#nav-links > .section-link > a {\r\n  text-decoration: none;\r\n  color: var(--white);\r\n}\r\n\r\n.close-icon-wrapper {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 86%;\r\n  list-style: none;\r\n  cursor: pointer;\r\n  filter:\r\n    invert(49%) sepia(6%) saturate(1408%) hue-rotate(172deg)\r\n    brightness(94%) contrast(93%);\r\n  transition: 0.5s;\r\n}\r\n\r\n.close-icon-wrapper:hover {\r\n  filter:\r\n    invert(0%) sepia(0%) saturate(0%) hue-rotate(326deg) brightness(4%)\r\n    contrast(103%);\r\n}\r\n\r\n/* Mobile view css codes starts here */\r\n@media screen and (max-width: 768px) {\r\n  #headline-section {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    background-repeat: no-repeat;\r\n    background-position: 100% 230px;\r\n  }\r\n\r\n  /* .recent-works-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 0;\r\n  }\r\n\r\n  .recent-works-header > h2 {\r\n    font-family: \"Crete Round\", serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 40px;\r\n    line-height: 52px;\r\n    color: var(--deepDark);\r\n    height: 83px;\r\n  }\r\n\r\n  .my-works {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  .thin-line {\r\n    border: 1px solid #212121;\r\n    height: 0;\r\n    width: 327px;\r\n    margin: 0 0 80px 0;\r\n  }\r\n\r\n  .featured {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 0 24px;\r\n  }\r\n\r\n  .first-card-image-container {\r\n    width: 327px;\r\n    height: 237px;\r\n    margin: 12px 0;\r\n  }\r\n\r\n  .first-card-img-desktop {\r\n    display: none;\r\n  }\r\n\r\n  .first-card {\r\n    align-items: center;\r\n    padding: 0;\r\n  }\r\n\r\n  .first-card > h3 {\r\n    font-family: \"Crete Round\", serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 32px;\r\n    line-height: 44px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: var(--blue-like);\r\n    margin: 12px 0;\r\n  } */\r\n\r\n  /*\r\n  #card-container {\r\n    padding: 0 16px;\r\n    display: grid;\r\n    grid-template-columns: [col1-start] 1fr;\r\n  } */\r\n\r\n  #about-and-skill-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 1901px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    background-repeat: no-repeat;\r\n    background-position: 100% 20%;\r\n  }\r\n\r\n  #about-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-items: center;\r\n    padding: 120px 24px;\r\n    height: 563px;\r\n  }\r\n\r\n  .about-me-header {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n  }\r\n\r\n  .about-me-header h3 {\r\n    font-family: \"Crete Round\", serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 72px;\r\n    line-height: 88px;\r\n    letter-spacing: 0.37px;\r\n    color: var(--orange);\r\n  }\r\n\r\n  .about-description {\r\n    font-family: \"Inter\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    color: #f4f5f7;\r\n    margin: 24px 0;\r\n  }\r\n\r\n  .about-section-divider {\r\n    width: 327px;\r\n    margin: 80px 0 0 0;\r\n  }\r\n\r\n  #nav-links {\r\n    display: none;\r\n    flex-direction: column;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: var(--lightdark);\r\n    padding: 60px 40px 40px 40px;\r\n    z-index: 100;\r\n  }\r\n\r\n  .display-f {\r\n    display: flex !important;\r\n  }\r\n\r\n  .display-b {\r\n    display: block !important;\r\n  }\r\n\r\n  .display-n {\r\n    display: none !important;\r\n  }\r\n\r\n  #nav-links .section-link {\r\n    font-family: \"Inter\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 32px;\r\n    line-height: 44px;\r\n    width: 100%;\r\n    padding-left: 1rem;\r\n    margin-top: 1rem;\r\n    border-bottom: 1px solid #6f6c6b;\r\n  }\r\n}\r\n\r\n/* Desktop css code begins here */\r\n@media screen and (min-width: 768px) {\r\n  #logo {\r\n    font-family: \"Inter\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    line-height: 20px;\r\n    margin-left: 123px;\r\n    transition-property: color;\r\n    transition-delay: 1008ms;\r\n    transition-duration: 1s;\r\n  }\r\n\r\n  #logo:hover {\r\n    color: #ff6b00;\r\n  }\r\n\r\n  .hamburger-btn {\r\n    display: none;\r\n  }\r\n\r\n  #nav-links {\r\n    display: flex;\r\n    margin-right: 151px;\r\n    font-family: \"Inter\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    line-height: 1.25rem;\r\n  }\r\n\r\n  #nav-links > .section-link {\r\n    margin: 0 1rem 0 1rem;\r\n  }\r\n\r\n  /* Hide menu close btn in desktop view */\r\n  .close-icon-wrapper {\r\n    left: 93%;\r\n  }\r\n\r\n  #headline-section {\r\n    height: 798px;\r\n    padding: 192px 24px 24px 24px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n    background-repeat: no-repeat;\r\n    background-position: 100% 0;\r\n    position: relative;\r\n  }\r\n\r\n  .headline-text-wrapper {\r\n    margin-left: 123px;\r\n  }\r\n\r\n  #headline-section .headline-primary-text {\r\n    font-size: 72px;\r\n    line-height: 82px;\r\n  }\r\n\r\n  #headline-section h4 {\r\n    font-family: \"inter\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 32px;\r\n    line-height: 44px;\r\n  }\r\n\r\n  .headline-desc {\r\n    font-family: \"inter\", sans-serif;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 32px;\r\n    color: #fff;\r\n    margin-top: 12px;\r\n  }\r\n\r\n  .headline-social-media {\r\n    position: absolute;\r\n    padding: 50px 0;\r\n    display: block;\r\n  }\r\n\r\n  /*\r\n  #recent-works {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-items: center;\r\n    padding: 135px 142px;\r\n    margin: 0 118px;\r\n    position: relative;\r\n  }\r\n\r\n  .recent-works-header {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0;\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  .thin-line {\r\n    border: 1px solid #212121;\r\n    height: 0;\r\n    width: 100%;\r\n    margin: 0 24px 0 0;\r\n  }\r\n\r\n  .recent-works-header > h2 {\r\n    font-family: \"Crete Round\", serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    line-height: 52px;\r\n    color: var(--deepDark);\r\n    width: 415px;\r\n    margin: 0 0 0 24px;\r\n  }\r\n\r\n  .my-works {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 0;\r\n  }\r\n\r\n  .featured {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    justify-items: start;\r\n  }\r\n\r\n  .first-card-image-container {\r\n    max-width: 684px;\r\n    height: 448px;\r\n  }\r\n\r\n  .first-card-img-mobile {\r\n    display: none;\r\n  }\r\n\r\n  .first-card-img-desktop {\r\n    height: 100%;\r\n    width: 100%;\r\n    object-fit: contain;\r\n    box-shadow: 1px 1px 8px -2px rgb(95, 92, 92);\r\n  }\r\n\r\n  .first-card {\r\n    padding-left: 24px;\r\n  }\r\n\r\n  .first-card > h3 {\r\n    font-weight: 400;\r\n    font-size: 40px;\r\n    line-height: 52px;\r\n    color: var(--blue-like);\r\n    margin: 12px 0;\r\n  }\r\n\r\n  #card-container {\r\n    margin-top: 24px;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(309px, 1fr));\r\n    column-gap: 24px;\r\n    row-gap: 24px;\r\n    width: 100%;\r\n  } */\r\n\r\n  #about-and-skill-section {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n    background-repeat: no-repeat;\r\n    background-position: 100% 100px;\r\n    padding: 0 142px 0 142px;\r\n  }\r\n\r\n  #about-section {\r\n    align-items: flex-start;\r\n    justify-items: center;\r\n    padding: 130px 24px;\r\n    height: 563px;\r\n    max-width: 566px;\r\n  }\r\n\r\n  .about-section-divider {\r\n    max-width: 1156px;\r\n  }\r\n\r\n  #skill-section {\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    justify-content: space-between;\r\n    padding: 140px 24px;\r\n  }\r\n\r\n  #contact-form-section {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    padding: 130px 135px;\r\n  }\r\n\r\n  .contact-form-header {\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 40px;\r\n    line-height: 52px;\r\n    font-family: \"Inter\", sans-serif;\r\n    text-align: left;\r\n    color: #262626;\r\n    max-width: 455px;\r\n  }\r\n\r\n  #contact-form {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding: 0;\r\n    margin: 0;\r\n    min-width: 327px;\r\n    flex-grow: 1;\r\n  }\r\n\r\n  .first-name {\r\n    margin: 0 20px 0 0;\r\n  }\r\n\r\n  .contact-input-mobile,\r\n  .email-input,\r\n  .text-area {\r\n    grid-column: 1 / 3;\r\n  }\r\n\r\n  .btn-form-submit {\r\n    width: 132px;\r\n  }\r\n\r\n  .contact_form_label {\r\n    position: absolute;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Crete+Round&family=Inter&family=Poppins&family=Roboto:ital,wght@0,400;0,500;0,900;1,100&display=swap\");\r\n@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Tangerine:wght@400;700&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --lightdark: #3c3a39;\r\n  --faded-dark: #5a594d;\r\n  --white: #fff;\r\n  --deepDark: #1c1a19;\r\n  --blue-like: #091e42;\r\n  --orange: #ff6b00;\r\n  --faded-orange: #f9f871;\r\n  --btn-disabledBGcolor: #f4f1f0;\r\n  --hawkesBlue: #dfe1e6;\r\n\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n#main-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#header {\r\n  background: var(--lightdark);\r\n  height: 68px;\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 12px 24px 12px 24px;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  line-height: 24px;\r\n}\r\n\r\n#header a {\r\n  text-decoration: none;\r\n}\r\n\r\n#logo {\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  line-height: 24px;\r\n  color: var(--white);\r\n  transition-property: color;\r\n  transition-duration: 0.5s;\r\n\r\n  /* font-family: 'Tangerine', cursive;\r\n  font-family: 'Berkshire Swash', cursive; */\r\n  font-family: \"Crete Round\", serif;\r\n}\r\n\r\n#logo:hover {\r\n  color: #ff6b00;\r\n}\r\n\r\n.icon-btn {\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n.hamburger-btn:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n#headline-section {\r\n  background-color: var(--deepDark);\r\n  padding: 100px 24px 24px 24px;\r\n  height: 590px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\n.headline-text-wrapper {\r\n  max-width: 566px;\r\n}\r\n\r\n#headline-section .headline-primary-text {\r\n  font-family: \"Crete Round\", serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 50px;\r\n  line-height: 64px;\r\n  letter-spacing: 0.37px;\r\n  color: var(--orange);\r\n}\r\n\r\n#headline-section h4 {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 24px;\r\n  line-height: 32px;\r\n  color: #fff5e1;\r\n}\r\n\r\n.headline-desc {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  line-height: 24px;\r\n  color: #fff;\r\n  margin-top: 12px;\r\n}\r\n\r\n.headline-social-media {\r\n  display: flex;\r\n  margin-top: 12px;\r\n}\r\n\r\n.headline-social-media li {\r\n  list-style: none;\r\n  background-color: none;\r\n  border-radius: 20px;\r\n  transition: background-color 1s;\r\n}\r\n\r\n/*\r\n.featured {\r\n  display: flex;\r\n}\r\n\r\n.first-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n}\r\n\r\n.first-card > h3 {\r\n  font-family: \"Crete Round\", serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 36px;\r\n  line-height: 44px;\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--blue-like);\r\n  margin: 12px 0;\r\n}\r\n\r\n.first-card > p {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: var(--blue-like);\r\n  margin: 12px 0;\r\n}\r\n\r\n.first-card > ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  padding: 0;\r\n  width: 297px;\r\n  height: 40px;\r\n  list-style: none;\r\n} */\r\n\r\n/* .tags {\r\n  background: #fff;\r\n  border: 1px solid #8993a4;\r\n  box-sizing: border-box;\r\n  height: 40px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  margin: 0 12px 0 0;\r\n} */\r\n\r\n.btn {\r\n  padding: 12px;\r\n  background: var(--orange);\r\n  height: 48px;\r\n  border: none;\r\n  transition: border 2s, color 2s, background-color 1s;\r\n  border-radius: 10px;\r\n}\r\n\r\n.btn-feature {\r\n  width: 124px;\r\n  margin: 12px 0 0 0;\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n  align-self: flex-start;\r\n  color: #fff;\r\n}\r\n\r\n.btn:hover {\r\n  border: 1px solid var(--orange);\r\n  color: var(--orange);\r\n  background-color: #fff5e1;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-feature:disabled {\r\n  border: none;\r\n  color: #5b5957;\r\n  background-color: var(--btn-disabledBGcolor);\r\n}\r\n\r\n/*\r\n.project-card {\r\n  margin: 24px 0 0 0;\r\n  list-style: none;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  max-width: 369px;\r\n  box-shadow: 1px 1px 8px -2px #262626;\r\n}\r\n\r\n.card-description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  padding: 8px 16px;\r\n  margin: 70px 0 14px 0;\r\n}\r\n\r\n.card-description > h3 {\r\n  font-family: \"Crete Round\", serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 32px;\r\n  line-height: 44px;\r\n  color: #fff;\r\n  height: 81px;\r\n}\r\n\r\n.card-description > p {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #fff;\r\n  margin: 12px 0;\r\n}\r\n\r\n.description-tags {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  padding: 0;\r\n  height: 40px;\r\n  list-style: none;\r\n}\r\n\r\n.card-description li {\r\n  padding: 10px 12px;\r\n  height: 40px;\r\n  background: rgba(255, 255, 255, 0.24);\r\n  margin: 0 12px 0 0;\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  line-height: 20px;\r\n  color: #fff;\r\n} */\r\n\r\n.headline-social-media li:hover {\r\n  cursor: pointer;\r\n  background-color: var(--lightdark);\r\n}\r\n\r\n#about-and-skill-section {\r\n  background: var(--deepDark);\r\n}\r\n\r\n#about-section {\r\n  padding: 120px 24px;\r\n}\r\n\r\n.about-me-header {\r\n  width: 100%;\r\n}\r\n\r\n.about-me-header h3 {\r\n  font-family: \"Crete Round\", serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 72px;\r\n  line-height: 88px;\r\n  letter-spacing: 0.37px;\r\n  color: var(--orange);\r\n}\r\n\r\n.about-description {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #f4f5f7;\r\n  margin: 24px 0;\r\n}\r\n\r\n.btn-about-me {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n  color: #fff;\r\n}\r\n\r\n.btn-about-me:hover {\r\n  border: 1px solid var(--orange);\r\n  color: var(--orange);\r\n  background-color: #fff5e1;\r\n}\r\n\r\n.btn-about-me:disabled {\r\n  border: none;\r\n  color: #5b5957;\r\n  background-color: #f4f1f0;\r\n}\r\n\r\n.about-section-divider {\r\n  height: 0;\r\n  border: 1px solid #fff;\r\n}\r\n\r\n#skill-section {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 120px 24px;\r\n  color: #fff;\r\n  font-family: \"Inter\", sans-serif;\r\n}\r\n\r\n.skill-category {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 32px;\r\n  line-height: 44px;\r\n}\r\n\r\n.skill-list-item {\r\n  margin: 16px 0;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 22px;\r\n  line-height: 43px;\r\n  text-align: center;\r\n  list-style: none;\r\n}\r\n\r\n.skill-list-item:hover {\r\n  cursor: pointer;\r\n  color: var(--orange);\r\n}\r\n\r\n.skill-list-wrap {\r\n  margin: 12px 0;\r\n}\r\n\r\n.language,\r\n.framework,\r\n.skills {\r\n  position: relative;\r\n}\r\n\r\n.language::before {\r\n  content: url(../illustrations/Rectangle55.png);\r\n  position: absolute;\r\n  left: -40px;\r\n}\r\n\r\n.framework::before {\r\n  content: url(../illustrations/Rectangle56.png);\r\n  position: absolute;\r\n  left: -30px;\r\n}\r\n\r\n.skills::before {\r\n  content: url(../illustrations/Rectangle57.png);\r\n  position: absolute;\r\n  left: -30px;\r\n}\r\n\r\n#contact-form-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 120px 24px;\r\n}\r\n\r\n.contact-form-header {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 32px;\r\n  line-height: 44px;\r\n  text-align: center;\r\n  color: #172b4d;\r\n}\r\n\r\n#contact-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0;\r\n  margin: 58px 0 0 0;\r\n  min-width: 327px;\r\n  position: relative;\r\n}\r\n\r\n.text-input {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  color: #979493;\r\n  height: 48px;\r\n  padding: 12px;\r\n  border: none;\r\n  border-bottom: 1px solid #dbd8d7;\r\n}\r\n\r\n#contact-text-area {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  width: 82%;\r\n  height: 114px;\r\n  padding: 12px;\r\n  margin-top: 12px;\r\n  border: none;\r\n  background: #fbf8f7;\r\n  border-bottom: 1px solid #dbd8d7;\r\n}\r\n\r\n.btn-form-submit {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n  margin: 30px 0;\r\n  color: #fff;\r\n}\r\n\r\n.btn-form-submit:disabled {\r\n  border: none;\r\n  color: #5b5957;\r\n  background-color: var(--btn-disabledBGcolor);\r\n}\r\n\r\n#bottom-nav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-top: 1px solid var(--hawkesBlue);\r\n  padding-top: 10px;\r\n}\r\n\r\n.bottom-line {\r\n  background-color: #0d151e;\r\n  height: 5px;\r\n  width: 134px;\r\n  border-radius: 10px;\r\n  margin: 15px 0 8px 0;\r\n}\r\n\r\n.contact-social-media {\r\n  display: flex;\r\n  list-style: none;\r\n  height: 40px;\r\n  filter:\r\n    invert(37%) sepia(12%) saturate(1086%) hue-rotate(179deg)\r\n    brightness(92%) contrast(88%);\r\n}\r\n\r\n.social-media {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.social-media:hover {\r\n  background: var(--lightdark);\r\n  border-radius: 5px;\r\n}\r\n\r\n#nav-links {\r\n  list-style: none;\r\n}\r\n\r\n#nav-links > .section-link > a {\r\n  text-decoration: none;\r\n  color: var(--white);\r\n}\r\n\r\n.close-icon-wrapper {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 86%;\r\n  list-style: none;\r\n  cursor: pointer;\r\n  filter:\r\n    invert(49%) sepia(6%) saturate(1408%) hue-rotate(172deg)\r\n    brightness(94%) contrast(93%);\r\n  transition: 0.5s;\r\n}\r\n\r\n.close-icon-wrapper:hover {\r\n  filter:\r\n    invert(0%) sepia(0%) saturate(0%) hue-rotate(326deg) brightness(4%)\r\n    contrast(103%);\r\n}\r\n\r\n/* Mobile view css codes starts here */\r\n@media screen and (max-width: 768px) {\r\n  #headline-section {\r\n    background-image: url(../illustrations/Illustrationillustration.svg);\r\n    background-repeat: no-repeat;\r\n    background-position: 100% 230px;\r\n  }\r\n\r\n  /* .recent-works-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 0;\r\n  }\r\n\r\n  .recent-works-header > h2 {\r\n    font-family: \"Crete Round\", serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 40px;\r\n    line-height: 52px;\r\n    color: var(--deepDark);\r\n    height: 83px;\r\n  }\r\n\r\n  .my-works {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  .thin-line {\r\n    border: 1px solid #212121;\r\n    height: 0;\r\n    width: 327px;\r\n    margin: 0 0 80px 0;\r\n  }\r\n\r\n  .featured {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 0 24px;\r\n  }\r\n\r\n  .first-card-image-container {\r\n    width: 327px;\r\n    height: 237px;\r\n    margin: 12px 0;\r\n  }\r\n\r\n  .first-card-img-desktop {\r\n    display: none;\r\n  }\r\n\r\n  .first-card {\r\n    align-items: center;\r\n    padding: 0;\r\n  }\r\n\r\n  .first-card > h3 {\r\n    font-family: \"Crete Round\", serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 32px;\r\n    line-height: 44px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: var(--blue-like);\r\n    margin: 12px 0;\r\n  } */\r\n\r\n  /*\r\n  #card-container {\r\n    padding: 0 16px;\r\n    display: grid;\r\n    grid-template-columns: [col1-start] 1fr;\r\n  } */\r\n\r\n  #about-and-skill-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 1901px;\r\n    background-image: url(../illustrations/about-section-img.svg);\r\n    background-repeat: no-repeat;\r\n    background-position: 100% 20%;\r\n  }\r\n\r\n  #about-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-items: center;\r\n    padding: 120px 24px;\r\n    height: 563px;\r\n  }\r\n\r\n  .about-me-header {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n  }\r\n\r\n  .about-me-header h3 {\r\n    font-family: \"Crete Round\", serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 72px;\r\n    line-height: 88px;\r\n    letter-spacing: 0.37px;\r\n    color: var(--orange);\r\n  }\r\n\r\n  .about-description {\r\n    font-family: \"Inter\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    color: #f4f5f7;\r\n    margin: 24px 0;\r\n  }\r\n\r\n  .about-section-divider {\r\n    width: 327px;\r\n    margin: 80px 0 0 0;\r\n  }\r\n\r\n  #nav-links {\r\n    display: none;\r\n    flex-direction: column;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: var(--lightdark);\r\n    padding: 60px 40px 40px 40px;\r\n    z-index: 100;\r\n  }\r\n\r\n  .display-f {\r\n    display: flex !important;\r\n  }\r\n\r\n  .display-b {\r\n    display: block !important;\r\n  }\r\n\r\n  .display-n {\r\n    display: none !important;\r\n  }\r\n\r\n  #nav-links .section-link {\r\n    font-family: \"Inter\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 32px;\r\n    line-height: 44px;\r\n    width: 100%;\r\n    padding-left: 1rem;\r\n    margin-top: 1rem;\r\n    border-bottom: 1px solid #6f6c6b;\r\n  }\r\n}\r\n\r\n/* Desktop css code begins here */\r\n@media screen and (min-width: 768px) {\r\n  #logo {\r\n    font-family: \"Inter\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    line-height: 20px;\r\n    margin-left: 123px;\r\n    transition-property: color;\r\n    transition-delay: 1008ms;\r\n    transition-duration: 1s;\r\n  }\r\n\r\n  #logo:hover {\r\n    color: #ff6b00;\r\n  }\r\n\r\n  .hamburger-btn {\r\n    display: none;\r\n  }\r\n\r\n  #nav-links {\r\n    display: flex;\r\n    margin-right: 151px;\r\n    font-family: \"Inter\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    line-height: 1.25rem;\r\n  }\r\n\r\n  #nav-links > .section-link {\r\n    margin: 0 1rem 0 1rem;\r\n  }\r\n\r\n  /* Hide menu close btn in desktop view */\r\n  .close-icon-wrapper {\r\n    left: 93%;\r\n  }\r\n\r\n  #headline-section {\r\n    height: 798px;\r\n    padding: 192px 24px 24px 24px;\r\n    background-image: url(../illustrations/Illustration-headerdesktop.png);\r\n    background-repeat: no-repeat;\r\n    background-position: 100% 0;\r\n    position: relative;\r\n  }\r\n\r\n  .headline-text-wrapper {\r\n    margin-left: 123px;\r\n  }\r\n\r\n  #headline-section .headline-primary-text {\r\n    font-size: 72px;\r\n    line-height: 82px;\r\n  }\r\n\r\n  #headline-section h4 {\r\n    font-family: \"inter\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 32px;\r\n    line-height: 44px;\r\n  }\r\n\r\n  .headline-desc {\r\n    font-family: \"inter\", sans-serif;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 32px;\r\n    color: #fff;\r\n    margin-top: 12px;\r\n  }\r\n\r\n  .headline-social-media {\r\n    position: absolute;\r\n    padding: 50px 0;\r\n    display: block;\r\n  }\r\n\r\n  /*\r\n  #recent-works {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-items: center;\r\n    padding: 135px 142px;\r\n    margin: 0 118px;\r\n    position: relative;\r\n  }\r\n\r\n  .recent-works-header {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0;\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  .thin-line {\r\n    border: 1px solid #212121;\r\n    height: 0;\r\n    width: 100%;\r\n    margin: 0 24px 0 0;\r\n  }\r\n\r\n  .recent-works-header > h2 {\r\n    font-family: \"Crete Round\", serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    line-height: 52px;\r\n    color: var(--deepDark);\r\n    width: 415px;\r\n    margin: 0 0 0 24px;\r\n  }\r\n\r\n  .my-works {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 0;\r\n  }\r\n\r\n  .featured {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    justify-items: start;\r\n  }\r\n\r\n  .first-card-image-container {\r\n    max-width: 684px;\r\n    height: 448px;\r\n  }\r\n\r\n  .first-card-img-mobile {\r\n    display: none;\r\n  }\r\n\r\n  .first-card-img-desktop {\r\n    height: 100%;\r\n    width: 100%;\r\n    object-fit: contain;\r\n    box-shadow: 1px 1px 8px -2px rgb(95, 92, 92);\r\n  }\r\n\r\n  .first-card {\r\n    padding-left: 24px;\r\n  }\r\n\r\n  .first-card > h3 {\r\n    font-weight: 400;\r\n    font-size: 40px;\r\n    line-height: 52px;\r\n    color: var(--blue-like);\r\n    margin: 12px 0;\r\n  }\r\n\r\n  #card-container {\r\n    margin-top: 24px;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(309px, 1fr));\r\n    column-gap: 24px;\r\n    row-gap: 24px;\r\n    width: 100%;\r\n  } */\r\n\r\n  #about-and-skill-section {\r\n    background-image: url(../illustrations/Desktop-Aboutme-illustration.svg);\r\n    background-repeat: no-repeat;\r\n    background-position: 100% 100px;\r\n    padding: 0 142px 0 142px;\r\n  }\r\n\r\n  #about-section {\r\n    align-items: flex-start;\r\n    justify-items: center;\r\n    padding: 130px 24px;\r\n    height: 563px;\r\n    max-width: 566px;\r\n  }\r\n\r\n  .about-section-divider {\r\n    max-width: 1156px;\r\n  }\r\n\r\n  #skill-section {\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    justify-content: space-between;\r\n    padding: 140px 24px;\r\n  }\r\n\r\n  #contact-form-section {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    padding: 130px 135px;\r\n  }\r\n\r\n  .contact-form-header {\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 40px;\r\n    line-height: 52px;\r\n    font-family: \"Inter\", sans-serif;\r\n    text-align: left;\r\n    color: #262626;\r\n    max-width: 455px;\r\n  }\r\n\r\n  #contact-form {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding: 0;\r\n    margin: 0;\r\n    min-width: 327px;\r\n    flex-grow: 1;\r\n  }\r\n\r\n  .first-name {\r\n    margin: 0 20px 0 0;\r\n  }\r\n\r\n  .contact-input-mobile,\r\n  .email-input,\r\n  .text-area {\r\n    grid-column: 1 / 3;\r\n  }\r\n\r\n  .btn-form-submit {\r\n    width: 132px;\r\n  }\r\n\r\n  .contact_form_label {\r\n    position: absolute;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/icons/DisabledLinkedIn-icon.png":
/*!*********************************************!*\
  !*** ./src/icons/DisabledLinkedIn-icon.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b2fdb902db9d94653c6458129791f47d.png");

/***/ }),

/***/ "./src/icons/DisabledM-icon.png":
/*!**************************************!*\
  !*** ./src/icons/DisabledM-icon.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b47a24851ca87a2b1e87c2c5d739abb4.png");

/***/ }),

/***/ "./src/icons/Disabledgithub-icon.png":
/*!*******************************************!*\
  !*** ./src/icons/Disabledgithub-icon.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e282378f005228c84050930d05fa1d86.png");

/***/ }),

/***/ "./src/icons/Disabledtwitter-icon.png":
/*!********************************************!*\
  !*** ./src/icons/Disabledtwitter-icon.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7d78ea7f457abda89e9283b53f84b1e6.png");

/***/ }),

/***/ "./src/icons/Enabledtwo-fingers-icon.png":
/*!***********************************************!*\
  !*** ./src/icons/Enabledtwo-fingers-icon.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a02e76e985d42dbd98ae3d4ea605f5df.png");

/***/ }),

/***/ "./src/icons/Envelope-Icon.svg":
/*!*************************************!*\
  !*** ./src/icons/Envelope-Icon.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "f492c9656c77a5217fb04146f4d4f9a3.svg");

/***/ }),

/***/ "./src/icons/Hamburger-menu-icon.svg":
/*!*******************************************!*\
  !*** ./src/icons/Hamburger-menu-icon.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "bd8acecebcda4d1c0d6253c5dc322b77.svg");

/***/ }),

/***/ "./src/icons/close-icon.png":
/*!**********************************!*\
  !*** ./src/icons/close-icon.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "3b31b506cffe290dc9030da9251a53a2.png");

/***/ }),

/***/ "./src/icons/github-icon.svg":
/*!***********************************!*\
  !*** ./src/icons/github-icon.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ae458a65690fea15295a4e451968b910.svg");

/***/ }),

/***/ "./src/icons/new-window-icon.svg":
/*!***************************************!*\
  !*** ./src/icons/new-window-icon.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c8898be00c367362a194416f14660033.svg");

/***/ }),

/***/ "./src/images/Car-test-dt.png":
/*!************************************!*\
  !*** ./src/images/Car-test-dt.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b533ac2ca77c1657dce1f2a688a3ef87.png");

/***/ }),

/***/ "./src/images/Car-test-mobile.png":
/*!****************************************!*\
  !*** ./src/images/Car-test-mobile.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b97b9ab7140ece07090dca435c476b67.png");

/***/ }),

/***/ "./src/myworkImages/Crypto-hub-desktop.png":
/*!*************************************************!*\
  !*** ./src/myworkImages/Crypto-hub-desktop.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d63bc5ff7e4e38757970908f46ebe209.png");

/***/ }),

/***/ "./src/myworkImages/Crypto-hub-mobile.png":
/*!************************************************!*\
  !*** ./src/myworkImages/Crypto-hub-mobile.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ec1fdcceac44f4bf9a92e1b32dd60288.png");

/***/ }),

/***/ "./src/myworkImages/E-commerce product page.png":
/*!******************************************************!*\
  !*** ./src/myworkImages/E-commerce product page.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9559314ee18d61d58ae679a7d0ad7981.png");

/***/ }),

/***/ "./src/myworkImages/Shortly-desktop.png":
/*!**********************************************!*\
  !*** ./src/myworkImages/Shortly-desktop.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "5233c93c7ba503dfa3569945a0f88006.png");

/***/ }),

/***/ "./src/myworkImages/Shortly-mobile.png":
/*!*********************************************!*\
  !*** ./src/myworkImages/Shortly-mobile.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a11828d700182a491a19bd8b80fb1180.png");

/***/ }),

/***/ "./src/myworkImages/desktopGlobalDrummers.png":
/*!****************************************************!*\
  !*** ./src/myworkImages/desktopGlobalDrummers.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "84848b22064895f797de41abbd18c392.png");

/***/ }),

/***/ "./src/myworkImages/mobileE-commerce-product-page.png":
/*!************************************************************!*\
  !*** ./src/myworkImages/mobileE-commerce-product-page.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ddd817bc3419472f9d7f97644368f756.png");

/***/ }),

/***/ "./src/myworkImages/mobileGlobalDrummers.png":
/*!***************************************************!*\
  !*** ./src/myworkImages/mobileGlobalDrummers.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "af4a43f4dba8e40e805149b787732277.png");

/***/ }),

/***/ "./src/css/popup.css":
/*!***************************!*\
  !*** ./src/css/popup.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/projects.css":
/*!******************************!*\
  !*** ./src/css/projects.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./projects.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/projects.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/JavaScript/domEl.js":
/*!*********************************!*\
  !*** ./src/JavaScript/domEl.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_close_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/close-icon.png */ "./src/icons/close-icon.png");


const DOM = (() => {
  // create Element function
  function createElement(elem, className = null) {
    const element = document.createElement(elem);
    if (className !== null) {
      element.classList.add(className);
    }
    return element;
  }

  // create close icon function
  const createCloseIcon = (location, closeWrap) => {
    const closeIconEl = createElement('img', 'close-icon');
    const closeWrapper = createElement(closeWrap, 'close-icon-wrapper');
    closeIconEl.src = _icons_close_icon_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    closeIconEl.alt = 'close icon';
    closeWrapper.appendChild(closeIconEl);
    location.appendChild(closeWrapper);
  };

  // Projects card display function
  const cardContainer = document.querySelector('.project-card-container');

  const createProjectCard = ({
    name,
    description,
    images,
    technologies,
    id,
  }) => {
    const listItem = createElement('li', 'project-card');
    listItem.style.backgroundImage = `url(${images.mobile})`;
    listItem.id = id;

    const projectName = createElement('h3');
    projectName.textContent = `${name}`;

    const projectDescription = createElement('p');
    projectDescription.textContent = `${description}`;

    const techListItem1 = createElement('li');
    techListItem1.textContent = `${technologies[0]}`;
    const techListItem2 = createElement('li');
    techListItem2.textContent = `${technologies[1]}`;
    const techListItem3 = createElement('li');
    techListItem3.textContent = `${technologies[2]}`;
    const techUL = createElement('ul', 'description-tags');
    techUL.append(techListItem1, techListItem2, techListItem3);

    const cardDescription = createElement('div', 'card-description');
    cardDescription.append(projectName, projectDescription, techUL);

    const projectBtn = createElement('button', 'btn');
    projectBtn.classList.add('btn-card');
    projectBtn.type = 'button';
    projectBtn.textContent = 'See Project';
    listItem.append(cardDescription, projectBtn);
    return listItem;
  };

  // Project card display map
  const displayProjects = (projects) => {
    projects.map((project) => cardContainer.appendChild(createProjectCard(project)));
  };

  // Project pop up window create function
  const createPopupWindow = ({
    name,
    description,
    images,
    technologies,
    liveLink,
    sourceFile,
  }) => {
    const projectModal = createElement('div', 'project-modal');
    const popupContainer = createElement('div', 'popup-container');
    popupContainer.innerHTML = `
              <h2>${name}</h2>
              <ul class="tech-stack">
                ${technologies.map((tech) => `<li>${tech}</li>`)}
              </ul>
              <div class="popup-img-p">
                  <img src=${images.desktop} alt="${name}">
  
                  <div class="popup-btn-wrapper">
                      <p>${description}</p>
                      
                      <div class="pop-btn-wrap">
                        <button class="btn popup-btn" type="button">
                            <a href="${liveLink}">See Live
                            <img src="" alt="New window icon">
                            </a>                        
                        </button>
                        <button class="btn popup-btn" type="button">
                            <a href="${sourceFile}">See Source
                            <img src="" alt="github icon">
                            </a>                        
                        </button>
                      </div>
                  </div>
              </div>
          `;
    projectModal.appendChild(popupContainer);
    return projectModal;
  };

  // elements
  const hamburgerBtn = document.querySelector('.hamburger-btn'); // Hamburger
  const navLinksWrapper = document.getElementById('nav-links'); // Menu link wrapper
  const projectBtns = document.querySelectorAll('.btn-card'); // See project btns
  const projectInnerCards = document.querySelectorAll('.card-description'); // See project cards
  const workSection = document.getElementById('recent-works'); // portfolio Work section

  return {
    createElement,
    createCloseIcon,
    createPopupWindow,
    createProjectCard,
    displayProjects,
    hamburgerBtn,
    navLinksWrapper,
    cardContainer,
    projectBtns,
    projectInnerCards,
    workSection,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);


/***/ }),

/***/ "./src/JavaScript/images.js":
/*!**********************************!*\
  !*** ./src/JavaScript/images.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_Hamburger_menu_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/Hamburger-menu-icon.svg */ "./src/icons/Hamburger-menu-icon.svg");
/* harmony import */ var _icons_Envelope_Icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/Envelope-Icon.svg */ "./src/icons/Envelope-Icon.svg");
/* harmony import */ var _icons_Disabledgithub_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/Disabledgithub-icon.png */ "./src/icons/Disabledgithub-icon.png");
/* harmony import */ var _icons_DisabledLinkedIn_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/DisabledLinkedIn-icon.png */ "./src/icons/DisabledLinkedIn-icon.png");
/* harmony import */ var _icons_Enabledtwo_fingers_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/Enabledtwo-fingers-icon.png */ "./src/icons/Enabledtwo-fingers-icon.png");
/* harmony import */ var _icons_Disabledtwitter_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/Disabledtwitter-icon.png */ "./src/icons/Disabledtwitter-icon.png");
/* harmony import */ var _icons_DisabledM_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/DisabledM-icon.png */ "./src/icons/DisabledM-icon.png");
/* harmony import */ var _images_Car_test_dt_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/Car-test-dt.png */ "./src/images/Car-test-dt.png");


// Headline social icons





// Featured product images
// import featuredProduct1 from '../images/mobile-first-card.svg';


const displayImages = () => {
  const hamburgerEl = document.querySelector('.hamburger-btn > img');
  hamburgerEl.src = _icons_Hamburger_menu_icon_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  // Envelope Icon insertion
  const envelopEl = document.querySelector('.envelope-icon');
  envelopEl.src = _icons_Envelope_Icon_svg__WEBPACK_IMPORTED_MODULE_1__["default"];

  // Insert featured product images
  const productImages = () => {
    const featuredProduct1El = document.querySelector('.first-card-img-mobile');
    featuredProduct1El.src = _images_Car_test_dt_png__WEBPACK_IMPORTED_MODULE_7__["default"];
  };

  // insert social media icons in headline
  const allheadlineIcons = document.querySelectorAll('.headline-social-media img');
  const [img1, img2, img3, img4, img5] = [...allheadlineIcons];
  img1.src = _icons_Disabledgithub_icon_png__WEBPACK_IMPORTED_MODULE_2__["default"];
  img2.src = _icons_DisabledLinkedIn_icon_png__WEBPACK_IMPORTED_MODULE_3__["default"];
  img3.src = _icons_Enabledtwo_fingers_icon_png__WEBPACK_IMPORTED_MODULE_4__["default"];
  img4.src = _icons_Disabledtwitter_icon_png__WEBPACK_IMPORTED_MODULE_5__["default"];
  img5.src = _icons_DisabledM_icon_png__WEBPACK_IMPORTED_MODULE_6__["default"];

  productImages();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayImages);

/***/ }),

/***/ "./src/JavaScript/localStorage.js":
/*!****************************************!*\
  !*** ./src/JavaScript/localStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const setLocalStore = (() => {
  function useStorageInfo() {
    const currentInfo = JSON.parse(localStorage.getItem('contactInfo'));

    document.getElementById('visitors-name').value = currentInfo?.fullName;
    document.getElementById('visitors-email').value = currentInfo?.email;
    document.getElementById('contact-text-area').value = currentInfo?.message;
  }

  function setStorage() {
    const contactInfo = {
      fullName: document.getElementById('visitors-name').value,
      email: document.getElementById('visitors-email').value,
      message: document.getElementById('contact-text-area').value,
    };
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
    useStorageInfo();
  }

  return { setStorage, useStorageInfo };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLocalStore);

/***/ }),

/***/ "./src/JavaScript/projects.js":
/*!************************************!*\
  !*** ./src/JavaScript/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "featuredProjects": () => (/* binding */ featuredProjects)
/* harmony export */ });
/* harmony import */ var _myworkImages_mobileGlobalDrummers_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../myworkImages/mobileGlobalDrummers.png */ "./src/myworkImages/mobileGlobalDrummers.png");
/* harmony import */ var _myworkImages_desktopGlobalDrummers_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../myworkImages/desktopGlobalDrummers.png */ "./src/myworkImages/desktopGlobalDrummers.png");
/* harmony import */ var _myworkImages_E_commerce_product_page_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myworkImages/E-commerce product page.png */ "./src/myworkImages/E-commerce product page.png");
/* harmony import */ var _myworkImages_mobileE_commerce_product_page_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../myworkImages/mobileE-commerce-product-page.png */ "./src/myworkImages/mobileE-commerce-product-page.png");
/* harmony import */ var _myworkImages_Shortly_mobile_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myworkImages/Shortly-mobile.png */ "./src/myworkImages/Shortly-mobile.png");
/* harmony import */ var _myworkImages_Shortly_desktop_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../myworkImages/Shortly-desktop.png */ "./src/myworkImages/Shortly-desktop.png");
/* harmony import */ var _myworkImages_Crypto_hub_mobile_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../myworkImages/Crypto-hub-mobile.png */ "./src/myworkImages/Crypto-hub-mobile.png");
/* harmony import */ var _myworkImages_Crypto_hub_desktop_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../myworkImages/Crypto-hub-desktop.png */ "./src/myworkImages/Crypto-hub-desktop.png");
/* harmony import */ var _images_Car_test_dt_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/Car-test-dt.png */ "./src/images/Car-test-dt.png");
/* harmony import */ var _images_Car_test_mobile_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/Car-test-mobile.png */ "./src/images/Car-test-mobile.png");











const featuredProjects = [
  {
    name: 'Cars BnB',
    description: `Its a simple full-stack application that users can reserve 
    a session to test cars of thier choosing before the commit to buying or choose a financing package.`,
    images: {
      mobile: _images_Car_test_mobile_png__WEBPACK_IMPORTED_MODULE_9__["default"],
      desktop: _images_Car_test_dt_png__WEBPACK_IMPORTED_MODULE_8__["default"],
    },
    technologies: ['React.Js', 'Ruby on Rails', 'CSS', 'JavaScript'],
    liveLink: 'https://bobb-rob.github.io/Global-Drummers-Workshop/',
    sourceFile: 'https://github.com/bobb-Rob/Global-Drummers-Workshop',
    id: '1',
  },
];

const projects = [
  {
    name: 'Global Drummers Festival Website',
    description: `Drum Festival Global conference is a yearly drummers community
       event at the global level featuring world-class drummers from more than 100 countries.
        The aim is to provide a single point of Information and registration for all participants. 
        `,
    images: {
      mobile: _myworkImages_mobileGlobalDrummers_png__WEBPACK_IMPORTED_MODULE_0__["default"],
      desktop: _myworkImages_desktopGlobalDrummers_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    },
    technologies: ['Html', 'CSS', 'JavaScript'],
    liveLink: 'https://bobb-rob.github.io/Global-Drummers-Workshop/',
    sourceFile: 'https://github.com/bobb-Rob/Global-Drummers-Workshop',
    id: '1',
  },
  {
    name: 'Shortly Landing Page',
    description:
        'Have you ever needed to shorten a very very long URL?, this app can help you do that quickly. It was built with vanilla JavaScript. Credit to Front End Mentors who put up this challenge.',
    images: {
      mobile: _myworkImages_Shortly_mobile_png__WEBPACK_IMPORTED_MODULE_4__["default"],
      desktop: _myworkImages_Shortly_desktop_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    },
    technologies: ['Html', 'CSS', 'JavaScript'],
    liveLink: 'https://bobb-rob.github.io/url-shortening-api-master/',
    sourceFile: 'https://github.com/bobb-Rob/url-shortening-api-master',
    id: '2',
  },
  {
    name: 'Crypto-hub',
    description:
        'Crypto-Hub is a web application that provides detailed information about the top 100 most used cryptocurrencies in the worlds',
    images: {
      mobile: _myworkImages_Crypto_hub_mobile_png__WEBPACK_IMPORTED_MODULE_6__["default"],
      desktop: _myworkImages_Crypto_hub_desktop_png__WEBPACK_IMPORTED_MODULE_7__["default"],
    },
    technologies: ['React', 'Redux', 'Axios', 'CSS'],
    liveLink: 'https://crypto-hub-247.netlify.app/',
    sourceFile: 'https://github.com/bobb-Rob/Crypto-Hub',
    id: '3',
  },
  {
    name: 'E-commerce product page',
    description:
    `This is a responsive single page e-commerce product page, a solution to the E-commerce product page challenge on Frontend Mentor. 
    Frontend Mentor challenges help you improve your coding skills by building realistic projects.`,
    images: {
      mobile: _myworkImages_mobileE_commerce_product_page_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      desktop: _myworkImages_E_commerce_product_page_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    },
    technologies: ['Html', 'CSS', 'JavaScript'],
    liveLink: 'https://bobb-rob.github.io/ecommerce-product-page/',
    sourceFile: 'https://github.com/bobb-Rob/ecommerce-product-page',
    id: '4',
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);


/***/ }),

/***/ "./src/illustrations/Desktop-Aboutme-illustration.svg":
/*!************************************************************!*\
  !*** ./src/illustrations/Desktop-Aboutme-illustration.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa5a3571209447845351.svg";

/***/ }),

/***/ "./src/illustrations/Illustration-headerdesktop.png":
/*!**********************************************************!*\
  !*** ./src/illustrations/Illustration-headerdesktop.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50afaf5fb996740e04e8.png";

/***/ }),

/***/ "./src/illustrations/Illustrationillustration.svg":
/*!********************************************************!*\
  !*** ./src/illustrations/Illustrationillustration.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1167a9073b35f1697115.svg";

/***/ }),

/***/ "./src/illustrations/Rectangle55.png":
/*!*******************************************!*\
  !*** ./src/illustrations/Rectangle55.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8fc3a23726bd505db9e3.png";

/***/ }),

/***/ "./src/illustrations/Rectangle56.png":
/*!*******************************************!*\
  !*** ./src/illustrations/Rectangle56.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83b95d7e4b20487bbcd1.png";

/***/ }),

/***/ "./src/illustrations/Rectangle57.png":
/*!*******************************************!*\
  !*** ./src/illustrations/Rectangle57.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "288d1c8a12c9ca8eb89e.png";

/***/ }),

/***/ "./src/illustrations/about-section-img.svg":
/*!*************************************************!*\
  !*** ./src/illustrations/about-section-img.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e86abfc57f647e1a90bc.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JavaScript_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JavaScript/projects.js */ "./src/JavaScript/projects.js");
/* harmony import */ var _JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JavaScript/domEl.js */ "./src/JavaScript/domEl.js");
/* harmony import */ var _JavaScript_localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JavaScript/localStorage.js */ "./src/JavaScript/localStorage.js");
/* harmony import */ var _JavaScript_images_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JavaScript/images.js */ "./src/JavaScript/images.js");
/* harmony import */ var _icons_github_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/github-icon.svg */ "./src/icons/github-icon.svg");
/* harmony import */ var _icons_new_window_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/new-window-icon.svg */ "./src/icons/new-window-icon.svg");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_projects_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/projects.css */ "./src/css/projects.css");
/* harmony import */ var _css_popup_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/popup.css */ "./src/css/popup.css");










const displayProjects = (projects) => {
  projects.map((project) => _JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__["default"].cardContainer.appendChild(_JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__["default"].createProjectCard(project)));
};

const formValidation = () => {
  // Email lowercase sensitive validation
  const email = document.getElementById('visitors-email');
  const form = document.getElementById('contact-form');

  function showMessage(text, className) {
    let message;
    if (!document.querySelector('.email-check-message')) {
      message = _JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('small', 'email-check-message');
      message.classList.add(className);
    } else {
      message = document.querySelector('.email-check-message');
      message.classList.replace(className, className);
    }
    message.textContent = text;
    const submitBtn = document.querySelector('.btn-form-submit');
    form.insertBefore(message, submitBtn);
  }

  function validateEmail() {
    const emailValue = email.value.trim();
    const lowerCaseEmail = emailValue.toLowerCase();

    if (emailValue !== lowerCaseEmail) {
      showMessage('Email should be lowercase all through', 'invalid-email');
      return false;
    }
    return true;
  }

  function removeMessageOnFocus() {
    const message = document.querySelector('.email-check-message');
    if (message) {
      message.remove();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateEmail()) {
      form.submit();
    }
  }

  // Validate email once email field losses focus
  email.addEventListener('change', validateEmail);
  // Remove message once email field regains focus
  email.addEventListener('focus', removeMessageOnFocus);
  // Prevent submit if email is invalid
  form.addEventListener('submit', handleSubmit);
};

const executeEvents = () => {
  // Add event listener to the hamburger btn
  _JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__["default"].hamburgerBtn.addEventListener('click', () => {
    _JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__["default"].createCloseIcon(_JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__["default"].navLinksWrapper, 'li');
    _JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__["default"].navLinksWrapper.classList.add('display-f');
    document.querySelector('.envelope').classList.add('display-n');
    // Add the click event on the close btn on menu
    const hamburgerCloseIcon = document.querySelector('img.close-icon');
    hamburgerCloseIcon.addEventListener('click', () => {
      _JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__["default"].navLinksWrapper.classList.toggle('display-f');
      const mailIcon = document.querySelector('.envelope');
      mailIcon.classList.toggle('display-n');
      document.querySelector('.close-icon-wrapper').remove();
    });
  });

  // Attach click events on all the "a" tags both desktop and mobile
  const navLinksArr = Array.from(
    document.querySelectorAll('li.insert-event > a'),
  );
  navLinksArr.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        _JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__["default"].navLinksWrapper.classList.toggle('display-f'); // Remove display: flex !important class
      }
    });
  });

  // insert icons to popup window
  const insertPopupIcons = () => {
    const [newWindowIconImg, gitHubIconImg] = Array.from(document.querySelectorAll('.popup-btn > a > img'));
    newWindowIconImg.src = _icons_new_window_icon_svg__WEBPACK_IMPORTED_MODULE_5__["default"];
    gitHubIconImg.src = _icons_github_icon_svg__WEBPACK_IMPORTED_MODULE_4__["default"];
  };

  // Add event listener to project btns
  const cardBtnArr = Array.from(document.querySelectorAll('.btn-card'));
  cardBtnArr.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // Filter the project by id
      const [project] = _JavaScript_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter(
        (proj) => proj.id === e.target.parentElement.id,
      );
      const workSection = document.getElementById('recent-works');
      workSection.appendChild(_JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__["default"].createPopupWindow(project));
      insertPopupIcons();
      //  Listen for click on close icon in popup container
      _JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__["default"].createCloseIcon(document.querySelector('.popup-container'), 'span');
      const popupCloseIcon = document.querySelector('span.close-icon-wrapper');
      popupCloseIcon.addEventListener('click', () => {
        document.querySelector('.project-modal').remove();
      });
      //  Listen for click outside popup container
      window.addEventListener('click', (e) => {
        if (e.target.classList.contains('project-modal')) {
          document.querySelector('.project-modal').remove();
        }
      });
    });
  });

  const firstCardButton = document.querySelector('.btn-feature');
  firstCardButton.addEventListener('click', () => {
    _JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__["default"].workSection.appendChild(_JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__["default"].createPopupWindow(_JavaScript_projects_js__WEBPACK_IMPORTED_MODULE_0__.featuredProjects[0]));
    //  Listen for click on close icon in popup container
    _JavaScript_domEl_js__WEBPACK_IMPORTED_MODULE_1__["default"].createCloseIcon(document.querySelector('.popup-container'), 'span');
    const popupCloseIcon = document.querySelector('span.close-icon-wrapper');
    popupCloseIcon.addEventListener('click', () => {
      document.querySelector('.project-modal').remove();
    });
  });

  // LocalStorage Event
  window.onload = _JavaScript_localStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"].useStorageInfo;
  const fullName = document.getElementById('visitors-name');
  const emailId = document.getElementById('visitors-email');
  const message = document.getElementById('contact-text-area');

  [fullName, emailId, message].forEach((node) => {
    node.onkeydown = _JavaScript_localStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"].setStorage;
    node.onkeyup = _JavaScript_localStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"].setStorage;
  });
};

displayProjects(_JavaScript_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
(0,_JavaScript_images_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
formValidation();
executeEvents();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLDZDQUE2QyxPQUFPLGNBQWMsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyw4REFBOEQsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssTUFBTSxPQUFPLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxtRUFBbUUsT0FBTyxTQUFTLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxP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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzRUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOEVBQXFCO0FBQ25EO0FBQ0E7QUFDQSxNQUFNLDRFQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUksb0ZBQTJCLENBQUMsOEVBQXFCLENBQUMsd0VBQW1CO0FBQ3pFO0FBQ0EsSUFBSSw0RUFBbUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLGtGQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhFQUF3QjtBQUM3QyxtQkFBbUIsOEVBQXdCO0FBQzNDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0JBQWdCLCtEQUFRO0FBQ3hCLGlFQUFhO0FBQ2I7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvLi9zcmMvY3NzL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xLy4vc3JjL2Nzcy9wcm9qZWN0cy5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xLy4vc3JjL2ljb25zL0Rpc2FibGVkTGlua2VkSW4taWNvbi5wbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS8uL3NyYy9pY29ucy9EaXNhYmxlZE0taWNvbi5wbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS8uL3NyYy9pY29ucy9EaXNhYmxlZGdpdGh1Yi1pY29uLnBuZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xLy4vc3JjL2ljb25zL0Rpc2FibGVkdHdpdHRlci1pY29uLnBuZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xLy4vc3JjL2ljb25zL0VuYWJsZWR0d28tZmluZ2Vycy1pY29uLnBuZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xLy4vc3JjL2ljb25zL0VudmVsb3BlLUljb24uc3ZnIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvLi9zcmMvaWNvbnMvSGFtYnVyZ2VyLW1lbnUtaWNvbi5zdmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS8uL3NyYy9pY29ucy9jbG9zZS1pY29uLnBuZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xLy4vc3JjL2ljb25zL2dpdGh1Yi1pY29uLnN2ZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xLy4vc3JjL2ljb25zL25ldy13aW5kb3ctaWNvbi5zdmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS8uL3NyYy9pbWFnZXMvQ2FyLXRlc3QtZHQucG5nIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvLi9zcmMvaW1hZ2VzL0Nhci10ZXN0LW1vYmlsZS5wbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS8uL3NyYy9teXdvcmtJbWFnZXMvQ3J5cHRvLWh1Yi1kZXNrdG9wLnBuZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xLy4vc3JjL215d29ya0ltYWdlcy9DcnlwdG8taHViLW1vYmlsZS5wbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS8uL3NyYy9teXdvcmtJbWFnZXMvRS1jb21tZXJjZSBwcm9kdWN0IHBhZ2UucG5nIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvLi9zcmMvbXl3b3JrSW1hZ2VzL1Nob3J0bHktZGVza3RvcC5wbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS8uL3NyYy9teXdvcmtJbWFnZXMvU2hvcnRseS1tb2JpbGUucG5nIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvLi9zcmMvbXl3b3JrSW1hZ2VzL2Rlc2t0b3BHbG9iYWxEcnVtbWVycy5wbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS8uL3NyYy9teXdvcmtJbWFnZXMvbW9iaWxlRS1jb21tZXJjZS1wcm9kdWN0LXBhZ2UucG5nIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvLi9zcmMvbXl3b3JrSW1hZ2VzL21vYmlsZUdsb2JhbERydW1tZXJzLnBuZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xLy4vc3JjL2Nzcy9wb3B1cC5jc3M/MDI3MyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xLy4vc3JjL2Nzcy9wcm9qZWN0cy5jc3M/ZWUwNSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvLi9zcmMvSmF2YVNjcmlwdC9kb21FbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xLy4vc3JjL0phdmFTY3JpcHQvaW1hZ2VzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvLi9zcmMvSmF2YVNjcmlwdC9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS8uL3NyYy9KYXZhU2NyaXB0L3Byb2plY3RzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC0xL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0LTEvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXByb2plY3QtMS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9qZWN0LW1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRhaW5lciBoMiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi43NXJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGNvbG9yOiAjMTcyYjRkO1xcclxcbn1cXHJcXG5cXHJcXG4udGVjaC1zdGFjayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS4zMjVyZW07XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZWNoLXN0YWNrID4gbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMCAwLjVyZW0gMCAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTc5NDkzO1xcclxcbiAgY29sb3I6IHZhcigtLWxpZ2h0ZGFyayk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1nLXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWJ0bi13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtYnRuLXdyYXBwZXIgPiBwIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgY29sb3I6ICMzNDQ1NjM7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1idG4ge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgbWFyZ2luLXRvcDogMC42MjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1idG4gPiBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1idG4gPiBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtYnRuID4gYSA+IGltZzpob3ZlciB7XFxyXFxuICBmaWx0ZXI6XFxyXFxuICAgIGludmVydCg0MiUpIHNlcGlhKDY1JSkgc2F0dXJhdGUoMjU1MyUpIGh1ZS1yb3RhdGUoMmRlZylcXHJcXG4gICAgYnJpZ2h0bmVzcygxMDYlKSBjb250cmFzdCgxMDIlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW1haWwgVmFsaWRhdGlvbiAqL1xcclxcblxcclxcbi5lbWFpbC1jaGVjay1tZXNzYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnZhbGlkLWVtYWlsIHtcXHJcXG4gIGNvbG9yOiByZ2IoNywgMTc1LCA0Nyk7XFxyXFxufVxcclxcblxcclxcbi5pbnZhbGlkLWVtYWlsIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2JpbGUgdmlldyBwb3AtdXAgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxyXFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtY29udGFpbmVyIGgyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1pbWctcCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZW1haWwtY2hlY2stbWVzc2FnZSB7XFxyXFxuICAgIHRvcDogNjglO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIERlc2t0b3AgdmlldyBwb3AtdXAgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OHJlbSkge1xcclxcbiAgLnBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIG1hcmdpbjogNSUgYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1jb250YWluZXIgPiBoMiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1pbWctcCA+IGltZyB7XFxyXFxuICAgIGZsZXg6IDIgMSBhdXRvO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggLTFweCByZ2IoNzAsIDcyLCA3MCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtYnRuLXdyYXBwZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMS41NjI1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWJ0bi13cmFwcGVyID4gcCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWJ0biB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwLjYyNXJlbSAwIDA7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5lbWFpbC1jaGVjay1tZXNzYWdlIHtcXHJcXG4gICAgdG9wOiA2OSU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE4MHB4KSB7XFxyXFxuICAucG9wdXAtaW1nLXAge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtYnRuLXdyYXBwZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWJ0bi13cmFwcGVyID4gcCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgbWF4LXdpZHRoOiA2OTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1pbWctcCA+IGltZyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcG9wdXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLDhCQUE4QjtFQUM5QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRTs7bUNBRWlDO0FBQ25DOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxRQUFRO0lBQ1Isa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQyxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQiw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsUUFBUTtJQUNSLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9qZWN0LW1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRhaW5lciBoMiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi43NXJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGNvbG9yOiAjMTcyYjRkO1xcclxcbn1cXHJcXG5cXHJcXG4udGVjaC1zdGFjayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS4zMjVyZW07XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZWNoLXN0YWNrID4gbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMCAwLjVyZW0gMCAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTc5NDkzO1xcclxcbiAgY29sb3I6IHZhcigtLWxpZ2h0ZGFyayk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1nLXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWJ0bi13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtYnRuLXdyYXBwZXIgPiBwIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgY29sb3I6ICMzNDQ1NjM7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1idG4ge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgbWFyZ2luLXRvcDogMC42MjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1idG4gPiBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1idG4gPiBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtYnRuID4gYSA+IGltZzpob3ZlciB7XFxyXFxuICBmaWx0ZXI6XFxyXFxuICAgIGludmVydCg0MiUpIHNlcGlhKDY1JSkgc2F0dXJhdGUoMjU1MyUpIGh1ZS1yb3RhdGUoMmRlZylcXHJcXG4gICAgYnJpZ2h0bmVzcygxMDYlKSBjb250cmFzdCgxMDIlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW1haWwgVmFsaWRhdGlvbiAqL1xcclxcblxcclxcbi5lbWFpbC1jaGVjay1tZXNzYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnZhbGlkLWVtYWlsIHtcXHJcXG4gIGNvbG9yOiByZ2IoNywgMTc1LCA0Nyk7XFxyXFxufVxcclxcblxcclxcbi5pbnZhbGlkLWVtYWlsIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2JpbGUgdmlldyBwb3AtdXAgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxyXFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtY29udGFpbmVyIGgyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1pbWctcCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZW1haWwtY2hlY2stbWVzc2FnZSB7XFxyXFxuICAgIHRvcDogNjglO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIERlc2t0b3AgdmlldyBwb3AtdXAgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OHJlbSkge1xcclxcbiAgLnBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIG1hcmdpbjogNSUgYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1jb250YWluZXIgPiBoMiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1pbWctcCA+IGltZyB7XFxyXFxuICAgIGZsZXg6IDIgMSBhdXRvO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggLTFweCByZ2IoNzAsIDcyLCA3MCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtYnRuLXdyYXBwZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMS41NjI1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWJ0bi13cmFwcGVyID4gcCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWJ0biB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwLjYyNXJlbSAwIDA7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5lbWFpbC1jaGVjay1tZXNzYWdlIHtcXHJcXG4gICAgdG9wOiA2OSU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE4MHB4KSB7XFxyXFxuICAucG9wdXAtaW1nLXAge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtYnRuLXdyYXBwZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWJ0bi13cmFwcGVyID4gcCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgbWF4LXdpZHRoOiA2OTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1pbWctcCA+IGltZyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5yZWNlbnQtd29ya3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMjBweCAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50LXdvcmtzLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50LXdvcmtzLWhlYWRlciA+IGgyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNTJweDtcXHJcXG4gIGhlaWdodDogODNweDtcXHJcXG4gIGNvbG9yOiAjZmZmNWUxO1xcclxcbiAgY29sb3I6IHZhcigtLWRlZXBEYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoaW4tbGluZSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNWE1OTRkO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogMCAwIDgwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15LXdvcmtzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1JTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRjZDk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQgLmZpcnN0LWNhcmQtaW1nLWRlc2t0b3Age1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVkIC5maXJzdC1jYXJkLWltZy1tb2JpbGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQgLmZpcnN0LWNhcmQtaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3QtY2FyZCB7XFxyXFxuICBmb250LWZhbWlseTogJ2ludGVyJywgc2VyaWY7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3QtY2FyZCA+IHNwYW4ge1xcclxcbiAgZm9udC1mYW1pbHk6ICdjcmV0ZSByb3VuZCcsIHNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxufVxcclxcblxcclxcbi5maXJzdC1jYXJkID4gaDMge1xcclxcbiAgZm9udC1mYW1pbHk6ICdjcmV0ZSByb3VuZCcsIHNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUtbGlrZSk7XFxyXFxuICBtYXJnaW46IDEwcHggMCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3QtY2FyZCA+IHAge1xcclxcbiAgZm9udC1mYW1pbHk6ICdpbnRlcicsIHNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUtbGlrZSk7XFxyXFxuICBtYXJnaW46IDAgMCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3QtY2FyZCA+IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1kZXNjcmlwdGlvbiBsaSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzQpO1xcclxcbiAgbWFyZ2luOiAwIDEycHggMCAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tZGVlcERhcmspO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3QtY2FyZCA+IHVsID4gbGkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdpbnRlcicsIHNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUtbGlrZSk7XFxyXFxuICBtYXJnaW46IDAgMTBweCAwLjZyZW0gMDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhd2tlc0JsdWUpO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzE5cHgsIDFmcikpO1xcclxcbiAgY29sdW1uLWdhcDogMjRweDtcXHJcXG4gIHJvdy1nYXA6IDI0cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRjZDk7XFxyXFxuICBtYXJnaW46IDEuNXJlbSAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4ICMwMDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQgPiAuY2FyZC1kZXNjcmlwdGlvbiB7XFxyXFxuICBwYWRkaW5nOiA1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMywgMywgMC45KTtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkID4gLmNhcmQtZGVzY3JpcHRpb246aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jYXJkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvdHRvbTogLTFweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRlc2NyaXB0aW9uID4gaDMge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDcmV0ZSBSb3VuZFxcXCIsIHNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDgxcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRlc2NyaXB0aW9uID4gcCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAxMnB4IDA7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi10YWdzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Byb2plY3RzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFD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RUFDbkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yZWNlbnQtd29ya3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMjBweCAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50LXdvcmtzLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50LXdvcmtzLWhlYWRlciA+IGgyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNTJweDtcXHJcXG4gIGhlaWdodDogODNweDtcXHJcXG4gIGNvbG9yOiAjZmZmNWUxO1xcclxcbiAgY29sb3I6IHZhcigtLWRlZXBEYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoaW4tbGluZSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNWE1OTRkO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogMCAwIDgwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15LXdvcmtzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1JTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRjZDk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQgLmZpcnN0LWNhcmQtaW1nLWRlc2t0b3Age1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVkIC5maXJzdC1jYXJkLWltZy1tb2JpbGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQgLmZpcnN0LWNhcmQtaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3QtY2FyZCB7XFxyXFxuICBmb250LWZhbWlseTogJ2ludGVyJywgc2VyaWY7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3QtY2FyZCA+IHNwYW4ge1xcclxcbiAgZm9udC1mYW1pbHk6ICdjcmV0ZSByb3VuZCcsIHNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxufVxcclxcblxcclxcbi5maXJzdC1jYXJkID4gaDMge1xcclxcbiAgZm9udC1mYW1pbHk6ICdjcmV0ZSByb3VuZCcsIHNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUtbGlrZSk7XFxyXFxuICBtYXJnaW46IDEwcHggMCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3QtY2FyZCA+IHAge1xcclxcbiAgZm9udC1mYW1pbHk6ICdpbnRlcicsIHNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUtbGlrZSk7XFxyXFxuICBtYXJnaW46IDAgMCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3QtY2FyZCA+IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1kZXNjcmlwdGlvbiBsaSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzQpO1xcclxcbiAgbWFyZ2luOiAwIDEycHggMCAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tZGVlcERhcmspO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3QtY2FyZCA+IHVsID4gbGkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdpbnRlcicsIHNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUtbGlrZSk7XFxyXFxuICBtYXJnaW46IDAgMTBweCAwLjZyZW0gMDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhd2tlc0JsdWUpO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzE5cHgsIDFmcikpO1xcclxcbiAgY29sdW1uLWdhcDogMjRweDtcXHJcXG4gIHJvdy1nYXA6IDI0cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRjZDk7XFxyXFxuICBtYXJnaW46IDEuNXJlbSAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4ICMwMDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQgPiAuY2FyZC1kZXNjcmlwdGlvbiB7XFxyXFxuICBwYWRkaW5nOiA1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMywgMywgMC45KTtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkID4gLmNhcmQtZGVzY3JpcHRpb246aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jYXJkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvdHRvbTogLTFweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRlc2NyaXB0aW9uID4gaDMge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDcmV0ZSBSb3VuZFxcXCIsIHNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDgxcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRlc2NyaXB0aW9uID4gcCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAxMnB4IDA7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi10YWdzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2lsbHVzdHJhdGlvbnMvUmVjdGFuZ2xlNTUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaWxsdXN0cmF0aW9ucy9SZWN0YW5nbGU1Ni5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbGx1c3RyYXRpb25zL1JlY3RhbmdsZTU3LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2lsbHVzdHJhdGlvbnMvSWxsdXN0cmF0aW9uaWxsdXN0cmF0aW9uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2lsbHVzdHJhdGlvbnMvYWJvdXQtc2VjdGlvbi1pbWcuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaWxsdXN0cmF0aW9ucy9JbGx1c3RyYXRpb24taGVhZGVyZGVza3RvcC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9pbGx1c3RyYXRpb25zL0Rlc2t0b3AtQWJvdXRtZS1pbGx1c3RyYXRpb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DcmV0ZStSb3VuZCZmYW1pbHk9SW50ZXImZmFtaWx5PVBvcHBpbnMmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw5MDA7MSwxMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVya3NoaXJlK1N3YXNoJmZhbWlseT1UYW5nZXJpbmU6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWxpZ2h0ZGFyazogIzNjM2EzOTtcXHJcXG4gIC0tZmFkZWQtZGFyazogIzVhNTk0ZDtcXHJcXG4gIC0td2hpdGU6ICNmZmY7XFxyXFxuICAtLWRlZXBEYXJrOiAjMWMxYTE5O1xcclxcbiAgLS1ibHVlLWxpa2U6ICMwOTFlNDI7XFxyXFxuICAtLW9yYW5nZTogI2ZmNmIwMDtcXHJcXG4gIC0tZmFkZWQtb3JhbmdlOiAjZjlmODcxO1xcclxcbiAgLS1idG4tZGlzYWJsZWRCR2NvbG9yOiAjZjRmMWYwO1xcclxcbiAgLS1oYXdrZXNCbHVlOiAjZGZlMWU2O1xcclxcblxcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbiNtYWluLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRkYXJrKTtcXHJcXG4gIGhlaWdodDogNjhweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTJweCAyNHB4IDEycHggMjRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcXHJcXG5cXHJcXG4gIC8qIGZvbnQtZmFtaWx5OiAnVGFuZ2VyaW5lJywgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQmVya3NoaXJlIFN3YXNoJywgY3Vyc2l2ZTsgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ286aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZjZiMDA7XFxyXFxufVxcclxcblxcclxcbi5pY29uLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLWJ0bjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoZWFkbGluZS1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBEYXJrKTtcXHJcXG4gIHBhZGRpbmc6IDEwMHB4IDI0cHggMjRweCAyNHB4O1xcclxcbiAgaGVpZ2h0OiA1OTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZS10ZXh0LXdyYXBwZXIge1xcclxcbiAgbWF4LXdpZHRoOiA1NjZweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRsaW5lLXNlY3Rpb24gLmhlYWRsaW5lLXByaW1hcnktdGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkNyZXRlIFJvdW5kXFxcIiwgc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4zN3B4O1xcclxcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxufVxcclxcblxcclxcbiNoZWFkbGluZS1zZWN0aW9uIGg0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMzJweDtcXHJcXG4gIGNvbG9yOiAjZmZmNWUxO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGxpbmUtZGVzYyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGxpbmUtc29jaWFsLW1lZGlhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGxpbmUtc29jaWFsLW1lZGlhIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXM7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuLmZlYXR1cmVkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5maXJzdC1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpcnN0LWNhcmQgPiBoMyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkNyZXRlIFJvdW5kXFxcIiwgc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWxpa2UpO1xcclxcbiAgbWFyZ2luOiAxMnB4IDA7XFxyXFxufVxcclxcblxcclxcbi5maXJzdC1jYXJkID4gcCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWxpa2UpO1xcclxcbiAgbWFyZ2luOiAxMnB4IDA7XFxyXFxufVxcclxcblxcclxcbi5maXJzdC1jYXJkID4gdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdpZHRoOiAyOTdweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufSAqL1xcclxcblxcclxcbi8qIC50YWdzIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjODk5M2E0O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXHJcXG4gIG1hcmdpbjogMCAxMnB4IDAgMDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlKTtcXHJcXG4gIGhlaWdodDogNDhweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGJvcmRlciAycywgY29sb3IgMnMsIGJhY2tncm91bmQtY29sb3IgMXM7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWZlYXR1cmUge1xcclxcbiAgd2lkdGg6IDEyNHB4O1xcclxcbiAgbWFyZ2luOiAxMnB4IDAgMCAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb3JhbmdlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjVlMTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1mZWF0dXJlOmRpc2FibGVkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjNWI1OTU3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWRpc2FibGVkQkdjb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuLnByb2plY3QtY2FyZCB7XFxyXFxuICBtYXJnaW46IDI0cHggMCAwIDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDM2OXB4O1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggLTJweCAjMjYyNjI2O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICBtYXJnaW46IDcwcHggMCAxNHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRlc2NyaXB0aW9uID4gaDMge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDcmV0ZSBSb3VuZFxcXCIsIHNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDgxcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRlc2NyaXB0aW9uID4gcCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAxMnB4IDA7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi10YWdzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1kZXNjcmlwdGlvbiBsaSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xcclxcbiAgbWFyZ2luOiAwIDEycHggMCAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmhlYWRsaW5lLXNvY2lhbC1tZWRpYSBsaTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtYW5kLXNraWxsLXNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZGVlcERhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAxMjBweCAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtbWUtaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtbWUtaGVhZGVyIGgzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDcycHg7XFxyXFxuICBsaW5lLWhlaWdodDogODhweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjM3cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWRlc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgY29sb3I6ICNmNGY1Zjc7XFxyXFxuICBtYXJnaW46IDI0cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1hYm91dC1tZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWFib3V0LW1lOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW9yYW5nZSk7XFxyXFxuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY1ZTE7XFxyXFxufVxcclxcblxcclxcbi5idG4tYWJvdXQtbWU6ZGlzYWJsZWQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICM1YjU5NTc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmMWYwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtc2VjdGlvbi1kaXZpZGVyIHtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbiNza2lsbC1zZWN0aW9uIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMjBweCAyNHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxsLWNhdGVnb3J5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxufVxcclxcblxcclxcbi5za2lsbC1saXN0LWl0ZW0ge1xcclxcbiAgbWFyZ2luOiAxNnB4IDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGwtbGlzdC1pdGVtOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGwtbGlzdC13cmFwIHtcXHJcXG4gIG1hcmdpbjogMTJweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZ3VhZ2UsXFxyXFxuLmZyYW1ld29yayxcXHJcXG4uc2tpbGxzIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmd1YWdlOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IC00MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnJhbWV3b3JrOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IC0zMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGxzOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IC0zMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1mb3JtLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTIwcHggMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtZm9ybS1oZWFkZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzE3MmI0ZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiA1OHB4IDAgMCAwO1xcclxcbiAgbWluLXdpZHRoOiAzMjdweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtaW5wdXQge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICBjb2xvcjogIzk3OTQ5MztcXHJcXG4gIGhlaWdodDogNDhweDtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZDhkNztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtdGV4dC1hcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgd2lkdGg6IDgyJTtcXHJcXG4gIGhlaWdodDogMTE0cHg7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmYmY4Zjc7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZDhkNztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1mb3JtLXN1Ym1pdCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIG1hcmdpbjogMzBweCAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5idG4tZm9ybS1zdWJtaXQ6ZGlzYWJsZWQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICM1YjU5NTc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tZGlzYWJsZWRCR2NvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI2JvdHRvbS1uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGF3a2VzQmx1ZSk7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1saW5lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDE1MWU7XFxyXFxuICBoZWlnaHQ6IDVweDtcXHJcXG4gIHdpZHRoOiAxMzRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW46IDE1cHggMCA4cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3Qtc29jaWFsLW1lZGlhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZmlsdGVyOlxcclxcbiAgICBpbnZlcnQoMzclKSBzZXBpYSgxMiUpIHNhdHVyYXRlKDEwODYlKSBodWUtcm90YXRlKDE3OWRlZylcXHJcXG4gICAgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDg4JSk7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWE6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRkYXJrKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1saW5rcyB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2LWxpbmtzID4gLnNlY3Rpb24tbGluayA+IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb24td3JhcHBlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDM1cHg7XFxyXFxuICBsZWZ0OiA4NiU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZmlsdGVyOlxcclxcbiAgICBpbnZlcnQoNDklKSBzZXBpYSg2JSkgc2F0dXJhdGUoMTQwOCUpIGh1ZS1yb3RhdGUoMTcyZGVnKVxcclxcbiAgICBicmlnaHRuZXNzKDk0JSkgY29udHJhc3QoOTMlKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uLXdyYXBwZXI6aG92ZXIge1xcclxcbiAgZmlsdGVyOlxcclxcbiAgICBpbnZlcnQoMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgzMjZkZWcpIGJyaWdodG5lc3MoNCUpXFxyXFxuICAgIGNvbnRyYXN0KDEwMyUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2JpbGUgdmlldyBjc3MgY29kZXMgc3RhcnRzIGhlcmUgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgI2hlYWRsaW5lLXNlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDIzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogLnJlY2VudC13b3Jrcy1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2VudC13b3Jrcy1oZWFkZXIgPiBoMiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGVlcERhcmspO1xcclxcbiAgICBoZWlnaHQ6IDgzcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubXktd29ya3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aGluLWxpbmUge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjEyMTIxO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIHdpZHRoOiAzMjdweDtcXHJcXG4gICAgbWFyZ2luOiAwIDAgODBweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZlYXR1cmVkIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMCAyNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZpcnN0LWNhcmQtaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDMyN3B4O1xcclxcbiAgICBoZWlnaHQ6IDIzN3B4O1xcclxcbiAgICBtYXJnaW46IDEycHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maXJzdC1jYXJkLWltZy1kZXNrdG9wIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maXJzdC1jYXJkIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maXJzdC1jYXJkID4gaDMge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkNyZXRlIFJvdW5kXFxcIiwgc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNDRweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsdWUtbGlrZSk7XFxyXFxuICAgIG1hcmdpbjogMTJweCAwO1xcclxcbiAgfSAqL1xcclxcblxcclxcbiAgLypcXHJcXG4gICNjYXJkLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbY29sMS1zdGFydF0gMWZyO1xcclxcbiAgfSAqL1xcclxcblxcclxcbiAgI2Fib3V0LWFuZC1za2lsbC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxOTAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMjAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Fib3V0LXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMjBweCAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDU2M3B4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LW1lLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC1tZS1oZWFkZXIgaDMge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkNyZXRlIFJvdW5kXFxcIiwgc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogODhweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMzdweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtZGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBjb2xvcjogI2Y0ZjVmNztcXHJcXG4gICAgbWFyZ2luOiAyNHB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtc2VjdGlvbi1kaXZpZGVyIHtcXHJcXG4gICAgd2lkdGg6IDMyN3B4O1xcclxcbiAgICBtYXJnaW46IDgwcHggMCAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbmF2LWxpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRkYXJrKTtcXHJcXG4gICAgcGFkZGluZzogNjBweCA0MHB4IDQwcHggNDBweDtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRpc3BsYXktZiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNwbGF5LWIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRpc3BsYXktbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNuYXYtbGlua3MgLnNlY3Rpb24tbGluayB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNmY2YzZiO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBEZXNrdG9wIGNzcyBjb2RlIGJlZ2lucyBoZXJlICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICNsb2dvIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEyM3B4O1xcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMTAwOG1zO1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNsb2dvOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZjZiMDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGFtYnVyZ2VyLWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbmF2LWxpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTFweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNuYXYtbGlua3MgPiAuc2VjdGlvbi1saW5rIHtcXHJcXG4gICAgbWFyZ2luOiAwIDFyZW0gMCAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogSGlkZSBtZW51IGNsb3NlIGJ0biBpbiBkZXNrdG9wIHZpZXcgKi9cXHJcXG4gIC5jbG9zZS1pY29uLXdyYXBwZXIge1xcclxcbiAgICBsZWZ0OiA5MyU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaGVhZGxpbmUtc2VjdGlvbiB7XFxyXFxuICAgIGhlaWdodDogNzk4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE5MnB4IDI0cHggMjRweCAyNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkbGluZS10ZXh0LXdyYXBwZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTIzcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaGVhZGxpbmUtc2VjdGlvbiAuaGVhZGxpbmUtcHJpbWFyeS10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogODJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNoZWFkbGluZS1zZWN0aW9uIGg0IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJpbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGxpbmUtZGVzYyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiaW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkbGluZS1zb2NpYWwtbWVkaWEge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHggMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKlxcclxcbiAgI3JlY2VudC13b3JrcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTM1cHggMTQycHg7XFxyXFxuICAgIG1hcmdpbjogMCAxMThweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2VudC13b3Jrcy1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aGluLWxpbmUge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjEyMTIxO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDAgMjRweCAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjZW50LXdvcmtzLWhlYWRlciA+IGgyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDcmV0ZSBSb3VuZFxcXCIsIHNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kZWVwRGFyayk7XFxyXFxuICAgIHdpZHRoOiA0MTVweDtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCAyNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm15LXdvcmtzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mZWF0dXJlZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlyc3QtY2FyZC1pbWFnZS1jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDY4NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ0OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZpcnN0LWNhcmQtaW1nLW1vYmlsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlyc3QtY2FyZC1pbWctZGVza3RvcCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IC0ycHggcmdiKDk1LCA5MiwgOTIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZpcnN0LWNhcmQge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlyc3QtY2FyZCA+IGgzIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNTJweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsdWUtbGlrZSk7XFxyXFxuICAgIG1hcmdpbjogMTJweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NhcmQtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDlweCwgMWZyKSk7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDI0cHg7XFxyXFxuICAgIHJvdy1nYXA6IDI0cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfSAqL1xcclxcblxcclxcbiAgI2Fib3V0LWFuZC1za2lsbC1zZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDBweDtcXHJcXG4gICAgcGFkZGluZzogMCAxNDJweCAwIDE0MnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Fib3V0LXNlY3Rpb24ge1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMzBweCAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDU2M3B4O1xcclxcbiAgICBtYXgtd2lkdGg6IDU2NnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LXNlY3Rpb24tZGl2aWRlciB7XFxyXFxuICAgIG1heC13aWR0aDogMTE1NnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI3NraWxsLXNlY3Rpb24ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAxNDBweCAyNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhY3QtZm9ybS1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDEzMHB4IDEzNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtZm9ybS1oZWFkZXIge1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBjb2xvcjogIzI2MjYyNjtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWN0LWZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG1pbi13aWR0aDogMzI3cHg7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maXJzdC1uYW1lIHtcXHJcXG4gICAgbWFyZ2luOiAwIDIwcHggMCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtaW5wdXQtbW9iaWxlLFxcclxcbiAgLmVtYWlsLWlucHV0LFxcclxcbiAgLnRleHQtYXJlYSB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idG4tZm9ybS1zdWJtaXQge1xcclxcbiAgICB3aWR0aDogMTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdF9mb3JtX2xhYmVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixxQkFBcUI7O0VBRXJCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIseUJBQXlCOztFQUV6Qjs0Q0FDMEM7RUFDMUMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUZHOztFQUVIO0lBQ0UseURBQXdFO0lBQ3hFLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0Isd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTs7O0lBR0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q3JldGUrUm91bmQmZmFtaWx5PUludGVyJmZhbWlseT1Qb3BwaW5zJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsOTAwOzEsMTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlcmtzaGlyZStTd2FzaCZmYW1pbHk9VGFuZ2VyaW5lOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWxpZ2h0ZGFyazogIzNjM2EzOTtcXHJcXG4gIC0tZmFkZWQtZGFyazogIzVhNTk0ZDtcXHJcXG4gIC0td2hpdGU6ICNmZmY7XFxyXFxuICAtLWRlZXBEYXJrOiAjMWMxYTE5O1xcclxcbiAgLS1ibHVlLWxpa2U6ICMwOTFlNDI7XFxyXFxuICAtLW9yYW5nZTogI2ZmNmIwMDtcXHJcXG4gIC0tZmFkZWQtb3JhbmdlOiAjZjlmODcxO1xcclxcbiAgLS1idG4tZGlzYWJsZWRCR2NvbG9yOiAjZjRmMWYwO1xcclxcbiAgLS1oYXdrZXNCbHVlOiAjZGZlMWU2O1xcclxcblxcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbiNtYWluLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRkYXJrKTtcXHJcXG4gIGhlaWdodDogNjhweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTJweCAyNHB4IDEycHggMjRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcXHJcXG5cXHJcXG4gIC8qIGZvbnQtZmFtaWx5OiAnVGFuZ2VyaW5lJywgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQmVya3NoaXJlIFN3YXNoJywgY3Vyc2l2ZTsgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ286aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZjZiMDA7XFxyXFxufVxcclxcblxcclxcbi5pY29uLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLWJ0bjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoZWFkbGluZS1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBEYXJrKTtcXHJcXG4gIHBhZGRpbmc6IDEwMHB4IDI0cHggMjRweCAyNHB4O1xcclxcbiAgaGVpZ2h0OiA1OTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZS10ZXh0LXdyYXBwZXIge1xcclxcbiAgbWF4LXdpZHRoOiA1NjZweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRsaW5lLXNlY3Rpb24gLmhlYWRsaW5lLXByaW1hcnktdGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkNyZXRlIFJvdW5kXFxcIiwgc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4zN3B4O1xcclxcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxufVxcclxcblxcclxcbiNoZWFkbGluZS1zZWN0aW9uIGg0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMzJweDtcXHJcXG4gIGNvbG9yOiAjZmZmNWUxO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGxpbmUtZGVzYyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGxpbmUtc29jaWFsLW1lZGlhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGxpbmUtc29jaWFsLW1lZGlhIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXM7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuLmZlYXR1cmVkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5maXJzdC1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpcnN0LWNhcmQgPiBoMyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkNyZXRlIFJvdW5kXFxcIiwgc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWxpa2UpO1xcclxcbiAgbWFyZ2luOiAxMnB4IDA7XFxyXFxufVxcclxcblxcclxcbi5maXJzdC1jYXJkID4gcCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWxpa2UpO1xcclxcbiAgbWFyZ2luOiAxMnB4IDA7XFxyXFxufVxcclxcblxcclxcbi5maXJzdC1jYXJkID4gdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdpZHRoOiAyOTdweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufSAqL1xcclxcblxcclxcbi8qIC50YWdzIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjODk5M2E0O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXHJcXG4gIG1hcmdpbjogMCAxMnB4IDAgMDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlKTtcXHJcXG4gIGhlaWdodDogNDhweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGJvcmRlciAycywgY29sb3IgMnMsIGJhY2tncm91bmQtY29sb3IgMXM7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWZlYXR1cmUge1xcclxcbiAgd2lkdGg6IDEyNHB4O1xcclxcbiAgbWFyZ2luOiAxMnB4IDAgMCAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb3JhbmdlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjVlMTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1mZWF0dXJlOmRpc2FibGVkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjNWI1OTU3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWRpc2FibGVkQkdjb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuLnByb2plY3QtY2FyZCB7XFxyXFxuICBtYXJnaW46IDI0cHggMCAwIDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDM2OXB4O1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggLTJweCAjMjYyNjI2O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICBtYXJnaW46IDcwcHggMCAxNHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRlc2NyaXB0aW9uID4gaDMge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDcmV0ZSBSb3VuZFxcXCIsIHNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDgxcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRlc2NyaXB0aW9uID4gcCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAxMnB4IDA7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi10YWdzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1kZXNjcmlwdGlvbiBsaSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xcclxcbiAgbWFyZ2luOiAwIDEycHggMCAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmhlYWRsaW5lLXNvY2lhbC1tZWRpYSBsaTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtYW5kLXNraWxsLXNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZGVlcERhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAxMjBweCAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtbWUtaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtbWUtaGVhZGVyIGgzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDcycHg7XFxyXFxuICBsaW5lLWhlaWdodDogODhweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjM3cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWRlc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgY29sb3I6ICNmNGY1Zjc7XFxyXFxuICBtYXJnaW46IDI0cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1hYm91dC1tZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWFib3V0LW1lOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW9yYW5nZSk7XFxyXFxuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY1ZTE7XFxyXFxufVxcclxcblxcclxcbi5idG4tYWJvdXQtbWU6ZGlzYWJsZWQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICM1YjU5NTc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmMWYwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtc2VjdGlvbi1kaXZpZGVyIHtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbiNza2lsbC1zZWN0aW9uIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMjBweCAyNHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxsLWNhdGVnb3J5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxufVxcclxcblxcclxcbi5za2lsbC1saXN0LWl0ZW0ge1xcclxcbiAgbWFyZ2luOiAxNnB4IDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGwtbGlzdC1pdGVtOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGwtbGlzdC13cmFwIHtcXHJcXG4gIG1hcmdpbjogMTJweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZ3VhZ2UsXFxyXFxuLmZyYW1ld29yayxcXHJcXG4uc2tpbGxzIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmd1YWdlOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKC4uL2lsbHVzdHJhdGlvbnMvUmVjdGFuZ2xlNTUucG5nKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IC00MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnJhbWV3b3JrOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKC4uL2lsbHVzdHJhdGlvbnMvUmVjdGFuZ2xlNTYucG5nKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IC0zMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGxzOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKC4uL2lsbHVzdHJhdGlvbnMvUmVjdGFuZ2xlNTcucG5nKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IC0zMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1mb3JtLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTIwcHggMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtZm9ybS1oZWFkZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzE3MmI0ZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiA1OHB4IDAgMCAwO1xcclxcbiAgbWluLXdpZHRoOiAzMjdweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtaW5wdXQge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICBjb2xvcjogIzk3OTQ5MztcXHJcXG4gIGhlaWdodDogNDhweDtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZDhkNztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtdGV4dC1hcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgd2lkdGg6IDgyJTtcXHJcXG4gIGhlaWdodDogMTE0cHg7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmYmY4Zjc7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZDhkNztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1mb3JtLXN1Ym1pdCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIG1hcmdpbjogMzBweCAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5idG4tZm9ybS1zdWJtaXQ6ZGlzYWJsZWQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICM1YjU5NTc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tZGlzYWJsZWRCR2NvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI2JvdHRvbS1uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGF3a2VzQmx1ZSk7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1saW5lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDE1MWU7XFxyXFxuICBoZWlnaHQ6IDVweDtcXHJcXG4gIHdpZHRoOiAxMzRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW46IDE1cHggMCA4cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3Qtc29jaWFsLW1lZGlhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZmlsdGVyOlxcclxcbiAgICBpbnZlcnQoMzclKSBzZXBpYSgxMiUpIHNhdHVyYXRlKDEwODYlKSBodWUtcm90YXRlKDE3OWRlZylcXHJcXG4gICAgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDg4JSk7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWE6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRkYXJrKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1saW5rcyB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2LWxpbmtzID4gLnNlY3Rpb24tbGluayA+IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb24td3JhcHBlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDM1cHg7XFxyXFxuICBsZWZ0OiA4NiU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZmlsdGVyOlxcclxcbiAgICBpbnZlcnQoNDklKSBzZXBpYSg2JSkgc2F0dXJhdGUoMTQwOCUpIGh1ZS1yb3RhdGUoMTcyZGVnKVxcclxcbiAgICBicmlnaHRuZXNzKDk0JSkgY29udHJhc3QoOTMlKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uLXdyYXBwZXI6aG92ZXIge1xcclxcbiAgZmlsdGVyOlxcclxcbiAgICBpbnZlcnQoMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgzMjZkZWcpIGJyaWdodG5lc3MoNCUpXFxyXFxuICAgIGNvbnRyYXN0KDEwMyUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2JpbGUgdmlldyBjc3MgY29kZXMgc3RhcnRzIGhlcmUgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgI2hlYWRsaW5lLXNlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaWxsdXN0cmF0aW9ucy9JbGx1c3RyYXRpb25pbGx1c3RyYXRpb24uc3ZnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAyMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIC5yZWNlbnQtd29ya3MtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNlbnQtd29ya3MtaGVhZGVyID4gaDIge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkNyZXRlIFJvdW5kXFxcIiwgc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNTJweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRlZXBEYXJrKTtcXHJcXG4gICAgaGVpZ2h0OiA4M3B4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm15LXdvcmtzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGhpbi1saW5lIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIxMjEyMTtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICB3aWR0aDogMzI3cHg7XFxyXFxuICAgIG1hcmdpbjogMCAwIDgwcHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mZWF0dXJlZCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maXJzdC1jYXJkLWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAzMjdweDtcXHJcXG4gICAgaGVpZ2h0OiAyMzdweDtcXHJcXG4gICAgbWFyZ2luOiAxMnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlyc3QtY2FyZC1pbWctZGVza3RvcCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlyc3QtY2FyZCB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlyc3QtY2FyZCA+IGgzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDcmV0ZSBSb3VuZFxcXCIsIHNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWxpa2UpO1xcclxcbiAgICBtYXJnaW46IDEycHggMDtcXHJcXG4gIH0gKi9cXHJcXG5cXHJcXG4gIC8qXFxyXFxuICAjY2FyZC1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwIDE2cHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW2NvbDEtc3RhcnRdIDFmcjtcXHJcXG4gIH0gKi9cXHJcXG5cXHJcXG4gICNhYm91dC1hbmQtc2tpbGwtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTkwMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaWxsdXN0cmF0aW9ucy9hYm91dC1zZWN0aW9uLWltZy5zdmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDIwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNhYm91dC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTIwcHggMjRweDtcXHJcXG4gICAgaGVpZ2h0OiA1NjNweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC1tZS1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtbWUtaGVhZGVyIGgzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDcmV0ZSBSb3VuZFxcXCIsIHNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDg4cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjM3cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgY29sb3I6ICNmNGY1Zjc7XFxyXFxuICAgIG1hcmdpbjogMjRweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LXNlY3Rpb24tZGl2aWRlciB7XFxyXFxuICAgIHdpZHRoOiAzMjdweDtcXHJcXG4gICAgbWFyZ2luOiA4MHB4IDAgMCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgI25hdi1saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZGFyayk7XFxyXFxuICAgIHBhZGRpbmc6IDYwcHggNDBweCA0MHB4IDQwcHg7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNwbGF5LWYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGlzcGxheS1iIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNwbGF5LW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbmF2LWxpbmtzIC5zZWN0aW9uLWxpbmsge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZmNmM2YjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogRGVza3RvcCBjc3MgY29kZSBiZWdpbnMgaGVyZSAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAjbG9nbyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMjNweDtcXHJcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XFxyXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDEwMDhtcztcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbG9nbzpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmY2YjAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhhbWJ1cmdlci1idG4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgI25hdi1saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTUxcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbmF2LWxpbmtzID4gLnNlY3Rpb24tbGluayB7XFxyXFxuICAgIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIEhpZGUgbWVudSBjbG9zZSBidG4gaW4gZGVza3RvcCB2aWV3ICovXFxyXFxuICAuY2xvc2UtaWNvbi13cmFwcGVyIHtcXHJcXG4gICAgbGVmdDogOTMlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hlYWRsaW5lLXNlY3Rpb24ge1xcclxcbiAgICBoZWlnaHQ6IDc5OHB4O1xcclxcbiAgICBwYWRkaW5nOiAxOTJweCAyNHB4IDI0cHggMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2lsbHVzdHJhdGlvbnMvSWxsdXN0cmF0aW9uLWhlYWRlcmRlc2t0b3AucG5nKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGxpbmUtdGV4dC13cmFwcGVyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEyM3B4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hlYWRsaW5lLXNlY3Rpb24gLmhlYWRsaW5lLXByaW1hcnktdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDgycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaGVhZGxpbmUtc2VjdGlvbiBoNCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiaW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRsaW5lLWRlc2Mge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcImludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzJweDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGxpbmUtc29jaWFsLW1lZGlhIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBwYWRkaW5nOiA1MHB4IDA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLypcXHJcXG4gICNyZWNlbnQtd29ya3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEzNXB4IDE0MnB4O1xcclxcbiAgICBtYXJnaW46IDAgMTE4cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNlbnQtd29ya3MtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGhpbi1saW5lIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIxMjEyMTtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIDI0cHggMCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2VudC13b3Jrcy1oZWFkZXIgPiBoMiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ3JldGUgUm91bmRcXFwiLCBzZXJpZjtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGVlcERhcmspO1xcclxcbiAgICB3aWR0aDogNDE1cHg7XFxyXFxuICAgIG1hcmdpbjogMCAwIDAgMjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5teS13b3JrcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmVhdHVyZWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZpcnN0LWNhcmQtaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA2ODRweDtcXHJcXG4gICAgaGVpZ2h0OiA0NDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maXJzdC1jYXJkLWltZy1tb2JpbGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZpcnN0LWNhcmQtaW1nLWRlc2t0b3Age1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDhweCAtMnB4IHJnYig5NSwgOTIsIDkyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maXJzdC1jYXJkIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZpcnN0LWNhcmQgPiBoMyB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWxpa2UpO1xcclxcbiAgICBtYXJnaW46IDEycHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjYXJkLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzA5cHgsIDFmcikpO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAyNHB4O1xcclxcbiAgICByb3ctZ2FwOiAyNHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH0gKi9cXHJcXG5cXHJcXG4gICNhYm91dC1hbmQtc2tpbGwtc2VjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbGx1c3RyYXRpb25zL0Rlc2t0b3AtQWJvdXRtZS1pbGx1c3RyYXRpb24uc3ZnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDBweDtcXHJcXG4gICAgcGFkZGluZzogMCAxNDJweCAwIDE0MnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Fib3V0LXNlY3Rpb24ge1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMzBweCAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDU2M3B4O1xcclxcbiAgICBtYXgtd2lkdGg6IDU2NnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LXNlY3Rpb24tZGl2aWRlciB7XFxyXFxuICAgIG1heC13aWR0aDogMTE1NnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI3NraWxsLXNlY3Rpb24ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAxNDBweCAyNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhY3QtZm9ybS1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDEzMHB4IDEzNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtZm9ybS1oZWFkZXIge1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBjb2xvcjogIzI2MjYyNjtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWN0LWZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG1pbi13aWR0aDogMzI3cHg7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maXJzdC1uYW1lIHtcXHJcXG4gICAgbWFyZ2luOiAwIDIwcHggMCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtaW5wdXQtbW9iaWxlLFxcclxcbiAgLmVtYWlsLWlucHV0LFxcclxcbiAgLnRleHQtYXJlYSB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idG4tZm9ybS1zdWJtaXQge1xcclxcbiAgICB3aWR0aDogMTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdF9mb3JtX2xhYmVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjJmZGI5MDJkYjlkOTQ2NTNjNjQ1ODEyOTc5MWY0N2QucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI0N2EyNDg1MWNhODdhMmIxZTg3YzJjNWQ3MzlhYmI0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlMjgyMzc4ZjAwNTIyOGM4NDA1MDkzMGQwNWZhMWQ4Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2Q3OGVhN2Y0NTdhYmRhODllOTI4M2I1M2Y4NGIxZTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImEwMmU3NmU5ODVkNDJkYmQ5OGFlM2Q0ZWE2MDVmNWRmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmNDkyYzk2NTZjNzdhNTIxN2ZiMDQxNDZmNGQ0ZjlhMy5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmQ4YWNlY2ViY2RhNGQxYzBkNjI1M2M1ZGMzMjJiNzcuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNiMzFiNTA2Y2ZmZTI5MGRjOTAzMGRhOTI1MWE1M2EyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhZTQ1OGE2NTY5MGZlYTE1Mjk1YTRlNDUxOTY4YjkxMC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzg4OThiZTAwYzM2NzM2MmExOTQ0MTZmMTQ2NjAwMzMuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI1MzNhYzJjYTc3YzE2NTdkY2UxZjJhNjg4YTNlZjg3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiOTdiOWFiNzE0MGVjZTA3MDkwZGNhNDM1YzQ3NmI2Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDYzYmM1ZmY3ZTRlMzg3NTc5NzA5MDhmNDZlYmUyMDkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVjMWZkY2NlYWM0NGY0YmY5YTkyZTFiMzJkZDYwMjg4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NTU5MzE0ZWUxOGQ2MWQ1OGFlNjc5YTdkMGFkNzk4MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTIzM2M5M2M3YmE1MDNkZmEzNTY5OTQ1YTBmODgwMDYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImExMTgyOGQ3MDAxODJhNDkxYTE5YmQ4YjgwZmIxMTgwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4NDg0OGIyMjA2NDg5NWY3OTdkZTQxYWJiZDE4YzM5Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGRkODE3YmMzNDE5NDcyZjlkN2Y5NzY0NDM2OGY3NTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFmNGE0M2Y0ZGJhOGU0MGU4MDUxNDliNzg3NzMyMjc3LnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY2xvc2VJY29uIGZyb20gJy4uL2ljb25zL2Nsb3NlLWljb24ucG5nJztcclxuXHJcbmNvbnN0IERPTSA9ICgoKSA9PiB7XHJcbiAgLy8gY3JlYXRlIEVsZW1lbnQgZnVuY3Rpb25cclxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW0sIGNsYXNzTmFtZSA9IG51bGwpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xyXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlIGNsb3NlIGljb24gZnVuY3Rpb25cclxuICBjb25zdCBjcmVhdGVDbG9zZUljb24gPSAobG9jYXRpb24sIGNsb3NlV3JhcCkgPT4ge1xyXG4gICAgY29uc3QgY2xvc2VJY29uRWwgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnY2xvc2UtaWNvbicpO1xyXG4gICAgY29uc3QgY2xvc2VXcmFwcGVyID0gY3JlYXRlRWxlbWVudChjbG9zZVdyYXAsICdjbG9zZS1pY29uLXdyYXBwZXInKTtcclxuICAgIGNsb3NlSWNvbkVsLnNyYyA9IGNsb3NlSWNvbjtcclxuICAgIGNsb3NlSWNvbkVsLmFsdCA9ICdjbG9zZSBpY29uJztcclxuICAgIGNsb3NlV3JhcHBlci5hcHBlbmRDaGlsZChjbG9zZUljb25FbCk7XHJcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChjbG9zZVdyYXBwZXIpO1xyXG4gIH07XHJcblxyXG4gIC8vIFByb2plY3RzIGNhcmQgZGlzcGxheSBmdW5jdGlvblxyXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYXJkLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBjcmVhdGVQcm9qZWN0Q2FyZCA9ICh7XHJcbiAgICBuYW1lLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBpbWFnZXMsXHJcbiAgICB0ZWNobm9sb2dpZXMsXHJcbiAgICBpZCxcclxuICB9KSA9PiB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJ3Byb2plY3QtY2FyZCcpO1xyXG4gICAgbGlzdEl0ZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlcy5tb2JpbGV9KWA7XHJcbiAgICBsaXN0SXRlbS5pZCA9IGlkO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7bmFtZX1gO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke2Rlc2NyaXB0aW9ufWA7XHJcblxyXG4gICAgY29uc3QgdGVjaExpc3RJdGVtMSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICB0ZWNoTGlzdEl0ZW0xLnRleHRDb250ZW50ID0gYCR7dGVjaG5vbG9naWVzWzBdfWA7XHJcbiAgICBjb25zdCB0ZWNoTGlzdEl0ZW0yID0gY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHRlY2hMaXN0SXRlbTIudGV4dENvbnRlbnQgPSBgJHt0ZWNobm9sb2dpZXNbMV19YDtcclxuICAgIGNvbnN0IHRlY2hMaXN0SXRlbTMgPSBjcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgdGVjaExpc3RJdGVtMy50ZXh0Q29udGVudCA9IGAke3RlY2hub2xvZ2llc1syXX1gO1xyXG4gICAgY29uc3QgdGVjaFVMID0gY3JlYXRlRWxlbWVudCgndWwnLCAnZGVzY3JpcHRpb24tdGFncycpO1xyXG4gICAgdGVjaFVMLmFwcGVuZCh0ZWNoTGlzdEl0ZW0xLCB0ZWNoTGlzdEl0ZW0yLCB0ZWNoTGlzdEl0ZW0zKTtcclxuXHJcbiAgICBjb25zdCBjYXJkRGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZC1kZXNjcmlwdGlvbicpO1xyXG4gICAgY2FyZERlc2NyaXB0aW9uLmFwcGVuZChwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uLCB0ZWNoVUwpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnYnRuJyk7XHJcbiAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1jYXJkJyk7XHJcbiAgICBwcm9qZWN0QnRuLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIHByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnU2VlIFByb2plY3QnO1xyXG4gICAgbGlzdEl0ZW0uYXBwZW5kKGNhcmREZXNjcmlwdGlvbiwgcHJvamVjdEJ0bik7XHJcbiAgICByZXR1cm4gbGlzdEl0ZW07XHJcbiAgfTtcclxuXHJcbiAgLy8gUHJvamVjdCBjYXJkIGRpc3BsYXkgbWFwXHJcbiAgY29uc3QgZGlzcGxheVByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XHJcbiAgICBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCkpKTtcclxuICB9O1xyXG5cclxuICAvLyBQcm9qZWN0IHBvcCB1cCB3aW5kb3cgY3JlYXRlIGZ1bmN0aW9uXHJcbiAgY29uc3QgY3JlYXRlUG9wdXBXaW5kb3cgPSAoe1xyXG4gICAgbmFtZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgaW1hZ2VzLFxyXG4gICAgdGVjaG5vbG9naWVzLFxyXG4gICAgbGl2ZUxpbmssXHJcbiAgICBzb3VyY2VGaWxlLFxyXG4gIH0pID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdwcm9qZWN0LW1vZGFsJyk7XHJcbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdwb3B1cC1jb250YWluZXInKTtcclxuICAgIHBvcHVwQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICA8aDI+JHtuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidGVjaC1zdGFja1wiPlxyXG4gICAgICAgICAgICAgICAgJHt0ZWNobm9sb2dpZXMubWFwKCh0ZWNoKSA9PiBgPGxpPiR7dGVjaH08L2xpPmApfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWltZy1wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7aW1hZ2VzLmRlc2t0b3B9IGFsdD1cIiR7bmFtZX1cIj5cclxuICBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWJ0bi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD4ke2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC1idG4td3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHBvcHVwLWJ0blwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2xpdmVMaW5rfVwiPlNlZSBMaXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIk5ldyB3aW5kb3cgaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBwb3B1cC1idG5cIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtzb3VyY2VGaWxlfVwiPlNlZSBTb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiZ2l0aHViIGljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBgO1xyXG4gICAgcHJvamVjdE1vZGFsLmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcclxuICAgIHJldHVybiBwcm9qZWN0TW9kYWw7XHJcbiAgfTtcclxuXHJcbiAgLy8gZWxlbWVudHNcclxuICBjb25zdCBoYW1idXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLWJ0bicpOyAvLyBIYW1idXJnZXJcclxuICBjb25zdCBuYXZMaW5rc1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWxpbmtzJyk7IC8vIE1lbnUgbGluayB3cmFwcGVyXHJcbiAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWNhcmQnKTsgLy8gU2VlIHByb2plY3QgYnRuc1xyXG4gIGNvbnN0IHByb2plY3RJbm5lckNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtZGVzY3JpcHRpb24nKTsgLy8gU2VlIHByb2plY3QgY2FyZHNcclxuICBjb25zdCB3b3JrU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNlbnQtd29ya3MnKTsgLy8gcG9ydGZvbGlvIFdvcmsgc2VjdGlvblxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY3JlYXRlRWxlbWVudCxcclxuICAgIGNyZWF0ZUNsb3NlSWNvbixcclxuICAgIGNyZWF0ZVBvcHVwV2luZG93LFxyXG4gICAgY3JlYXRlUHJvamVjdENhcmQsXHJcbiAgICBkaXNwbGF5UHJvamVjdHMsXHJcbiAgICBoYW1idXJnZXJCdG4sXHJcbiAgICBuYXZMaW5rc1dyYXBwZXIsXHJcbiAgICBjYXJkQ29udGFpbmVyLFxyXG4gICAgcHJvamVjdEJ0bnMsXHJcbiAgICBwcm9qZWN0SW5uZXJDYXJkcyxcclxuICAgIHdvcmtTZWN0aW9uLFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBET007XHJcbiIsImltcG9ydCBoYW1idXJnZXJJY29uIGZyb20gJy4uL2ljb25zL0hhbWJ1cmdlci1tZW51LWljb24uc3ZnJztcclxuaW1wb3J0IGVudmVsb3BlSWNvbiBmcm9tICcuLi9pY29ucy9FbnZlbG9wZS1JY29uLnN2Zyc7XHJcbi8vIEhlYWRsaW5lIHNvY2lhbCBpY29uc1xyXG5pbXBvcnQgZ2l0aHViSWNvbiBmcm9tICcuLi9pY29ucy9EaXNhYmxlZGdpdGh1Yi1pY29uLnBuZyc7XHJcbmltcG9ydCBMaW5rZWRJbkljb24gZnJvbSAnLi4vaWNvbnMvRGlzYWJsZWRMaW5rZWRJbi1pY29uLnBuZyc7XHJcbmltcG9ydCBmaW5nZXJzSWNvbiBmcm9tICcuLi9pY29ucy9FbmFibGVkdHdvLWZpbmdlcnMtaWNvbi5wbmcnO1xyXG5pbXBvcnQgdHdpdHRlckljb24gZnJvbSAnLi4vaWNvbnMvRGlzYWJsZWR0d2l0dGVyLWljb24ucG5nJztcclxuaW1wb3J0IG1JY29uIGZyb20gJy4uL2ljb25zL0Rpc2FibGVkTS1pY29uLnBuZyc7XHJcbi8vIEZlYXR1cmVkIHByb2R1Y3QgaW1hZ2VzXHJcbi8vIGltcG9ydCBmZWF0dXJlZFByb2R1Y3QxIGZyb20gJy4uL2ltYWdlcy9tb2JpbGUtZmlyc3QtY2FyZC5zdmcnO1xyXG5pbXBvcnQgQ2Fyc0JuQlByb2plY3RJbWFnZSBmcm9tICcuLi9pbWFnZXMvQ2FyLXRlc3QtZHQucG5nJztcclxuXHJcbmNvbnN0IGRpc3BsYXlJbWFnZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGFtYnVyZ2VyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLWJ0biA+IGltZycpO1xyXG4gIGhhbWJ1cmdlckVsLnNyYyA9IGhhbWJ1cmdlckljb247XHJcbiAgLy8gRW52ZWxvcGUgSWNvbiBpbnNlcnRpb25cclxuICBjb25zdCBlbnZlbG9wRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW52ZWxvcGUtaWNvbicpO1xyXG4gIGVudmVsb3BFbC5zcmMgPSBlbnZlbG9wZUljb247XHJcblxyXG4gIC8vIEluc2VydCBmZWF0dXJlZCBwcm9kdWN0IGltYWdlc1xyXG4gIGNvbnN0IHByb2R1Y3RJbWFnZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmZWF0dXJlZFByb2R1Y3QxRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlyc3QtY2FyZC1pbWctbW9iaWxlJyk7XHJcbiAgICBmZWF0dXJlZFByb2R1Y3QxRWwuc3JjID0gQ2Fyc0JuQlByb2plY3RJbWFnZTtcclxuICB9O1xyXG5cclxuICAvLyBpbnNlcnQgc29jaWFsIG1lZGlhIGljb25zIGluIGhlYWRsaW5lXHJcbiAgY29uc3QgYWxsaGVhZGxpbmVJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkbGluZS1zb2NpYWwtbWVkaWEgaW1nJyk7XHJcbiAgY29uc3QgW2ltZzEsIGltZzIsIGltZzMsIGltZzQsIGltZzVdID0gWy4uLmFsbGhlYWRsaW5lSWNvbnNdO1xyXG4gIGltZzEuc3JjID0gZ2l0aHViSWNvbjtcclxuICBpbWcyLnNyYyA9IExpbmtlZEluSWNvbjtcclxuICBpbWczLnNyYyA9IGZpbmdlcnNJY29uO1xyXG4gIGltZzQuc3JjID0gdHdpdHRlckljb247XHJcbiAgaW1nNS5zcmMgPSBtSWNvbjtcclxuXHJcbiAgcHJvZHVjdEltYWdlcygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUltYWdlczsiLCJjb25zdCBzZXRMb2NhbFN0b3JlID0gKCgpID0+IHtcclxuICBmdW5jdGlvbiB1c2VTdG9yYWdlSW5mbygpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29udGFjdEluZm8nKSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpc2l0b3JzLW5hbWUnKS52YWx1ZSA9IGN1cnJlbnRJbmZvPy5mdWxsTmFtZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXNpdG9ycy1lbWFpbCcpLnZhbHVlID0gY3VycmVudEluZm8/LmVtYWlsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtdGV4dC1hcmVhJykudmFsdWUgPSBjdXJyZW50SW5mbz8ubWVzc2FnZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250YWN0SW5mbyA9IHtcclxuICAgICAgZnVsbE5hbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXNpdG9ycy1uYW1lJykudmFsdWUsXHJcbiAgICAgIGVtYWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzaXRvcnMtZW1haWwnKS52YWx1ZSxcclxuICAgICAgbWVzc2FnZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtdGV4dC1hcmVhJykudmFsdWUsXHJcbiAgICB9O1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnRhY3RJbmZvJywgSlNPTi5zdHJpbmdpZnkoY29udGFjdEluZm8pKTtcclxuICAgIHVzZVN0b3JhZ2VJbmZvKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzZXRTdG9yYWdlLCB1c2VTdG9yYWdlSW5mbyB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0TG9jYWxTdG9yZTsiLCJpbXBvcnQgbW9iaWxlR2xvYmFsRHJ1bXMgZnJvbSAnLi4vbXl3b3JrSW1hZ2VzL21vYmlsZUdsb2JhbERydW1tZXJzLnBuZyc7XHJcbmltcG9ydCBkZXNrdG9wR2xvYmFsRHJ1bXMgZnJvbSAnLi4vbXl3b3JrSW1hZ2VzL2Rlc2t0b3BHbG9iYWxEcnVtbWVycy5wbmcnO1xyXG5pbXBvcnQgZGVza3RvcEVjb21tZXJjZSBmcm9tICcuLi9teXdvcmtJbWFnZXMvRS1jb21tZXJjZSBwcm9kdWN0IHBhZ2UucG5nJztcclxuaW1wb3J0IG1vYmlsZUVjb21tZXJjZSBmcm9tICcuLi9teXdvcmtJbWFnZXMvbW9iaWxlRS1jb21tZXJjZS1wcm9kdWN0LXBhZ2UucG5nJztcclxuaW1wb3J0IHNob3J0bHlNb2JpbGUgZnJvbSAnLi4vbXl3b3JrSW1hZ2VzL1Nob3J0bHktbW9iaWxlLnBuZyc7XHJcbmltcG9ydCBzaG9ydGx5RGVza3RvcCBmcm9tICcuLi9teXdvcmtJbWFnZXMvU2hvcnRseS1kZXNrdG9wLnBuZyc7XHJcbmltcG9ydCBjcnlwdG9IdWJNb2JpbGUgZnJvbSAnLi4vbXl3b3JrSW1hZ2VzL0NyeXB0by1odWItbW9iaWxlLnBuZyc7XHJcbmltcG9ydCBjcnlwdG9IdWJEZXNrdG9wIGZyb20gJy4uL215d29ya0ltYWdlcy9DcnlwdG8taHViLWRlc2t0b3AucG5nJztcclxuaW1wb3J0IENhcnNCbkJQcm9qZWN0RGVza3RvcEltYWdlIGZyb20gJy4uL2ltYWdlcy9DYXItdGVzdC1kdC5wbmcnO1xyXG5pbXBvcnQgQ2Fyc0JuQlByb2plY3RNb2JpbGVJbWFnZSBmcm9tICcuLi9pbWFnZXMvQ2FyLXRlc3QtbW9iaWxlLnBuZyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmVhdHVyZWRQcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnQ2FycyBCbkInLFxyXG4gICAgZGVzY3JpcHRpb246IGBJdHMgYSBzaW1wbGUgZnVsbC1zdGFjayBhcHBsaWNhdGlvbiB0aGF0IHVzZXJzIGNhbiByZXNlcnZlIFxyXG4gICAgYSBzZXNzaW9uIHRvIHRlc3QgY2FycyBvZiB0aGllciBjaG9vc2luZyBiZWZvcmUgdGhlIGNvbW1pdCB0byBidXlpbmcgb3IgY2hvb3NlIGEgZmluYW5jaW5nIHBhY2thZ2UuYCxcclxuICAgIGltYWdlczoge1xyXG4gICAgICBtb2JpbGU6IENhcnNCbkJQcm9qZWN0TW9iaWxlSW1hZ2UsXHJcbiAgICAgIGRlc2t0b3A6IENhcnNCbkJQcm9qZWN0RGVza3RvcEltYWdlLFxyXG4gICAgfSxcclxuICAgIHRlY2hub2xvZ2llczogWydSZWFjdC5KcycsICdSdWJ5IG9uIFJhaWxzJywgJ0NTUycsICdKYXZhU2NyaXB0J10sXHJcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vYm9iYi1yb2IuZ2l0aHViLmlvL0dsb2JhbC1EcnVtbWVycy1Xb3Jrc2hvcC8nLFxyXG4gICAgc291cmNlRmlsZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ib2JiLVJvYi9HbG9iYWwtRHJ1bW1lcnMtV29ya3Nob3AnLFxyXG4gICAgaWQ6ICcxJyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0dsb2JhbCBEcnVtbWVycyBGZXN0aXZhbCBXZWJzaXRlJyxcclxuICAgIGRlc2NyaXB0aW9uOiBgRHJ1bSBGZXN0aXZhbCBHbG9iYWwgY29uZmVyZW5jZSBpcyBhIHllYXJseSBkcnVtbWVycyBjb21tdW5pdHlcclxuICAgICAgIGV2ZW50IGF0IHRoZSBnbG9iYWwgbGV2ZWwgZmVhdHVyaW5nIHdvcmxkLWNsYXNzIGRydW1tZXJzIGZyb20gbW9yZSB0aGFuIDEwMCBjb3VudHJpZXMuXHJcbiAgICAgICAgVGhlIGFpbSBpcyB0byBwcm92aWRlIGEgc2luZ2xlIHBvaW50IG9mIEluZm9ybWF0aW9uIGFuZCByZWdpc3RyYXRpb24gZm9yIGFsbCBwYXJ0aWNpcGFudHMuIFxyXG4gICAgICAgIGAsXHJcbiAgICBpbWFnZXM6IHtcclxuICAgICAgbW9iaWxlOiBtb2JpbGVHbG9iYWxEcnVtcyxcclxuICAgICAgZGVza3RvcDogZGVza3RvcEdsb2JhbERydW1zLFxyXG4gICAgfSxcclxuICAgIHRlY2hub2xvZ2llczogWydIdG1sJywgJ0NTUycsICdKYXZhU2NyaXB0J10sXHJcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vYm9iYi1yb2IuZ2l0aHViLmlvL0dsb2JhbC1EcnVtbWVycy1Xb3Jrc2hvcC8nLFxyXG4gICAgc291cmNlRmlsZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ib2JiLVJvYi9HbG9iYWwtRHJ1bW1lcnMtV29ya3Nob3AnLFxyXG4gICAgaWQ6ICcxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTaG9ydGx5IExhbmRpbmcgUGFnZScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnSGF2ZSB5b3UgZXZlciBuZWVkZWQgdG8gc2hvcnRlbiBhIHZlcnkgdmVyeSBsb25nIFVSTD8sIHRoaXMgYXBwIGNhbiBoZWxwIHlvdSBkbyB0aGF0IHF1aWNrbHkuIEl0IHdhcyBidWlsdCB3aXRoIHZhbmlsbGEgSmF2YVNjcmlwdC4gQ3JlZGl0IHRvIEZyb250IEVuZCBNZW50b3JzIHdobyBwdXQgdXAgdGhpcyBjaGFsbGVuZ2UuJyxcclxuICAgIGltYWdlczoge1xyXG4gICAgICBtb2JpbGU6IHNob3J0bHlNb2JpbGUsXHJcbiAgICAgIGRlc2t0b3A6IHNob3J0bHlEZXNrdG9wLFxyXG4gICAgfSxcclxuICAgIHRlY2hub2xvZ2llczogWydIdG1sJywgJ0NTUycsICdKYXZhU2NyaXB0J10sXHJcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vYm9iYi1yb2IuZ2l0aHViLmlvL3VybC1zaG9ydGVuaW5nLWFwaS1tYXN0ZXIvJyxcclxuICAgIHNvdXJjZUZpbGU6ICdodHRwczovL2dpdGh1Yi5jb20vYm9iYi1Sb2IvdXJsLXNob3J0ZW5pbmctYXBpLW1hc3RlcicsXHJcbiAgICBpZDogJzInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NyeXB0by1odWInLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgJ0NyeXB0by1IdWIgaXMgYSB3ZWIgYXBwbGljYXRpb24gdGhhdCBwcm92aWRlcyBkZXRhaWxlZCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdG9wIDEwMCBtb3N0IHVzZWQgY3J5cHRvY3VycmVuY2llcyBpbiB0aGUgd29ybGRzJyxcclxuICAgIGltYWdlczoge1xyXG4gICAgICBtb2JpbGU6IGNyeXB0b0h1Yk1vYmlsZSxcclxuICAgICAgZGVza3RvcDogY3J5cHRvSHViRGVza3RvcCxcclxuICAgIH0sXHJcbiAgICB0ZWNobm9sb2dpZXM6IFsnUmVhY3QnLCAnUmVkdXgnLCAnQXhpb3MnLCAnQ1NTJ10sXHJcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vY3J5cHRvLWh1Yi0yNDcubmV0bGlmeS5hcHAvJyxcclxuICAgIHNvdXJjZUZpbGU6ICdodHRwczovL2dpdGh1Yi5jb20vYm9iYi1Sb2IvQ3J5cHRvLUh1YicsXHJcbiAgICBpZDogJzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0UtY29tbWVyY2UgcHJvZHVjdCBwYWdlJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgYFRoaXMgaXMgYSByZXNwb25zaXZlIHNpbmdsZSBwYWdlIGUtY29tbWVyY2UgcHJvZHVjdCBwYWdlLCBhIHNvbHV0aW9uIHRvIHRoZSBFLWNvbW1lcmNlIHByb2R1Y3QgcGFnZSBjaGFsbGVuZ2Ugb24gRnJvbnRlbmQgTWVudG9yLiBcclxuICAgIEZyb250ZW5kIE1lbnRvciBjaGFsbGVuZ2VzIGhlbHAgeW91IGltcHJvdmUgeW91ciBjb2Rpbmcgc2tpbGxzIGJ5IGJ1aWxkaW5nIHJlYWxpc3RpYyBwcm9qZWN0cy5gLFxyXG4gICAgaW1hZ2VzOiB7XHJcbiAgICAgIG1vYmlsZTogbW9iaWxlRWNvbW1lcmNlLFxyXG4gICAgICBkZXNrdG9wOiBkZXNrdG9wRWNvbW1lcmNlLFxyXG4gICAgfSxcclxuICAgIHRlY2hub2xvZ2llczogWydIdG1sJywgJ0NTUycsICdKYXZhU2NyaXB0J10sXHJcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vYm9iYi1yb2IuZ2l0aHViLmlvL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UvJyxcclxuICAgIHNvdXJjZUZpbGU6ICdodHRwczovL2dpdGh1Yi5jb20vYm9iYi1Sb2IvZWNvbW1lcmNlLXByb2R1Y3QtcGFnZScsXHJcbiAgICBpZDogJzQnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwcm9qZWN0cywgeyBmZWF0dXJlZFByb2plY3RzIH0gZnJvbSAnLi9KYXZhU2NyaXB0L3Byb2plY3RzLmpzJztcclxuaW1wb3J0IERPTSBmcm9tICcuL0phdmFTY3JpcHQvZG9tRWwuanMnO1xyXG5pbXBvcnQgc2V0TG9jYWxTdG9yZSBmcm9tICcuL0phdmFTY3JpcHQvbG9jYWxTdG9yYWdlLmpzJztcclxuaW1wb3J0IGRpc3BsYXlJbWFnZXMgZnJvbSAnLi9KYXZhU2NyaXB0L2ltYWdlcy5qcyc7XHJcbmltcG9ydCBnaXRIdWJJY29uIGZyb20gJy4vaWNvbnMvZ2l0aHViLWljb24uc3ZnJztcclxuaW1wb3J0IG5ld1dpbmRvd0ljb24gZnJvbSAnLi9pY29ucy9uZXctd2luZG93LWljb24uc3ZnJztcclxuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4vY3NzL3Byb2plY3RzLmNzcyc7XHJcbmltcG9ydCAnLi9jc3MvcG9wdXAuY3NzJztcclxuXHJcbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xyXG4gIHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gRE9NLmNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoRE9NLmNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpKSk7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAvLyBFbWFpbCBsb3dlcmNhc2Ugc2Vuc2l0aXZlIHZhbGlkYXRpb25cclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXNpdG9ycy1lbWFpbCcpO1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1mb3JtJyk7XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dNZXNzYWdlKHRleHQsIGNsYXNzTmFtZSkge1xyXG4gICAgbGV0IG1lc3NhZ2U7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1jaGVjay1tZXNzYWdlJykpIHtcclxuICAgICAgbWVzc2FnZSA9IERPTS5jcmVhdGVFbGVtZW50KCdzbWFsbCcsICdlbWFpbC1jaGVjay1tZXNzYWdlJyk7XHJcbiAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1jaGVjay1tZXNzYWdlJyk7XHJcbiAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LnJlcGxhY2UoY2xhc3NOYW1lLCBjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWZvcm0tc3VibWl0Jyk7XHJcbiAgICBmb3JtLmluc2VydEJlZm9yZShtZXNzYWdlLCBzdWJtaXRCdG4pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbCgpIHtcclxuICAgIGNvbnN0IGVtYWlsVmFsdWUgPSBlbWFpbC52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCBsb3dlckNhc2VFbWFpbCA9IGVtYWlsVmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBpZiAoZW1haWxWYWx1ZSAhPT0gbG93ZXJDYXNlRW1haWwpIHtcclxuICAgICAgc2hvd01lc3NhZ2UoJ0VtYWlsIHNob3VsZCBiZSBsb3dlcmNhc2UgYWxsIHRocm91Z2gnLCAnaW52YWxpZC1lbWFpbCcpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZU1lc3NhZ2VPbkZvY3VzKCkge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1jaGVjay1tZXNzYWdlJyk7XHJcbiAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICBtZXNzYWdlLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh2YWxpZGF0ZUVtYWlsKCkpIHtcclxuICAgICAgZm9ybS5zdWJtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFZhbGlkYXRlIGVtYWlsIG9uY2UgZW1haWwgZmllbGQgbG9zc2VzIGZvY3VzXHJcbiAgZW1haWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdmFsaWRhdGVFbWFpbCk7XHJcbiAgLy8gUmVtb3ZlIG1lc3NhZ2Ugb25jZSBlbWFpbCBmaWVsZCByZWdhaW5zIGZvY3VzXHJcbiAgZW1haWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCByZW1vdmVNZXNzYWdlT25Gb2N1cyk7XHJcbiAgLy8gUHJldmVudCBzdWJtaXQgaWYgZW1haWwgaXMgaW52YWxpZFxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlU3VibWl0KTtcclxufTtcclxuXHJcbmNvbnN0IGV4ZWN1dGVFdmVudHMgPSAoKSA9PiB7XHJcbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBoYW1idXJnZXIgYnRuXHJcbiAgRE9NLmhhbWJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIERPTS5jcmVhdGVDbG9zZUljb24oRE9NLm5hdkxpbmtzV3JhcHBlciwgJ2xpJyk7XHJcbiAgICBET00ubmF2TGlua3NXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZicpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVudmVsb3BlJykuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1uJyk7XHJcbiAgICAvLyBBZGQgdGhlIGNsaWNrIGV2ZW50IG9uIHRoZSBjbG9zZSBidG4gb24gbWVudVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ2xvc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmNsb3NlLWljb24nKTtcclxuICAgIGhhbWJ1cmdlckNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgRE9NLm5hdkxpbmtzV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5LWYnKTtcclxuICAgICAgY29uc3QgbWFpbEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW52ZWxvcGUnKTtcclxuICAgICAgbWFpbEljb24uY2xhc3NMaXN0LnRvZ2dsZSgnZGlzcGxheS1uJyk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1pY29uLXdyYXBwZXInKS5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBBdHRhY2ggY2xpY2sgZXZlbnRzIG9uIGFsbCB0aGUgXCJhXCIgdGFncyBib3RoIGRlc2t0b3AgYW5kIG1vYmlsZVxyXG4gIGNvbnN0IG5hdkxpbmtzQXJyID0gQXJyYXkuZnJvbShcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmluc2VydC1ldmVudCA+IGEnKSxcclxuICApO1xyXG4gIG5hdkxpbmtzQXJyLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgIERPTS5uYXZMaW5rc1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzcGxheS1mJyk7IC8vIFJlbW92ZSBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQgY2xhc3NcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGluc2VydCBpY29ucyB0byBwb3B1cCB3aW5kb3dcclxuICBjb25zdCBpbnNlcnRQb3B1cEljb25zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW25ld1dpbmRvd0ljb25JbWcsIGdpdEh1Ykljb25JbWddID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAtYnRuID4gYSA+IGltZycpKTtcclxuICAgIG5ld1dpbmRvd0ljb25JbWcuc3JjID0gbmV3V2luZG93SWNvbjtcclxuICAgIGdpdEh1Ykljb25JbWcuc3JjID0gZ2l0SHViSWNvbjtcclxuICB9O1xyXG5cclxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gcHJvamVjdCBidG5zXHJcbiAgY29uc3QgY2FyZEJ0bkFyciA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1jYXJkJykpO1xyXG4gIGNhcmRCdG5BcnIuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAvLyBGaWx0ZXIgdGhlIHByb2plY3QgYnkgaWRcclxuICAgICAgY29uc3QgW3Byb2plY3RdID0gcHJvamVjdHMuZmlsdGVyKFxyXG4gICAgICAgIChwcm9qKSA9PiBwcm9qLmlkID09PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkLFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB3b3JrU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNlbnQtd29ya3MnKTtcclxuICAgICAgd29ya1NlY3Rpb24uYXBwZW5kQ2hpbGQoRE9NLmNyZWF0ZVBvcHVwV2luZG93KHByb2plY3QpKTtcclxuICAgICAgaW5zZXJ0UG9wdXBJY29ucygpO1xyXG4gICAgICAvLyAgTGlzdGVuIGZvciBjbGljayBvbiBjbG9zZSBpY29uIGluIHBvcHVwIGNvbnRhaW5lclxyXG4gICAgICBET00uY3JlYXRlQ2xvc2VJY29uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKSwgJ3NwYW4nKTtcclxuICAgICAgY29uc3QgcG9wdXBDbG9zZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuLmNsb3NlLWljb24td3JhcHBlcicpO1xyXG4gICAgICBwb3B1cENsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbCcpLnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gIExpc3RlbiBmb3IgY2xpY2sgb3V0c2lkZSBwb3B1cCBjb250YWluZXJcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0LW1vZGFsJykpIHtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW1vZGFsJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmaXJzdENhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWZlYXR1cmUnKTtcclxuICBmaXJzdENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBET00ud29ya1NlY3Rpb24uYXBwZW5kQ2hpbGQoRE9NLmNyZWF0ZVBvcHVwV2luZG93KGZlYXR1cmVkUHJvamVjdHNbMF0pKTtcclxuICAgIC8vICBMaXN0ZW4gZm9yIGNsaWNrIG9uIGNsb3NlIGljb24gaW4gcG9wdXAgY29udGFpbmVyXHJcbiAgICBET00uY3JlYXRlQ2xvc2VJY29uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKSwgJ3NwYW4nKTtcclxuICAgIGNvbnN0IHBvcHVwQ2xvc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi5jbG9zZS1pY29uLXdyYXBwZXInKTtcclxuICAgIHBvcHVwQ2xvc2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbCcpLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIExvY2FsU3RvcmFnZSBFdmVudFxyXG4gIHdpbmRvdy5vbmxvYWQgPSBzZXRMb2NhbFN0b3JlLnVzZVN0b3JhZ2VJbmZvO1xyXG4gIGNvbnN0IGZ1bGxOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpc2l0b3JzLW5hbWUnKTtcclxuICBjb25zdCBlbWFpbElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpc2l0b3JzLWVtYWlsJyk7XHJcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LXRleHQtYXJlYScpO1xyXG5cclxuICBbZnVsbE5hbWUsIGVtYWlsSWQsIG1lc3NhZ2VdLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgIG5vZGUub25rZXlkb3duID0gc2V0TG9jYWxTdG9yZS5zZXRTdG9yYWdlO1xyXG4gICAgbm9kZS5vbmtleXVwID0gc2V0TG9jYWxTdG9yZS5zZXRTdG9yYWdlO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZGlzcGxheVByb2plY3RzKHByb2plY3RzKTtcclxuZGlzcGxheUltYWdlcygpO1xyXG5mb3JtVmFsaWRhdGlvbigpO1xyXG5leGVjdXRlRXZlbnRzKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==