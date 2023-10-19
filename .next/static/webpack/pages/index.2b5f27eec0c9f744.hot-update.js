"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/sections/code.js":
/*!*****************************************!*\
  !*** ./src/components/sections/code.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-start;\\n    min-height: 120vh;\\n    padding-top: calc(var(--nav-height) + 30px); \\n    max-width: 75%;\\n    \\n    h2 {\\n        align-self: start;\\n        margin-top: 10px;\\n        font-weight: 500;\\n        font-size: clamp(var(--fz-xxl), 5vw, var(--fz-heading));\\n        color: var(--lightest-red);\\n        line-height: 0.9;\\n        padding-left: 10px;\\n        ::before {\\n            content: '03.  ';\\n            font-family: var(--font-mono);\\n            font-size: var(--fz-lg);\\n        }\\n    }\\n\\n    .highlight {\\n        color: var(--green);\\n    }\\n\\n    header>span {\\n        font-size: var(--fz-sm);\\n    }\\n\\n    h3 {\\n        padding-top: 5px;\\n    }\\n\\n    h4 {\\n        display: flex;\\n        flex-wrap: wrap;\\n        color: var(--green);\\n        font-weight: 300;\\n        font-size: var(--fz-xs);\\n        line-height: 1.5em;\\n    }\\n\\n    p {\\n        margin: 10px 0 10px;\\n        color: var(--lightest-orange)\\n    }\\n\\n    .featured-projects {\\n        padding: 0;\\n        display: grid;\\n        text-align: left;\\n        font-family: var(--monospace);\\n        color: var(--light-orange);\\n        font-size: var(--fz-md);\\n        list-style: none;\\n        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\\n        gap: 15px;\\n        position: relative;\\n        \\n        li {\\n            border-radius: 7px;\\n            display: flex;\\n            flex-direction: column;\\n            background-color: var(--dark-forest-green);\\n            margin: 15px;\\n            font-family: var(--font-mono);\\n            padding: 25px;\\n            justify-content:space-between;\\n            :hover {\\n                background-color: var(--trans-green);\\n            }\\n            a {\\n                align-content: bottom;\\n                margin-right: 10px;\\n            }\\n        }\\n    }\\n\\n    svg:hover {\\n        stroke: var(--green);\\n        g {\\n            stroke: var(--green);\\n            path {\\n                fill: var(--green);\\n                stroke: var(--green);\\n            }\\n        }\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nconst StyledCodeSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section(_templateObject());\n_c = StyledCodeSection;\nconst Code = (param)=>{\n    let { children, isHome } = param;\n    const featured_projects = [\n        {\n            title: \"Multiplayer .io Game\",\n            description: \"A real-time .io multiplayer game based on the popular board game Splendor, utilizing React and WebSockets.\",\n            techs: [\n                \"Django\",\n                \"React\",\n                \"Typescript\",\n                \"Redis\",\n                \"RestAPI\",\n                \"WebSockets\"\n            ],\n            github_link: \"https://github.com/seankwarren/splndrIO\"\n        },\n        {\n            title: \"JWT User Authentication\",\n            description: \"A tutorial for JSON Web Token user authentication and api access between a Django backend utilizing the Django Rest Framework and React frontend.\",\n            techs: [\n                \"Django\",\n                \"React\",\n                \"RestAPI\",\n                \"simple_jwt\",\n                \"Node.js\"\n            ],\n            github_link: \"https://github.com/seankwarren/Django-React-jwt-authentication\",\n            external_link: \"https://medium.com/@seankwarren722\"\n        },\n        {\n            title: \"Physical Modeling and Simulation\",\n            description: \"A sampling of various analytical and numerical models and simulations, ranging from the newtonion physics of a slinky drop, to the simulation of 2D excitable systems with the FitzHugh-Nagumo Model.\",\n            techs: [\n                \"Jupyter\",\n                \"Javascript\",\n                \"HTML\",\n                \"CSS\",\n                \"Abubu.js\",\n                \"WebGL\",\n                \"GLSL\"\n            ],\n            github_link: \"https://github.com/seankwarren/Modeling-and-Simulation-Samples\",\n            external_link: \"https://seankwarren.github.io/Flocking/\"\n        },\n        {\n            title: \"Portfolio Website 1.0\",\n            description: \"A responsive, mobile-friendly webpage built in React using styled-components. \",\n            techs: [\n                \"React\",\n                \"styled-components\",\n                \"Gatsby\",\n                \"CSS\",\n                \"GraphQL\"\n            ],\n            github_link: \"https://github.com/seankwarren/Modeling-and-Simulation-Samples\",\n            external_link: \"https://seankwarren.gatsbyjs.io/\"\n        },\n        {\n            title: \"Water Quality Analysis\",\n            description: \"An examination of water quality in the Atlanta watershed with a focus on identifying neglected areas and potential strategies for improving water quality monitoring \",\n            techs: [\n                \"Jupyter\",\n                \"Python\",\n                \"Scipy\",\n                \"Pandas\",\n                \"Numpy\",\n                \"TimeSeries\",\n                \"GIS-data\"\n            ],\n            github_link: \"https://github.com/seankwarren/Water-Quality-Analysis\"\n        },\n        {\n            title: \"Metaballs\",\n            description: \"A marching squares root finding algorithm for an artistic rendering of metaballs\",\n            techs: [\n                \"Javascript\",\n                \"HTML\",\n                \"CSS\"\n            ],\n            github_link: \"https://github.com/seankwarren/react-metaballs\",\n            external_link: \"https://seankwarren.github.io/metaballs/\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledCodeSection, {\n        id: \"code\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Some things I've built\"\n            }, void 0, false, {\n                fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n                lineNumber: 146,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"featured-projects\",\n                children: featured_projects.map((project)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        className: \"highlight\",\n                                        children: \"Featured Project\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n                                        lineNumber: 152,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: project.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n                                        lineNumber: 153,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: project.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n                                        lineNumber: 154,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n                                lineNumber: 151,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                                        children: project.techs.map((tech)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    tech,\n                                                    \"\\xa0\\xa0\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n                                                lineNumber: 159,\n                                                columnNumber: 41\n                                            }, undefined);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n                                        lineNumber: 157,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    project.external_link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                        href: project.external_link,\n                                        target: \"_blank\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            width: 20,\n                                            height: 20,\n                                            src: \"/icons/external-link-icon.svg\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n                                            lineNumber: 165,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n                                        lineNumber: 164,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    project.github_link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                        href: project.github_link,\n                                        target: \"_blank\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            width: 20,\n                                            height: 20,\n                                            src: \"/icons/github-link-icon.svg\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n                                            lineNumber: 169,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n                                        lineNumber: 168,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n                                lineNumber: 156,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n                        lineNumber: 150,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n                lineNumber: 147,\n                columnNumber: 13\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sean/Desktop/portfolio-website/src/components/sections/code.js\",\n        lineNumber: 145,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = Code;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Code);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledCodeSection\");\n$RefreshReg$(_c1, \"Code\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9jb2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0w7QUFDYTtBQUV2QyxNQUFNRyxvQkFBb0JELGlFQUFjO0tBQWxDQztBQTZGTixNQUFNRSxPQUFPO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUU7SUFFOUIsTUFBTUMsb0JBQW9CO1FBQ3RCO1lBQ0lDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxPQUFPO2dCQUFDO2dCQUFVO2dCQUFTO2dCQUFjO2dCQUFTO2dCQUFXO2FBQWE7WUFDMUVDLGFBQWE7UUFDakI7UUFDQTtZQUNJSCxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsT0FBTztnQkFBQztnQkFBVTtnQkFBUztnQkFBVztnQkFBYzthQUFVO1lBQzlEQyxhQUFhO1lBQ2JDLGVBQWU7UUFDbkI7UUFDQTtZQUNJSixPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsT0FBTztnQkFBQztnQkFBVztnQkFBYztnQkFBUTtnQkFBTztnQkFBWTtnQkFBUzthQUFPO1lBQzVFQyxhQUFhO1lBQ2JDLGVBQWU7UUFDbkI7UUFDQTtZQUNJSixPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsT0FBTztnQkFBQztnQkFBUztnQkFBcUI7Z0JBQVU7Z0JBQU87YUFBVTtZQUNqRUMsYUFBYTtZQUNiQyxlQUFlO1FBQ25CO1FBQ0E7WUFDSUosT0FBTztZQUNQQyxhQUFhO1lBQ2JDLE9BQU87Z0JBQUM7Z0JBQVc7Z0JBQVU7Z0JBQVM7Z0JBQVU7Z0JBQVM7Z0JBQWM7YUFBVztZQUNsRkMsYUFBYTtRQUNqQjtRQUNBO1lBQ0lILE9BQU87WUFDUEMsYUFBYTtZQUNiQyxPQUFPO2dCQUFDO2dCQUFjO2dCQUFRO2FBQU07WUFDcENDLGFBQWE7WUFDYkMsZUFBZTtRQUNuQjtLQUVIO0lBRUQscUJBQ0ksOERBQUNWO1FBQWtCVyxJQUFHOzswQkFDbEIsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFHQyxXQUFVOzBCQUNSVCxrQkFBa0JVLEdBQUcsQ0FBQyxDQUFDQztvQkFDckIscUJBQ0ksOERBQUNDOzswQ0FDRyw4REFBQ0M7O2tEQUNHLDhEQUFDQzt3Q0FBS0wsV0FBVTtrREFBWTs7Ozs7O2tEQUM1Qiw4REFBQ007a0RBQUlKLFFBQVFWLEtBQUs7Ozs7OztrREFDbEIsOERBQUNlO2tEQUFHTCxRQUFRVCxXQUFXOzs7Ozs7Ozs7Ozs7MENBRTNCLDhEQUFDZTs7a0RBQ0csOERBQUNDO2tEQUFJUCxRQUFRUixLQUFLLENBQUNPLEdBQUcsQ0FBQyxDQUFDUzs0Q0FDcEIscUJBQ0ksOERBQUNMOztvREFBTUs7b0RBQUs7Ozs7Ozs7d0NBRXBCOzs7Ozs7b0NBRUNSLFFBQVFOLGFBQWEsa0JBQ3RCLDhEQUFDZTt3Q0FBRUMsTUFBTVYsUUFBUU4sYUFBYTt3Q0FBRWlCLFFBQU87a0RBQ25DLDRFQUFDOUIsbURBQUtBOzRDQUFDK0IsT0FBTzs0Q0FBSUMsUUFBUTs0Q0FBSUMsS0FBSTs7Ozs7Ozs7Ozs7b0NBRXJDZCxRQUFRUCxXQUFXLGtCQUNwQiw4REFBQ2dCO3dDQUFFQyxNQUFNVixRQUFRUCxXQUFXO3dDQUFFa0IsUUFBTztrREFDakMsNEVBQUM5QixtREFBS0E7NENBQUMrQixPQUFPOzRDQUFJQyxRQUFROzRDQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFLdEQ7Ozs7OztZQUVIM0I7Ozs7Ozs7QUFHYjtNQWpGTUQ7QUFtRk4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvY29kZS5qcz9kZGFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3R5bGVkQ29kZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWluLWhlaWdodDogMTIwdmg7XG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tbmF2LWhlaWdodCkgKyAzMHB4KTsgXG4gICAgbWF4LXdpZHRoOiA3NSU7XG4gICAgXG4gICAgaDIge1xuICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCh2YXIoLS1mei14eGwpLCA1dncsIHZhcigtLWZ6LWhlYWRpbmcpKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LXJlZCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJzAzLiAgJztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mei1sZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgICB9XG5cbiAgICBoZWFkZXI+c3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZnotc20pO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG5cbiAgICBoNCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mei14cyk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LW9yYW5nZSlcbiAgICB9XG5cbiAgICAuZmVhdHVyZWQtcHJvamVjdHMge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbW9ub3NwYWNlKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LW9yYW5nZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZnotbWQpO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjBweCwgMWZyKSk7XG4gICAgICAgIGdhcDogMTVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWZvcmVzdC1ncmVlbik7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIDpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnMtZ3JlZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogYm90dG9tO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN2Zzpob3ZlciB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tZ3JlZW4pO1xuICAgICAgICBnIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZ3JlZW4pO1xuICAgICAgICAgICAgcGF0aCB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tZ3JlZW4pO1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZ3JlZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYFxuXG5cbmNvbnN0IENvZGUgPSAoeyBjaGlsZHJlbiwgaXNIb21lIH0pID0+IHtcblxuICAgIGNvbnN0IGZlYXR1cmVkX3Byb2plY3RzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJNdWx0aXBsYXllciAuaW8gR2FtZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSByZWFsLXRpbWUgLmlvIG11bHRpcGxheWVyIGdhbWUgYmFzZWQgb24gdGhlIHBvcHVsYXIgYm9hcmQgZ2FtZSBTcGxlbmRvciwgdXRpbGl6aW5nIFJlYWN0IGFuZCBXZWJTb2NrZXRzLlwiLFxuICAgICAgICAgICAgdGVjaHM6IFtcIkRqYW5nb1wiLCBcIlJlYWN0XCIsIFwiVHlwZXNjcmlwdFwiLCBcIlJlZGlzXCIsIFwiUmVzdEFQSVwiLCBcIldlYlNvY2tldHNcIl0sXG4gICAgICAgICAgICBnaXRodWJfbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vc2Vhbmt3YXJyZW4vc3BsbmRySU9cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiSldUIFVzZXIgQXV0aGVudGljYXRpb25cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgdHV0b3JpYWwgZm9yIEpTT04gV2ViIFRva2VuIHVzZXIgYXV0aGVudGljYXRpb24gYW5kIGFwaSBhY2Nlc3MgYmV0d2VlbiBhIERqYW5nbyBiYWNrZW5kIHV0aWxpemluZyB0aGUgRGphbmdvIFJlc3QgRnJhbWV3b3JrIGFuZCBSZWFjdCBmcm9udGVuZC5cIixcbiAgICAgICAgICAgIHRlY2hzOiBbXCJEamFuZ29cIiwgXCJSZWFjdFwiLCBcIlJlc3RBUElcIiwgXCJzaW1wbGVfand0XCIsIFwiTm9kZS5qc1wiXSxcbiAgICAgICAgICAgIGdpdGh1Yl9saW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZWFua3dhcnJlbi9EamFuZ28tUmVhY3Qtand0LWF1dGhlbnRpY2F0aW9uXCIsXG4gICAgICAgICAgICBleHRlcm5hbF9saW5rOiBcImh0dHBzOi8vbWVkaXVtLmNvbS9Ac2Vhbmt3YXJyZW43MjJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiUGh5c2ljYWwgTW9kZWxpbmcgYW5kIFNpbXVsYXRpb25cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgc2FtcGxpbmcgb2YgdmFyaW91cyBhbmFseXRpY2FsIGFuZCBudW1lcmljYWwgbW9kZWxzIGFuZCBzaW11bGF0aW9ucywgcmFuZ2luZyBmcm9tIHRoZSBuZXd0b25pb24gcGh5c2ljcyBvZiBhIHNsaW5reSBkcm9wLCB0byB0aGUgc2ltdWxhdGlvbiBvZiAyRCBleGNpdGFibGUgc3lzdGVtcyB3aXRoIHRoZSBGaXR6SHVnaC1OYWd1bW8gTW9kZWwuXCIsXG4gICAgICAgICAgICB0ZWNoczogW1wiSnVweXRlclwiLCBcIkphdmFzY3JpcHRcIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiQWJ1YnUuanNcIiwgXCJXZWJHTFwiLCBcIkdMU0xcIl0sXG4gICAgICAgICAgICBnaXRodWJfbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vc2Vhbmt3YXJyZW4vTW9kZWxpbmctYW5kLVNpbXVsYXRpb24tU2FtcGxlc1wiLFxuICAgICAgICAgICAgZXh0ZXJuYWxfbGluazogXCJodHRwczovL3NlYW5rd2FycmVuLmdpdGh1Yi5pby9GbG9ja2luZy9cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiUG9ydGZvbGlvIFdlYnNpdGUgMS4wXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIHJlc3BvbnNpdmUsIG1vYmlsZS1mcmllbmRseSB3ZWJwYWdlIGJ1aWx0IGluIFJlYWN0IHVzaW5nIHN0eWxlZC1jb21wb25lbnRzLiBcIixcbiAgICAgICAgICAgIHRlY2hzOiBbXCJSZWFjdFwiLCBcInN0eWxlZC1jb21wb25lbnRzXCIsIFwiR2F0c2J5XCIsIFwiQ1NTXCIsIFwiR3JhcGhRTFwiXSxcbiAgICAgICAgICAgIGdpdGh1Yl9saW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZWFua3dhcnJlbi9Nb2RlbGluZy1hbmQtU2ltdWxhdGlvbi1TYW1wbGVzXCIsXG4gICAgICAgICAgICBleHRlcm5hbF9saW5rOiBcImh0dHBzOi8vc2Vhbmt3YXJyZW4uZ2F0c2J5anMuaW8vXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIldhdGVyIFF1YWxpdHkgQW5hbHlzaXNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFuIGV4YW1pbmF0aW9uIG9mIHdhdGVyIHF1YWxpdHkgaW4gdGhlIEF0bGFudGEgd2F0ZXJzaGVkIHdpdGggYSBmb2N1cyBvbiBpZGVudGlmeWluZyBuZWdsZWN0ZWQgYXJlYXMgYW5kIHBvdGVudGlhbCBzdHJhdGVnaWVzIGZvciBpbXByb3Zpbmcgd2F0ZXIgcXVhbGl0eSBtb25pdG9yaW5nIFwiLFxuICAgICAgICAgICAgdGVjaHM6IFtcIkp1cHl0ZXJcIiwgXCJQeXRob25cIiwgXCJTY2lweVwiLCBcIlBhbmRhc1wiLCBcIk51bXB5XCIsIFwiVGltZVNlcmllc1wiLCBcIkdJUy1kYXRhXCJdLFxuICAgICAgICAgICAgZ2l0aHViX2xpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NlYW5rd2FycmVuL1dhdGVyLVF1YWxpdHktQW5hbHlzaXNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiTWV0YWJhbGxzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIG1hcmNoaW5nIHNxdWFyZXMgcm9vdCBmaW5kaW5nIGFsZ29yaXRobSBmb3IgYW4gYXJ0aXN0aWMgcmVuZGVyaW5nIG9mIG1ldGFiYWxsc1wiLFxuICAgICAgICAgICAgdGVjaHM6IFtcIkphdmFzY3JpcHRcIiwgXCJIVE1MXCIsIFwiQ1NTXCJdLFxuICAgICAgICAgICAgZ2l0aHViX2xpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NlYW5rd2FycmVuL3JlYWN0LW1ldGFiYWxsc1wiLFxuICAgICAgICAgICAgZXh0ZXJuYWxfbGluazogXCJodHRwczovL3NlYW5rd2FycmVuLmdpdGh1Yi5pby9tZXRhYmFsbHMvXCJcbiAgICAgICAgfSxcblxuICAgIF1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRDb2RlU2VjdGlvbiBpZD1cImNvZGVcIj5cbiAgICAgICAgICAgIDxoMj5Tb21lIHRoaW5ncyBJJ3ZlIGJ1aWx0PC9oMj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZlYXR1cmVkLXByb2plY3RzJz5cbiAgICAgICAgICAgICAgICB7IGZlYXR1cmVkX3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPkZlYXR1cmVkIFByb2plY3Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cHJvamVjdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pntwcm9qZWN0LnRlY2hzLm1hcCgodGVjaCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGVjaH0mbmJzcDsmbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmV4dGVybmFsX2xpbmsgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3QuZXh0ZXJuYWxfbGlua30gdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gc3JjPVwiL2ljb25zL2V4dGVybmFsLWxpbmstaWNvbi5zdmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5naXRodWJfbGluayAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LmdpdGh1Yl9saW5rfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSBzcmM9XCIvaWNvbnMvZ2l0aHViLWxpbmstaWNvbi5zdmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9TdHlsZWRDb2RlU2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvZGVcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0Iiwic3R5bGVkIiwiU3R5bGVkQ29kZVNlY3Rpb24iLCJzZWN0aW9uIiwiQ29kZSIsImNoaWxkcmVuIiwiaXNIb21lIiwiZmVhdHVyZWRfcHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGVjaHMiLCJnaXRodWJfbGluayIsImV4dGVybmFsX2xpbmsiLCJpZCIsImgyIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9qZWN0IiwibGkiLCJoZWFkZXIiLCJzcGFuIiwiaDMiLCJwIiwiZm9vdGVyIiwiaDQiLCJ0ZWNoIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJ3aWR0aCIsImhlaWdodCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/sections/code.js\n"));

/***/ })

});