"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./models/projects.js
const data = [
    {
        name: "Crypto Currency Tracker",
        link: "https://afdesignscryptotracker.netlify.app/",
        languages: [
            "React",
            "styled-components"
        ],
        API: "CoinGecko",
        APILink: "https://www.coingecko.com/en/api",
        img: "https://i.imgur.com/95E3jf2.png"
    },
    {
        name: "Music Player",
        link: "https://afdesignsmusicplayer.netlify.app/",
        languages: [
            "HTML",
            "CSS",
            "Javascript"
        ],
        API: null,
        img: "https://i.imgur.com/ltBEUej.jpg"
    },
    {
        name: "Tech Newsie",
        link: "https://florezadam-fs.github.io/WD5/#/",
        languages: [
            "React",
            "CSS"
        ],
        API: "Free News API",
        APILink: "https://free-docs.newscatcherapi.com/#example-call",
        img: "https://i.imgur.com/bpaogRH.png"
    },
    {
        name: "Historical Stock Data",
        link: "https://afdesignsstockapp.netlify.app",
        languages: [
            "HTML",
            "CSS",
            "Javascript"
        ],
        API: "MarketStack",
        APILink: "https://marketstack.com/?utm_source=rapidapi&utm_medium=Leads%20Acquisition&utm_content=productlist11122021&utm_campaign=productlist11122021",
        img: "https://i.imgur.com/5l50TEt.png"
    },
    {
        name: "BMI Calculator",
        link: "https://afdesignsbmicalc.netlify.app",
        languages: [
            "HTML",
            "CSS",
            "Javascript",
            "Bootstrap"
        ],
        API: null,
        img: "https://i.imgur.com/bZ7GQi8.png"
    },
    {
        name: "This Portfolio Site!",
        link: "/",
        languages: [
            "NextJS",
            "TailwindCSS"
        ],
        API: null,
        img: "https://i.imgur.com/Qx4qFsE.png"
    }, 
];

;// CONCATENATED MODULE: ./pages/api/projects.js

function handler(req, res) {
    res.status(200).json({
        data: data
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(833));
module.exports = __webpack_exports__;

})();