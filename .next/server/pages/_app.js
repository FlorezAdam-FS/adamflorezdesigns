(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 656:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Tl1eP"
};


/***/ }),

/***/ 170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(656);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
;// CONCATENATED MODULE: ./components/Footer.js




const Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Footer_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-center items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "https://github.com/FlorezAdam-FS",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiGithub, {
                        className: "text-white text-2xl mr-10 hover:text-orange"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "https://www.instagram.com/adamflorezdesigns/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiInstagram, {
                        className: "text-white text-2xl mr-10 hover:text-orange"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "https://www.linkedin.com/in/adamflorez/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiLinkedin, {
                        className: "text-white text-2xl hover:text-orange"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./components/Navbar.js
var Navbar = __webpack_require__(10);
;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-center align-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full bg-[#FFC170]",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex-grow",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 287:
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,10], () => (__webpack_exec__(170)));
module.exports = __webpack_exports__;

})();