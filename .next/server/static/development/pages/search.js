module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Repo.jsx":
/*!*****************************!*\
  !*** ./components/Repo.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  repo,
  colors
}) => {
  const openIssuesCount = repo.open_issues_count;
  let langColor = null;
  repo.language && (langColor = colors[repo.language].color);
  return __jsx("div", {
    className: "jsx-194445417" + " " + "root"
  }, __jsx("div", {
    className: "jsx-194445417" + " " + "repo-info"
  }, __jsx("h3", {
    className: "jsx-194445417"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: `/detail?owner=${repo.owner.login}&name=${repo.name}`
  }, __jsx("a", {
    className: "jsx-194445417"
  }, __jsx("span", {
    className: "jsx-194445417" + " " + "repo-title-owner"
  }, repo.owner.login), __jsx("span", {
    className: "jsx-194445417"
  }, " / "), __jsx("span", {
    className: "jsx-194445417" + " " + "repo-title"
  }, repo.name)))), __jsx("p", {
    className: "jsx-194445417" + " " + "repo-desc"
  }, repo.description), __jsx("div", {
    className: "jsx-194445417" + " " + "other-info"
  }, langColor && __jsx("span", {
    style: {
      display: 'inline-block',
      background: `${langColor}`,
      width: '10px',
      height: '10px',
      borderRadius: '5px',
      marginRight: '5px'
    },
    className: "jsx-194445417"
  }), __jsx("span", {
    className: "jsx-194445417" + " " + "lang"
  }, repo.language), __jsx("span", {
    className: "jsx-194445417" + " " + "stars"
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "star",
    theme: "filled"
  }), repo.stargazers_count), __jsx("span", {
    className: "jsx-194445417" + " " + "forks"
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "fork"
  }), repo.forks_count), __jsx("span", {
    className: "jsx-194445417" + " " + "last-updated"
  }, moment__WEBPACK_IMPORTED_MODULE_4___default()(repo.updated_at).format("LL")), openIssuesCount > 0 && __jsx("span", {
    className: "jsx-194445417" + " " + "open-issues"
  }, openIssuesCount, " ", openIssuesCount > 1 ? 'issues need help' : 'issue needs help'))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "194445417"
  }, ".jsx-194445417{*/;}.root.jsx-194445417{padding:20px;}.root.jsx-194445417+.root.jsx-194445417{border-top:1px solid #ddd;}.repo-title-owner.jsx-194445417{font-size:20px;color:#0366d6;font-weight:400;}.repo-title.jsx-194445417{font-size:20px;color:#0366d6;font-weight:500;}.other-info.jsx-194445417>span.jsx-194445417+span.jsx-194445417{margin-right:12px;font-size:12px;}.repo-desc.jsx-194445417{max-width:550px;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFznvJbnqItcXOmhueebrlxcbmV4dOmhueebrlxcbmV4dC1naXRodWJcXGNvbXBvbmVudHNcXFJlcG8uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEd0IsQUFHa0MsQUFHYSxBQUdYLEFBS0EsQUFLRyxBQUlGLEFBRWpCLEdBQ1AsVUF0QkksRUFNa0IsQUFLQSxDQVNDLEVBSkEsUUFibkIsR0FJb0IsQUFLQSxFQVNwQixFQUpBLFlBVEEsQUFLQSIsImZpbGUiOiJEOlxc57yW56iLXFzpobnnm65cXG5leHTpobnnm65cXG5leHQtZ2l0aHViXFxjb21wb25lbnRzXFxSZXBvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgcmVwbywgY29sb3JzIH0pID0+IHtcclxuICAgIGNvbnN0IG9wZW5Jc3N1ZXNDb3VudCA9IHJlcG8ub3Blbl9pc3N1ZXNfY291bnQ7XHJcbiAgICBsZXQgbGFuZ0NvbG9yID0gbnVsbDtcclxuICAgIHJlcG8ubGFuZ3VhZ2UgJiYgKGxhbmdDb2xvciA9IGNvbG9yc1tyZXBvLmxhbmd1YWdlXS5jb2xvcik7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlcG8taW5mb1wiPlxyXG5cdFx0XHRcdDxoMz5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvZGV0YWlsP293bmVyPSR7cmVwby5vd25lci5sb2dpbn0mbmFtZT0ke3JlcG8ubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXBvLXRpdGxlLW93bmVyXCI+e3JlcG8ub3duZXIubG9naW59PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IC8gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVwby10aXRsZVwiPntyZXBvLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJyZXBvLWRlc2NcIj57cmVwby5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdGhlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2xhbmdDb2xvciAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgJHtsYW5nQ29sb3J9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc1cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFuZ1wiPntyZXBvLmxhbmd1YWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGFyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwic3RhclwiIHRoZW1lPVwiZmlsbGVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlcG8uc3RhcmdhemVyc19jb3VudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJmb3JrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlcG8uZm9ya3NfY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhc3QtdXBkYXRlZFwiPlxyXG5cdFx0XHRcdFx0XHR7bW9tZW50KHJlcG8udXBkYXRlZF9hdCkuZm9ybWF0KFwiTExcIil9XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge29wZW5Jc3N1ZXNDb3VudCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3Blbi1pc3N1ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcGVuSXNzdWVzQ291bnR9IHtvcGVuSXNzdWVzQ291bnQgPiAxID8gJ2lzc3VlcyBuZWVkIGhlbHAnIDogJ2lzc3VlIG5lZWRzIGhlbHAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yb290ICsgLnJvb3QgeyBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXBvLXRpdGxlLW93bmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMzY2ZDY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXBvLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMzY2ZDY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5vdGhlci1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmVwby1kZXNjIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHQgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\\u7F16\u7A0B\\\\\u9879\u76EE\\\\next\u9879\u76EE\\\\next-github\\\\components\\\\Repo.jsx */"));
});

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const axios = __webpack_require__(/*! axios */ "axios");

const github_base_url = 'https://api.github.com';
const isServer = true; //客户端和服务器端最终调用的方法

async function requestGithub(method, url, data, headers) {
  try {
    const result = await axios({
      method,
      url: `${github_base_url}${url}`,
      data,
      headers
    });

    if (result.status === 200) {
      return result;
    } else {
      console.log('status not ok');
      return {
        data: false,
        status: result.status
      };
    }
  } catch (err) {
    console.log('error caught!'); // console.error(err)

    return {
      data: false
    };
  }
} //浏览器环境： axios.get('http://localhost:3000/xxx')
//node环境： axios.get('http://localhost:80/xxx')


async function request({
  method = 'GET',
  url,
  data = {}
}, req, res) {
  if (!url) {
    throw Error('url must be provided');
  }

  if (isServer) {
    //是服务端环境直接请求github数据（80端口没有监听程序）
    const session = req.session;
    const githubAuth = session.githubAuth || {};
    const headers = {};
    const token = githubAuth && githubAuth.access_token;

    if (token) {
      headers['Authorization'] = `${githubAuth.token_type} ${token}`;
    }

    return await requestGithub(method, url, data, headers);
  } else {
    //客户端环境用server中的处理程序（ server/api ）
    return await axios({
      method,
      url: `/github${url}`,
      //`http://localhost:3000/github${url}`
      data
    });
  }
}

module.exports = {
  request,
  requestGithub
};

/***/ }),

/***/ "./lib/repo-basic-cache.js":
/*!*********************************!*\
  !*** ./lib/repo-basic-cache.js ***!
  \*********************************/
/*! exports provided: setCache, getCache, cacheArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCache", function() { return setCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCache", function() { return getCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheArray", function() { return cacheArray; });
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lru-cache */ "lru-cache");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_0__);

const cache = new lru_cache__WEBPACK_IMPORTED_MODULE_0___default.a({
  maxAge: 1000 * 60 * 60 //仓库的基础信息变化不快

}); // full_name: /facebook/react

function setCache(repo) {
  const full_name = repo.full_name;
  cache.set(full_name, repo);
}
function getCache(full_name) {
  return cache.get(full_name);
}
function cacheArray(repos) {
  if (repos && Array.isArray(repos)) {
    repos.forEach(repo => setCache(repo));
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/pagination */ "antd/lib/pagination");
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_statistic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/statistic */ "antd/lib/statistic");
/* harmony import */ var antd_lib_statistic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_statistic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/list */ "antd/lib/list");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.jsx");
/* harmony import */ var _testData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../testData */ "./testData.js");
/* harmony import */ var _lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/repo-basic-cache */ "./lib/repo-basic-cache.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

const LANGUAGES = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Java', 'Rust', 'Python', 'C#', 'Swift', 'C++', 'C'];
const SORT_TYPES = [{
  name: 'Best Match'
}, {
  name: 'Most Stars',
  value: 'stars',
  order: 'desc'
}, {
  name: 'Fewest Stars',
  value: 'stars',
  order: 'asc'
}, {
  name: 'Most Forks',
  value: 'forks',
  order: 'desc'
}, {
  name: 'Fewest Forks',
  value: 'forks',
  order: 'asc'
}];
const per_page = 10;
const selectedItemStyle = {
  borderLeft: '2px solid #e36209',
  fontWeight: 100
};
const initRepos = {
  total_count: 0,
  items: []
};
const isServer = true;

function noop() {}

const FilterLink = Object(react__WEBPACK_IMPORTED_MODULE_7__["memo"])(({
  name,
  q,
  lang,
  sort,
  order,
  page
}) => {
  let queryString = `?q=${q}`;
  lang && (queryString += `&lang=${lang}`);
  sort && (queryString += `&sort=${sort}&order=${order || 'desc'}`);
  page && (queryString += `&page=${page}`);
  queryString += `&per_page=${per_page}`;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: `/search${queryString}`
  }, Object(react__WEBPACK_IMPORTED_MODULE_7__["isValidElement"])(name) ? name : __jsx("a", null, name));
});
function Search({
  repos = initRepos,
  colors
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const querys = Object.assign({}, router.query);
  console.log(querys);
  Object.keys(querys).forEach(key => {
    querys[key] = decodeURIComponent(querys[key]);
  });
  console.log(querys);
  const {
    q,
    sort,
    order,
    lang,
    page
  } = querys;
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    if (!isServer) {
      Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_12__["cacheArray"])(repos.items);
    }
  });

  const resetLanguage = () => {
    const queryObj = {};
    q && (queryObj['q'] = q);
    sort && (queryObj['sort'] = sort);
    order && (queryObj['order'] = order);
    per_page && (queryObj['per_page'] = per_page);
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
      pathname: '/search',
      query: queryObj
    });
  };

  return __jsx("div", {
    className: "jsx-2076330023" + " " + "root"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    gutter: 20
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 6
  }, __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bordered: true,
    header: __jsx("span", {
      className: "jsx-2076330023" + " " + "list-header"
    }, "Languages"),
    style: {
      marginBottom: 20
    },
    dataSource: LANGUAGES,
    renderItem: item => {
      const selected = item === lang;
      return __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        style: selected ? selectedItemStyle : null,
        actions: selected ? [__jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "close-circle",
          theme: "filled",
          onClick: resetLanguage
        })] : null
      }, selected ? __jsx("span", {
        className: "jsx-2076330023"
      }, item) : __jsx(FilterLink, _extends({}, querys, {
        lang: item,
        name: item,
        page: null
      })));
    }
  }), __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bordered: true,
    header: __jsx("span", {
      className: "jsx-2076330023" + " " + "list-header"
    }, "Sort By"),
    dataSource: SORT_TYPES,
    renderItem: item => {
      let selected = false;

      if (item.name === 'Best Match' && !sort) {
        selected = true;
      } else if (item.value === sort && item.order === order) {
        selected = true;
      }

      return __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? __jsx("span", {
        className: "jsx-2076330023"
      }, item.name) : __jsx(FilterLink, _extends({}, querys, {
        name: item.name,
        sort: item.value,
        order: item.order,
        page: null
      })));
    }
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 18
  }, __jsx("h3", {
    className: "jsx-2076330023" + " " + "repos-title"
  }, __jsx(antd_lib_statistic__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: repos.total_count
  }), __jsx("span", {
    className: "jsx-2076330023"
  }, "\xA0repository results")), repos.items.map(repo => __jsx(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    repo: repo,
    key: repo.id,
    colors: colors
  })), __jsx("div", {
    className: "jsx-2076330023" + " " + "pagination"
  }, __jsx(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1___default.a, {
    pageSize: per_page,
    current: +page || 1,
    total: 1000 //github限制返回1000条
    ,
    onChange: noop,
    itemRender: (page, type, ol) => {
      const p = type === 'page' ? page : type === 'prev' ? page - 1 : page + 1;
      const name = type === 'page' ? page : ol;
      return __jsx(FilterLink, _extends({}, querys, {
        page: p,
        name: name
      }));
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "2076330023"
  }, ".root.jsx-2076330023{padding:30px 0;}.repos-title.jsx-2076330023{border-bottom:1px solid #ddd;font-size:24px;line-height:1.5;padding-bottom:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.list-header.jsx-2076330023{font-weight:700;font-size:16px;}.list-item.jsx-2076330023{position:relative;}.close-circle.jsx-2076330023{position:absolute;right:20px;top:20px;}.pagination.jsx-2076330023{padding:20px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFznvJbnqItcXOmhueebrlxcbmV4dOmhueebrlxcbmV4dC1naXRodWJcXHBhZ2VzXFxzZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUx3QixBQUdvQyxBQUdjLEFBUWIsQUFJRSxBQUdBLEFBS0wsYUFDSyxFQXZCdEIsQ0FXbUIsRUFJbkIsQUFHZSxXQWZJLEFBZ0JOLEVBUGIsQUFZQSxPQUpBLE1BaEJvQixnQkFDSSxvQkFDUCwwRUFDYyx5R0FDL0IiLCJmaWxlIjoiRDpcXOe8lueoi1xc6aG555uuXFxuZXh06aG555uuXFxuZXh0LWdpdGh1YlxccGFnZXNcXHNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IG1lbW8sIGlzVmFsaWRFbGVtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUm93LCBDb2wsIExpc3QsIFBhZ2luYXRpb24sIFN0YXRpc3RpYywgSWNvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi90ZXN0RGF0YSdcclxuaW1wb3J0IHsgY2FjaGVBcnJheSB9IGZyb20gJy4uL2xpYi9yZXBvLWJhc2ljLWNhY2hlJ1xyXG5jb25zdCBhcGkgPSByZXF1aXJlKCcuLi9saWIvYXBpJylcclxuXHJcbmNvbnN0IExBTkdVQUdFUyA9IFsnSmF2YVNjcmlwdCcsICdUeXBlU2NyaXB0JywgJ0hUTUwnLCAnQ1NTJywgJ0phdmEnLCAnUnVzdCcsICdQeXRob24nLCAnQyMnLCAnU3dpZnQnLCAnQysrJywgJ0MnXTtcclxuY29uc3QgU09SVF9UWVBFUyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnQmVzdCBNYXRjaCcsXHJcbiAgICB9LCAgXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ01vc3QgU3RhcnMnLFxyXG4gICAgICAgIHZhbHVlOiAnc3RhcnMnLFxyXG4gICAgICAgIG9yZGVyOiAnZGVzYycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdGZXdlc3QgU3RhcnMnLFxyXG4gICAgICAgIHZhbHVlOiAnc3RhcnMnLFxyXG4gICAgICAgIG9yZGVyOiAnYXNjJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ01vc3QgRm9ya3MnLFxyXG4gICAgICAgIHZhbHVlOiAnZm9ya3MnLFxyXG4gICAgICAgIG9yZGVyOiAnZGVzYycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdGZXdlc3QgRm9ya3MnLFxyXG4gICAgICAgIHZhbHVlOiAnZm9ya3MnLFxyXG4gICAgICAgIG9yZGVyOiAnYXNjJyxcclxuICAgIH0sXHJcbl07XHJcbmNvbnN0IHBlcl9wYWdlID0gMTA7XHJcbmNvbnN0IHNlbGVjdGVkSXRlbVN0eWxlID0ge1xyXG4gICAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCAjZTM2MjA5JyxcclxuICAgIGZvbnRXZWlnaHQ6IDEwMCxcclxufVxyXG5jb25zdCBpbml0UmVwb3MgPSB7XHJcbiAgICB0b3RhbF9jb3VudDogMCxcclxuICAgIGl0ZW1zOiBbXVxyXG59O1xyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xyXG5mdW5jdGlvbiBub29wKCkgeyB9XHJcblxyXG5jb25zdCBGaWx0ZXJMaW5rID0gbWVtbygoeyBuYW1lLCBxLCBsYW5nLCBzb3J0LCBvcmRlciwgcGFnZSB9KSA9PiB7XHJcbiAgICBsZXQgcXVlcnlTdHJpbmcgPSBgP3E9JHtxfWA7XHJcbiAgICBsYW5nICYmIChxdWVyeVN0cmluZyArPSBgJmxhbmc9JHtsYW5nfWApO1xyXG4gICAgc29ydCAmJiAocXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCAnZGVzYyd9YCk7XHJcbiAgICBwYWdlICYmIChxdWVyeVN0cmluZyArPSBgJnBhZ2U9JHtwYWdlfWApO1xyXG4gICAgcXVlcnlTdHJpbmcgKz0gYCZwZXJfcGFnZT0ke3Blcl9wYWdlfWA7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9zZWFyY2gke3F1ZXJ5U3RyaW5nfWB9PiBcclxuICAgICAgICAgICAge2lzVmFsaWRFbGVtZW50KG5hbWUpID8gbmFtZSA6IDxhPntuYW1lfTwvYT59XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7IHJlcG9zID0gaW5pdFJlcG9zLCBjb2xvcnMgfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IC4uLnF1ZXJ5cyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2cocXVlcnlzKVxyXG4gICAgT2JqZWN0LmtleXMocXVlcnlzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgcXVlcnlzW2tleV0gPSBkZWNvZGVVUklDb21wb25lbnQocXVlcnlzW2tleV0pO1xyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHF1ZXJ5cylcclxuICAgIGNvbnN0IHsgcSwgc29ydCwgb3JkZXIsIGxhbmcsIHBhZ2UgfSA9IHF1ZXJ5cztcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghaXNTZXJ2ZXIpIHtcclxuICAgICAgICAgICAgY2FjaGVBcnJheShyZXBvcy5pdGVtcylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJlc2V0TGFuZ3VhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlPYmogPSB7fTtcclxuICAgICAgICBxICYmIChxdWVyeU9ialsncSddID0gcSk7XHJcbiAgICAgICAgc29ydCAmJiAocXVlcnlPYmpbJ3NvcnQnXSA9IHNvcnQpO1xyXG4gICAgICAgIG9yZGVyICYmIChxdWVyeU9ialsnb3JkZXInXSA9IG9yZGVyKTtcclxuICAgICAgICBwZXJfcGFnZSAmJiAocXVlcnlPYmpbJ3Blcl9wYWdlJ10gPSBwZXJfcGFnZSk7XHJcblxyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvc2VhcmNoJyxcclxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsyMH0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj5MYW5ndWFnZXM8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e0xBTkdVQUdFU31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGl0ZW0gPT09IGxhbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3NlbGVjdGVkID8gc2VsZWN0ZWRJdGVtU3R5bGUgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtzZWxlY3RlZCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzxJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjbG9zZS1jaXJjbGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImZpbGxlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0TGFuZ3VhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPl0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnF1ZXJ5c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+U29ydCBCeTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e1NPUlRfVFlQRVN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSAnQmVzdCBNYXRjaCcgJiYgIXNvcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udmFsdWUgPT09IHNvcnQgJiYgaXRlbS5vcmRlciA9PT0gb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3NlbGVjdGVkID8gc2VsZWN0ZWRJdGVtU3R5bGUgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkID8gPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnF1ZXJ5c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydD17aXRlbS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17aXRlbS5vcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXBvcy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhdGlzdGljIHZhbHVlPXtyZXBvcy50b3RhbF9jb3VudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7cmVwb3NpdG9yeSByZXN1bHRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlcG9zLml0ZW1zLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfSBjb2xvcnM9e2NvbG9yc30gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtwZXJfcGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9eytwYWdlIHx8IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbD17MTAwMH0gLy9naXRodWLpmZDliLbov5Tlm54xMDAw5p2hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bm9vcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXI9eyhwYWdlLCB0eXBlLCBvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0eXBlID09PSAncGFnZScgPyBwYWdlIDogdHlwZSA9PT0gJ3ByZXYnID8gcGFnZSAtIDEgOiBwYWdlICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gdHlwZSA9PT0gJ3BhZ2UnID8gcGFnZSA6IG9sO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucXVlcnlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXBvcy10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlzdC1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNsb3NlLWNpcmNsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5TZWFyY2guZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnksIGFzUGF0aCwgcmVxLCByZXMgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1NlYXJjaCBnZXRJbml0aWFsUHJvcHMgY2FsbGVkJyk7XHJcbiAgICBjb25zb2xlLmxvZyhxdWVyeSlcclxuICAgIGlmICghcXVlcnkucSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlcG9zOiBpbml0UmVwb3NcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhhc1BhdGgpXHJcbiAgICBcclxuICAgIGNvbnN0IHF1ZXJ5QXJyID0gYXNQYXRoLnNwbGl0KCc/JylbMV0uc3BsaXQoJyYnKTtcclxuICAgIGNvbnNvbGUubG9nKHF1ZXJ5QXJyKVxyXG4gICAgY29uc3QgcXVlcnlPYmogPSBxdWVyeUFyci5yZWR1Y2UoKG9iaiwgZW50cnkpID0+IHtcclxuICAgICAgICBjb25zdCBlbnRyeUFyciA9IGVudHJ5LnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgb2JqW2VudHJ5QXJyWzBdXSA9IGVuY29kZVVSSUNvbXBvbmVudChlbnRyeUFyclsxXSk7IC8vQysrIC0+IEMlMkIlMkJcclxuICAgICAgICByZXR1cm4gb2JqOyBcclxuICAgIH0sIHt9KTtcclxuICAgIGNvbnNvbGUubG9nKHF1ZXJ5T2JqKVxyXG4gICAgY29uc3QgeyBxLCBsYW5nLCBzb3J0LCBvcmRlciwgcGFnZSwgcGVyX3BhZ2V9ID0gcXVlcnlPYmo7XHJcbiAgICAvLyA/cT1yZWFjdCtsYW5ndWFnZTpqYXZhc2NyaXB0JnNvcnQ9c3RhcnMmb3JkZXI9ZGVzYyZwYWdlPTJcclxuICAgIGxldCBxdWVyeVN0cmluZyA9IGA/cT0ke3F9YDtcclxuICAgIGxhbmcgJiYgKHF1ZXJ5U3RyaW5nICs9IGArbGFuZ3VhZ2U6JHtsYW5nfWApO1xyXG4gICAgc29ydCAmJiAocXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCAnZGVzYyd9YCk7XHJcbiAgICBwYWdlICYmIChxdWVyeVN0cmluZyArPSBgJnBhZ2U9JHtwYWdlfWApO1xyXG4gICAgcXVlcnlTdHJpbmcgKz0gYCZwZXJfcGFnZT0ke3Blcl9wYWdlfWA7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5yZXF1ZXN0KHsgXHJcbiAgICAgICAgdXJsOiBgL3NlYXJjaC9yZXBvc2l0b3JpZXMke3F1ZXJ5U3RyaW5nfWAgXHJcbiAgICB9LCByZXEsIHJlcyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXBvczogcmVzdWx0LmRhdGEgfHwgZGF0YS5yZWFjdF9yZXBvc1xyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=D:\\\\\u7F16\u7A0B\\\\\u9879\u76EE\\\\next\u9879\u76EE\\\\next-github\\\\pages\\\\search.js */"));
}

Search.getInitialProps = async ({
  query,
  asPath,
  req,
  res
}) => {
  console.log('Search getInitialProps called');
  console.log(query);

  if (!query.q) {
    return {
      repos: initRepos
    };
  }

  console.log(asPath);
  const queryArr = asPath.split('?')[1].split('&');
  console.log(queryArr);
  const queryObj = queryArr.reduce((obj, entry) => {
    const entryArr = entry.split('=');
    obj[entryArr[0]] = encodeURIComponent(entryArr[1]); //C++ -> C%2B%2B

    return obj;
  }, {});
  console.log(queryObj);
  const {
    q,
    lang,
    sort,
    order,
    page,
    per_page
  } = queryObj; // ?q=react+language:javascript&sort=stars&order=desc&page=2

  let queryString = `?q=${q}`;
  lang && (queryString += `+language:${lang}`);
  sort && (queryString += `&sort=${sort}&order=${order || 'desc'}`);
  page && (queryString += `&page=${page}`);
  queryString += `&per_page=${per_page}`;
  const result = await api.request({
    url: `/search/repositories${queryString}`
  }, req, res);
  return {
    repos: result.data || _testData__WEBPACK_IMPORTED_MODULE_11__["default"].react_repos
  };
};

/***/ }),

/***/ "./testData.js":
/*!*********************!*\
  !*** ./testData.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "my_stars": [{
    "id": 28457823,
    "node_id": "MDEwOlJlcG9zaXRvcnkyODQ1NzgyMw==",
    "name": "freeCodeCamp",
    "full_name": "freeCodeCamp/freeCodeCamp",
    "private": false,
    "owner": {
      "login": "freeCodeCamp",
      "id": 9892522,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjk4OTI1MjI=",
      "avatar_url": "https://avatars0.githubusercontent.com/u/9892522?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/freeCodeCamp",
      "html_url": "https://github.com/freeCodeCamp",
      "followers_url": "https://api.github.com/users/freeCodeCamp/followers",
      "following_url": "https://api.github.com/users/freeCodeCamp/following{/other_user}",
      "gists_url": "https://api.github.com/users/freeCodeCamp/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/freeCodeCamp/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/freeCodeCamp/subscriptions",
      "organizations_url": "https://api.github.com/users/freeCodeCamp/orgs",
      "repos_url": "https://api.github.com/users/freeCodeCamp/repos",
      "events_url": "https://api.github.com/users/freeCodeCamp/events{/privacy}",
      "received_events_url": "https://api.github.com/users/freeCodeCamp/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/freeCodeCamp/freeCodeCamp",
    "description": "The https://www.freecodecamp.org open source codebase and curriculum. Learn to code for free together with millions of people.",
    "fork": false,
    "url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp",
    "forks_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/forks",
    "keys_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/teams",
    "hooks_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/hooks",
    "issue_events_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/events{/number}",
    "events_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/events",
    "assignees_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/assignees{/user}",
    "branches_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/branches{/branch}",
    "tags_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/tags",
    "blobs_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/languages",
    "stargazers_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/stargazers",
    "contributors_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contributors",
    "subscribers_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscribers",
    "subscription_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscription",
    "commits_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contents/{+path}",
    "compare_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/merges",
    "archive_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/downloads",
    "issues_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues{/number}",
    "pulls_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/labels{/name}",
    "releases_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/releases{/id}",
    "deployments_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/deployments",
    "created_at": "2014-12-24T17:49:19Z",
    "updated_at": "2020-02-27T12:54:34Z",
    "pushed_at": "2020-02-27T12:54:13Z",
    "git_url": "git://github.com/freeCodeCamp/freeCodeCamp.git",
    "ssh_url": "git@github.com:freeCodeCamp/freeCodeCamp.git",
    "clone_url": "https://github.com/freeCodeCamp/freeCodeCamp.git",
    "svn_url": "https://github.com/freeCodeCamp/freeCodeCamp",
    "homepage": "",
    "size": 123603,
    "stargazers_count": 308894,
    "watchers_count": 308894,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": false,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 23725,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 256,
    "license": {
      "key": "bsd-3-clause",
      "name": "BSD 3-Clause \"New\" or \"Revised\" License",
      "spdx_id": "BSD-3-Clause",
      "url": "https://api.github.com/licenses/bsd-3-clause",
      "node_id": "MDc6TGljZW5zZTU="
    },
    "forks": 23725,
    "open_issues": 256,
    "watchers": 308894,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 218115303,
    "node_id": "MDEwOlJlcG9zaXRvcnkyMTgxMTUzMDM=",
    "name": "swr",
    "full_name": "zeit/swr",
    "private": false,
    "owner": {
      "login": "zeit",
      "id": 14985020,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjE0OTg1MDIw",
      "avatar_url": "https://avatars0.githubusercontent.com/u/14985020?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/zeit",
      "html_url": "https://github.com/zeit",
      "followers_url": "https://api.github.com/users/zeit/followers",
      "following_url": "https://api.github.com/users/zeit/following{/other_user}",
      "gists_url": "https://api.github.com/users/zeit/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/zeit/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/zeit/subscriptions",
      "organizations_url": "https://api.github.com/users/zeit/orgs",
      "repos_url": "https://api.github.com/users/zeit/repos",
      "events_url": "https://api.github.com/users/zeit/events{/privacy}",
      "received_events_url": "https://api.github.com/users/zeit/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/zeit/swr",
    "description": "React Hooks library for remote data fetching",
    "fork": false,
    "url": "https://api.github.com/repos/zeit/swr",
    "forks_url": "https://api.github.com/repos/zeit/swr/forks",
    "keys_url": "https://api.github.com/repos/zeit/swr/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/zeit/swr/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/zeit/swr/teams",
    "hooks_url": "https://api.github.com/repos/zeit/swr/hooks",
    "issue_events_url": "https://api.github.com/repos/zeit/swr/issues/events{/number}",
    "events_url": "https://api.github.com/repos/zeit/swr/events",
    "assignees_url": "https://api.github.com/repos/zeit/swr/assignees{/user}",
    "branches_url": "https://api.github.com/repos/zeit/swr/branches{/branch}",
    "tags_url": "https://api.github.com/repos/zeit/swr/tags",
    "blobs_url": "https://api.github.com/repos/zeit/swr/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/zeit/swr/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/zeit/swr/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/zeit/swr/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/zeit/swr/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/zeit/swr/languages",
    "stargazers_url": "https://api.github.com/repos/zeit/swr/stargazers",
    "contributors_url": "https://api.github.com/repos/zeit/swr/contributors",
    "subscribers_url": "https://api.github.com/repos/zeit/swr/subscribers",
    "subscription_url": "https://api.github.com/repos/zeit/swr/subscription",
    "commits_url": "https://api.github.com/repos/zeit/swr/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/zeit/swr/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/zeit/swr/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/zeit/swr/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/zeit/swr/contents/{+path}",
    "compare_url": "https://api.github.com/repos/zeit/swr/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/zeit/swr/merges",
    "archive_url": "https://api.github.com/repos/zeit/swr/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/zeit/swr/downloads",
    "issues_url": "https://api.github.com/repos/zeit/swr/issues{/number}",
    "pulls_url": "https://api.github.com/repos/zeit/swr/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/zeit/swr/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/zeit/swr/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/zeit/swr/labels{/name}",
    "releases_url": "https://api.github.com/repos/zeit/swr/releases{/id}",
    "deployments_url": "https://api.github.com/repos/zeit/swr/deployments",
    "created_at": "2019-10-28T18:16:01Z",
    "updated_at": "2020-02-27T12:52:59Z",
    "pushed_at": "2020-02-27T08:37:46Z",
    "git_url": "git://github.com/zeit/swr.git",
    "ssh_url": "git@github.com:zeit/swr.git",
    "clone_url": "https://github.com/zeit/swr.git",
    "svn_url": "https://github.com/zeit/swr",
    "homepage": "https://swr.now.sh",
    "size": 827,
    "stargazers_count": 7280,
    "watchers_count": 7280,
    "language": "TypeScript",
    "has_issues": true,
    "has_projects": false,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 215,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 60,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 215,
    "open_issues": 60,
    "watchers": 7280,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 3402186,
    "node_id": "MDEwOlJlcG9zaXRvcnkzNDAyMTg2",
    "name": "redis",
    "full_name": "microsoftarchive/redis",
    "private": false,
    "owner": {
      "login": "microsoftarchive",
      "id": 22484708,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjIyNDg0NzA4",
      "avatar_url": "https://avatars1.githubusercontent.com/u/22484708?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/microsoftarchive",
      "html_url": "https://github.com/microsoftarchive",
      "followers_url": "https://api.github.com/users/microsoftarchive/followers",
      "following_url": "https://api.github.com/users/microsoftarchive/following{/other_user}",
      "gists_url": "https://api.github.com/users/microsoftarchive/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/microsoftarchive/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/microsoftarchive/subscriptions",
      "organizations_url": "https://api.github.com/users/microsoftarchive/orgs",
      "repos_url": "https://api.github.com/users/microsoftarchive/repos",
      "events_url": "https://api.github.com/users/microsoftarchive/events{/privacy}",
      "received_events_url": "https://api.github.com/users/microsoftarchive/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/microsoftarchive/redis",
    "description": "Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes",
    "fork": true,
    "url": "https://api.github.com/repos/microsoftarchive/redis",
    "forks_url": "https://api.github.com/repos/microsoftarchive/redis/forks",
    "keys_url": "https://api.github.com/repos/microsoftarchive/redis/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/microsoftarchive/redis/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/microsoftarchive/redis/teams",
    "hooks_url": "https://api.github.com/repos/microsoftarchive/redis/hooks",
    "issue_events_url": "https://api.github.com/repos/microsoftarchive/redis/issues/events{/number}",
    "events_url": "https://api.github.com/repos/microsoftarchive/redis/events",
    "assignees_url": "https://api.github.com/repos/microsoftarchive/redis/assignees{/user}",
    "branches_url": "https://api.github.com/repos/microsoftarchive/redis/branches{/branch}",
    "tags_url": "https://api.github.com/repos/microsoftarchive/redis/tags",
    "blobs_url": "https://api.github.com/repos/microsoftarchive/redis/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/microsoftarchive/redis/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/microsoftarchive/redis/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/microsoftarchive/redis/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/microsoftarchive/redis/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/microsoftarchive/redis/languages",
    "stargazers_url": "https://api.github.com/repos/microsoftarchive/redis/stargazers",
    "contributors_url": "https://api.github.com/repos/microsoftarchive/redis/contributors",
    "subscribers_url": "https://api.github.com/repos/microsoftarchive/redis/subscribers",
    "subscription_url": "https://api.github.com/repos/microsoftarchive/redis/subscription",
    "commits_url": "https://api.github.com/repos/microsoftarchive/redis/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/microsoftarchive/redis/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/microsoftarchive/redis/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/microsoftarchive/redis/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/microsoftarchive/redis/contents/{+path}",
    "compare_url": "https://api.github.com/repos/microsoftarchive/redis/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/microsoftarchive/redis/merges",
    "archive_url": "https://api.github.com/repos/microsoftarchive/redis/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/microsoftarchive/redis/downloads",
    "issues_url": "https://api.github.com/repos/microsoftarchive/redis/issues{/number}",
    "pulls_url": "https://api.github.com/repos/microsoftarchive/redis/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/microsoftarchive/redis/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/microsoftarchive/redis/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/microsoftarchive/redis/labels{/name}",
    "releases_url": "https://api.github.com/repos/microsoftarchive/redis/releases{/id}",
    "deployments_url": "https://api.github.com/repos/microsoftarchive/redis/deployments",
    "created_at": "2012-02-09T22:49:05Z",
    "updated_at": "2020-02-27T12:41:24Z",
    "pushed_at": "2019-07-18T18:36:51Z",
    "git_url": "git://github.com/microsoftarchive/redis.git",
    "ssh_url": "git@github.com:microsoftarchive/redis.git",
    "clone_url": "https://github.com/microsoftarchive/redis.git",
    "svn_url": "https://github.com/microsoftarchive/redis",
    "homepage": "http://redis.io",
    "size": 256474,
    "stargazers_count": 16253,
    "watchers_count": 16253,
    "language": "C",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 4328,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 190,
    "license": {
      "key": "other",
      "name": "Other",
      "spdx_id": "NOASSERTION",
      "url": null,
      "node_id": "MDc6TGljZW5zZTA="
    },
    "forks": 4328,
    "open_issues": 190,
    "watchers": 16253,
    "default_branch": "3.0",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 70107786,
    "node_id": "MDEwOlJlcG9zaXRvcnk3MDEwNzc4Ng==",
    "name": "next.js",
    "full_name": "zeit/next.js",
    "private": false,
    "owner": {
      "login": "zeit",
      "id": 14985020,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjE0OTg1MDIw",
      "avatar_url": "https://avatars0.githubusercontent.com/u/14985020?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/zeit",
      "html_url": "https://github.com/zeit",
      "followers_url": "https://api.github.com/users/zeit/followers",
      "following_url": "https://api.github.com/users/zeit/following{/other_user}",
      "gists_url": "https://api.github.com/users/zeit/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/zeit/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/zeit/subscriptions",
      "organizations_url": "https://api.github.com/users/zeit/orgs",
      "repos_url": "https://api.github.com/users/zeit/repos",
      "events_url": "https://api.github.com/users/zeit/events{/privacy}",
      "received_events_url": "https://api.github.com/users/zeit/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/zeit/next.js",
    "description": "The React Framework",
    "fork": false,
    "url": "https://api.github.com/repos/zeit/next.js",
    "forks_url": "https://api.github.com/repos/zeit/next.js/forks",
    "keys_url": "https://api.github.com/repos/zeit/next.js/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/zeit/next.js/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/zeit/next.js/teams",
    "hooks_url": "https://api.github.com/repos/zeit/next.js/hooks",
    "issue_events_url": "https://api.github.com/repos/zeit/next.js/issues/events{/number}",
    "events_url": "https://api.github.com/repos/zeit/next.js/events",
    "assignees_url": "https://api.github.com/repos/zeit/next.js/assignees{/user}",
    "branches_url": "https://api.github.com/repos/zeit/next.js/branches{/branch}",
    "tags_url": "https://api.github.com/repos/zeit/next.js/tags",
    "blobs_url": "https://api.github.com/repos/zeit/next.js/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/zeit/next.js/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/zeit/next.js/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/zeit/next.js/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/zeit/next.js/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/zeit/next.js/languages",
    "stargazers_url": "https://api.github.com/repos/zeit/next.js/stargazers",
    "contributors_url": "https://api.github.com/repos/zeit/next.js/contributors",
    "subscribers_url": "https://api.github.com/repos/zeit/next.js/subscribers",
    "subscription_url": "https://api.github.com/repos/zeit/next.js/subscription",
    "commits_url": "https://api.github.com/repos/zeit/next.js/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/zeit/next.js/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/zeit/next.js/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/zeit/next.js/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/zeit/next.js/contents/{+path}",
    "compare_url": "https://api.github.com/repos/zeit/next.js/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/zeit/next.js/merges",
    "archive_url": "https://api.github.com/repos/zeit/next.js/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/zeit/next.js/downloads",
    "issues_url": "https://api.github.com/repos/zeit/next.js/issues{/number}",
    "pulls_url": "https://api.github.com/repos/zeit/next.js/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/zeit/next.js/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/zeit/next.js/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/zeit/next.js/labels{/name}",
    "releases_url": "https://api.github.com/repos/zeit/next.js/releases{/id}",
    "deployments_url": "https://api.github.com/repos/zeit/next.js/deployments",
    "created_at": "2016-10-05T23:32:51Z",
    "updated_at": "2020-02-27T12:23:42Z",
    "pushed_at": "2020-02-27T12:23:30Z",
    "git_url": "git://github.com/zeit/next.js.git",
    "ssh_url": "git@github.com:zeit/next.js.git",
    "clone_url": "https://github.com/zeit/next.js.git",
    "svn_url": "https://github.com/zeit/next.js",
    "homepage": "https://nextjs.org",
    "size": 27321,
    "stargazers_count": 45340,
    "watchers_count": 45340,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": false,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 6422,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 325,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 6422,
    "open_issues": 325,
    "watchers": 45340,
    "default_branch": "canary",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 44563844,
    "node_id": "MDEwOlJlcG9zaXRvcnk0NDU2Mzg0NA==",
    "name": "redux-batched-actions",
    "full_name": "tshelburne/redux-batched-actions",
    "private": false,
    "owner": {
      "login": "tshelburne",
      "id": 1202267,
      "node_id": "MDQ6VXNlcjEyMDIyNjc=",
      "avatar_url": "https://avatars3.githubusercontent.com/u/1202267?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tshelburne",
      "html_url": "https://github.com/tshelburne",
      "followers_url": "https://api.github.com/users/tshelburne/followers",
      "following_url": "https://api.github.com/users/tshelburne/following{/other_user}",
      "gists_url": "https://api.github.com/users/tshelburne/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tshelburne/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tshelburne/subscriptions",
      "organizations_url": "https://api.github.com/users/tshelburne/orgs",
      "repos_url": "https://api.github.com/users/tshelburne/repos",
      "events_url": "https://api.github.com/users/tshelburne/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tshelburne/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/tshelburne/redux-batched-actions",
    "description": "redux higher order reducer + action to reduce actions under a single subscriber notification",
    "fork": false,
    "url": "https://api.github.com/repos/tshelburne/redux-batched-actions",
    "forks_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/forks",
    "keys_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/teams",
    "hooks_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/hooks",
    "issue_events_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/issues/events{/number}",
    "events_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/events",
    "assignees_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/assignees{/user}",
    "branches_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/branches{/branch}",
    "tags_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/tags",
    "blobs_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/languages",
    "stargazers_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/stargazers",
    "contributors_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/contributors",
    "subscribers_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/subscribers",
    "subscription_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/subscription",
    "commits_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/contents/{+path}",
    "compare_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/merges",
    "archive_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/downloads",
    "issues_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/issues{/number}",
    "pulls_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/labels{/name}",
    "releases_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/releases{/id}",
    "deployments_url": "https://api.github.com/repos/tshelburne/redux-batched-actions/deployments",
    "created_at": "2015-10-19T21:01:34Z",
    "updated_at": "2020-02-25T13:20:00Z",
    "pushed_at": "2020-01-19T21:47:39Z",
    "git_url": "git://github.com/tshelburne/redux-batched-actions.git",
    "ssh_url": "git@github.com:tshelburne/redux-batched-actions.git",
    "clone_url": "https://github.com/tshelburne/redux-batched-actions.git",
    "svn_url": "https://github.com/tshelburne/redux-batched-actions",
    "homepage": null,
    "size": 28,
    "stargazers_count": 962,
    "watchers_count": 962,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 28,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 9,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 28,
    "open_issues": 9,
    "watchers": 962,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 40345658,
    "node_id": "MDEwOlJlcG9zaXRvcnk0MDM0NTY1OA==",
    "name": "recharts",
    "full_name": "recharts/recharts",
    "private": false,
    "owner": {
      "login": "recharts",
      "id": 13690587,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzNjkwNTg3",
      "avatar_url": "https://avatars0.githubusercontent.com/u/13690587?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/recharts",
      "html_url": "https://github.com/recharts",
      "followers_url": "https://api.github.com/users/recharts/followers",
      "following_url": "https://api.github.com/users/recharts/following{/other_user}",
      "gists_url": "https://api.github.com/users/recharts/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/recharts/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/recharts/subscriptions",
      "organizations_url": "https://api.github.com/users/recharts/orgs",
      "repos_url": "https://api.github.com/users/recharts/repos",
      "events_url": "https://api.github.com/users/recharts/events{/privacy}",
      "received_events_url": "https://api.github.com/users/recharts/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/recharts/recharts",
    "description": "Redefined chart library built with React and D3",
    "fork": false,
    "url": "https://api.github.com/repos/recharts/recharts",
    "forks_url": "https://api.github.com/repos/recharts/recharts/forks",
    "keys_url": "https://api.github.com/repos/recharts/recharts/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/recharts/recharts/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/recharts/recharts/teams",
    "hooks_url": "https://api.github.com/repos/recharts/recharts/hooks",
    "issue_events_url": "https://api.github.com/repos/recharts/recharts/issues/events{/number}",
    "events_url": "https://api.github.com/repos/recharts/recharts/events",
    "assignees_url": "https://api.github.com/repos/recharts/recharts/assignees{/user}",
    "branches_url": "https://api.github.com/repos/recharts/recharts/branches{/branch}",
    "tags_url": "https://api.github.com/repos/recharts/recharts/tags",
    "blobs_url": "https://api.github.com/repos/recharts/recharts/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/recharts/recharts/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/recharts/recharts/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/recharts/recharts/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/recharts/recharts/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/recharts/recharts/languages",
    "stargazers_url": "https://api.github.com/repos/recharts/recharts/stargazers",
    "contributors_url": "https://api.github.com/repos/recharts/recharts/contributors",
    "subscribers_url": "https://api.github.com/repos/recharts/recharts/subscribers",
    "subscription_url": "https://api.github.com/repos/recharts/recharts/subscription",
    "commits_url": "https://api.github.com/repos/recharts/recharts/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/recharts/recharts/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/recharts/recharts/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/recharts/recharts/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/recharts/recharts/contents/{+path}",
    "compare_url": "https://api.github.com/repos/recharts/recharts/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/recharts/recharts/merges",
    "archive_url": "https://api.github.com/repos/recharts/recharts/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/recharts/recharts/downloads",
    "issues_url": "https://api.github.com/repos/recharts/recharts/issues{/number}",
    "pulls_url": "https://api.github.com/repos/recharts/recharts/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/recharts/recharts/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/recharts/recharts/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/recharts/recharts/labels{/name}",
    "releases_url": "https://api.github.com/repos/recharts/recharts/releases{/id}",
    "deployments_url": "https://api.github.com/repos/recharts/recharts/deployments",
    "created_at": "2015-08-07T06:50:27Z",
    "updated_at": "2020-02-27T04:24:45Z",
    "pushed_at": "2020-02-17T07:49:22Z",
    "git_url": "git://github.com/recharts/recharts.git",
    "ssh_url": "git@github.com:recharts/recharts.git",
    "clone_url": "https://github.com/recharts/recharts.git",
    "svn_url": "https://github.com/recharts/recharts",
    "homepage": "http://recharts.org",
    "size": 6410,
    "stargazers_count": 13367,
    "watchers_count": 13367,
    "language": "TypeScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 1019,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 579,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 1019,
    "open_issues": 579,
    "watchers": 13367,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 88002645,
    "node_id": "MDEwOlJlcG9zaXRvcnk4ODAwMjY0NQ==",
    "name": "react-admin",
    "full_name": "yezihaohao/react-admin",
    "private": false,
    "owner": {
      "login": "yezihaohao",
      "id": 23539868,
      "node_id": "MDQ6VXNlcjIzNTM5ODY4",
      "avatar_url": "https://avatars3.githubusercontent.com/u/23539868?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/yezihaohao",
      "html_url": "https://github.com/yezihaohao",
      "followers_url": "https://api.github.com/users/yezihaohao/followers",
      "following_url": "https://api.github.com/users/yezihaohao/following{/other_user}",
      "gists_url": "https://api.github.com/users/yezihaohao/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/yezihaohao/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/yezihaohao/subscriptions",
      "organizations_url": "https://api.github.com/users/yezihaohao/orgs",
      "repos_url": "https://api.github.com/users/yezihaohao/repos",
      "events_url": "https://api.github.com/users/yezihaohao/events{/privacy}",
      "received_events_url": "https://api.github.com/users/yezihaohao/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/yezihaohao/react-admin",
    "description": ":sparkles: react-admin system solution : react 后台管理系统解决方案",
    "fork": false,
    "url": "https://api.github.com/repos/yezihaohao/react-admin",
    "forks_url": "https://api.github.com/repos/yezihaohao/react-admin/forks",
    "keys_url": "https://api.github.com/repos/yezihaohao/react-admin/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/yezihaohao/react-admin/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/yezihaohao/react-admin/teams",
    "hooks_url": "https://api.github.com/repos/yezihaohao/react-admin/hooks",
    "issue_events_url": "https://api.github.com/repos/yezihaohao/react-admin/issues/events{/number}",
    "events_url": "https://api.github.com/repos/yezihaohao/react-admin/events",
    "assignees_url": "https://api.github.com/repos/yezihaohao/react-admin/assignees{/user}",
    "branches_url": "https://api.github.com/repos/yezihaohao/react-admin/branches{/branch}",
    "tags_url": "https://api.github.com/repos/yezihaohao/react-admin/tags",
    "blobs_url": "https://api.github.com/repos/yezihaohao/react-admin/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/yezihaohao/react-admin/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/yezihaohao/react-admin/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/yezihaohao/react-admin/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/yezihaohao/react-admin/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/yezihaohao/react-admin/languages",
    "stargazers_url": "https://api.github.com/repos/yezihaohao/react-admin/stargazers",
    "contributors_url": "https://api.github.com/repos/yezihaohao/react-admin/contributors",
    "subscribers_url": "https://api.github.com/repos/yezihaohao/react-admin/subscribers",
    "subscription_url": "https://api.github.com/repos/yezihaohao/react-admin/subscription",
    "commits_url": "https://api.github.com/repos/yezihaohao/react-admin/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/yezihaohao/react-admin/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/yezihaohao/react-admin/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/yezihaohao/react-admin/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/yezihaohao/react-admin/contents/{+path}",
    "compare_url": "https://api.github.com/repos/yezihaohao/react-admin/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/yezihaohao/react-admin/merges",
    "archive_url": "https://api.github.com/repos/yezihaohao/react-admin/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/yezihaohao/react-admin/downloads",
    "issues_url": "https://api.github.com/repos/yezihaohao/react-admin/issues{/number}",
    "pulls_url": "https://api.github.com/repos/yezihaohao/react-admin/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/yezihaohao/react-admin/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/yezihaohao/react-admin/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/yezihaohao/react-admin/labels{/name}",
    "releases_url": "https://api.github.com/repos/yezihaohao/react-admin/releases{/id}",
    "deployments_url": "https://api.github.com/repos/yezihaohao/react-admin/deployments",
    "created_at": "2017-04-12T02:50:56Z",
    "updated_at": "2020-02-27T06:14:45Z",
    "pushed_at": "2020-01-21T06:03:17Z",
    "git_url": "git://github.com/yezihaohao/react-admin.git",
    "ssh_url": "git@github.com:yezihaohao/react-admin.git",
    "clone_url": "https://github.com/yezihaohao/react-admin.git",
    "svn_url": "https://github.com/yezihaohao/react-admin",
    "homepage": "https://admiring-dijkstra-34cb29.netlify.com/",
    "size": 3228,
    "stargazers_count": 4673,
    "watchers_count": 4673,
    "language": "TypeScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 1399,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 5,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 1399,
    "open_issues": 5,
    "watchers": 4673,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 30381877,
    "node_id": "MDEwOlJlcG9zaXRvcnkzMDM4MTg3Nw==",
    "name": "concurrently",
    "full_name": "kimmobrunfeldt/concurrently",
    "private": false,
    "owner": {
      "login": "kimmobrunfeldt",
      "id": 1232405,
      "node_id": "MDQ6VXNlcjEyMzI0MDU=",
      "avatar_url": "https://avatars1.githubusercontent.com/u/1232405?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/kimmobrunfeldt",
      "html_url": "https://github.com/kimmobrunfeldt",
      "followers_url": "https://api.github.com/users/kimmobrunfeldt/followers",
      "following_url": "https://api.github.com/users/kimmobrunfeldt/following{/other_user}",
      "gists_url": "https://api.github.com/users/kimmobrunfeldt/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/kimmobrunfeldt/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/kimmobrunfeldt/subscriptions",
      "organizations_url": "https://api.github.com/users/kimmobrunfeldt/orgs",
      "repos_url": "https://api.github.com/users/kimmobrunfeldt/repos",
      "events_url": "https://api.github.com/users/kimmobrunfeldt/events{/privacy}",
      "received_events_url": "https://api.github.com/users/kimmobrunfeldt/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/kimmobrunfeldt/concurrently",
    "description": "Run commands concurrently. Like `npm run watch-js & npm run watch-less` but better.",
    "fork": false,
    "url": "https://api.github.com/repos/kimmobrunfeldt/concurrently",
    "forks_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/forks",
    "keys_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/teams",
    "hooks_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/hooks",
    "issue_events_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/issues/events{/number}",
    "events_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/events",
    "assignees_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/assignees{/user}",
    "branches_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/branches{/branch}",
    "tags_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/tags",
    "blobs_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/languages",
    "stargazers_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/stargazers",
    "contributors_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/contributors",
    "subscribers_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/subscribers",
    "subscription_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/subscription",
    "commits_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/contents/{+path}",
    "compare_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/merges",
    "archive_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/downloads",
    "issues_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/issues{/number}",
    "pulls_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/labels{/name}",
    "releases_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/releases{/id}",
    "deployments_url": "https://api.github.com/repos/kimmobrunfeldt/concurrently/deployments",
    "created_at": "2015-02-05T22:27:51Z",
    "updated_at": "2020-02-27T07:40:38Z",
    "pushed_at": "2020-02-26T13:06:52Z",
    "git_url": "git://github.com/kimmobrunfeldt/concurrently.git",
    "ssh_url": "git@github.com:kimmobrunfeldt/concurrently.git",
    "clone_url": "https://github.com/kimmobrunfeldt/concurrently.git",
    "svn_url": "https://github.com/kimmobrunfeldt/concurrently",
    "homepage": "https://www.npmjs.com/package/concurrently",
    "size": 1366,
    "stargazers_count": 3380,
    "watchers_count": 3380,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 150,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 34,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 150,
    "open_issues": 34,
    "watchers": 3380,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 23088740,
    "node_id": "MDEwOlJlcG9zaXRvcnkyMzA4ODc0MA==",
    "name": "axios",
    "full_name": "axios/axios",
    "private": false,
    "owner": {
      "login": "axios",
      "id": 32372333,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjMyMzcyMzMz",
      "avatar_url": "https://avatars1.githubusercontent.com/u/32372333?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/axios",
      "html_url": "https://github.com/axios",
      "followers_url": "https://api.github.com/users/axios/followers",
      "following_url": "https://api.github.com/users/axios/following{/other_user}",
      "gists_url": "https://api.github.com/users/axios/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/axios/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/axios/subscriptions",
      "organizations_url": "https://api.github.com/users/axios/orgs",
      "repos_url": "https://api.github.com/users/axios/repos",
      "events_url": "https://api.github.com/users/axios/events{/privacy}",
      "received_events_url": "https://api.github.com/users/axios/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/axios/axios",
    "description": "Promise based HTTP client for the browser and node.js",
    "fork": false,
    "url": "https://api.github.com/repos/axios/axios",
    "forks_url": "https://api.github.com/repos/axios/axios/forks",
    "keys_url": "https://api.github.com/repos/axios/axios/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/axios/axios/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/axios/axios/teams",
    "hooks_url": "https://api.github.com/repos/axios/axios/hooks",
    "issue_events_url": "https://api.github.com/repos/axios/axios/issues/events{/number}",
    "events_url": "https://api.github.com/repos/axios/axios/events",
    "assignees_url": "https://api.github.com/repos/axios/axios/assignees{/user}",
    "branches_url": "https://api.github.com/repos/axios/axios/branches{/branch}",
    "tags_url": "https://api.github.com/repos/axios/axios/tags",
    "blobs_url": "https://api.github.com/repos/axios/axios/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/axios/axios/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/axios/axios/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/axios/axios/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/axios/axios/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/axios/axios/languages",
    "stargazers_url": "https://api.github.com/repos/axios/axios/stargazers",
    "contributors_url": "https://api.github.com/repos/axios/axios/contributors",
    "subscribers_url": "https://api.github.com/repos/axios/axios/subscribers",
    "subscription_url": "https://api.github.com/repos/axios/axios/subscription",
    "commits_url": "https://api.github.com/repos/axios/axios/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/axios/axios/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/axios/axios/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/axios/axios/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/axios/axios/contents/{+path}",
    "compare_url": "https://api.github.com/repos/axios/axios/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/axios/axios/merges",
    "archive_url": "https://api.github.com/repos/axios/axios/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/axios/axios/downloads",
    "issues_url": "https://api.github.com/repos/axios/axios/issues{/number}",
    "pulls_url": "https://api.github.com/repos/axios/axios/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/axios/axios/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/axios/axios/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/axios/axios/labels{/name}",
    "releases_url": "https://api.github.com/repos/axios/axios/releases{/id}",
    "deployments_url": "https://api.github.com/repos/axios/axios/deployments",
    "created_at": "2014-08-18T22:30:27Z",
    "updated_at": "2020-02-27T13:00:44Z",
    "pushed_at": "2020-02-26T19:58:04Z",
    "git_url": "git://github.com/axios/axios.git",
    "ssh_url": "git@github.com:axios/axios.git",
    "clone_url": "https://github.com/axios/axios.git",
    "svn_url": "https://github.com/axios/axios",
    "homepage": "",
    "size": 3042,
    "stargazers_count": 70049,
    "watchers_count": 70049,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 6214,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 396,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 6214,
    "open_issues": 396,
    "watchers": 70049,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 14747598,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNDc0NzU5OA==",
    "name": "json-server",
    "full_name": "typicode/json-server",
    "private": false,
    "owner": {
      "login": "typicode",
      "id": 5502029,
      "node_id": "MDQ6VXNlcjU1MDIwMjk=",
      "avatar_url": "https://avatars2.githubusercontent.com/u/5502029?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/typicode",
      "html_url": "https://github.com/typicode",
      "followers_url": "https://api.github.com/users/typicode/followers",
      "following_url": "https://api.github.com/users/typicode/following{/other_user}",
      "gists_url": "https://api.github.com/users/typicode/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/typicode/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/typicode/subscriptions",
      "organizations_url": "https://api.github.com/users/typicode/orgs",
      "repos_url": "https://api.github.com/users/typicode/repos",
      "events_url": "https://api.github.com/users/typicode/events{/privacy}",
      "received_events_url": "https://api.github.com/users/typicode/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/typicode/json-server",
    "description": "Get a full fake REST API with zero coding in less than 30 seconds (seriously)",
    "fork": false,
    "url": "https://api.github.com/repos/typicode/json-server",
    "forks_url": "https://api.github.com/repos/typicode/json-server/forks",
    "keys_url": "https://api.github.com/repos/typicode/json-server/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/typicode/json-server/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/typicode/json-server/teams",
    "hooks_url": "https://api.github.com/repos/typicode/json-server/hooks",
    "issue_events_url": "https://api.github.com/repos/typicode/json-server/issues/events{/number}",
    "events_url": "https://api.github.com/repos/typicode/json-server/events",
    "assignees_url": "https://api.github.com/repos/typicode/json-server/assignees{/user}",
    "branches_url": "https://api.github.com/repos/typicode/json-server/branches{/branch}",
    "tags_url": "https://api.github.com/repos/typicode/json-server/tags",
    "blobs_url": "https://api.github.com/repos/typicode/json-server/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/typicode/json-server/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/typicode/json-server/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/typicode/json-server/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/typicode/json-server/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/typicode/json-server/languages",
    "stargazers_url": "https://api.github.com/repos/typicode/json-server/stargazers",
    "contributors_url": "https://api.github.com/repos/typicode/json-server/contributors",
    "subscribers_url": "https://api.github.com/repos/typicode/json-server/subscribers",
    "subscription_url": "https://api.github.com/repos/typicode/json-server/subscription",
    "commits_url": "https://api.github.com/repos/typicode/json-server/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/typicode/json-server/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/typicode/json-server/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/typicode/json-server/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/typicode/json-server/contents/{+path}",
    "compare_url": "https://api.github.com/repos/typicode/json-server/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/typicode/json-server/merges",
    "archive_url": "https://api.github.com/repos/typicode/json-server/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/typicode/json-server/downloads",
    "issues_url": "https://api.github.com/repos/typicode/json-server/issues{/number}",
    "pulls_url": "https://api.github.com/repos/typicode/json-server/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/typicode/json-server/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/typicode/json-server/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/typicode/json-server/labels{/name}",
    "releases_url": "https://api.github.com/repos/typicode/json-server/releases{/id}",
    "deployments_url": "https://api.github.com/repos/typicode/json-server/deployments",
    "created_at": "2013-11-27T13:21:13Z",
    "updated_at": "2020-02-27T12:52:25Z",
    "pushed_at": "2020-02-24T13:20:38Z",
    "git_url": "git://github.com/typicode/json-server.git",
    "ssh_url": "git@github.com:typicode/json-server.git",
    "clone_url": "https://github.com/typicode/json-server.git",
    "svn_url": "https://github.com/typicode/json-server",
    "homepage": "",
    "size": 1994,
    "stargazers_count": 45746,
    "watchers_count": 45746,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 4217,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 510,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 4217,
    "open_issues": 510,
    "watchers": 45746,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 82682940,
    "node_id": "MDEwOlJlcG9zaXRvcnk4MjY4Mjk0MA==",
    "name": "koa2-note",
    "full_name": "chenshenhai/koa2-note",
    "private": false,
    "owner": {
      "login": "chenshenhai",
      "id": 8216630,
      "node_id": "MDQ6VXNlcjgyMTY2MzA=",
      "avatar_url": "https://avatars3.githubusercontent.com/u/8216630?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/chenshenhai",
      "html_url": "https://github.com/chenshenhai",
      "followers_url": "https://api.github.com/users/chenshenhai/followers",
      "following_url": "https://api.github.com/users/chenshenhai/following{/other_user}",
      "gists_url": "https://api.github.com/users/chenshenhai/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/chenshenhai/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/chenshenhai/subscriptions",
      "organizations_url": "https://api.github.com/users/chenshenhai/orgs",
      "repos_url": "https://api.github.com/users/chenshenhai/repos",
      "events_url": "https://api.github.com/users/chenshenhai/events{/privacy}",
      "received_events_url": "https://api.github.com/users/chenshenhai/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/chenshenhai/koa2-note",
    "description": "《Koa2进阶学习笔记》已完结🎄🎄🎄",
    "fork": false,
    "url": "https://api.github.com/repos/chenshenhai/koa2-note",
    "forks_url": "https://api.github.com/repos/chenshenhai/koa2-note/forks",
    "keys_url": "https://api.github.com/repos/chenshenhai/koa2-note/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/chenshenhai/koa2-note/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/chenshenhai/koa2-note/teams",
    "hooks_url": "https://api.github.com/repos/chenshenhai/koa2-note/hooks",
    "issue_events_url": "https://api.github.com/repos/chenshenhai/koa2-note/issues/events{/number}",
    "events_url": "https://api.github.com/repos/chenshenhai/koa2-note/events",
    "assignees_url": "https://api.github.com/repos/chenshenhai/koa2-note/assignees{/user}",
    "branches_url": "https://api.github.com/repos/chenshenhai/koa2-note/branches{/branch}",
    "tags_url": "https://api.github.com/repos/chenshenhai/koa2-note/tags",
    "blobs_url": "https://api.github.com/repos/chenshenhai/koa2-note/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/chenshenhai/koa2-note/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/chenshenhai/koa2-note/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/chenshenhai/koa2-note/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/chenshenhai/koa2-note/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/chenshenhai/koa2-note/languages",
    "stargazers_url": "https://api.github.com/repos/chenshenhai/koa2-note/stargazers",
    "contributors_url": "https://api.github.com/repos/chenshenhai/koa2-note/contributors",
    "subscribers_url": "https://api.github.com/repos/chenshenhai/koa2-note/subscribers",
    "subscription_url": "https://api.github.com/repos/chenshenhai/koa2-note/subscription",
    "commits_url": "https://api.github.com/repos/chenshenhai/koa2-note/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/chenshenhai/koa2-note/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/chenshenhai/koa2-note/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/chenshenhai/koa2-note/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/chenshenhai/koa2-note/contents/{+path}",
    "compare_url": "https://api.github.com/repos/chenshenhai/koa2-note/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/chenshenhai/koa2-note/merges",
    "archive_url": "https://api.github.com/repos/chenshenhai/koa2-note/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/chenshenhai/koa2-note/downloads",
    "issues_url": "https://api.github.com/repos/chenshenhai/koa2-note/issues{/number}",
    "pulls_url": "https://api.github.com/repos/chenshenhai/koa2-note/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/chenshenhai/koa2-note/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/chenshenhai/koa2-note/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/chenshenhai/koa2-note/labels{/name}",
    "releases_url": "https://api.github.com/repos/chenshenhai/koa2-note/releases{/id}",
    "deployments_url": "https://api.github.com/repos/chenshenhai/koa2-note/deployments",
    "created_at": "2017-02-21T13:29:08Z",
    "updated_at": "2020-02-27T12:51:03Z",
    "pushed_at": "2019-07-03T13:06:58Z",
    "git_url": "git://github.com/chenshenhai/koa2-note.git",
    "ssh_url": "git@github.com:chenshenhai/koa2-note.git",
    "clone_url": "https://github.com/chenshenhai/koa2-note.git",
    "svn_url": "https://github.com/chenshenhai/koa2-note",
    "homepage": "https://chenshenhai.github.io/koa2-note/",
    "size": 7656,
    "stargazers_count": 3909,
    "watchers_count": 3909,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": true,
    "forks_count": 1062,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 17,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 1062,
    "open_issues": 17,
    "watchers": 3909,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 15389537,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNTM4OTUzNw==",
    "name": "koa-guide",
    "full_name": "guo-yu/koa-guide",
    "private": false,
    "owner": {
      "login": "guo-yu",
      "id": 1269537,
      "node_id": "MDQ6VXNlcjEyNjk1Mzc=",
      "avatar_url": "https://avatars2.githubusercontent.com/u/1269537?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/guo-yu",
      "html_url": "https://github.com/guo-yu",
      "followers_url": "https://api.github.com/users/guo-yu/followers",
      "following_url": "https://api.github.com/users/guo-yu/following{/other_user}",
      "gists_url": "https://api.github.com/users/guo-yu/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/guo-yu/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/guo-yu/subscriptions",
      "organizations_url": "https://api.github.com/users/guo-yu/orgs",
      "repos_url": "https://api.github.com/users/guo-yu/repos",
      "events_url": "https://api.github.com/users/guo-yu/events{/privacy}",
      "received_events_url": "https://api.github.com/users/guo-yu/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/guo-yu/koa-guide",
    "description": "koa guide in Chinese",
    "fork": false,
    "url": "https://api.github.com/repos/guo-yu/koa-guide",
    "forks_url": "https://api.github.com/repos/guo-yu/koa-guide/forks",
    "keys_url": "https://api.github.com/repos/guo-yu/koa-guide/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/guo-yu/koa-guide/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/guo-yu/koa-guide/teams",
    "hooks_url": "https://api.github.com/repos/guo-yu/koa-guide/hooks",
    "issue_events_url": "https://api.github.com/repos/guo-yu/koa-guide/issues/events{/number}",
    "events_url": "https://api.github.com/repos/guo-yu/koa-guide/events",
    "assignees_url": "https://api.github.com/repos/guo-yu/koa-guide/assignees{/user}",
    "branches_url": "https://api.github.com/repos/guo-yu/koa-guide/branches{/branch}",
    "tags_url": "https://api.github.com/repos/guo-yu/koa-guide/tags",
    "blobs_url": "https://api.github.com/repos/guo-yu/koa-guide/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/guo-yu/koa-guide/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/guo-yu/koa-guide/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/guo-yu/koa-guide/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/guo-yu/koa-guide/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/guo-yu/koa-guide/languages",
    "stargazers_url": "https://api.github.com/repos/guo-yu/koa-guide/stargazers",
    "contributors_url": "https://api.github.com/repos/guo-yu/koa-guide/contributors",
    "subscribers_url": "https://api.github.com/repos/guo-yu/koa-guide/subscribers",
    "subscription_url": "https://api.github.com/repos/guo-yu/koa-guide/subscription",
    "commits_url": "https://api.github.com/repos/guo-yu/koa-guide/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/guo-yu/koa-guide/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/guo-yu/koa-guide/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/guo-yu/koa-guide/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/guo-yu/koa-guide/contents/{+path}",
    "compare_url": "https://api.github.com/repos/guo-yu/koa-guide/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/guo-yu/koa-guide/merges",
    "archive_url": "https://api.github.com/repos/guo-yu/koa-guide/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/guo-yu/koa-guide/downloads",
    "issues_url": "https://api.github.com/repos/guo-yu/koa-guide/issues{/number}",
    "pulls_url": "https://api.github.com/repos/guo-yu/koa-guide/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/guo-yu/koa-guide/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/guo-yu/koa-guide/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/guo-yu/koa-guide/labels{/name}",
    "releases_url": "https://api.github.com/repos/guo-yu/koa-guide/releases{/id}",
    "deployments_url": "https://api.github.com/repos/guo-yu/koa-guide/deployments",
    "created_at": "2013-12-23T06:52:07Z",
    "updated_at": "2020-02-25T01:44:47Z",
    "pushed_at": "2018-06-05T12:43:14Z",
    "git_url": "git://github.com/guo-yu/koa-guide.git",
    "ssh_url": "git@github.com:guo-yu/koa-guide.git",
    "clone_url": "https://github.com/guo-yu/koa-guide.git",
    "svn_url": "https://github.com/guo-yu/koa-guide",
    "homepage": "",
    "size": 68,
    "stargazers_count": 2605,
    "watchers_count": 2605,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 374,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 3,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 374,
    "open_issues": 3,
    "watchers": 2605,
    "default_branch": "v2.x",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 12499274,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMjQ5OTI3NA==",
    "name": "koa-router",
    "full_name": "ZijianHe/koa-router",
    "private": false,
    "owner": {
      "login": "ZijianHe",
      "id": 15350571,
      "node_id": "MDQ6VXNlcjE1MzUwNTcx",
      "avatar_url": "https://avatars2.githubusercontent.com/u/15350571?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ZijianHe",
      "html_url": "https://github.com/ZijianHe",
      "followers_url": "https://api.github.com/users/ZijianHe/followers",
      "following_url": "https://api.github.com/users/ZijianHe/following{/other_user}",
      "gists_url": "https://api.github.com/users/ZijianHe/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ZijianHe/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ZijianHe/subscriptions",
      "organizations_url": "https://api.github.com/users/ZijianHe/orgs",
      "repos_url": "https://api.github.com/users/ZijianHe/repos",
      "events_url": "https://api.github.com/users/ZijianHe/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ZijianHe/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/ZijianHe/koa-router",
    "description": "Router middleware for koa.",
    "fork": false,
    "url": "https://api.github.com/repos/ZijianHe/koa-router",
    "forks_url": "https://api.github.com/repos/ZijianHe/koa-router/forks",
    "keys_url": "https://api.github.com/repos/ZijianHe/koa-router/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/ZijianHe/koa-router/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/ZijianHe/koa-router/teams",
    "hooks_url": "https://api.github.com/repos/ZijianHe/koa-router/hooks",
    "issue_events_url": "https://api.github.com/repos/ZijianHe/koa-router/issues/events{/number}",
    "events_url": "https://api.github.com/repos/ZijianHe/koa-router/events",
    "assignees_url": "https://api.github.com/repos/ZijianHe/koa-router/assignees{/user}",
    "branches_url": "https://api.github.com/repos/ZijianHe/koa-router/branches{/branch}",
    "tags_url": "https://api.github.com/repos/ZijianHe/koa-router/tags",
    "blobs_url": "https://api.github.com/repos/ZijianHe/koa-router/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/ZijianHe/koa-router/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/ZijianHe/koa-router/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/ZijianHe/koa-router/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/ZijianHe/koa-router/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/ZijianHe/koa-router/languages",
    "stargazers_url": "https://api.github.com/repos/ZijianHe/koa-router/stargazers",
    "contributors_url": "https://api.github.com/repos/ZijianHe/koa-router/contributors",
    "subscribers_url": "https://api.github.com/repos/ZijianHe/koa-router/subscribers",
    "subscription_url": "https://api.github.com/repos/ZijianHe/koa-router/subscription",
    "commits_url": "https://api.github.com/repos/ZijianHe/koa-router/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/ZijianHe/koa-router/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/ZijianHe/koa-router/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/ZijianHe/koa-router/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/ZijianHe/koa-router/contents/{+path}",
    "compare_url": "https://api.github.com/repos/ZijianHe/koa-router/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/ZijianHe/koa-router/merges",
    "archive_url": "https://api.github.com/repos/ZijianHe/koa-router/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/ZijianHe/koa-router/downloads",
    "issues_url": "https://api.github.com/repos/ZijianHe/koa-router/issues{/number}",
    "pulls_url": "https://api.github.com/repos/ZijianHe/koa-router/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/ZijianHe/koa-router/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/ZijianHe/koa-router/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/ZijianHe/koa-router/labels{/name}",
    "releases_url": "https://api.github.com/repos/ZijianHe/koa-router/releases{/id}",
    "deployments_url": "https://api.github.com/repos/ZijianHe/koa-router/deployments",
    "created_at": "2013-08-31T02:07:51Z",
    "updated_at": "2020-02-25T12:58:14Z",
    "pushed_at": "2019-08-18T05:10:50Z",
    "git_url": "git://github.com/ZijianHe/koa-router.git",
    "ssh_url": "git@github.com:ZijianHe/koa-router.git",
    "clone_url": "https://github.com/ZijianHe/koa-router.git",
    "svn_url": "https://github.com/ZijianHe/koa-router",
    "homepage": "",
    "size": 699,
    "stargazers_count": 4496,
    "watchers_count": 4496,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 428,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 80,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 428,
    "open_issues": 80,
    "watchers": 4496,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 6498492,
    "node_id": "MDEwOlJlcG9zaXRvcnk2NDk4NDky",
    "name": "javascript",
    "full_name": "airbnb/javascript",
    "private": false,
    "owner": {
      "login": "airbnb",
      "id": 698437,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5ODQzNw==",
      "avatar_url": "https://avatars3.githubusercontent.com/u/698437?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/airbnb",
      "html_url": "https://github.com/airbnb",
      "followers_url": "https://api.github.com/users/airbnb/followers",
      "following_url": "https://api.github.com/users/airbnb/following{/other_user}",
      "gists_url": "https://api.github.com/users/airbnb/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/airbnb/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/airbnb/subscriptions",
      "organizations_url": "https://api.github.com/users/airbnb/orgs",
      "repos_url": "https://api.github.com/users/airbnb/repos",
      "events_url": "https://api.github.com/users/airbnb/events{/privacy}",
      "received_events_url": "https://api.github.com/users/airbnb/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/airbnb/javascript",
    "description": "JavaScript Style Guide",
    "fork": false,
    "url": "https://api.github.com/repos/airbnb/javascript",
    "forks_url": "https://api.github.com/repos/airbnb/javascript/forks",
    "keys_url": "https://api.github.com/repos/airbnb/javascript/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/airbnb/javascript/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/airbnb/javascript/teams",
    "hooks_url": "https://api.github.com/repos/airbnb/javascript/hooks",
    "issue_events_url": "https://api.github.com/repos/airbnb/javascript/issues/events{/number}",
    "events_url": "https://api.github.com/repos/airbnb/javascript/events",
    "assignees_url": "https://api.github.com/repos/airbnb/javascript/assignees{/user}",
    "branches_url": "https://api.github.com/repos/airbnb/javascript/branches{/branch}",
    "tags_url": "https://api.github.com/repos/airbnb/javascript/tags",
    "blobs_url": "https://api.github.com/repos/airbnb/javascript/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/airbnb/javascript/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/airbnb/javascript/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/airbnb/javascript/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/airbnb/javascript/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/airbnb/javascript/languages",
    "stargazers_url": "https://api.github.com/repos/airbnb/javascript/stargazers",
    "contributors_url": "https://api.github.com/repos/airbnb/javascript/contributors",
    "subscribers_url": "https://api.github.com/repos/airbnb/javascript/subscribers",
    "subscription_url": "https://api.github.com/repos/airbnb/javascript/subscription",
    "commits_url": "https://api.github.com/repos/airbnb/javascript/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/airbnb/javascript/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/airbnb/javascript/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/airbnb/javascript/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/airbnb/javascript/contents/{+path}",
    "compare_url": "https://api.github.com/repos/airbnb/javascript/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/airbnb/javascript/merges",
    "archive_url": "https://api.github.com/repos/airbnb/javascript/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/airbnb/javascript/downloads",
    "issues_url": "https://api.github.com/repos/airbnb/javascript/issues{/number}",
    "pulls_url": "https://api.github.com/repos/airbnb/javascript/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/airbnb/javascript/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/airbnb/javascript/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/airbnb/javascript/labels{/name}",
    "releases_url": "https://api.github.com/repos/airbnb/javascript/releases{/id}",
    "deployments_url": "https://api.github.com/repos/airbnb/javascript/deployments",
    "created_at": "2012-11-01T23:13:50Z",
    "updated_at": "2020-02-27T12:30:13Z",
    "pushed_at": "2020-02-20T07:59:08Z",
    "git_url": "git://github.com/airbnb/javascript.git",
    "ssh_url": "git@github.com:airbnb/javascript.git",
    "clone_url": "https://github.com/airbnb/javascript.git",
    "svn_url": "https://github.com/airbnb/javascript",
    "homepage": null,
    "size": 3065,
    "stargazers_count": 93152,
    "watchers_count": 93152,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": false,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": true,
    "forks_count": 18107,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 116,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 18107,
    "open_issues": 116,
    "watchers": 93152,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 134268716,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMzQyNjg3MTY=",
    "name": "ghChat",
    "full_name": "aermin/ghChat",
    "private": false,
    "owner": {
      "login": "aermin",
      "id": 24861316,
      "node_id": "MDQ6VXNlcjI0ODYxMzE2",
      "avatar_url": "https://avatars1.githubusercontent.com/u/24861316?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/aermin",
      "html_url": "https://github.com/aermin",
      "followers_url": "https://api.github.com/users/aermin/followers",
      "following_url": "https://api.github.com/users/aermin/following{/other_user}",
      "gists_url": "https://api.github.com/users/aermin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/aermin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/aermin/subscriptions",
      "organizations_url": "https://api.github.com/users/aermin/orgs",
      "repos_url": "https://api.github.com/users/aermin/repos",
      "events_url": "https://api.github.com/users/aermin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/aermin/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/aermin/ghChat",
    "description": ":octocat: 📱A chat application for GitHub. React + PWA + Node(koa2) + Typescripts  + Mysql  + Socket.io",
    "fork": false,
    "url": "https://api.github.com/repos/aermin/ghChat",
    "forks_url": "https://api.github.com/repos/aermin/ghChat/forks",
    "keys_url": "https://api.github.com/repos/aermin/ghChat/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/aermin/ghChat/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/aermin/ghChat/teams",
    "hooks_url": "https://api.github.com/repos/aermin/ghChat/hooks",
    "issue_events_url": "https://api.github.com/repos/aermin/ghChat/issues/events{/number}",
    "events_url": "https://api.github.com/repos/aermin/ghChat/events",
    "assignees_url": "https://api.github.com/repos/aermin/ghChat/assignees{/user}",
    "branches_url": "https://api.github.com/repos/aermin/ghChat/branches{/branch}",
    "tags_url": "https://api.github.com/repos/aermin/ghChat/tags",
    "blobs_url": "https://api.github.com/repos/aermin/ghChat/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/aermin/ghChat/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/aermin/ghChat/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/aermin/ghChat/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/aermin/ghChat/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/aermin/ghChat/languages",
    "stargazers_url": "https://api.github.com/repos/aermin/ghChat/stargazers",
    "contributors_url": "https://api.github.com/repos/aermin/ghChat/contributors",
    "subscribers_url": "https://api.github.com/repos/aermin/ghChat/subscribers",
    "subscription_url": "https://api.github.com/repos/aermin/ghChat/subscription",
    "commits_url": "https://api.github.com/repos/aermin/ghChat/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/aermin/ghChat/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/aermin/ghChat/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/aermin/ghChat/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/aermin/ghChat/contents/{+path}",
    "compare_url": "https://api.github.com/repos/aermin/ghChat/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/aermin/ghChat/merges",
    "archive_url": "https://api.github.com/repos/aermin/ghChat/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/aermin/ghChat/downloads",
    "issues_url": "https://api.github.com/repos/aermin/ghChat/issues{/number}",
    "pulls_url": "https://api.github.com/repos/aermin/ghChat/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/aermin/ghChat/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/aermin/ghChat/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/aermin/ghChat/labels{/name}",
    "releases_url": "https://api.github.com/repos/aermin/ghChat/releases{/id}",
    "deployments_url": "https://api.github.com/repos/aermin/ghChat/deployments",
    "created_at": "2018-05-21T12:51:55Z",
    "updated_at": "2020-02-27T11:34:27Z",
    "pushed_at": "2020-02-24T06:29:00Z",
    "git_url": "git://github.com/aermin/ghChat.git",
    "ssh_url": "git@github.com:aermin/ghChat.git",
    "clone_url": "https://github.com/aermin/ghChat.git",
    "svn_url": "https://github.com/aermin/ghChat",
    "homepage": "https://im.aermin.top/group_chat/ddbffd80-3663-11e9-a580-d119b23ef62e",
    "size": 54511,
    "stargazers_count": 570,
    "watchers_count": 570,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 110,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 5,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 110,
    "open_issues": 5,
    "watchers": 570,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 56028873,
    "node_id": "MDEwOlJlcG9zaXRvcnk1NjAyODg3Mw==",
    "name": "react-basic",
    "full_name": "react-guide/react-basic",
    "private": false,
    "owner": {
      "login": "react-guide",
      "id": 15154323,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjE1MTU0MzIz",
      "avatar_url": "https://avatars0.githubusercontent.com/u/15154323?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/react-guide",
      "html_url": "https://github.com/react-guide",
      "followers_url": "https://api.github.com/users/react-guide/followers",
      "following_url": "https://api.github.com/users/react-guide/following{/other_user}",
      "gists_url": "https://api.github.com/users/react-guide/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/react-guide/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/react-guide/subscriptions",
      "organizations_url": "https://api.github.com/users/react-guide/orgs",
      "repos_url": "https://api.github.com/users/react-guide/repos",
      "events_url": "https://api.github.com/users/react-guide/events{/privacy}",
      "received_events_url": "https://api.github.com/users/react-guide/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/react-guide/react-basic",
    "description": "React 设计思想",
    "fork": false,
    "url": "https://api.github.com/repos/react-guide/react-basic",
    "forks_url": "https://api.github.com/repos/react-guide/react-basic/forks",
    "keys_url": "https://api.github.com/repos/react-guide/react-basic/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/react-guide/react-basic/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/react-guide/react-basic/teams",
    "hooks_url": "https://api.github.com/repos/react-guide/react-basic/hooks",
    "issue_events_url": "https://api.github.com/repos/react-guide/react-basic/issues/events{/number}",
    "events_url": "https://api.github.com/repos/react-guide/react-basic/events",
    "assignees_url": "https://api.github.com/repos/react-guide/react-basic/assignees{/user}",
    "branches_url": "https://api.github.com/repos/react-guide/react-basic/branches{/branch}",
    "tags_url": "https://api.github.com/repos/react-guide/react-basic/tags",
    "blobs_url": "https://api.github.com/repos/react-guide/react-basic/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/react-guide/react-basic/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/react-guide/react-basic/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/react-guide/react-basic/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/react-guide/react-basic/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/react-guide/react-basic/languages",
    "stargazers_url": "https://api.github.com/repos/react-guide/react-basic/stargazers",
    "contributors_url": "https://api.github.com/repos/react-guide/react-basic/contributors",
    "subscribers_url": "https://api.github.com/repos/react-guide/react-basic/subscribers",
    "subscription_url": "https://api.github.com/repos/react-guide/react-basic/subscription",
    "commits_url": "https://api.github.com/repos/react-guide/react-basic/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/react-guide/react-basic/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/react-guide/react-basic/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/react-guide/react-basic/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/react-guide/react-basic/contents/{+path}",
    "compare_url": "https://api.github.com/repos/react-guide/react-basic/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/react-guide/react-basic/merges",
    "archive_url": "https://api.github.com/repos/react-guide/react-basic/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/react-guide/react-basic/downloads",
    "issues_url": "https://api.github.com/repos/react-guide/react-basic/issues{/number}",
    "pulls_url": "https://api.github.com/repos/react-guide/react-basic/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/react-guide/react-basic/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/react-guide/react-basic/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/react-guide/react-basic/labels{/name}",
    "releases_url": "https://api.github.com/repos/react-guide/react-basic/releases{/id}",
    "deployments_url": "https://api.github.com/repos/react-guide/react-basic/deployments",
    "created_at": "2016-04-12T03:46:29Z",
    "updated_at": "2020-02-25T04:36:35Z",
    "pushed_at": "2016-08-19T03:18:29Z",
    "git_url": "git://github.com/react-guide/react-basic.git",
    "ssh_url": "git@github.com:react-guide/react-basic.git",
    "clone_url": "https://github.com/react-guide/react-basic.git",
    "svn_url": "https://github.com/react-guide/react-basic",
    "homepage": "https://github.com/react-guide/react-basic",
    "size": 15,
    "stargazers_count": 917,
    "watchers_count": 917,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 134,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 134,
    "open_issues": 0,
    "watchers": 917,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 77513419,
    "node_id": "MDEwOlJlcG9zaXRvcnk3NzUxMzQxOQ==",
    "name": "react",
    "full_name": "react-redux-antd-es6/react",
    "private": false,
    "owner": {
      "login": "react-redux-antd-es6",
      "id": 24805142,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjI0ODA1MTQy",
      "avatar_url": "https://avatars3.githubusercontent.com/u/24805142?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/react-redux-antd-es6",
      "html_url": "https://github.com/react-redux-antd-es6",
      "followers_url": "https://api.github.com/users/react-redux-antd-es6/followers",
      "following_url": "https://api.github.com/users/react-redux-antd-es6/following{/other_user}",
      "gists_url": "https://api.github.com/users/react-redux-antd-es6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/react-redux-antd-es6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/react-redux-antd-es6/subscriptions",
      "organizations_url": "https://api.github.com/users/react-redux-antd-es6/orgs",
      "repos_url": "https://api.github.com/users/react-redux-antd-es6/repos",
      "events_url": "https://api.github.com/users/react-redux-antd-es6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/react-redux-antd-es6/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/react-redux-antd-es6/react",
    "description": "基于react的企业后台管理开发框架",
    "fork": false,
    "url": "https://api.github.com/repos/react-redux-antd-es6/react",
    "forks_url": "https://api.github.com/repos/react-redux-antd-es6/react/forks",
    "keys_url": "https://api.github.com/repos/react-redux-antd-es6/react/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/react-redux-antd-es6/react/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/react-redux-antd-es6/react/teams",
    "hooks_url": "https://api.github.com/repos/react-redux-antd-es6/react/hooks",
    "issue_events_url": "https://api.github.com/repos/react-redux-antd-es6/react/issues/events{/number}",
    "events_url": "https://api.github.com/repos/react-redux-antd-es6/react/events",
    "assignees_url": "https://api.github.com/repos/react-redux-antd-es6/react/assignees{/user}",
    "branches_url": "https://api.github.com/repos/react-redux-antd-es6/react/branches{/branch}",
    "tags_url": "https://api.github.com/repos/react-redux-antd-es6/react/tags",
    "blobs_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/react-redux-antd-es6/react/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/react-redux-antd-es6/react/languages",
    "stargazers_url": "https://api.github.com/repos/react-redux-antd-es6/react/stargazers",
    "contributors_url": "https://api.github.com/repos/react-redux-antd-es6/react/contributors",
    "subscribers_url": "https://api.github.com/repos/react-redux-antd-es6/react/subscribers",
    "subscription_url": "https://api.github.com/repos/react-redux-antd-es6/react/subscription",
    "commits_url": "https://api.github.com/repos/react-redux-antd-es6/react/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/react-redux-antd-es6/react/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/react-redux-antd-es6/react/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/react-redux-antd-es6/react/contents/{+path}",
    "compare_url": "https://api.github.com/repos/react-redux-antd-es6/react/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/react-redux-antd-es6/react/merges",
    "archive_url": "https://api.github.com/repos/react-redux-antd-es6/react/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/react-redux-antd-es6/react/downloads",
    "issues_url": "https://api.github.com/repos/react-redux-antd-es6/react/issues{/number}",
    "pulls_url": "https://api.github.com/repos/react-redux-antd-es6/react/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/react-redux-antd-es6/react/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/react-redux-antd-es6/react/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/react-redux-antd-es6/react/labels{/name}",
    "releases_url": "https://api.github.com/repos/react-redux-antd-es6/react/releases{/id}",
    "deployments_url": "https://api.github.com/repos/react-redux-antd-es6/react/deployments",
    "created_at": "2016-12-28T07:44:04Z",
    "updated_at": "2020-02-27T01:35:48Z",
    "pushed_at": "2019-05-20T09:12:26Z",
    "git_url": "git://github.com/react-redux-antd-es6/react.git",
    "ssh_url": "git@github.com:react-redux-antd-es6/react.git",
    "clone_url": "https://github.com/react-redux-antd-es6/react.git",
    "svn_url": "https://github.com/react-redux-antd-es6/react",
    "homepage": "",
    "size": 42689,
    "stargazers_count": 654,
    "watchers_count": 654,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 290,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 6,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 290,
    "open_issues": 6,
    "watchers": 654,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 118861673,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMTg4NjE2NzM=",
    "name": "React_cNode",
    "full_name": "motao314/React_cNode",
    "private": false,
    "owner": {
      "login": "motao314",
      "id": 26956611,
      "node_id": "MDQ6VXNlcjI2OTU2NjEx",
      "avatar_url": "https://avatars1.githubusercontent.com/u/26956611?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/motao314",
      "html_url": "https://github.com/motao314",
      "followers_url": "https://api.github.com/users/motao314/followers",
      "following_url": "https://api.github.com/users/motao314/following{/other_user}",
      "gists_url": "https://api.github.com/users/motao314/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/motao314/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/motao314/subscriptions",
      "organizations_url": "https://api.github.com/users/motao314/orgs",
      "repos_url": "https://api.github.com/users/motao314/repos",
      "events_url": "https://api.github.com/users/motao314/events{/privacy}",
      "received_events_url": "https://api.github.com/users/motao314/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/motao314/React_cNode",
    "description": "以cNode为例的React实战项目",
    "fork": false,
    "url": "https://api.github.com/repos/motao314/React_cNode",
    "forks_url": "https://api.github.com/repos/motao314/React_cNode/forks",
    "keys_url": "https://api.github.com/repos/motao314/React_cNode/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/motao314/React_cNode/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/motao314/React_cNode/teams",
    "hooks_url": "https://api.github.com/repos/motao314/React_cNode/hooks",
    "issue_events_url": "https://api.github.com/repos/motao314/React_cNode/issues/events{/number}",
    "events_url": "https://api.github.com/repos/motao314/React_cNode/events",
    "assignees_url": "https://api.github.com/repos/motao314/React_cNode/assignees{/user}",
    "branches_url": "https://api.github.com/repos/motao314/React_cNode/branches{/branch}",
    "tags_url": "https://api.github.com/repos/motao314/React_cNode/tags",
    "blobs_url": "https://api.github.com/repos/motao314/React_cNode/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/motao314/React_cNode/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/motao314/React_cNode/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/motao314/React_cNode/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/motao314/React_cNode/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/motao314/React_cNode/languages",
    "stargazers_url": "https://api.github.com/repos/motao314/React_cNode/stargazers",
    "contributors_url": "https://api.github.com/repos/motao314/React_cNode/contributors",
    "subscribers_url": "https://api.github.com/repos/motao314/React_cNode/subscribers",
    "subscription_url": "https://api.github.com/repos/motao314/React_cNode/subscription",
    "commits_url": "https://api.github.com/repos/motao314/React_cNode/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/motao314/React_cNode/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/motao314/React_cNode/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/motao314/React_cNode/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/motao314/React_cNode/contents/{+path}",
    "compare_url": "https://api.github.com/repos/motao314/React_cNode/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/motao314/React_cNode/merges",
    "archive_url": "https://api.github.com/repos/motao314/React_cNode/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/motao314/React_cNode/downloads",
    "issues_url": "https://api.github.com/repos/motao314/React_cNode/issues{/number}",
    "pulls_url": "https://api.github.com/repos/motao314/React_cNode/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/motao314/React_cNode/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/motao314/React_cNode/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/motao314/React_cNode/labels{/name}",
    "releases_url": "https://api.github.com/repos/motao314/React_cNode/releases{/id}",
    "deployments_url": "https://api.github.com/repos/motao314/React_cNode/deployments",
    "created_at": "2018-01-25T04:21:56Z",
    "updated_at": "2020-02-17T04:56:28Z",
    "pushed_at": "2018-02-08T06:41:26Z",
    "git_url": "git://github.com/motao314/React_cNode.git",
    "ssh_url": "git@github.com:motao314/React_cNode.git",
    "clone_url": "https://github.com/motao314/React_cNode.git",
    "svn_url": "https://github.com/motao314/React_cNode",
    "homepage": null,
    "size": 181,
    "stargazers_count": 63,
    "watchers_count": 63,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 102,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 102,
    "open_issues": 0,
    "watchers": 63,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 36535156,
    "node_id": "MDEwOlJlcG9zaXRvcnkzNjUzNTE1Ng==",
    "name": "redux",
    "full_name": "reduxjs/redux",
    "private": false,
    "owner": {
      "login": "reduxjs",
      "id": 13142323,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzMTQyMzIz",
      "avatar_url": "https://avatars3.githubusercontent.com/u/13142323?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/reduxjs",
      "html_url": "https://github.com/reduxjs",
      "followers_url": "https://api.github.com/users/reduxjs/followers",
      "following_url": "https://api.github.com/users/reduxjs/following{/other_user}",
      "gists_url": "https://api.github.com/users/reduxjs/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/reduxjs/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/reduxjs/subscriptions",
      "organizations_url": "https://api.github.com/users/reduxjs/orgs",
      "repos_url": "https://api.github.com/users/reduxjs/repos",
      "events_url": "https://api.github.com/users/reduxjs/events{/privacy}",
      "received_events_url": "https://api.github.com/users/reduxjs/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/reduxjs/redux",
    "description": "Predictable state container for JavaScript apps",
    "fork": false,
    "url": "https://api.github.com/repos/reduxjs/redux",
    "forks_url": "https://api.github.com/repos/reduxjs/redux/forks",
    "keys_url": "https://api.github.com/repos/reduxjs/redux/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/reduxjs/redux/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/reduxjs/redux/teams",
    "hooks_url": "https://api.github.com/repos/reduxjs/redux/hooks",
    "issue_events_url": "https://api.github.com/repos/reduxjs/redux/issues/events{/number}",
    "events_url": "https://api.github.com/repos/reduxjs/redux/events",
    "assignees_url": "https://api.github.com/repos/reduxjs/redux/assignees{/user}",
    "branches_url": "https://api.github.com/repos/reduxjs/redux/branches{/branch}",
    "tags_url": "https://api.github.com/repos/reduxjs/redux/tags",
    "blobs_url": "https://api.github.com/repos/reduxjs/redux/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/reduxjs/redux/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/reduxjs/redux/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/reduxjs/redux/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/reduxjs/redux/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/reduxjs/redux/languages",
    "stargazers_url": "https://api.github.com/repos/reduxjs/redux/stargazers",
    "contributors_url": "https://api.github.com/repos/reduxjs/redux/contributors",
    "subscribers_url": "https://api.github.com/repos/reduxjs/redux/subscribers",
    "subscription_url": "https://api.github.com/repos/reduxjs/redux/subscription",
    "commits_url": "https://api.github.com/repos/reduxjs/redux/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/reduxjs/redux/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/reduxjs/redux/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/reduxjs/redux/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/reduxjs/redux/contents/{+path}",
    "compare_url": "https://api.github.com/repos/reduxjs/redux/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/reduxjs/redux/merges",
    "archive_url": "https://api.github.com/repos/reduxjs/redux/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/reduxjs/redux/downloads",
    "issues_url": "https://api.github.com/repos/reduxjs/redux/issues{/number}",
    "pulls_url": "https://api.github.com/repos/reduxjs/redux/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/reduxjs/redux/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/reduxjs/redux/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/reduxjs/redux/labels{/name}",
    "releases_url": "https://api.github.com/repos/reduxjs/redux/releases{/id}",
    "deployments_url": "https://api.github.com/repos/reduxjs/redux/deployments",
    "created_at": "2015-05-29T23:53:15Z",
    "updated_at": "2020-02-27T08:55:53Z",
    "pushed_at": "2020-02-27T06:03:37Z",
    "git_url": "git://github.com/reduxjs/redux.git",
    "ssh_url": "git@github.com:reduxjs/redux.git",
    "clone_url": "https://github.com/reduxjs/redux.git",
    "svn_url": "https://github.com/reduxjs/redux",
    "homepage": "https://redux.js.org",
    "size": 9321,
    "stargazers_count": 52330,
    "watchers_count": 52330,
    "language": "TypeScript",
    "has_issues": true,
    "has_projects": false,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": true,
    "forks_count": 13783,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 42,
    "license": {
      "key": "other",
      "name": "Other",
      "spdx_id": "NOASSERTION",
      "url": null,
      "node_id": "MDc6TGljZW5zZTA="
    },
    "forks": 13783,
    "open_issues": 42,
    "watchers": 52330,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 39013909,
    "node_id": "MDEwOlJlcG9zaXRvcnkzOTAxMzkwOQ==",
    "name": "redux-thunk",
    "full_name": "reduxjs/redux-thunk",
    "private": false,
    "owner": {
      "login": "reduxjs",
      "id": 13142323,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzMTQyMzIz",
      "avatar_url": "https://avatars3.githubusercontent.com/u/13142323?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/reduxjs",
      "html_url": "https://github.com/reduxjs",
      "followers_url": "https://api.github.com/users/reduxjs/followers",
      "following_url": "https://api.github.com/users/reduxjs/following{/other_user}",
      "gists_url": "https://api.github.com/users/reduxjs/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/reduxjs/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/reduxjs/subscriptions",
      "organizations_url": "https://api.github.com/users/reduxjs/orgs",
      "repos_url": "https://api.github.com/users/reduxjs/repos",
      "events_url": "https://api.github.com/users/reduxjs/events{/privacy}",
      "received_events_url": "https://api.github.com/users/reduxjs/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/reduxjs/redux-thunk",
    "description": "Thunk middleware for Redux",
    "fork": false,
    "url": "https://api.github.com/repos/reduxjs/redux-thunk",
    "forks_url": "https://api.github.com/repos/reduxjs/redux-thunk/forks",
    "keys_url": "https://api.github.com/repos/reduxjs/redux-thunk/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/reduxjs/redux-thunk/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/reduxjs/redux-thunk/teams",
    "hooks_url": "https://api.github.com/repos/reduxjs/redux-thunk/hooks",
    "issue_events_url": "https://api.github.com/repos/reduxjs/redux-thunk/issues/events{/number}",
    "events_url": "https://api.github.com/repos/reduxjs/redux-thunk/events",
    "assignees_url": "https://api.github.com/repos/reduxjs/redux-thunk/assignees{/user}",
    "branches_url": "https://api.github.com/repos/reduxjs/redux-thunk/branches{/branch}",
    "tags_url": "https://api.github.com/repos/reduxjs/redux-thunk/tags",
    "blobs_url": "https://api.github.com/repos/reduxjs/redux-thunk/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/reduxjs/redux-thunk/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/reduxjs/redux-thunk/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/reduxjs/redux-thunk/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/reduxjs/redux-thunk/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/reduxjs/redux-thunk/languages",
    "stargazers_url": "https://api.github.com/repos/reduxjs/redux-thunk/stargazers",
    "contributors_url": "https://api.github.com/repos/reduxjs/redux-thunk/contributors",
    "subscribers_url": "https://api.github.com/repos/reduxjs/redux-thunk/subscribers",
    "subscription_url": "https://api.github.com/repos/reduxjs/redux-thunk/subscription",
    "commits_url": "https://api.github.com/repos/reduxjs/redux-thunk/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/reduxjs/redux-thunk/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/reduxjs/redux-thunk/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/reduxjs/redux-thunk/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/reduxjs/redux-thunk/contents/{+path}",
    "compare_url": "https://api.github.com/repos/reduxjs/redux-thunk/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/reduxjs/redux-thunk/merges",
    "archive_url": "https://api.github.com/repos/reduxjs/redux-thunk/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/reduxjs/redux-thunk/downloads",
    "issues_url": "https://api.github.com/repos/reduxjs/redux-thunk/issues{/number}",
    "pulls_url": "https://api.github.com/repos/reduxjs/redux-thunk/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/reduxjs/redux-thunk/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/reduxjs/redux-thunk/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/reduxjs/redux-thunk/labels{/name}",
    "releases_url": "https://api.github.com/repos/reduxjs/redux-thunk/releases{/id}",
    "deployments_url": "https://api.github.com/repos/reduxjs/redux-thunk/deployments",
    "created_at": "2015-07-13T13:33:08Z",
    "updated_at": "2020-02-27T08:11:46Z",
    "pushed_at": "2020-02-10T21:30:20Z",
    "git_url": "git://github.com/reduxjs/redux-thunk.git",
    "ssh_url": "git@github.com:reduxjs/redux-thunk.git",
    "clone_url": "https://github.com/reduxjs/redux-thunk.git",
    "svn_url": "https://github.com/reduxjs/redux-thunk",
    "homepage": null,
    "size": 240,
    "stargazers_count": 14095,
    "watchers_count": 14095,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": false,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 792,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 2,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 792,
    "open_issues": 2,
    "watchers": 14095,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 612230,
    "node_id": "MDEwOlJlcG9zaXRvcnk2MTIyMzA=",
    "name": "nvm",
    "full_name": "nvm-sh/nvm",
    "private": false,
    "owner": {
      "login": "nvm-sh",
      "id": 49963700,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjQ5OTYzNzAw",
      "avatar_url": "https://avatars3.githubusercontent.com/u/49963700?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/nvm-sh",
      "html_url": "https://github.com/nvm-sh",
      "followers_url": "https://api.github.com/users/nvm-sh/followers",
      "following_url": "https://api.github.com/users/nvm-sh/following{/other_user}",
      "gists_url": "https://api.github.com/users/nvm-sh/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/nvm-sh/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/nvm-sh/subscriptions",
      "organizations_url": "https://api.github.com/users/nvm-sh/orgs",
      "repos_url": "https://api.github.com/users/nvm-sh/repos",
      "events_url": "https://api.github.com/users/nvm-sh/events{/privacy}",
      "received_events_url": "https://api.github.com/users/nvm-sh/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/nvm-sh/nvm",
    "description": "Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions",
    "fork": false,
    "url": "https://api.github.com/repos/nvm-sh/nvm",
    "forks_url": "https://api.github.com/repos/nvm-sh/nvm/forks",
    "keys_url": "https://api.github.com/repos/nvm-sh/nvm/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/nvm-sh/nvm/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/nvm-sh/nvm/teams",
    "hooks_url": "https://api.github.com/repos/nvm-sh/nvm/hooks",
    "issue_events_url": "https://api.github.com/repos/nvm-sh/nvm/issues/events{/number}",
    "events_url": "https://api.github.com/repos/nvm-sh/nvm/events",
    "assignees_url": "https://api.github.com/repos/nvm-sh/nvm/assignees{/user}",
    "branches_url": "https://api.github.com/repos/nvm-sh/nvm/branches{/branch}",
    "tags_url": "https://api.github.com/repos/nvm-sh/nvm/tags",
    "blobs_url": "https://api.github.com/repos/nvm-sh/nvm/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/nvm-sh/nvm/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/nvm-sh/nvm/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/nvm-sh/nvm/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/nvm-sh/nvm/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/nvm-sh/nvm/languages",
    "stargazers_url": "https://api.github.com/repos/nvm-sh/nvm/stargazers",
    "contributors_url": "https://api.github.com/repos/nvm-sh/nvm/contributors",
    "subscribers_url": "https://api.github.com/repos/nvm-sh/nvm/subscribers",
    "subscription_url": "https://api.github.com/repos/nvm-sh/nvm/subscription",
    "commits_url": "https://api.github.com/repos/nvm-sh/nvm/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/nvm-sh/nvm/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/nvm-sh/nvm/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/nvm-sh/nvm/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/nvm-sh/nvm/contents/{+path}",
    "compare_url": "https://api.github.com/repos/nvm-sh/nvm/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/nvm-sh/nvm/merges",
    "archive_url": "https://api.github.com/repos/nvm-sh/nvm/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/nvm-sh/nvm/downloads",
    "issues_url": "https://api.github.com/repos/nvm-sh/nvm/issues{/number}",
    "pulls_url": "https://api.github.com/repos/nvm-sh/nvm/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/nvm-sh/nvm/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/nvm-sh/nvm/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/nvm-sh/nvm/labels{/name}",
    "releases_url": "https://api.github.com/repos/nvm-sh/nvm/releases{/id}",
    "deployments_url": "https://api.github.com/repos/nvm-sh/nvm/deployments",
    "created_at": "2010-04-15T17:47:47Z",
    "updated_at": "2020-02-27T13:00:13Z",
    "pushed_at": "2020-02-22T19:41:25Z",
    "git_url": "git://github.com/nvm-sh/nvm.git",
    "ssh_url": "git@github.com:nvm-sh/nvm.git",
    "clone_url": "https://github.com/nvm-sh/nvm.git",
    "svn_url": "https://github.com/nvm-sh/nvm",
    "homepage": "",
    "size": 2649,
    "stargazers_count": 40006,
    "watchers_count": 40006,
    "language": "Shell",
    "has_issues": true,
    "has_projects": false,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 3844,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 310,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 3844,
    "open_issues": 310,
    "watchers": 40006,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 75681724,
    "node_id": "MDEwOlJlcG9zaXRvcnk3NTY4MTcyNA==",
    "name": "react-and-redux",
    "full_name": "mocheng/react-and-redux",
    "private": false,
    "owner": {
      "login": "mocheng",
      "id": 239291,
      "node_id": "MDQ6VXNlcjIzOTI5MQ==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/239291?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mocheng",
      "html_url": "https://github.com/mocheng",
      "followers_url": "https://api.github.com/users/mocheng/followers",
      "following_url": "https://api.github.com/users/mocheng/following{/other_user}",
      "gists_url": "https://api.github.com/users/mocheng/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mocheng/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mocheng/subscriptions",
      "organizations_url": "https://api.github.com/users/mocheng/orgs",
      "repos_url": "https://api.github.com/users/mocheng/repos",
      "events_url": "https://api.github.com/users/mocheng/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mocheng/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/mocheng/react-and-redux",
    "description": "《深入浅出React和Redux》代码",
    "fork": false,
    "url": "https://api.github.com/repos/mocheng/react-and-redux",
    "forks_url": "https://api.github.com/repos/mocheng/react-and-redux/forks",
    "keys_url": "https://api.github.com/repos/mocheng/react-and-redux/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/mocheng/react-and-redux/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/mocheng/react-and-redux/teams",
    "hooks_url": "https://api.github.com/repos/mocheng/react-and-redux/hooks",
    "issue_events_url": "https://api.github.com/repos/mocheng/react-and-redux/issues/events{/number}",
    "events_url": "https://api.github.com/repos/mocheng/react-and-redux/events",
    "assignees_url": "https://api.github.com/repos/mocheng/react-and-redux/assignees{/user}",
    "branches_url": "https://api.github.com/repos/mocheng/react-and-redux/branches{/branch}",
    "tags_url": "https://api.github.com/repos/mocheng/react-and-redux/tags",
    "blobs_url": "https://api.github.com/repos/mocheng/react-and-redux/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/mocheng/react-and-redux/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/mocheng/react-and-redux/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/mocheng/react-and-redux/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/mocheng/react-and-redux/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/mocheng/react-and-redux/languages",
    "stargazers_url": "https://api.github.com/repos/mocheng/react-and-redux/stargazers",
    "contributors_url": "https://api.github.com/repos/mocheng/react-and-redux/contributors",
    "subscribers_url": "https://api.github.com/repos/mocheng/react-and-redux/subscribers",
    "subscription_url": "https://api.github.com/repos/mocheng/react-and-redux/subscription",
    "commits_url": "https://api.github.com/repos/mocheng/react-and-redux/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/mocheng/react-and-redux/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/mocheng/react-and-redux/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/mocheng/react-and-redux/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/mocheng/react-and-redux/contents/{+path}",
    "compare_url": "https://api.github.com/repos/mocheng/react-and-redux/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/mocheng/react-and-redux/merges",
    "archive_url": "https://api.github.com/repos/mocheng/react-and-redux/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/mocheng/react-and-redux/downloads",
    "issues_url": "https://api.github.com/repos/mocheng/react-and-redux/issues{/number}",
    "pulls_url": "https://api.github.com/repos/mocheng/react-and-redux/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/mocheng/react-and-redux/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/mocheng/react-and-redux/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/mocheng/react-and-redux/labels{/name}",
    "releases_url": "https://api.github.com/repos/mocheng/react-and-redux/releases{/id}",
    "deployments_url": "https://api.github.com/repos/mocheng/react-and-redux/deployments",
    "created_at": "2016-12-06T01:21:46Z",
    "updated_at": "2020-02-26T08:43:53Z",
    "pushed_at": "2018-08-14T06:33:54Z",
    "git_url": "git://github.com/mocheng/react-and-redux.git",
    "ssh_url": "git@github.com:mocheng/react-and-redux.git",
    "clone_url": "https://github.com/mocheng/react-and-redux.git",
    "svn_url": "https://github.com/mocheng/react-and-redux",
    "homepage": "",
    "size": 809,
    "stargazers_count": 1728,
    "watchers_count": 1728,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 752,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 63,
    "license": null,
    "forks": 752,
    "open_issues": 63,
    "watchers": 1728,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 10270250,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
    "name": "react",
    "full_name": "facebook/react",
    "private": false,
    "owner": {
      "login": "facebook",
      "id": 69631,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
      "avatar_url": "https://avatars3.githubusercontent.com/u/69631?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook",
      "html_url": "https://github.com/facebook",
      "followers_url": "https://api.github.com/users/facebook/followers",
      "following_url": "https://api.github.com/users/facebook/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook/orgs",
      "repos_url": "https://api.github.com/users/facebook/repos",
      "events_url": "https://api.github.com/users/facebook/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/facebook/react",
    "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    "fork": false,
    "url": "https://api.github.com/repos/facebook/react",
    "forks_url": "https://api.github.com/repos/facebook/react/forks",
    "keys_url": "https://api.github.com/repos/facebook/react/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/facebook/react/teams",
    "hooks_url": "https://api.github.com/repos/facebook/react/hooks",
    "issue_events_url": "https://api.github.com/repos/facebook/react/issues/events{/number}",
    "events_url": "https://api.github.com/repos/facebook/react/events",
    "assignees_url": "https://api.github.com/repos/facebook/react/assignees{/user}",
    "branches_url": "https://api.github.com/repos/facebook/react/branches{/branch}",
    "tags_url": "https://api.github.com/repos/facebook/react/tags",
    "blobs_url": "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/facebook/react/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/facebook/react/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/facebook/react/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/facebook/react/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/facebook/react/languages",
    "stargazers_url": "https://api.github.com/repos/facebook/react/stargazers",
    "contributors_url": "https://api.github.com/repos/facebook/react/contributors",
    "subscribers_url": "https://api.github.com/repos/facebook/react/subscribers",
    "subscription_url": "https://api.github.com/repos/facebook/react/subscription",
    "commits_url": "https://api.github.com/repos/facebook/react/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/facebook/react/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/facebook/react/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/facebook/react/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/facebook/react/contents/{+path}",
    "compare_url": "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/facebook/react/merges",
    "archive_url": "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/facebook/react/downloads",
    "issues_url": "https://api.github.com/repos/facebook/react/issues{/number}",
    "pulls_url": "https://api.github.com/repos/facebook/react/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/facebook/react/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/facebook/react/labels{/name}",
    "releases_url": "https://api.github.com/repos/facebook/react/releases{/id}",
    "deployments_url": "https://api.github.com/repos/facebook/react/deployments",
    "created_at": "2013-05-24T16:15:54Z",
    "updated_at": "2020-02-27T12:58:30Z",
    "pushed_at": "2020-02-27T12:58:17Z",
    "git_url": "git://github.com/facebook/react.git",
    "ssh_url": "git@github.com:facebook/react.git",
    "clone_url": "https://github.com/facebook/react.git",
    "svn_url": "https://github.com/facebook/react",
    "homepage": "https://reactjs.org",
    "size": 151051,
    "stargazers_count": 144406,
    "watchers_count": 144406,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": true,
    "forks_count": 27731,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 560,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 27731,
    "open_issues": 560,
    "watchers": 144406,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 38243237,
    "node_id": "MDEwOlJlcG9zaXRvcnkzODI0MzIzNw==",
    "name": "es-checker",
    "full_name": "ruanyf/es-checker",
    "private": false,
    "owner": {
      "login": "ruanyf",
      "id": 905434,
      "node_id": "MDQ6VXNlcjkwNTQzNA==",
      "avatar_url": "https://avatars0.githubusercontent.com/u/905434?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ruanyf",
      "html_url": "https://github.com/ruanyf",
      "followers_url": "https://api.github.com/users/ruanyf/followers",
      "following_url": "https://api.github.com/users/ruanyf/following{/other_user}",
      "gists_url": "https://api.github.com/users/ruanyf/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ruanyf/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ruanyf/subscriptions",
      "organizations_url": "https://api.github.com/users/ruanyf/orgs",
      "repos_url": "https://api.github.com/users/ruanyf/repos",
      "events_url": "https://api.github.com/users/ruanyf/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ruanyf/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/ruanyf/es-checker",
    "description": "A feature detection library for ECMAScript in node.js and browser.",
    "fork": false,
    "url": "https://api.github.com/repos/ruanyf/es-checker",
    "forks_url": "https://api.github.com/repos/ruanyf/es-checker/forks",
    "keys_url": "https://api.github.com/repos/ruanyf/es-checker/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/ruanyf/es-checker/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/ruanyf/es-checker/teams",
    "hooks_url": "https://api.github.com/repos/ruanyf/es-checker/hooks",
    "issue_events_url": "https://api.github.com/repos/ruanyf/es-checker/issues/events{/number}",
    "events_url": "https://api.github.com/repos/ruanyf/es-checker/events",
    "assignees_url": "https://api.github.com/repos/ruanyf/es-checker/assignees{/user}",
    "branches_url": "https://api.github.com/repos/ruanyf/es-checker/branches{/branch}",
    "tags_url": "https://api.github.com/repos/ruanyf/es-checker/tags",
    "blobs_url": "https://api.github.com/repos/ruanyf/es-checker/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/ruanyf/es-checker/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/ruanyf/es-checker/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/ruanyf/es-checker/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/ruanyf/es-checker/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/ruanyf/es-checker/languages",
    "stargazers_url": "https://api.github.com/repos/ruanyf/es-checker/stargazers",
    "contributors_url": "https://api.github.com/repos/ruanyf/es-checker/contributors",
    "subscribers_url": "https://api.github.com/repos/ruanyf/es-checker/subscribers",
    "subscription_url": "https://api.github.com/repos/ruanyf/es-checker/subscription",
    "commits_url": "https://api.github.com/repos/ruanyf/es-checker/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/ruanyf/es-checker/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/ruanyf/es-checker/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/ruanyf/es-checker/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/ruanyf/es-checker/contents/{+path}",
    "compare_url": "https://api.github.com/repos/ruanyf/es-checker/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/ruanyf/es-checker/merges",
    "archive_url": "https://api.github.com/repos/ruanyf/es-checker/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/ruanyf/es-checker/downloads",
    "issues_url": "https://api.github.com/repos/ruanyf/es-checker/issues{/number}",
    "pulls_url": "https://api.github.com/repos/ruanyf/es-checker/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/ruanyf/es-checker/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/ruanyf/es-checker/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/ruanyf/es-checker/labels{/name}",
    "releases_url": "https://api.github.com/repos/ruanyf/es-checker/releases{/id}",
    "deployments_url": "https://api.github.com/repos/ruanyf/es-checker/deployments",
    "created_at": "2015-06-29T11:02:58Z",
    "updated_at": "2020-02-12T05:55:49Z",
    "pushed_at": "2019-07-16T13:38:38Z",
    "git_url": "git://github.com/ruanyf/es-checker.git",
    "ssh_url": "git@github.com:ruanyf/es-checker.git",
    "clone_url": "https://github.com/ruanyf/es-checker.git",
    "svn_url": "https://github.com/ruanyf/es-checker",
    "homepage": "http://ruanyf.github.io/es-checker",
    "size": 576,
    "stargazers_count": 959,
    "watchers_count": 959,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": true,
    "forks_count": 155,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 155,
    "open_issues": 0,
    "watchers": 959,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 137935980,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMzc5MzU5ODA=",
    "name": "machine-learning-yearning-cn",
    "full_name": "deeplearning-ai/machine-learning-yearning-cn",
    "private": false,
    "owner": {
      "login": "deeplearning-ai",
      "id": 29557633,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjI5NTU3NjMz",
      "avatar_url": "https://avatars0.githubusercontent.com/u/29557633?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/deeplearning-ai",
      "html_url": "https://github.com/deeplearning-ai",
      "followers_url": "https://api.github.com/users/deeplearning-ai/followers",
      "following_url": "https://api.github.com/users/deeplearning-ai/following{/other_user}",
      "gists_url": "https://api.github.com/users/deeplearning-ai/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/deeplearning-ai/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/deeplearning-ai/subscriptions",
      "organizations_url": "https://api.github.com/users/deeplearning-ai/orgs",
      "repos_url": "https://api.github.com/users/deeplearning-ai/repos",
      "events_url": "https://api.github.com/users/deeplearning-ai/events{/privacy}",
      "received_events_url": "https://api.github.com/users/deeplearning-ai/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/deeplearning-ai/machine-learning-yearning-cn",
    "description": "Machine Learning Yearning 中文版 - 《机器学习训练秘籍》 - Andrew Ng 著",
    "fork": false,
    "url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn",
    "forks_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/forks",
    "keys_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/teams",
    "hooks_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/hooks",
    "issue_events_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/issues/events{/number}",
    "events_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/events",
    "assignees_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/assignees{/user}",
    "branches_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/branches{/branch}",
    "tags_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/tags",
    "blobs_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/languages",
    "stargazers_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/stargazers",
    "contributors_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/contributors",
    "subscribers_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/subscribers",
    "subscription_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/subscription",
    "commits_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/contents/{+path}",
    "compare_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/merges",
    "archive_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/downloads",
    "issues_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/issues{/number}",
    "pulls_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/labels{/name}",
    "releases_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/releases{/id}",
    "deployments_url": "https://api.github.com/repos/deeplearning-ai/machine-learning-yearning-cn/deployments",
    "created_at": "2018-06-19T19:26:39Z",
    "updated_at": "2020-02-26T15:14:37Z",
    "pushed_at": "2019-10-16T04:49:10Z",
    "git_url": "git://github.com/deeplearning-ai/machine-learning-yearning-cn.git",
    "ssh_url": "git@github.com:deeplearning-ai/machine-learning-yearning-cn.git",
    "clone_url": "https://github.com/deeplearning-ai/machine-learning-yearning-cn.git",
    "svn_url": "https://github.com/deeplearning-ai/machine-learning-yearning-cn",
    "homepage": "https://deeplearning-ai.github.io/machine-learning-yearning-cn/",
    "size": 15350,
    "stargazers_count": 5893,
    "watchers_count": 5893,
    "language": "CSS",
    "has_issues": true,
    "has_projects": false,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": true,
    "forks_count": 1246,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": {
      "key": "other",
      "name": "Other",
      "spdx_id": "NOASSERTION",
      "url": null,
      "node_id": "MDc6TGljZW5zZTA="
    },
    "forks": 1246,
    "open_issues": 0,
    "watchers": 5893,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 123458551,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMjM0NTg1NTE=",
    "name": "Python-100-Days",
    "full_name": "jackfrued/Python-100-Days",
    "private": false,
    "owner": {
      "login": "jackfrued",
      "id": 7474657,
      "node_id": "MDQ6VXNlcjc0NzQ2NTc=",
      "avatar_url": "https://avatars0.githubusercontent.com/u/7474657?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jackfrued",
      "html_url": "https://github.com/jackfrued",
      "followers_url": "https://api.github.com/users/jackfrued/followers",
      "following_url": "https://api.github.com/users/jackfrued/following{/other_user}",
      "gists_url": "https://api.github.com/users/jackfrued/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jackfrued/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jackfrued/subscriptions",
      "organizations_url": "https://api.github.com/users/jackfrued/orgs",
      "repos_url": "https://api.github.com/users/jackfrued/repos",
      "events_url": "https://api.github.com/users/jackfrued/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jackfrued/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/jackfrued/Python-100-Days",
    "description": "Python - 100天从新手到大师",
    "fork": false,
    "url": "https://api.github.com/repos/jackfrued/Python-100-Days",
    "forks_url": "https://api.github.com/repos/jackfrued/Python-100-Days/forks",
    "keys_url": "https://api.github.com/repos/jackfrued/Python-100-Days/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/jackfrued/Python-100-Days/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/jackfrued/Python-100-Days/teams",
    "hooks_url": "https://api.github.com/repos/jackfrued/Python-100-Days/hooks",
    "issue_events_url": "https://api.github.com/repos/jackfrued/Python-100-Days/issues/events{/number}",
    "events_url": "https://api.github.com/repos/jackfrued/Python-100-Days/events",
    "assignees_url": "https://api.github.com/repos/jackfrued/Python-100-Days/assignees{/user}",
    "branches_url": "https://api.github.com/repos/jackfrued/Python-100-Days/branches{/branch}",
    "tags_url": "https://api.github.com/repos/jackfrued/Python-100-Days/tags",
    "blobs_url": "https://api.github.com/repos/jackfrued/Python-100-Days/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/jackfrued/Python-100-Days/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/jackfrued/Python-100-Days/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/jackfrued/Python-100-Days/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/jackfrued/Python-100-Days/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/jackfrued/Python-100-Days/languages",
    "stargazers_url": "https://api.github.com/repos/jackfrued/Python-100-Days/stargazers",
    "contributors_url": "https://api.github.com/repos/jackfrued/Python-100-Days/contributors",
    "subscribers_url": "https://api.github.com/repos/jackfrued/Python-100-Days/subscribers",
    "subscription_url": "https://api.github.com/repos/jackfrued/Python-100-Days/subscription",
    "commits_url": "https://api.github.com/repos/jackfrued/Python-100-Days/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/jackfrued/Python-100-Days/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/jackfrued/Python-100-Days/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/jackfrued/Python-100-Days/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/jackfrued/Python-100-Days/contents/{+path}",
    "compare_url": "https://api.github.com/repos/jackfrued/Python-100-Days/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/jackfrued/Python-100-Days/merges",
    "archive_url": "https://api.github.com/repos/jackfrued/Python-100-Days/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/jackfrued/Python-100-Days/downloads",
    "issues_url": "https://api.github.com/repos/jackfrued/Python-100-Days/issues{/number}",
    "pulls_url": "https://api.github.com/repos/jackfrued/Python-100-Days/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/jackfrued/Python-100-Days/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/jackfrued/Python-100-Days/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/jackfrued/Python-100-Days/labels{/name}",
    "releases_url": "https://api.github.com/repos/jackfrued/Python-100-Days/releases{/id}",
    "deployments_url": "https://api.github.com/repos/jackfrued/Python-100-Days/deployments",
    "created_at": "2018-03-01T16:05:52Z",
    "updated_at": "2020-02-27T12:50:51Z",
    "pushed_at": "2020-02-26T13:06:04Z",
    "git_url": "git://github.com/jackfrued/Python-100-Days.git",
    "ssh_url": "git@github.com:jackfrued/Python-100-Days.git",
    "clone_url": "https://github.com/jackfrued/Python-100-Days.git",
    "svn_url": "https://github.com/jackfrued/Python-100-Days",
    "homepage": "",
    "size": 202885,
    "stargazers_count": 79012,
    "watchers_count": 79012,
    "language": "Jupyter Notebook",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 31476,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 321,
    "license": null,
    "forks": 31476,
    "open_issues": 321,
    "watchers": 79012,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 36804486,
    "node_id": "MDEwOlJlcG9zaXRvcnkzNjgwNDQ4Ng==",
    "name": "tqdm",
    "full_name": "tqdm/tqdm",
    "private": false,
    "owner": {
      "login": "tqdm",
      "id": 12731565,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNzMxNTY1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/12731565?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tqdm",
      "html_url": "https://github.com/tqdm",
      "followers_url": "https://api.github.com/users/tqdm/followers",
      "following_url": "https://api.github.com/users/tqdm/following{/other_user}",
      "gists_url": "https://api.github.com/users/tqdm/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tqdm/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tqdm/subscriptions",
      "organizations_url": "https://api.github.com/users/tqdm/orgs",
      "repos_url": "https://api.github.com/users/tqdm/repos",
      "events_url": "https://api.github.com/users/tqdm/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tqdm/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/tqdm/tqdm",
    "description": "A Fast, Extensible Progress Bar for Python and CLI",
    "fork": false,
    "url": "https://api.github.com/repos/tqdm/tqdm",
    "forks_url": "https://api.github.com/repos/tqdm/tqdm/forks",
    "keys_url": "https://api.github.com/repos/tqdm/tqdm/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/tqdm/tqdm/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/tqdm/tqdm/teams",
    "hooks_url": "https://api.github.com/repos/tqdm/tqdm/hooks",
    "issue_events_url": "https://api.github.com/repos/tqdm/tqdm/issues/events{/number}",
    "events_url": "https://api.github.com/repos/tqdm/tqdm/events",
    "assignees_url": "https://api.github.com/repos/tqdm/tqdm/assignees{/user}",
    "branches_url": "https://api.github.com/repos/tqdm/tqdm/branches{/branch}",
    "tags_url": "https://api.github.com/repos/tqdm/tqdm/tags",
    "blobs_url": "https://api.github.com/repos/tqdm/tqdm/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/tqdm/tqdm/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/tqdm/tqdm/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/tqdm/tqdm/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/tqdm/tqdm/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/tqdm/tqdm/languages",
    "stargazers_url": "https://api.github.com/repos/tqdm/tqdm/stargazers",
    "contributors_url": "https://api.github.com/repos/tqdm/tqdm/contributors",
    "subscribers_url": "https://api.github.com/repos/tqdm/tqdm/subscribers",
    "subscription_url": "https://api.github.com/repos/tqdm/tqdm/subscription",
    "commits_url": "https://api.github.com/repos/tqdm/tqdm/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/tqdm/tqdm/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/tqdm/tqdm/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/tqdm/tqdm/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/tqdm/tqdm/contents/{+path}",
    "compare_url": "https://api.github.com/repos/tqdm/tqdm/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/tqdm/tqdm/merges",
    "archive_url": "https://api.github.com/repos/tqdm/tqdm/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/tqdm/tqdm/downloads",
    "issues_url": "https://api.github.com/repos/tqdm/tqdm/issues{/number}",
    "pulls_url": "https://api.github.com/repos/tqdm/tqdm/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/tqdm/tqdm/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/tqdm/tqdm/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/tqdm/tqdm/labels{/name}",
    "releases_url": "https://api.github.com/repos/tqdm/tqdm/releases{/id}",
    "deployments_url": "https://api.github.com/repos/tqdm/tqdm/deployments",
    "created_at": "2015-06-03T13:13:14Z",
    "updated_at": "2020-02-27T10:59:24Z",
    "pushed_at": "2020-02-26T18:03:43Z",
    "git_url": "git://github.com/tqdm/tqdm.git",
    "ssh_url": "git@github.com:tqdm/tqdm.git",
    "clone_url": "https://github.com/tqdm/tqdm.git",
    "svn_url": "https://github.com/tqdm/tqdm",
    "homepage": "https://tqdm.github.io",
    "size": 4464,
    "stargazers_count": 13462,
    "watchers_count": 13462,
    "language": "Python",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": true,
    "forks_count": 698,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 232,
    "license": {
      "key": "other",
      "name": "Other",
      "spdx_id": "NOASSERTION",
      "url": null,
      "node_id": "MDc6TGljZW5zZTA="
    },
    "forks": 698,
    "open_issues": 232,
    "watchers": 13462,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 8629417,
    "node_id": "MDEwOlJlcG9zaXRvcnk4NjI5NDE3",
    "name": "mapbox-gl-js",
    "full_name": "mapbox/mapbox-gl-js",
    "private": false,
    "owner": {
      "login": "mapbox",
      "id": 600935,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjYwMDkzNQ==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/600935?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mapbox",
      "html_url": "https://github.com/mapbox",
      "followers_url": "https://api.github.com/users/mapbox/followers",
      "following_url": "https://api.github.com/users/mapbox/following{/other_user}",
      "gists_url": "https://api.github.com/users/mapbox/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mapbox/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mapbox/subscriptions",
      "organizations_url": "https://api.github.com/users/mapbox/orgs",
      "repos_url": "https://api.github.com/users/mapbox/repos",
      "events_url": "https://api.github.com/users/mapbox/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mapbox/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/mapbox/mapbox-gl-js",
    "description": "Interactive, thoroughly customizable maps in the browser, powered by vector tiles and WebGL",
    "fork": false,
    "url": "https://api.github.com/repos/mapbox/mapbox-gl-js",
    "forks_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/forks",
    "keys_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/teams",
    "hooks_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/hooks",
    "issue_events_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/issues/events{/number}",
    "events_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/events",
    "assignees_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/assignees{/user}",
    "branches_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/branches{/branch}",
    "tags_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/tags",
    "blobs_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/languages",
    "stargazers_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/stargazers",
    "contributors_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/contributors",
    "subscribers_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/subscribers",
    "subscription_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/subscription",
    "commits_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/contents/{+path}",
    "compare_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/merges",
    "archive_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/downloads",
    "issues_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/issues{/number}",
    "pulls_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/labels{/name}",
    "releases_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/releases{/id}",
    "deployments_url": "https://api.github.com/repos/mapbox/mapbox-gl-js/deployments",
    "created_at": "2013-03-07T14:45:24Z",
    "updated_at": "2020-02-27T08:35:21Z",
    "pushed_at": "2020-02-27T10:12:25Z",
    "git_url": "git://github.com/mapbox/mapbox-gl-js.git",
    "ssh_url": "git@github.com:mapbox/mapbox-gl-js.git",
    "clone_url": "https://github.com/mapbox/mapbox-gl-js.git",
    "svn_url": "https://github.com/mapbox/mapbox-gl-js",
    "homepage": "https://docs.mapbox.com/mapbox-gl-js/",
    "size": 186216,
    "stargazers_count": 5735,
    "watchers_count": 5735,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 1327,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 654,
    "license": {
      "key": "other",
      "name": "Other",
      "spdx_id": "NOASSERTION",
      "url": null,
      "node_id": "MDc6TGljZW5zZTA="
    },
    "forks": 1327,
    "open_issues": 654,
    "watchers": 5735,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 63476337,
    "node_id": "MDEwOlJlcG9zaXRvcnk2MzQ3NjMzNw==",
    "name": "Python",
    "full_name": "TheAlgorithms/Python",
    "private": false,
    "owner": {
      "login": "TheAlgorithms",
      "id": 20487725,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjIwNDg3NzI1",
      "avatar_url": "https://avatars1.githubusercontent.com/u/20487725?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/TheAlgorithms",
      "html_url": "https://github.com/TheAlgorithms",
      "followers_url": "https://api.github.com/users/TheAlgorithms/followers",
      "following_url": "https://api.github.com/users/TheAlgorithms/following{/other_user}",
      "gists_url": "https://api.github.com/users/TheAlgorithms/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/TheAlgorithms/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/TheAlgorithms/subscriptions",
      "organizations_url": "https://api.github.com/users/TheAlgorithms/orgs",
      "repos_url": "https://api.github.com/users/TheAlgorithms/repos",
      "events_url": "https://api.github.com/users/TheAlgorithms/events{/privacy}",
      "received_events_url": "https://api.github.com/users/TheAlgorithms/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/TheAlgorithms/Python",
    "description": "All Algorithms implemented in Python",
    "fork": false,
    "url": "https://api.github.com/repos/TheAlgorithms/Python",
    "forks_url": "https://api.github.com/repos/TheAlgorithms/Python/forks",
    "keys_url": "https://api.github.com/repos/TheAlgorithms/Python/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/TheAlgorithms/Python/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/TheAlgorithms/Python/teams",
    "hooks_url": "https://api.github.com/repos/TheAlgorithms/Python/hooks",
    "issue_events_url": "https://api.github.com/repos/TheAlgorithms/Python/issues/events{/number}",
    "events_url": "https://api.github.com/repos/TheAlgorithms/Python/events",
    "assignees_url": "https://api.github.com/repos/TheAlgorithms/Python/assignees{/user}",
    "branches_url": "https://api.github.com/repos/TheAlgorithms/Python/branches{/branch}",
    "tags_url": "https://api.github.com/repos/TheAlgorithms/Python/tags",
    "blobs_url": "https://api.github.com/repos/TheAlgorithms/Python/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/TheAlgorithms/Python/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/TheAlgorithms/Python/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/TheAlgorithms/Python/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/TheAlgorithms/Python/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/TheAlgorithms/Python/languages",
    "stargazers_url": "https://api.github.com/repos/TheAlgorithms/Python/stargazers",
    "contributors_url": "https://api.github.com/repos/TheAlgorithms/Python/contributors",
    "subscribers_url": "https://api.github.com/repos/TheAlgorithms/Python/subscribers",
    "subscription_url": "https://api.github.com/repos/TheAlgorithms/Python/subscription",
    "commits_url": "https://api.github.com/repos/TheAlgorithms/Python/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/TheAlgorithms/Python/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/TheAlgorithms/Python/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/TheAlgorithms/Python/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/TheAlgorithms/Python/contents/{+path}",
    "compare_url": "https://api.github.com/repos/TheAlgorithms/Python/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/TheAlgorithms/Python/merges",
    "archive_url": "https://api.github.com/repos/TheAlgorithms/Python/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/TheAlgorithms/Python/downloads",
    "issues_url": "https://api.github.com/repos/TheAlgorithms/Python/issues{/number}",
    "pulls_url": "https://api.github.com/repos/TheAlgorithms/Python/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/TheAlgorithms/Python/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/TheAlgorithms/Python/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/TheAlgorithms/Python/labels{/name}",
    "releases_url": "https://api.github.com/repos/TheAlgorithms/Python/releases{/id}",
    "deployments_url": "https://api.github.com/repos/TheAlgorithms/Python/deployments",
    "created_at": "2016-07-16T09:44:01Z",
    "updated_at": "2020-02-27T12:10:14Z",
    "pushed_at": "2020-02-26T19:16:33Z",
    "git_url": "git://github.com/TheAlgorithms/Python.git",
    "ssh_url": "git@github.com:TheAlgorithms/Python.git",
    "clone_url": "https://github.com/TheAlgorithms/Python.git",
    "svn_url": "https://github.com/TheAlgorithms/Python",
    "homepage": "https://travis-ci.com/TheAlgorithms/Python",
    "size": 9660,
    "stargazers_count": 67466,
    "watchers_count": 67466,
    "language": "Python",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 20394,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 30,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 20394,
    "open_issues": 30,
    "watchers": 67466,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }, {
    "id": 244025,
    "node_id": "MDEwOlJlcG9zaXRvcnkyNDQwMjU=",
    "name": "tweepy",
    "full_name": "tweepy/tweepy",
    "private": false,
    "owner": {
      "login": "tweepy",
      "id": 774501,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjc3NDUwMQ==",
      "avatar_url": "https://avatars2.githubusercontent.com/u/774501?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tweepy",
      "html_url": "https://github.com/tweepy",
      "followers_url": "https://api.github.com/users/tweepy/followers",
      "following_url": "https://api.github.com/users/tweepy/following{/other_user}",
      "gists_url": "https://api.github.com/users/tweepy/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tweepy/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tweepy/subscriptions",
      "organizations_url": "https://api.github.com/users/tweepy/orgs",
      "repos_url": "https://api.github.com/users/tweepy/repos",
      "events_url": "https://api.github.com/users/tweepy/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tweepy/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/tweepy/tweepy",
    "description": "Twitter for Python!",
    "fork": false,
    "url": "https://api.github.com/repos/tweepy/tweepy",
    "forks_url": "https://api.github.com/repos/tweepy/tweepy/forks",
    "keys_url": "https://api.github.com/repos/tweepy/tweepy/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/tweepy/tweepy/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/tweepy/tweepy/teams",
    "hooks_url": "https://api.github.com/repos/tweepy/tweepy/hooks",
    "issue_events_url": "https://api.github.com/repos/tweepy/tweepy/issues/events{/number}",
    "events_url": "https://api.github.com/repos/tweepy/tweepy/events",
    "assignees_url": "https://api.github.com/repos/tweepy/tweepy/assignees{/user}",
    "branches_url": "https://api.github.com/repos/tweepy/tweepy/branches{/branch}",
    "tags_url": "https://api.github.com/repos/tweepy/tweepy/tags",
    "blobs_url": "https://api.github.com/repos/tweepy/tweepy/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/tweepy/tweepy/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/tweepy/tweepy/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/tweepy/tweepy/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/tweepy/tweepy/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/tweepy/tweepy/languages",
    "stargazers_url": "https://api.github.com/repos/tweepy/tweepy/stargazers",
    "contributors_url": "https://api.github.com/repos/tweepy/tweepy/contributors",
    "subscribers_url": "https://api.github.com/repos/tweepy/tweepy/subscribers",
    "subscription_url": "https://api.github.com/repos/tweepy/tweepy/subscription",
    "commits_url": "https://api.github.com/repos/tweepy/tweepy/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/tweepy/tweepy/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/tweepy/tweepy/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/tweepy/tweepy/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/tweepy/tweepy/contents/{+path}",
    "compare_url": "https://api.github.com/repos/tweepy/tweepy/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/tweepy/tweepy/merges",
    "archive_url": "https://api.github.com/repos/tweepy/tweepy/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/tweepy/tweepy/downloads",
    "issues_url": "https://api.github.com/repos/tweepy/tweepy/issues{/number}",
    "pulls_url": "https://api.github.com/repos/tweepy/tweepy/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/tweepy/tweepy/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/tweepy/tweepy/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/tweepy/tweepy/labels{/name}",
    "releases_url": "https://api.github.com/repos/tweepy/tweepy/releases{/id}",
    "deployments_url": "https://api.github.com/repos/tweepy/tweepy/deployments",
    "created_at": "2009-07-06T04:15:34Z",
    "updated_at": "2020-02-27T11:57:39Z",
    "pushed_at": "2020-02-17T20:49:16Z",
    "git_url": "git://github.com/tweepy/tweepy.git",
    "ssh_url": "git@github.com:tweepy/tweepy.git",
    "clone_url": "https://github.com/tweepy/tweepy.git",
    "svn_url": "https://github.com/tweepy/tweepy",
    "homepage": "http://tweepy.org",
    "size": 2948,
    "stargazers_count": 6542,
    "watchers_count": 6542,
    "language": "Python",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 3035,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 109,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 3035,
    "open_issues": 109,
    "watchers": 6542,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }],
  "react_repos": {
    "total_count": 1216776,
    "incomplete_results": false,
    "items": [{
      "id": 10270250,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
      "name": "react",
      "full_name": "facebook/react",
      "private": false,
      "owner": {
        "login": "facebook",
        "id": 69631,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        "avatar_url": "https://avatars3.githubusercontent.com/u/69631?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/facebook",
        "html_url": "https://github.com/facebook",
        "followers_url": "https://api.github.com/users/facebook/followers",
        "following_url": "https://api.github.com/users/facebook/following{/other_user}",
        "gists_url": "https://api.github.com/users/facebook/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/facebook/subscriptions",
        "organizations_url": "https://api.github.com/users/facebook/orgs",
        "repos_url": "https://api.github.com/users/facebook/repos",
        "events_url": "https://api.github.com/users/facebook/events{/privacy}",
        "received_events_url": "https://api.github.com/users/facebook/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/facebook/react",
      "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      "fork": false,
      "url": "https://api.github.com/repos/facebook/react",
      "forks_url": "https://api.github.com/repos/facebook/react/forks",
      "keys_url": "https://api.github.com/repos/facebook/react/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/facebook/react/teams",
      "hooks_url": "https://api.github.com/repos/facebook/react/hooks",
      "issue_events_url": "https://api.github.com/repos/facebook/react/issues/events{/number}",
      "events_url": "https://api.github.com/repos/facebook/react/events",
      "assignees_url": "https://api.github.com/repos/facebook/react/assignees{/user}",
      "branches_url": "https://api.github.com/repos/facebook/react/branches{/branch}",
      "tags_url": "https://api.github.com/repos/facebook/react/tags",
      "blobs_url": "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/facebook/react/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/facebook/react/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/facebook/react/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/facebook/react/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/facebook/react/languages",
      "stargazers_url": "https://api.github.com/repos/facebook/react/stargazers",
      "contributors_url": "https://api.github.com/repos/facebook/react/contributors",
      "subscribers_url": "https://api.github.com/repos/facebook/react/subscribers",
      "subscription_url": "https://api.github.com/repos/facebook/react/subscription",
      "commits_url": "https://api.github.com/repos/facebook/react/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/facebook/react/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/facebook/react/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/facebook/react/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/facebook/react/contents/{+path}",
      "compare_url": "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/facebook/react/merges",
      "archive_url": "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/facebook/react/downloads",
      "issues_url": "https://api.github.com/repos/facebook/react/issues{/number}",
      "pulls_url": "https://api.github.com/repos/facebook/react/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/facebook/react/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/facebook/react/labels{/name}",
      "releases_url": "https://api.github.com/repos/facebook/react/releases{/id}",
      "deployments_url": "https://api.github.com/repos/facebook/react/deployments",
      "created_at": "2013-05-24T16:15:54Z",
      "updated_at": "2020-02-28T09:41:13Z",
      "pushed_at": "2020-02-28T04:49:44Z",
      "git_url": "git://github.com/facebook/react.git",
      "ssh_url": "git@github.com:facebook/react.git",
      "clone_url": "https://github.com/facebook/react.git",
      "svn_url": "https://github.com/facebook/react",
      "homepage": "https://reactjs.org",
      "size": 151005,
      "stargazers_count": 144454,
      "watchers_count": 144454,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": true,
      "forks_count": 27749,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 557,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 27749,
      "open_issues": 557,
      "watchers": 144454,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 75396575,
      "node_id": "MDEwOlJlcG9zaXRvcnk3NTM5NjU3NQ==",
      "name": "react",
      "full_name": "duxianwei520/react",
      "private": false,
      "owner": {
        "login": "duxianwei520",
        "id": 3249653,
        "node_id": "MDQ6VXNlcjMyNDk2NTM=",
        "avatar_url": "https://avatars1.githubusercontent.com/u/3249653?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/duxianwei520",
        "html_url": "https://github.com/duxianwei520",
        "followers_url": "https://api.github.com/users/duxianwei520/followers",
        "following_url": "https://api.github.com/users/duxianwei520/following{/other_user}",
        "gists_url": "https://api.github.com/users/duxianwei520/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/duxianwei520/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/duxianwei520/subscriptions",
        "organizations_url": "https://api.github.com/users/duxianwei520/orgs",
        "repos_url": "https://api.github.com/users/duxianwei520/repos",
        "events_url": "https://api.github.com/users/duxianwei520/events{/privacy}",
        "received_events_url": "https://api.github.com/users/duxianwei520/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/duxianwei520/react",
      "description": " React+webpack+redux+ant design+axios+less全家桶后台管理框架",
      "fork": false,
      "url": "https://api.github.com/repos/duxianwei520/react",
      "forks_url": "https://api.github.com/repos/duxianwei520/react/forks",
      "keys_url": "https://api.github.com/repos/duxianwei520/react/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/duxianwei520/react/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/duxianwei520/react/teams",
      "hooks_url": "https://api.github.com/repos/duxianwei520/react/hooks",
      "issue_events_url": "https://api.github.com/repos/duxianwei520/react/issues/events{/number}",
      "events_url": "https://api.github.com/repos/duxianwei520/react/events",
      "assignees_url": "https://api.github.com/repos/duxianwei520/react/assignees{/user}",
      "branches_url": "https://api.github.com/repos/duxianwei520/react/branches{/branch}",
      "tags_url": "https://api.github.com/repos/duxianwei520/react/tags",
      "blobs_url": "https://api.github.com/repos/duxianwei520/react/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/duxianwei520/react/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/duxianwei520/react/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/duxianwei520/react/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/duxianwei520/react/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/duxianwei520/react/languages",
      "stargazers_url": "https://api.github.com/repos/duxianwei520/react/stargazers",
      "contributors_url": "https://api.github.com/repos/duxianwei520/react/contributors",
      "subscribers_url": "https://api.github.com/repos/duxianwei520/react/subscribers",
      "subscription_url": "https://api.github.com/repos/duxianwei520/react/subscription",
      "commits_url": "https://api.github.com/repos/duxianwei520/react/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/duxianwei520/react/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/duxianwei520/react/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/duxianwei520/react/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/duxianwei520/react/contents/{+path}",
      "compare_url": "https://api.github.com/repos/duxianwei520/react/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/duxianwei520/react/merges",
      "archive_url": "https://api.github.com/repos/duxianwei520/react/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/duxianwei520/react/downloads",
      "issues_url": "https://api.github.com/repos/duxianwei520/react/issues{/number}",
      "pulls_url": "https://api.github.com/repos/duxianwei520/react/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/duxianwei520/react/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/duxianwei520/react/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/duxianwei520/react/labels{/name}",
      "releases_url": "https://api.github.com/repos/duxianwei520/react/releases{/id}",
      "deployments_url": "https://api.github.com/repos/duxianwei520/react/deployments",
      "created_at": "2016-12-02T13:08:43Z",
      "updated_at": "2020-02-28T06:01:54Z",
      "pushed_at": "2020-01-16T06:45:09Z",
      "git_url": "git://github.com/duxianwei520/react.git",
      "ssh_url": "git@github.com:duxianwei520/react.git",
      "clone_url": "https://github.com/duxianwei520/react.git",
      "svn_url": "https://github.com/duxianwei520/react",
      "homepage": "",
      "size": 2673,
      "stargazers_count": 3431,
      "watchers_count": 3431,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": true,
      "forks_count": 1247,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 1,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 1247,
      "open_issues": 1,
      "watchers": 3431,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 90759930,
      "node_id": "MDEwOlJlcG9zaXRvcnk5MDc1OTkzMA==",
      "name": "react",
      "full_name": "discountry/react",
      "private": false,
      "owner": {
        "login": "discountry",
        "id": 4507101,
        "node_id": "MDQ6VXNlcjQ1MDcxMDE=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/4507101?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/discountry",
        "html_url": "https://github.com/discountry",
        "followers_url": "https://api.github.com/users/discountry/followers",
        "following_url": "https://api.github.com/users/discountry/following{/other_user}",
        "gists_url": "https://api.github.com/users/discountry/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/discountry/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/discountry/subscriptions",
        "organizations_url": "https://api.github.com/users/discountry/orgs",
        "repos_url": "https://api.github.com/users/discountry/repos",
        "events_url": "https://api.github.com/users/discountry/events{/privacy}",
        "received_events_url": "https://api.github.com/users/discountry/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/discountry/react",
      "description": "React docs in Chinese | React 中文文档翻译",
      "fork": false,
      "url": "https://api.github.com/repos/discountry/react",
      "forks_url": "https://api.github.com/repos/discountry/react/forks",
      "keys_url": "https://api.github.com/repos/discountry/react/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/discountry/react/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/discountry/react/teams",
      "hooks_url": "https://api.github.com/repos/discountry/react/hooks",
      "issue_events_url": "https://api.github.com/repos/discountry/react/issues/events{/number}",
      "events_url": "https://api.github.com/repos/discountry/react/events",
      "assignees_url": "https://api.github.com/repos/discountry/react/assignees{/user}",
      "branches_url": "https://api.github.com/repos/discountry/react/branches{/branch}",
      "tags_url": "https://api.github.com/repos/discountry/react/tags",
      "blobs_url": "https://api.github.com/repos/discountry/react/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/discountry/react/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/discountry/react/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/discountry/react/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/discountry/react/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/discountry/react/languages",
      "stargazers_url": "https://api.github.com/repos/discountry/react/stargazers",
      "contributors_url": "https://api.github.com/repos/discountry/react/contributors",
      "subscribers_url": "https://api.github.com/repos/discountry/react/subscribers",
      "subscription_url": "https://api.github.com/repos/discountry/react/subscription",
      "commits_url": "https://api.github.com/repos/discountry/react/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/discountry/react/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/discountry/react/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/discountry/react/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/discountry/react/contents/{+path}",
      "compare_url": "https://api.github.com/repos/discountry/react/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/discountry/react/merges",
      "archive_url": "https://api.github.com/repos/discountry/react/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/discountry/react/downloads",
      "issues_url": "https://api.github.com/repos/discountry/react/issues{/number}",
      "pulls_url": "https://api.github.com/repos/discountry/react/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/discountry/react/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/discountry/react/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/discountry/react/labels{/name}",
      "releases_url": "https://api.github.com/repos/discountry/react/releases{/id}",
      "deployments_url": "https://api.github.com/repos/discountry/react/deployments",
      "created_at": "2017-05-09T15:09:00Z",
      "updated_at": "2020-02-25T16:52:07Z",
      "pushed_at": "2019-11-18T03:15:05Z",
      "git_url": "git://github.com/discountry/react.git",
      "ssh_url": "git@github.com:discountry/react.git",
      "clone_url": "https://github.com/discountry/react.git",
      "svn_url": "https://github.com/discountry/react",
      "homepage": "https://react.docschina.org/",
      "size": 34464,
      "stargazers_count": 907,
      "watchers_count": 907,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": true,
      "forks_count": 540,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 14,
      "license": {
        "key": "cc-by-4.0",
        "name": "Creative Commons Attribution 4.0 International",
        "spdx_id": "CC-BY-4.0",
        "url": "https://api.github.com/licenses/cc-by-4.0",
        "node_id": "MDc6TGljZW5zZTI1"
      },
      "forks": 540,
      "open_issues": 14,
      "watchers": 907,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 72628285,
      "node_id": "MDEwOlJlcG9zaXRvcnk3MjYyODI4NQ==",
      "name": "react",
      "full_name": "Cathy0807/react",
      "private": false,
      "owner": {
        "login": "Cathy0807",
        "id": 20653643,
        "node_id": "MDQ6VXNlcjIwNjUzNjQz",
        "avatar_url": "https://avatars0.githubusercontent.com/u/20653643?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Cathy0807",
        "html_url": "https://github.com/Cathy0807",
        "followers_url": "https://api.github.com/users/Cathy0807/followers",
        "following_url": "https://api.github.com/users/Cathy0807/following{/other_user}",
        "gists_url": "https://api.github.com/users/Cathy0807/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Cathy0807/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Cathy0807/subscriptions",
        "organizations_url": "https://api.github.com/users/Cathy0807/orgs",
        "repos_url": "https://api.github.com/users/Cathy0807/repos",
        "events_url": "https://api.github.com/users/Cathy0807/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Cathy0807/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/Cathy0807/react",
      "description": "京东首页构建",
      "fork": false,
      "url": "https://api.github.com/repos/Cathy0807/react",
      "forks_url": "https://api.github.com/repos/Cathy0807/react/forks",
      "keys_url": "https://api.github.com/repos/Cathy0807/react/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/Cathy0807/react/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/Cathy0807/react/teams",
      "hooks_url": "https://api.github.com/repos/Cathy0807/react/hooks",
      "issue_events_url": "https://api.github.com/repos/Cathy0807/react/issues/events{/number}",
      "events_url": "https://api.github.com/repos/Cathy0807/react/events",
      "assignees_url": "https://api.github.com/repos/Cathy0807/react/assignees{/user}",
      "branches_url": "https://api.github.com/repos/Cathy0807/react/branches{/branch}",
      "tags_url": "https://api.github.com/repos/Cathy0807/react/tags",
      "blobs_url": "https://api.github.com/repos/Cathy0807/react/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/Cathy0807/react/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/Cathy0807/react/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/Cathy0807/react/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/Cathy0807/react/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/Cathy0807/react/languages",
      "stargazers_url": "https://api.github.com/repos/Cathy0807/react/stargazers",
      "contributors_url": "https://api.github.com/repos/Cathy0807/react/contributors",
      "subscribers_url": "https://api.github.com/repos/Cathy0807/react/subscribers",
      "subscription_url": "https://api.github.com/repos/Cathy0807/react/subscription",
      "commits_url": "https://api.github.com/repos/Cathy0807/react/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/Cathy0807/react/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/Cathy0807/react/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/Cathy0807/react/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/Cathy0807/react/contents/{+path}",
      "compare_url": "https://api.github.com/repos/Cathy0807/react/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/Cathy0807/react/merges",
      "archive_url": "https://api.github.com/repos/Cathy0807/react/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/Cathy0807/react/downloads",
      "issues_url": "https://api.github.com/repos/Cathy0807/react/issues{/number}",
      "pulls_url": "https://api.github.com/repos/Cathy0807/react/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/Cathy0807/react/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/Cathy0807/react/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/Cathy0807/react/labels{/name}",
      "releases_url": "https://api.github.com/repos/Cathy0807/react/releases{/id}",
      "deployments_url": "https://api.github.com/repos/Cathy0807/react/deployments",
      "created_at": "2016-11-02T10:18:45Z",
      "updated_at": "2020-02-28T08:43:29Z",
      "pushed_at": "2016-11-01T11:02:41Z",
      "git_url": "git://github.com/Cathy0807/react.git",
      "ssh_url": "git@github.com:Cathy0807/react.git",
      "clone_url": "https://github.com/Cathy0807/react.git",
      "svn_url": "https://github.com/Cathy0807/react",
      "homepage": null,
      "size": 940,
      "stargazers_count": 615,
      "watchers_count": 615,
      "language": "JavaScript",
      "has_issues": false,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 347,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 347,
      "open_issues": 0,
      "watchers": 615,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 77513419,
      "node_id": "MDEwOlJlcG9zaXRvcnk3NzUxMzQxOQ==",
      "name": "react",
      "full_name": "react-redux-antd-es6/react",
      "private": false,
      "owner": {
        "login": "react-redux-antd-es6",
        "id": 24805142,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjI0ODA1MTQy",
        "avatar_url": "https://avatars3.githubusercontent.com/u/24805142?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/react-redux-antd-es6",
        "html_url": "https://github.com/react-redux-antd-es6",
        "followers_url": "https://api.github.com/users/react-redux-antd-es6/followers",
        "following_url": "https://api.github.com/users/react-redux-antd-es6/following{/other_user}",
        "gists_url": "https://api.github.com/users/react-redux-antd-es6/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/react-redux-antd-es6/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/react-redux-antd-es6/subscriptions",
        "organizations_url": "https://api.github.com/users/react-redux-antd-es6/orgs",
        "repos_url": "https://api.github.com/users/react-redux-antd-es6/repos",
        "events_url": "https://api.github.com/users/react-redux-antd-es6/events{/privacy}",
        "received_events_url": "https://api.github.com/users/react-redux-antd-es6/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/react-redux-antd-es6/react",
      "description": "基于react的企业后台管理开发框架",
      "fork": false,
      "url": "https://api.github.com/repos/react-redux-antd-es6/react",
      "forks_url": "https://api.github.com/repos/react-redux-antd-es6/react/forks",
      "keys_url": "https://api.github.com/repos/react-redux-antd-es6/react/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/react-redux-antd-es6/react/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/react-redux-antd-es6/react/teams",
      "hooks_url": "https://api.github.com/repos/react-redux-antd-es6/react/hooks",
      "issue_events_url": "https://api.github.com/repos/react-redux-antd-es6/react/issues/events{/number}",
      "events_url": "https://api.github.com/repos/react-redux-antd-es6/react/events",
      "assignees_url": "https://api.github.com/repos/react-redux-antd-es6/react/assignees{/user}",
      "branches_url": "https://api.github.com/repos/react-redux-antd-es6/react/branches{/branch}",
      "tags_url": "https://api.github.com/repos/react-redux-antd-es6/react/tags",
      "blobs_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/react-redux-antd-es6/react/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/react-redux-antd-es6/react/languages",
      "stargazers_url": "https://api.github.com/repos/react-redux-antd-es6/react/stargazers",
      "contributors_url": "https://api.github.com/repos/react-redux-antd-es6/react/contributors",
      "subscribers_url": "https://api.github.com/repos/react-redux-antd-es6/react/subscribers",
      "subscription_url": "https://api.github.com/repos/react-redux-antd-es6/react/subscription",
      "commits_url": "https://api.github.com/repos/react-redux-antd-es6/react/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/react-redux-antd-es6/react/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/react-redux-antd-es6/react/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/react-redux-antd-es6/react/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/react-redux-antd-es6/react/contents/{+path}",
      "compare_url": "https://api.github.com/repos/react-redux-antd-es6/react/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/react-redux-antd-es6/react/merges",
      "archive_url": "https://api.github.com/repos/react-redux-antd-es6/react/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/react-redux-antd-es6/react/downloads",
      "issues_url": "https://api.github.com/repos/react-redux-antd-es6/react/issues{/number}",
      "pulls_url": "https://api.github.com/repos/react-redux-antd-es6/react/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/react-redux-antd-es6/react/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/react-redux-antd-es6/react/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/react-redux-antd-es6/react/labels{/name}",
      "releases_url": "https://api.github.com/repos/react-redux-antd-es6/react/releases{/id}",
      "deployments_url": "https://api.github.com/repos/react-redux-antd-es6/react/deployments",
      "created_at": "2016-12-28T07:44:04Z",
      "updated_at": "2020-02-28T07:39:58Z",
      "pushed_at": "2019-05-20T09:12:26Z",
      "git_url": "git://github.com/react-redux-antd-es6/react.git",
      "ssh_url": "git@github.com:react-redux-antd-es6/react.git",
      "clone_url": "https://github.com/react-redux-antd-es6/react.git",
      "svn_url": "https://github.com/react-redux-antd-es6/react",
      "homepage": "",
      "size": 42689,
      "stargazers_count": 655,
      "watchers_count": 655,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 291,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 6,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 291,
      "open_issues": 6,
      "watchers": 655,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 3606624,
      "node_id": "MDEwOlJlcG9zaXRvcnkzNjA2NjI0",
      "name": "ReactiveCocoa",
      "full_name": "ReactiveCocoa/ReactiveCocoa",
      "private": false,
      "owner": {
        "login": "ReactiveCocoa",
        "id": 3422977,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjM0MjI5Nzc=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/3422977?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ReactiveCocoa",
        "html_url": "https://github.com/ReactiveCocoa",
        "followers_url": "https://api.github.com/users/ReactiveCocoa/followers",
        "following_url": "https://api.github.com/users/ReactiveCocoa/following{/other_user}",
        "gists_url": "https://api.github.com/users/ReactiveCocoa/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ReactiveCocoa/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ReactiveCocoa/subscriptions",
        "organizations_url": "https://api.github.com/users/ReactiveCocoa/orgs",
        "repos_url": "https://api.github.com/users/ReactiveCocoa/repos",
        "events_url": "https://api.github.com/users/ReactiveCocoa/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ReactiveCocoa/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/ReactiveCocoa/ReactiveCocoa",
      "description": "Reactive extensions to Cocoa frameworks, built on top of ReactiveSwift",
      "fork": false,
      "url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa",
      "forks_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/forks",
      "keys_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/teams",
      "hooks_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/hooks",
      "issue_events_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/issues/events{/number}",
      "events_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/events",
      "assignees_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/assignees{/user}",
      "branches_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/branches{/branch}",
      "tags_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/tags",
      "blobs_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/languages",
      "stargazers_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/stargazers",
      "contributors_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/contributors",
      "subscribers_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/subscribers",
      "subscription_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/subscription",
      "commits_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/contents/{+path}",
      "compare_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/merges",
      "archive_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/downloads",
      "issues_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/issues{/number}",
      "pulls_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/labels{/name}",
      "releases_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/releases{/id}",
      "deployments_url": "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/deployments",
      "created_at": "2012-03-02T22:11:24Z",
      "updated_at": "2020-02-28T02:31:49Z",
      "pushed_at": "2020-01-17T13:55:46Z",
      "git_url": "git://github.com/ReactiveCocoa/ReactiveCocoa.git",
      "ssh_url": "git@github.com:ReactiveCocoa/ReactiveCocoa.git",
      "clone_url": "https://github.com/ReactiveCocoa/ReactiveCocoa.git",
      "svn_url": "https://github.com/ReactiveCocoa/ReactiveCocoa",
      "homepage": "",
      "size": 17316,
      "stargazers_count": 19748,
      "watchers_count": 19748,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 3547,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 50,
      "license": {
        "key": "other",
        "name": "Other",
        "spdx_id": "NOASSERTION",
        "url": null,
        "node_id": "MDc6TGljZW5zZTA="
      },
      "forks": 3547,
      "open_issues": 50,
      "watchers": 19748,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 29028775,
      "node_id": "MDEwOlJlcG9zaXRvcnkyOTAyODc3NQ==",
      "name": "react-native",
      "full_name": "facebook/react-native",
      "private": false,
      "owner": {
        "login": "facebook",
        "id": 69631,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        "avatar_url": "https://avatars3.githubusercontent.com/u/69631?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/facebook",
        "html_url": "https://github.com/facebook",
        "followers_url": "https://api.github.com/users/facebook/followers",
        "following_url": "https://api.github.com/users/facebook/following{/other_user}",
        "gists_url": "https://api.github.com/users/facebook/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/facebook/subscriptions",
        "organizations_url": "https://api.github.com/users/facebook/orgs",
        "repos_url": "https://api.github.com/users/facebook/repos",
        "events_url": "https://api.github.com/users/facebook/events{/privacy}",
        "received_events_url": "https://api.github.com/users/facebook/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/facebook/react-native",
      "description": "A framework for building native apps with React.",
      "fork": false,
      "url": "https://api.github.com/repos/facebook/react-native",
      "forks_url": "https://api.github.com/repos/facebook/react-native/forks",
      "keys_url": "https://api.github.com/repos/facebook/react-native/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/facebook/react-native/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/facebook/react-native/teams",
      "hooks_url": "https://api.github.com/repos/facebook/react-native/hooks",
      "issue_events_url": "https://api.github.com/repos/facebook/react-native/issues/events{/number}",
      "events_url": "https://api.github.com/repos/facebook/react-native/events",
      "assignees_url": "https://api.github.com/repos/facebook/react-native/assignees{/user}",
      "branches_url": "https://api.github.com/repos/facebook/react-native/branches{/branch}",
      "tags_url": "https://api.github.com/repos/facebook/react-native/tags",
      "blobs_url": "https://api.github.com/repos/facebook/react-native/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/facebook/react-native/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/facebook/react-native/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/facebook/react-native/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/facebook/react-native/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/facebook/react-native/languages",
      "stargazers_url": "https://api.github.com/repos/facebook/react-native/stargazers",
      "contributors_url": "https://api.github.com/repos/facebook/react-native/contributors",
      "subscribers_url": "https://api.github.com/repos/facebook/react-native/subscribers",
      "subscription_url": "https://api.github.com/repos/facebook/react-native/subscription",
      "commits_url": "https://api.github.com/repos/facebook/react-native/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/facebook/react-native/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/facebook/react-native/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/facebook/react-native/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/facebook/react-native/contents/{+path}",
      "compare_url": "https://api.github.com/repos/facebook/react-native/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/facebook/react-native/merges",
      "archive_url": "https://api.github.com/repos/facebook/react-native/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/facebook/react-native/downloads",
      "issues_url": "https://api.github.com/repos/facebook/react-native/issues{/number}",
      "pulls_url": "https://api.github.com/repos/facebook/react-native/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/facebook/react-native/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/facebook/react-native/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/facebook/react-native/labels{/name}",
      "releases_url": "https://api.github.com/repos/facebook/react-native/releases{/id}",
      "deployments_url": "https://api.github.com/repos/facebook/react-native/deployments",
      "created_at": "2015-01-09T18:10:16Z",
      "updated_at": "2020-02-28T09:22:19Z",
      "pushed_at": "2020-02-28T08:08:59Z",
      "git_url": "git://github.com/facebook/react-native.git",
      "ssh_url": "git@github.com:facebook/react-native.git",
      "clone_url": "https://github.com/facebook/react-native.git",
      "svn_url": "https://github.com/facebook/react-native",
      "homepage": "https://facebook.github.io/react-native/",
      "size": 466677,
      "stargazers_count": 85188,
      "watchers_count": 85188,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": true,
      "forks_count": 19026,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 806,
      "license": {
        "key": "other",
        "name": "Other",
        "spdx_id": "NOASSERTION",
        "url": null,
        "node_id": "MDc6TGljZW5zZTA="
      },
      "forks": 19026,
      "open_issues": 806,
      "watchers": 85188,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 93503545,
      "node_id": "MDEwOlJlcG9zaXRvcnk5MzUwMzU0NQ==",
      "name": "React",
      "full_name": "HackYourFuture/React",
      "private": false,
      "owner": {
        "login": "HackYourFuture",
        "id": 20858568,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjIwODU4NTY4",
        "avatar_url": "https://avatars2.githubusercontent.com/u/20858568?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/HackYourFuture",
        "html_url": "https://github.com/HackYourFuture",
        "followers_url": "https://api.github.com/users/HackYourFuture/followers",
        "following_url": "https://api.github.com/users/HackYourFuture/following{/other_user}",
        "gists_url": "https://api.github.com/users/HackYourFuture/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/HackYourFuture/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/HackYourFuture/subscriptions",
        "organizations_url": "https://api.github.com/users/HackYourFuture/orgs",
        "repos_url": "https://api.github.com/users/HackYourFuture/repos",
        "events_url": "https://api.github.com/users/HackYourFuture/events{/privacy}",
        "received_events_url": "https://api.github.com/users/HackYourFuture/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/HackYourFuture/React",
      "description": "This repository contains all the material for the HackYourFuture module \"React.js: Building dynamic UIs with modern JavaScript\"",
      "fork": false,
      "url": "https://api.github.com/repos/HackYourFuture/React",
      "forks_url": "https://api.github.com/repos/HackYourFuture/React/forks",
      "keys_url": "https://api.github.com/repos/HackYourFuture/React/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/HackYourFuture/React/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/HackYourFuture/React/teams",
      "hooks_url": "https://api.github.com/repos/HackYourFuture/React/hooks",
      "issue_events_url": "https://api.github.com/repos/HackYourFuture/React/issues/events{/number}",
      "events_url": "https://api.github.com/repos/HackYourFuture/React/events",
      "assignees_url": "https://api.github.com/repos/HackYourFuture/React/assignees{/user}",
      "branches_url": "https://api.github.com/repos/HackYourFuture/React/branches{/branch}",
      "tags_url": "https://api.github.com/repos/HackYourFuture/React/tags",
      "blobs_url": "https://api.github.com/repos/HackYourFuture/React/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/HackYourFuture/React/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/HackYourFuture/React/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/HackYourFuture/React/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/HackYourFuture/React/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/HackYourFuture/React/languages",
      "stargazers_url": "https://api.github.com/repos/HackYourFuture/React/stargazers",
      "contributors_url": "https://api.github.com/repos/HackYourFuture/React/contributors",
      "subscribers_url": "https://api.github.com/repos/HackYourFuture/React/subscribers",
      "subscription_url": "https://api.github.com/repos/HackYourFuture/React/subscription",
      "commits_url": "https://api.github.com/repos/HackYourFuture/React/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/HackYourFuture/React/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/HackYourFuture/React/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/HackYourFuture/React/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/HackYourFuture/React/contents/{+path}",
      "compare_url": "https://api.github.com/repos/HackYourFuture/React/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/HackYourFuture/React/merges",
      "archive_url": "https://api.github.com/repos/HackYourFuture/React/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/HackYourFuture/React/downloads",
      "issues_url": "https://api.github.com/repos/HackYourFuture/React/issues{/number}",
      "pulls_url": "https://api.github.com/repos/HackYourFuture/React/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/HackYourFuture/React/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/HackYourFuture/React/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/HackYourFuture/React/labels{/name}",
      "releases_url": "https://api.github.com/repos/HackYourFuture/React/releases{/id}",
      "deployments_url": "https://api.github.com/repos/HackYourFuture/React/deployments",
      "created_at": "2017-06-06T09:58:23Z",
      "updated_at": "2020-02-24T16:06:37Z",
      "pushed_at": "2020-02-24T16:06:34Z",
      "git_url": "git://github.com/HackYourFuture/React.git",
      "ssh_url": "git@github.com:HackYourFuture/React.git",
      "clone_url": "https://github.com/HackYourFuture/React.git",
      "svn_url": "https://github.com/HackYourFuture/React",
      "homepage": "",
      "size": 5297,
      "stargazers_count": 58,
      "watchers_count": 58,
      "language": null,
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 267,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 5,
      "license": null,
      "forks": 267,
      "open_issues": 5,
      "watchers": 58,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 19872456,
      "node_id": "MDEwOlJlcG9zaXRvcnkxOTg3MjQ1Ng==",
      "name": "react-router",
      "full_name": "ReactTraining/react-router",
      "private": false,
      "owner": {
        "login": "ReactTraining",
        "id": 11823761,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjExODIzNzYx",
        "avatar_url": "https://avatars1.githubusercontent.com/u/11823761?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ReactTraining",
        "html_url": "https://github.com/ReactTraining",
        "followers_url": "https://api.github.com/users/ReactTraining/followers",
        "following_url": "https://api.github.com/users/ReactTraining/following{/other_user}",
        "gists_url": "https://api.github.com/users/ReactTraining/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ReactTraining/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ReactTraining/subscriptions",
        "organizations_url": "https://api.github.com/users/ReactTraining/orgs",
        "repos_url": "https://api.github.com/users/ReactTraining/repos",
        "events_url": "https://api.github.com/users/ReactTraining/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ReactTraining/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/ReactTraining/react-router",
      "description": "Declarative routing for React",
      "fork": false,
      "url": "https://api.github.com/repos/ReactTraining/react-router",
      "forks_url": "https://api.github.com/repos/ReactTraining/react-router/forks",
      "keys_url": "https://api.github.com/repos/ReactTraining/react-router/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/ReactTraining/react-router/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/ReactTraining/react-router/teams",
      "hooks_url": "https://api.github.com/repos/ReactTraining/react-router/hooks",
      "issue_events_url": "https://api.github.com/repos/ReactTraining/react-router/issues/events{/number}",
      "events_url": "https://api.github.com/repos/ReactTraining/react-router/events",
      "assignees_url": "https://api.github.com/repos/ReactTraining/react-router/assignees{/user}",
      "branches_url": "https://api.github.com/repos/ReactTraining/react-router/branches{/branch}",
      "tags_url": "https://api.github.com/repos/ReactTraining/react-router/tags",
      "blobs_url": "https://api.github.com/repos/ReactTraining/react-router/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/ReactTraining/react-router/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/ReactTraining/react-router/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/ReactTraining/react-router/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/ReactTraining/react-router/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/ReactTraining/react-router/languages",
      "stargazers_url": "https://api.github.com/repos/ReactTraining/react-router/stargazers",
      "contributors_url": "https://api.github.com/repos/ReactTraining/react-router/contributors",
      "subscribers_url": "https://api.github.com/repos/ReactTraining/react-router/subscribers",
      "subscription_url": "https://api.github.com/repos/ReactTraining/react-router/subscription",
      "commits_url": "https://api.github.com/repos/ReactTraining/react-router/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/ReactTraining/react-router/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/ReactTraining/react-router/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/ReactTraining/react-router/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/ReactTraining/react-router/contents/{+path}",
      "compare_url": "https://api.github.com/repos/ReactTraining/react-router/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/ReactTraining/react-router/merges",
      "archive_url": "https://api.github.com/repos/ReactTraining/react-router/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/ReactTraining/react-router/downloads",
      "issues_url": "https://api.github.com/repos/ReactTraining/react-router/issues{/number}",
      "pulls_url": "https://api.github.com/repos/ReactTraining/react-router/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/ReactTraining/react-router/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/ReactTraining/react-router/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/ReactTraining/react-router/labels{/name}",
      "releases_url": "https://api.github.com/repos/ReactTraining/react-router/releases{/id}",
      "deployments_url": "https://api.github.com/repos/ReactTraining/react-router/deployments",
      "created_at": "2014-05-16T22:22:51Z",
      "updated_at": "2020-02-28T08:07:21Z",
      "pushed_at": "2020-02-27T05:29:33Z",
      "git_url": "git://github.com/ReactTraining/react-router.git",
      "ssh_url": "git@github.com:ReactTraining/react-router.git",
      "clone_url": "https://github.com/ReactTraining/react-router.git",
      "svn_url": "https://github.com/ReactTraining/react-router",
      "homepage": "https://reacttraining.com/react-router/",
      "size": 14859,
      "stargazers_count": 39545,
      "watchers_count": 39545,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": false,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 8017,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 40,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 8017,
      "open_issues": 40,
      "watchers": 39545,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 70107786,
      "node_id": "MDEwOlJlcG9zaXRvcnk3MDEwNzc4Ng==",
      "name": "next.js",
      "full_name": "zeit/next.js",
      "private": false,
      "owner": {
        "login": "zeit",
        "id": 14985020,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjE0OTg1MDIw",
        "avatar_url": "https://avatars0.githubusercontent.com/u/14985020?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/zeit",
        "html_url": "https://github.com/zeit",
        "followers_url": "https://api.github.com/users/zeit/followers",
        "following_url": "https://api.github.com/users/zeit/following{/other_user}",
        "gists_url": "https://api.github.com/users/zeit/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/zeit/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/zeit/subscriptions",
        "organizations_url": "https://api.github.com/users/zeit/orgs",
        "repos_url": "https://api.github.com/users/zeit/repos",
        "events_url": "https://api.github.com/users/zeit/events{/privacy}",
        "received_events_url": "https://api.github.com/users/zeit/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/zeit/next.js",
      "description": "The React Framework",
      "fork": false,
      "url": "https://api.github.com/repos/zeit/next.js",
      "forks_url": "https://api.github.com/repos/zeit/next.js/forks",
      "keys_url": "https://api.github.com/repos/zeit/next.js/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/zeit/next.js/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/zeit/next.js/teams",
      "hooks_url": "https://api.github.com/repos/zeit/next.js/hooks",
      "issue_events_url": "https://api.github.com/repos/zeit/next.js/issues/events{/number}",
      "events_url": "https://api.github.com/repos/zeit/next.js/events",
      "assignees_url": "https://api.github.com/repos/zeit/next.js/assignees{/user}",
      "branches_url": "https://api.github.com/repos/zeit/next.js/branches{/branch}",
      "tags_url": "https://api.github.com/repos/zeit/next.js/tags",
      "blobs_url": "https://api.github.com/repos/zeit/next.js/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/zeit/next.js/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/zeit/next.js/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/zeit/next.js/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/zeit/next.js/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/zeit/next.js/languages",
      "stargazers_url": "https://api.github.com/repos/zeit/next.js/stargazers",
      "contributors_url": "https://api.github.com/repos/zeit/next.js/contributors",
      "subscribers_url": "https://api.github.com/repos/zeit/next.js/subscribers",
      "subscription_url": "https://api.github.com/repos/zeit/next.js/subscription",
      "commits_url": "https://api.github.com/repos/zeit/next.js/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/zeit/next.js/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/zeit/next.js/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/zeit/next.js/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/zeit/next.js/contents/{+path}",
      "compare_url": "https://api.github.com/repos/zeit/next.js/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/zeit/next.js/merges",
      "archive_url": "https://api.github.com/repos/zeit/next.js/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/zeit/next.js/downloads",
      "issues_url": "https://api.github.com/repos/zeit/next.js/issues{/number}",
      "pulls_url": "https://api.github.com/repos/zeit/next.js/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/zeit/next.js/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/zeit/next.js/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/zeit/next.js/labels{/name}",
      "releases_url": "https://api.github.com/repos/zeit/next.js/releases{/id}",
      "deployments_url": "https://api.github.com/repos/zeit/next.js/deployments",
      "created_at": "2016-10-05T23:32:51Z",
      "updated_at": "2020-02-28T09:01:53Z",
      "pushed_at": "2020-02-28T05:13:27Z",
      "git_url": "git://github.com/zeit/next.js.git",
      "ssh_url": "git@github.com:zeit/next.js.git",
      "clone_url": "https://github.com/zeit/next.js.git",
      "svn_url": "https://github.com/zeit/next.js",
      "homepage": "https://nextjs.org",
      "size": 27369,
      "stargazers_count": 45358,
      "watchers_count": 45358,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": false,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 6425,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 331,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 6425,
      "open_issues": 331,
      "watchers": 45358,
      "default_branch": "canary",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 63537249,
      "node_id": "MDEwOlJlcG9zaXRvcnk2MzUzNzI0OQ==",
      "name": "create-react-app",
      "full_name": "facebook/create-react-app",
      "private": false,
      "owner": {
        "login": "facebook",
        "id": 69631,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        "avatar_url": "https://avatars3.githubusercontent.com/u/69631?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/facebook",
        "html_url": "https://github.com/facebook",
        "followers_url": "https://api.github.com/users/facebook/followers",
        "following_url": "https://api.github.com/users/facebook/following{/other_user}",
        "gists_url": "https://api.github.com/users/facebook/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/facebook/subscriptions",
        "organizations_url": "https://api.github.com/users/facebook/orgs",
        "repos_url": "https://api.github.com/users/facebook/repos",
        "events_url": "https://api.github.com/users/facebook/events{/privacy}",
        "received_events_url": "https://api.github.com/users/facebook/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/facebook/create-react-app",
      "description": "Set up a modern web app by running one command.",
      "fork": false,
      "url": "https://api.github.com/repos/facebook/create-react-app",
      "forks_url": "https://api.github.com/repos/facebook/create-react-app/forks",
      "keys_url": "https://api.github.com/repos/facebook/create-react-app/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/facebook/create-react-app/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/facebook/create-react-app/teams",
      "hooks_url": "https://api.github.com/repos/facebook/create-react-app/hooks",
      "issue_events_url": "https://api.github.com/repos/facebook/create-react-app/issues/events{/number}",
      "events_url": "https://api.github.com/repos/facebook/create-react-app/events",
      "assignees_url": "https://api.github.com/repos/facebook/create-react-app/assignees{/user}",
      "branches_url": "https://api.github.com/repos/facebook/create-react-app/branches{/branch}",
      "tags_url": "https://api.github.com/repos/facebook/create-react-app/tags",
      "blobs_url": "https://api.github.com/repos/facebook/create-react-app/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/facebook/create-react-app/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/facebook/create-react-app/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/facebook/create-react-app/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/facebook/create-react-app/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/facebook/create-react-app/languages",
      "stargazers_url": "https://api.github.com/repos/facebook/create-react-app/stargazers",
      "contributors_url": "https://api.github.com/repos/facebook/create-react-app/contributors",
      "subscribers_url": "https://api.github.com/repos/facebook/create-react-app/subscribers",
      "subscription_url": "https://api.github.com/repos/facebook/create-react-app/subscription",
      "commits_url": "https://api.github.com/repos/facebook/create-react-app/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/facebook/create-react-app/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/facebook/create-react-app/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/facebook/create-react-app/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/facebook/create-react-app/contents/{+path}",
      "compare_url": "https://api.github.com/repos/facebook/create-react-app/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/facebook/create-react-app/merges",
      "archive_url": "https://api.github.com/repos/facebook/create-react-app/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/facebook/create-react-app/downloads",
      "issues_url": "https://api.github.com/repos/facebook/create-react-app/issues{/number}",
      "pulls_url": "https://api.github.com/repos/facebook/create-react-app/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/facebook/create-react-app/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/facebook/create-react-app/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/facebook/create-react-app/labels{/name}",
      "releases_url": "https://api.github.com/repos/facebook/create-react-app/releases{/id}",
      "deployments_url": "https://api.github.com/repos/facebook/create-react-app/deployments",
      "created_at": "2016-07-17T14:55:11Z",
      "updated_at": "2020-02-28T08:56:50Z",
      "pushed_at": "2020-02-28T09:24:12Z",
      "git_url": "git://github.com/facebook/create-react-app.git",
      "ssh_url": "git@github.com:facebook/create-react-app.git",
      "clone_url": "https://github.com/facebook/create-react-app.git",
      "svn_url": "https://github.com/facebook/create-react-app",
      "homepage": "https://create-react-app.dev",
      "size": 13575,
      "stargazers_count": 76412,
      "watchers_count": 76412,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": true,
      "forks_count": 18283,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 547,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 18283,
      "open_issues": 547,
      "watchers": 76412,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 39316535,
      "node_id": "MDEwOlJlcG9zaXRvcnkzOTMxNjUzNQ==",
      "name": "react",
      "full_name": "azat-co/react",
      "private": false,
      "owner": {
        "login": "azat-co",
        "id": 1137314,
        "node_id": "MDQ6VXNlcjExMzczMTQ=",
        "avatar_url": "https://avatars1.githubusercontent.com/u/1137314?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/azat-co",
        "html_url": "https://github.com/azat-co",
        "followers_url": "https://api.github.com/users/azat-co/followers",
        "following_url": "https://api.github.com/users/azat-co/following{/other_user}",
        "gists_url": "https://api.github.com/users/azat-co/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/azat-co/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/azat-co/subscriptions",
        "organizations_url": "https://api.github.com/users/azat-co/orgs",
        "repos_url": "https://api.github.com/users/azat-co/repos",
        "events_url": "https://api.github.com/users/azat-co/events{/privacy}",
        "received_events_url": "https://api.github.com/users/azat-co/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/azat-co/react",
      "description": "Examples for the React Quickly book. ",
      "fork": false,
      "url": "https://api.github.com/repos/azat-co/react",
      "forks_url": "https://api.github.com/repos/azat-co/react/forks",
      "keys_url": "https://api.github.com/repos/azat-co/react/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/azat-co/react/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/azat-co/react/teams",
      "hooks_url": "https://api.github.com/repos/azat-co/react/hooks",
      "issue_events_url": "https://api.github.com/repos/azat-co/react/issues/events{/number}",
      "events_url": "https://api.github.com/repos/azat-co/react/events",
      "assignees_url": "https://api.github.com/repos/azat-co/react/assignees{/user}",
      "branches_url": "https://api.github.com/repos/azat-co/react/branches{/branch}",
      "tags_url": "https://api.github.com/repos/azat-co/react/tags",
      "blobs_url": "https://api.github.com/repos/azat-co/react/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/azat-co/react/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/azat-co/react/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/azat-co/react/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/azat-co/react/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/azat-co/react/languages",
      "stargazers_url": "https://api.github.com/repos/azat-co/react/stargazers",
      "contributors_url": "https://api.github.com/repos/azat-co/react/contributors",
      "subscribers_url": "https://api.github.com/repos/azat-co/react/subscribers",
      "subscription_url": "https://api.github.com/repos/azat-co/react/subscription",
      "commits_url": "https://api.github.com/repos/azat-co/react/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/azat-co/react/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/azat-co/react/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/azat-co/react/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/azat-co/react/contents/{+path}",
      "compare_url": "https://api.github.com/repos/azat-co/react/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/azat-co/react/merges",
      "archive_url": "https://api.github.com/repos/azat-co/react/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/azat-co/react/downloads",
      "issues_url": "https://api.github.com/repos/azat-co/react/issues{/number}",
      "pulls_url": "https://api.github.com/repos/azat-co/react/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/azat-co/react/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/azat-co/react/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/azat-co/react/labels{/name}",
      "releases_url": "https://api.github.com/repos/azat-co/react/releases{/id}",
      "deployments_url": "https://api.github.com/repos/azat-co/react/deployments",
      "created_at": "2015-07-18T23:58:37Z",
      "updated_at": "2020-02-08T12:25:23Z",
      "pushed_at": "2020-02-25T02:32:02Z",
      "git_url": "git://github.com/azat-co/react.git",
      "ssh_url": "git@github.com:azat-co/react.git",
      "clone_url": "https://github.com/azat-co/react.git",
      "svn_url": "https://github.com/azat-co/react",
      "homepage": "https://www.manning.com/books/react-quickly",
      "size": 6859,
      "stargazers_count": 203,
      "watchers_count": 203,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 109,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 3,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 109,
      "open_issues": 3,
      "watchers": 203,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 61573702,
      "node_id": "MDEwOlJlcG9zaXRvcnk2MTU3MzcwMg==",
      "name": "react",
      "full_name": "ui-router/react",
      "private": false,
      "owner": {
        "login": "ui-router",
        "id": 16856735,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjE2ODU2NzM1",
        "avatar_url": "https://avatars0.githubusercontent.com/u/16856735?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ui-router",
        "html_url": "https://github.com/ui-router",
        "followers_url": "https://api.github.com/users/ui-router/followers",
        "following_url": "https://api.github.com/users/ui-router/following{/other_user}",
        "gists_url": "https://api.github.com/users/ui-router/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ui-router/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ui-router/subscriptions",
        "organizations_url": "https://api.github.com/users/ui-router/orgs",
        "repos_url": "https://api.github.com/users/ui-router/repos",
        "events_url": "https://api.github.com/users/ui-router/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ui-router/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/ui-router/react",
      "description": "🔼 UI-Router for React",
      "fork": false,
      "url": "https://api.github.com/repos/ui-router/react",
      "forks_url": "https://api.github.com/repos/ui-router/react/forks",
      "keys_url": "https://api.github.com/repos/ui-router/react/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/ui-router/react/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/ui-router/react/teams",
      "hooks_url": "https://api.github.com/repos/ui-router/react/hooks",
      "issue_events_url": "https://api.github.com/repos/ui-router/react/issues/events{/number}",
      "events_url": "https://api.github.com/repos/ui-router/react/events",
      "assignees_url": "https://api.github.com/repos/ui-router/react/assignees{/user}",
      "branches_url": "https://api.github.com/repos/ui-router/react/branches{/branch}",
      "tags_url": "https://api.github.com/repos/ui-router/react/tags",
      "blobs_url": "https://api.github.com/repos/ui-router/react/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/ui-router/react/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/ui-router/react/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/ui-router/react/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/ui-router/react/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/ui-router/react/languages",
      "stargazers_url": "https://api.github.com/repos/ui-router/react/stargazers",
      "contributors_url": "https://api.github.com/repos/ui-router/react/contributors",
      "subscribers_url": "https://api.github.com/repos/ui-router/react/subscribers",
      "subscription_url": "https://api.github.com/repos/ui-router/react/subscription",
      "commits_url": "https://api.github.com/repos/ui-router/react/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/ui-router/react/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/ui-router/react/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/ui-router/react/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/ui-router/react/contents/{+path}",
      "compare_url": "https://api.github.com/repos/ui-router/react/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/ui-router/react/merges",
      "archive_url": "https://api.github.com/repos/ui-router/react/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/ui-router/react/downloads",
      "issues_url": "https://api.github.com/repos/ui-router/react/issues{/number}",
      "pulls_url": "https://api.github.com/repos/ui-router/react/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/ui-router/react/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/ui-router/react/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/ui-router/react/labels{/name}",
      "releases_url": "https://api.github.com/repos/ui-router/react/releases{/id}",
      "deployments_url": "https://api.github.com/repos/ui-router/react/deployments",
      "created_at": "2016-06-20T19:14:56Z",
      "updated_at": "2020-02-24T10:44:06Z",
      "pushed_at": "2020-02-24T10:44:04Z",
      "git_url": "git://github.com/ui-router/react.git",
      "ssh_url": "git@github.com:ui-router/react.git",
      "clone_url": "https://github.com/ui-router/react.git",
      "svn_url": "https://github.com/ui-router/react",
      "homepage": "https://ui-router.github.io/react/",
      "size": 3286,
      "stargazers_count": 352,
      "watchers_count": 352,
      "language": "TypeScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 69,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 14,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 69,
      "open_issues": 14,
      "watchers": 352,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 45753079,
      "node_id": "MDEwOlJlcG9zaXRvcnk0NTc1MzA3OQ==",
      "name": "react",
      "full_name": "werein/react",
      "private": false,
      "owner": {
        "login": "werein",
        "id": 3116920,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjMxMTY5MjA=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/3116920?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/werein",
        "html_url": "https://github.com/werein",
        "followers_url": "https://api.github.com/users/werein/followers",
        "following_url": "https://api.github.com/users/werein/following{/other_user}",
        "gists_url": "https://api.github.com/users/werein/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/werein/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/werein/subscriptions",
        "organizations_url": "https://api.github.com/users/werein/orgs",
        "repos_url": "https://api.github.com/users/werein/repos",
        "events_url": "https://api.github.com/users/werein/events{/privacy}",
        "received_events_url": "https://api.github.com/users/werein/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/werein/react",
      "description": "Extremely simple boilerplate, easiest you can find, for React application including all the necessary tools: Flow | React 16 | redux | babel 6 | webpack 3 | css-modules | jest | enzyme | express + optional: sass/scss",
      "fork": false,
      "url": "https://api.github.com/repos/werein/react",
      "forks_url": "https://api.github.com/repos/werein/react/forks",
      "keys_url": "https://api.github.com/repos/werein/react/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/werein/react/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/werein/react/teams",
      "hooks_url": "https://api.github.com/repos/werein/react/hooks",
      "issue_events_url": "https://api.github.com/repos/werein/react/issues/events{/number}",
      "events_url": "https://api.github.com/repos/werein/react/events",
      "assignees_url": "https://api.github.com/repos/werein/react/assignees{/user}",
      "branches_url": "https://api.github.com/repos/werein/react/branches{/branch}",
      "tags_url": "https://api.github.com/repos/werein/react/tags",
      "blobs_url": "https://api.github.com/repos/werein/react/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/werein/react/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/werein/react/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/werein/react/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/werein/react/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/werein/react/languages",
      "stargazers_url": "https://api.github.com/repos/werein/react/stargazers",
      "contributors_url": "https://api.github.com/repos/werein/react/contributors",
      "subscribers_url": "https://api.github.com/repos/werein/react/subscribers",
      "subscription_url": "https://api.github.com/repos/werein/react/subscription",
      "commits_url": "https://api.github.com/repos/werein/react/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/werein/react/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/werein/react/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/werein/react/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/werein/react/contents/{+path}",
      "compare_url": "https://api.github.com/repos/werein/react/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/werein/react/merges",
      "archive_url": "https://api.github.com/repos/werein/react/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/werein/react/downloads",
      "issues_url": "https://api.github.com/repos/werein/react/issues{/number}",
      "pulls_url": "https://api.github.com/repos/werein/react/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/werein/react/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/werein/react/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/werein/react/labels{/name}",
      "releases_url": "https://api.github.com/repos/werein/react/releases{/id}",
      "deployments_url": "https://api.github.com/repos/werein/react/deployments",
      "created_at": "2015-11-07T20:22:23Z",
      "updated_at": "2020-01-15T02:48:34Z",
      "pushed_at": "2019-02-20T13:51:04Z",
      "git_url": "git://github.com/werein/react.git",
      "ssh_url": "git@github.com:werein/react.git",
      "clone_url": "https://github.com/werein/react.git",
      "svn_url": "https://github.com/werein/react",
      "homepage": "https://wereinhq.com/guides/react",
      "size": 224,
      "stargazers_count": 235,
      "watchers_count": 235,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 76,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 1,
      "license": null,
      "forks": 76,
      "open_issues": 1,
      "watchers": 235,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 115523888,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMTU1MjM4ODg=",
      "name": "react",
      "full_name": "omergulcicek/react",
      "private": false,
      "owner": {
        "login": "omergulcicek",
        "id": 13813170,
        "node_id": "MDQ6VXNlcjEzODEzMTcw",
        "avatar_url": "https://avatars2.githubusercontent.com/u/13813170?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/omergulcicek",
        "html_url": "https://github.com/omergulcicek",
        "followers_url": "https://api.github.com/users/omergulcicek/followers",
        "following_url": "https://api.github.com/users/omergulcicek/following{/other_user}",
        "gists_url": "https://api.github.com/users/omergulcicek/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/omergulcicek/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/omergulcicek/subscriptions",
        "organizations_url": "https://api.github.com/users/omergulcicek/orgs",
        "repos_url": "https://api.github.com/users/omergulcicek/repos",
        "events_url": "https://api.github.com/users/omergulcicek/events{/privacy}",
        "received_events_url": "https://api.github.com/users/omergulcicek/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/omergulcicek/react",
      "description": "React Js Türkçe Doküman",
      "fork": false,
      "url": "https://api.github.com/repos/omergulcicek/react",
      "forks_url": "https://api.github.com/repos/omergulcicek/react/forks",
      "keys_url": "https://api.github.com/repos/omergulcicek/react/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/omergulcicek/react/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/omergulcicek/react/teams",
      "hooks_url": "https://api.github.com/repos/omergulcicek/react/hooks",
      "issue_events_url": "https://api.github.com/repos/omergulcicek/react/issues/events{/number}",
      "events_url": "https://api.github.com/repos/omergulcicek/react/events",
      "assignees_url": "https://api.github.com/repos/omergulcicek/react/assignees{/user}",
      "branches_url": "https://api.github.com/repos/omergulcicek/react/branches{/branch}",
      "tags_url": "https://api.github.com/repos/omergulcicek/react/tags",
      "blobs_url": "https://api.github.com/repos/omergulcicek/react/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/omergulcicek/react/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/omergulcicek/react/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/omergulcicek/react/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/omergulcicek/react/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/omergulcicek/react/languages",
      "stargazers_url": "https://api.github.com/repos/omergulcicek/react/stargazers",
      "contributors_url": "https://api.github.com/repos/omergulcicek/react/contributors",
      "subscribers_url": "https://api.github.com/repos/omergulcicek/react/subscribers",
      "subscription_url": "https://api.github.com/repos/omergulcicek/react/subscription",
      "commits_url": "https://api.github.com/repos/omergulcicek/react/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/omergulcicek/react/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/omergulcicek/react/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/omergulcicek/react/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/omergulcicek/react/contents/{+path}",
      "compare_url": "https://api.github.com/repos/omergulcicek/react/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/omergulcicek/react/merges",
      "archive_url": "https://api.github.com/repos/omergulcicek/react/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/omergulcicek/react/downloads",
      "issues_url": "https://api.github.com/repos/omergulcicek/react/issues{/number}",
      "pulls_url": "https://api.github.com/repos/omergulcicek/react/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/omergulcicek/react/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/omergulcicek/react/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/omergulcicek/react/labels{/name}",
      "releases_url": "https://api.github.com/repos/omergulcicek/react/releases{/id}",
      "deployments_url": "https://api.github.com/repos/omergulcicek/react/deployments",
      "created_at": "2017-12-27T13:29:03Z",
      "updated_at": "2020-02-27T18:12:42Z",
      "pushed_at": "2019-12-07T10:15:32Z",
      "git_url": "git://github.com/omergulcicek/react.git",
      "ssh_url": "git@github.com:omergulcicek/react.git",
      "clone_url": "https://github.com/omergulcicek/react.git",
      "svn_url": "https://github.com/omergulcicek/react",
      "homepage": "https://turkcedokuman.com/",
      "size": 244,
      "stargazers_count": 356,
      "watchers_count": 356,
      "language": "HTML",
      "has_issues": true,
      "has_projects": false,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": true,
      "forks_count": 63,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 63,
      "open_issues": 0,
      "watchers": 356,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 30969188,
      "node_id": "MDEwOlJlcG9zaXRvcnkzMDk2OTE4OA==",
      "name": "react-boilerplate",
      "full_name": "react-boilerplate/react-boilerplate",
      "private": false,
      "owner": {
        "login": "react-boilerplate",
        "id": 25323389,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjI1MzIzMzg5",
        "avatar_url": "https://avatars2.githubusercontent.com/u/25323389?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/react-boilerplate",
        "html_url": "https://github.com/react-boilerplate",
        "followers_url": "https://api.github.com/users/react-boilerplate/followers",
        "following_url": "https://api.github.com/users/react-boilerplate/following{/other_user}",
        "gists_url": "https://api.github.com/users/react-boilerplate/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/react-boilerplate/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/react-boilerplate/subscriptions",
        "organizations_url": "https://api.github.com/users/react-boilerplate/orgs",
        "repos_url": "https://api.github.com/users/react-boilerplate/repos",
        "events_url": "https://api.github.com/users/react-boilerplate/events{/privacy}",
        "received_events_url": "https://api.github.com/users/react-boilerplate/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/react-boilerplate/react-boilerplate",
      "description": ":fire: A highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices.",
      "fork": false,
      "url": "https://api.github.com/repos/react-boilerplate/react-boilerplate",
      "forks_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/forks",
      "keys_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/teams",
      "hooks_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/hooks",
      "issue_events_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/issues/events{/number}",
      "events_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/events",
      "assignees_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/assignees{/user}",
      "branches_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/branches{/branch}",
      "tags_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/tags",
      "blobs_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/languages",
      "stargazers_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/stargazers",
      "contributors_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/contributors",
      "subscribers_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/subscribers",
      "subscription_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/subscription",
      "commits_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/contents/{+path}",
      "compare_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/merges",
      "archive_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/downloads",
      "issues_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/issues{/number}",
      "pulls_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/labels{/name}",
      "releases_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/releases{/id}",
      "deployments_url": "https://api.github.com/repos/react-boilerplate/react-boilerplate/deployments",
      "created_at": "2015-02-18T14:36:32Z",
      "updated_at": "2020-02-28T04:38:14Z",
      "pushed_at": "2020-02-23T21:55:16Z",
      "git_url": "git://github.com/react-boilerplate/react-boilerplate.git",
      "ssh_url": "git@github.com:react-boilerplate/react-boilerplate.git",
      "clone_url": "https://github.com/react-boilerplate/react-boilerplate.git",
      "svn_url": "https://github.com/react-boilerplate/react-boilerplate",
      "homepage": "https://www.reactboilerplate.com",
      "size": 7449,
      "stargazers_count": 24640,
      "watchers_count": 24640,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": false,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 5109,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 28,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 5109,
      "open_issues": 28,
      "watchers": 24640,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 22670857,
      "node_id": "MDEwOlJlcG9zaXRvcnkyMjY3MDg1Nw==",
      "name": "awesome-react",
      "full_name": "enaqx/awesome-react",
      "private": false,
      "owner": {
        "login": "enaqx",
        "id": 182219,
        "node_id": "MDQ6VXNlcjE4MjIxOQ==",
        "avatar_url": "https://avatars1.githubusercontent.com/u/182219?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/enaqx",
        "html_url": "https://github.com/enaqx",
        "followers_url": "https://api.github.com/users/enaqx/followers",
        "following_url": "https://api.github.com/users/enaqx/following{/other_user}",
        "gists_url": "https://api.github.com/users/enaqx/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/enaqx/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/enaqx/subscriptions",
        "organizations_url": "https://api.github.com/users/enaqx/orgs",
        "repos_url": "https://api.github.com/users/enaqx/repos",
        "events_url": "https://api.github.com/users/enaqx/events{/privacy}",
        "received_events_url": "https://api.github.com/users/enaqx/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/enaqx/awesome-react",
      "description": "A collection of awesome things regarding React ecosystem",
      "fork": false,
      "url": "https://api.github.com/repos/enaqx/awesome-react",
      "forks_url": "https://api.github.com/repos/enaqx/awesome-react/forks",
      "keys_url": "https://api.github.com/repos/enaqx/awesome-react/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/enaqx/awesome-react/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/enaqx/awesome-react/teams",
      "hooks_url": "https://api.github.com/repos/enaqx/awesome-react/hooks",
      "issue_events_url": "https://api.github.com/repos/enaqx/awesome-react/issues/events{/number}",
      "events_url": "https://api.github.com/repos/enaqx/awesome-react/events",
      "assignees_url": "https://api.github.com/repos/enaqx/awesome-react/assignees{/user}",
      "branches_url": "https://api.github.com/repos/enaqx/awesome-react/branches{/branch}",
      "tags_url": "https://api.github.com/repos/enaqx/awesome-react/tags",
      "blobs_url": "https://api.github.com/repos/enaqx/awesome-react/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/enaqx/awesome-react/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/enaqx/awesome-react/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/enaqx/awesome-react/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/enaqx/awesome-react/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/enaqx/awesome-react/languages",
      "stargazers_url": "https://api.github.com/repos/enaqx/awesome-react/stargazers",
      "contributors_url": "https://api.github.com/repos/enaqx/awesome-react/contributors",
      "subscribers_url": "https://api.github.com/repos/enaqx/awesome-react/subscribers",
      "subscription_url": "https://api.github.com/repos/enaqx/awesome-react/subscription",
      "commits_url": "https://api.github.com/repos/enaqx/awesome-react/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/enaqx/awesome-react/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/enaqx/awesome-react/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/enaqx/awesome-react/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/enaqx/awesome-react/contents/{+path}",
      "compare_url": "https://api.github.com/repos/enaqx/awesome-react/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/enaqx/awesome-react/merges",
      "archive_url": "https://api.github.com/repos/enaqx/awesome-react/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/enaqx/awesome-react/downloads",
      "issues_url": "https://api.github.com/repos/enaqx/awesome-react/issues{/number}",
      "pulls_url": "https://api.github.com/repos/enaqx/awesome-react/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/enaqx/awesome-react/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/enaqx/awesome-react/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/enaqx/awesome-react/labels{/name}",
      "releases_url": "https://api.github.com/repos/enaqx/awesome-react/releases{/id}",
      "deployments_url": "https://api.github.com/repos/enaqx/awesome-react/deployments",
      "created_at": "2014-08-06T05:31:44Z",
      "updated_at": "2020-02-28T09:53:02Z",
      "pushed_at": "2020-02-27T22:47:28Z",
      "git_url": "git://github.com/enaqx/awesome-react.git",
      "ssh_url": "git@github.com:enaqx/awesome-react.git",
      "clone_url": "https://github.com/enaqx/awesome-react.git",
      "svn_url": "https://github.com/enaqx/awesome-react",
      "homepage": "",
      "size": 2278,
      "stargazers_count": 35733,
      "watchers_count": 35733,
      "language": null,
      "has_issues": true,
      "has_projects": false,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 4220,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 25,
      "license": null,
      "forks": 4220,
      "open_issues": 25,
      "watchers": 35733,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 32726377,
      "node_id": "MDEwOlJlcG9zaXRvcnkzMjcyNjM3Nw==",
      "name": "react-demos",
      "full_name": "ruanyf/react-demos",
      "private": false,
      "owner": {
        "login": "ruanyf",
        "id": 905434,
        "node_id": "MDQ6VXNlcjkwNTQzNA==",
        "avatar_url": "https://avatars0.githubusercontent.com/u/905434?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ruanyf",
        "html_url": "https://github.com/ruanyf",
        "followers_url": "https://api.github.com/users/ruanyf/followers",
        "following_url": "https://api.github.com/users/ruanyf/following{/other_user}",
        "gists_url": "https://api.github.com/users/ruanyf/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ruanyf/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ruanyf/subscriptions",
        "organizations_url": "https://api.github.com/users/ruanyf/orgs",
        "repos_url": "https://api.github.com/users/ruanyf/repos",
        "events_url": "https://api.github.com/users/ruanyf/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ruanyf/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/ruanyf/react-demos",
      "description": "a collection of simple demos of React.js",
      "fork": false,
      "url": "https://api.github.com/repos/ruanyf/react-demos",
      "forks_url": "https://api.github.com/repos/ruanyf/react-demos/forks",
      "keys_url": "https://api.github.com/repos/ruanyf/react-demos/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/ruanyf/react-demos/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/ruanyf/react-demos/teams",
      "hooks_url": "https://api.github.com/repos/ruanyf/react-demos/hooks",
      "issue_events_url": "https://api.github.com/repos/ruanyf/react-demos/issues/events{/number}",
      "events_url": "https://api.github.com/repos/ruanyf/react-demos/events",
      "assignees_url": "https://api.github.com/repos/ruanyf/react-demos/assignees{/user}",
      "branches_url": "https://api.github.com/repos/ruanyf/react-demos/branches{/branch}",
      "tags_url": "https://api.github.com/repos/ruanyf/react-demos/tags",
      "blobs_url": "https://api.github.com/repos/ruanyf/react-demos/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/ruanyf/react-demos/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/ruanyf/react-demos/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/ruanyf/react-demos/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/ruanyf/react-demos/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/ruanyf/react-demos/languages",
      "stargazers_url": "https://api.github.com/repos/ruanyf/react-demos/stargazers",
      "contributors_url": "https://api.github.com/repos/ruanyf/react-demos/contributors",
      "subscribers_url": "https://api.github.com/repos/ruanyf/react-demos/subscribers",
      "subscription_url": "https://api.github.com/repos/ruanyf/react-demos/subscription",
      "commits_url": "https://api.github.com/repos/ruanyf/react-demos/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/ruanyf/react-demos/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/ruanyf/react-demos/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/ruanyf/react-demos/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/ruanyf/react-demos/contents/{+path}",
      "compare_url": "https://api.github.com/repos/ruanyf/react-demos/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/ruanyf/react-demos/merges",
      "archive_url": "https://api.github.com/repos/ruanyf/react-demos/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/ruanyf/react-demos/downloads",
      "issues_url": "https://api.github.com/repos/ruanyf/react-demos/issues{/number}",
      "pulls_url": "https://api.github.com/repos/ruanyf/react-demos/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/ruanyf/react-demos/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/ruanyf/react-demos/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/ruanyf/react-demos/labels{/name}",
      "releases_url": "https://api.github.com/repos/ruanyf/react-demos/releases{/id}",
      "deployments_url": "https://api.github.com/repos/ruanyf/react-demos/deployments",
      "created_at": "2015-03-23T10:50:07Z",
      "updated_at": "2020-02-27T16:22:46Z",
      "pushed_at": "2019-11-04T10:47:10Z",
      "git_url": "git://github.com/ruanyf/react-demos.git",
      "ssh_url": "git@github.com:ruanyf/react-demos.git",
      "clone_url": "https://github.com/ruanyf/react-demos.git",
      "svn_url": "https://github.com/ruanyf/react-demos",
      "homepage": null,
      "size": 1916,
      "stargazers_count": 14893,
      "watchers_count": 14893,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": true,
      "forks_count": 6287,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 6287,
      "open_issues": 0,
      "watchers": 14893,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 38003903,
      "node_id": "MDEwOlJlcG9zaXRvcnkzODAwMzkwMw==",
      "name": "react-redux-starter-kit",
      "full_name": "davezuko/react-redux-starter-kit",
      "private": false,
      "owner": {
        "login": "davezuko",
        "id": 6439050,
        "node_id": "MDQ6VXNlcjY0MzkwNTA=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/6439050?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/davezuko",
        "html_url": "https://github.com/davezuko",
        "followers_url": "https://api.github.com/users/davezuko/followers",
        "following_url": "https://api.github.com/users/davezuko/following{/other_user}",
        "gists_url": "https://api.github.com/users/davezuko/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/davezuko/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/davezuko/subscriptions",
        "organizations_url": "https://api.github.com/users/davezuko/orgs",
        "repos_url": "https://api.github.com/users/davezuko/repos",
        "events_url": "https://api.github.com/users/davezuko/events{/privacy}",
        "received_events_url": "https://api.github.com/users/davezuko/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/davezuko/react-redux-starter-kit",
      "description": "Get started with React, Redux, and React-Router.",
      "fork": false,
      "url": "https://api.github.com/repos/davezuko/react-redux-starter-kit",
      "forks_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/forks",
      "keys_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/teams",
      "hooks_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/hooks",
      "issue_events_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/issues/events{/number}",
      "events_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/events",
      "assignees_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/assignees{/user}",
      "branches_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/branches{/branch}",
      "tags_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/tags",
      "blobs_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/languages",
      "stargazers_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/stargazers",
      "contributors_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/contributors",
      "subscribers_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/subscribers",
      "subscription_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/subscription",
      "commits_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/contents/{+path}",
      "compare_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/merges",
      "archive_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/downloads",
      "issues_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/issues{/number}",
      "pulls_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/labels{/name}",
      "releases_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/releases{/id}",
      "deployments_url": "https://api.github.com/repos/davezuko/react-redux-starter-kit/deployments",
      "created_at": "2015-06-24T18:38:28Z",
      "updated_at": "2020-02-27T18:05:34Z",
      "pushed_at": "2018-06-03T17:30:08Z",
      "git_url": "git://github.com/davezuko/react-redux-starter-kit.git",
      "ssh_url": "git@github.com:davezuko/react-redux-starter-kit.git",
      "clone_url": "https://github.com/davezuko/react-redux-starter-kit.git",
      "svn_url": "https://github.com/davezuko/react-redux-starter-kit",
      "homepage": "",
      "size": 1190,
      "stargazers_count": 10429,
      "watchers_count": 10429,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 2389,
      "mirror_url": null,
      "archived": true,
      "disabled": false,
      "open_issues_count": 130,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 2389,
      "open_issues": 130,
      "watchers": 10429,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 715082,
      "node_id": "MDEwOlJlcG9zaXRvcnk3MTUwODI=",
      "name": "ReactiveUI",
      "full_name": "reactiveui/ReactiveUI",
      "private": false,
      "owner": {
        "login": "reactiveui",
        "id": 2327577,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjIzMjc1Nzc=",
        "avatar_url": "https://avatars1.githubusercontent.com/u/2327577?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/reactiveui",
        "html_url": "https://github.com/reactiveui",
        "followers_url": "https://api.github.com/users/reactiveui/followers",
        "following_url": "https://api.github.com/users/reactiveui/following{/other_user}",
        "gists_url": "https://api.github.com/users/reactiveui/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/reactiveui/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/reactiveui/subscriptions",
        "organizations_url": "https://api.github.com/users/reactiveui/orgs",
        "repos_url": "https://api.github.com/users/reactiveui/repos",
        "events_url": "https://api.github.com/users/reactiveui/events{/privacy}",
        "received_events_url": "https://api.github.com/users/reactiveui/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/reactiveui/ReactiveUI",
      "description": "An advanced, composable, functional reactive model-view-viewmodel framework for all .NET platforms that is inspired by functional reactive programming. ReactiveUI allows you to  abstract mutable state away from your user interfaces, express the idea around a feature in one readable place and improve the testability of your application.",
      "fork": false,
      "url": "https://api.github.com/repos/reactiveui/ReactiveUI",
      "forks_url": "https://api.github.com/repos/reactiveui/ReactiveUI/forks",
      "keys_url": "https://api.github.com/repos/reactiveui/ReactiveUI/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/reactiveui/ReactiveUI/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/reactiveui/ReactiveUI/teams",
      "hooks_url": "https://api.github.com/repos/reactiveui/ReactiveUI/hooks",
      "issue_events_url": "https://api.github.com/repos/reactiveui/ReactiveUI/issues/events{/number}",
      "events_url": "https://api.github.com/repos/reactiveui/ReactiveUI/events",
      "assignees_url": "https://api.github.com/repos/reactiveui/ReactiveUI/assignees{/user}",
      "branches_url": "https://api.github.com/repos/reactiveui/ReactiveUI/branches{/branch}",
      "tags_url": "https://api.github.com/repos/reactiveui/ReactiveUI/tags",
      "blobs_url": "https://api.github.com/repos/reactiveui/ReactiveUI/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/reactiveui/ReactiveUI/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/reactiveui/ReactiveUI/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/reactiveui/ReactiveUI/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/reactiveui/ReactiveUI/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/reactiveui/ReactiveUI/languages",
      "stargazers_url": "https://api.github.com/repos/reactiveui/ReactiveUI/stargazers",
      "contributors_url": "https://api.github.com/repos/reactiveui/ReactiveUI/contributors",
      "subscribers_url": "https://api.github.com/repos/reactiveui/ReactiveUI/subscribers",
      "subscription_url": "https://api.github.com/repos/reactiveui/ReactiveUI/subscription",
      "commits_url": "https://api.github.com/repos/reactiveui/ReactiveUI/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/reactiveui/ReactiveUI/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/reactiveui/ReactiveUI/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/reactiveui/ReactiveUI/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/reactiveui/ReactiveUI/contents/{+path}",
      "compare_url": "https://api.github.com/repos/reactiveui/ReactiveUI/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/reactiveui/ReactiveUI/merges",
      "archive_url": "https://api.github.com/repos/reactiveui/ReactiveUI/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/reactiveui/ReactiveUI/downloads",
      "issues_url": "https://api.github.com/repos/reactiveui/ReactiveUI/issues{/number}",
      "pulls_url": "https://api.github.com/repos/reactiveui/ReactiveUI/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/reactiveui/ReactiveUI/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/reactiveui/ReactiveUI/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/reactiveui/ReactiveUI/labels{/name}",
      "releases_url": "https://api.github.com/repos/reactiveui/ReactiveUI/releases{/id}",
      "deployments_url": "https://api.github.com/repos/reactiveui/ReactiveUI/deployments",
      "created_at": "2010-06-11T05:24:29Z",
      "updated_at": "2020-02-28T07:19:03Z",
      "pushed_at": "2020-02-27T23:22:48Z",
      "git_url": "git://github.com/reactiveui/ReactiveUI.git",
      "ssh_url": "git@github.com:reactiveui/ReactiveUI.git",
      "clone_url": "https://github.com/reactiveui/ReactiveUI.git",
      "svn_url": "https://github.com/reactiveui/ReactiveUI",
      "homepage": "https://www.reactiveui.net",
      "size": 86166,
      "stargazers_count": 5277,
      "watchers_count": 5277,
      "language": "C#",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 948,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 79,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 948,
      "open_issues": 79,
      "watchers": 5277,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 53237748,
      "node_id": "MDEwOlJlcG9zaXRvcnk1MzIzNzc0OA==",
      "name": "reactjs101",
      "full_name": "kdchang/reactjs101",
      "private": false,
      "owner": {
        "login": "kdchang",
        "id": 2097473,
        "node_id": "MDQ6VXNlcjIwOTc0NzM=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/2097473?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kdchang",
        "html_url": "https://github.com/kdchang",
        "followers_url": "https://api.github.com/users/kdchang/followers",
        "following_url": "https://api.github.com/users/kdchang/following{/other_user}",
        "gists_url": "https://api.github.com/users/kdchang/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kdchang/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kdchang/subscriptions",
        "organizations_url": "https://api.github.com/users/kdchang/orgs",
        "repos_url": "https://api.github.com/users/kdchang/repos",
        "events_url": "https://api.github.com/users/kdchang/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kdchang/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/kdchang/reactjs101",
      "description": "從零開始學 ReactJS（ReactJS 101）是一本希望讓初學者一看就懂的 React 中文入門教學書，由淺入深學習 ReactJS 生態系 (Flux, Redux, React Router, ImmutableJS, React Native, Relay/GraphQL etc.)。",
      "fork": false,
      "url": "https://api.github.com/repos/kdchang/reactjs101",
      "forks_url": "https://api.github.com/repos/kdchang/reactjs101/forks",
      "keys_url": "https://api.github.com/repos/kdchang/reactjs101/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/kdchang/reactjs101/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/kdchang/reactjs101/teams",
      "hooks_url": "https://api.github.com/repos/kdchang/reactjs101/hooks",
      "issue_events_url": "https://api.github.com/repos/kdchang/reactjs101/issues/events{/number}",
      "events_url": "https://api.github.com/repos/kdchang/reactjs101/events",
      "assignees_url": "https://api.github.com/repos/kdchang/reactjs101/assignees{/user}",
      "branches_url": "https://api.github.com/repos/kdchang/reactjs101/branches{/branch}",
      "tags_url": "https://api.github.com/repos/kdchang/reactjs101/tags",
      "blobs_url": "https://api.github.com/repos/kdchang/reactjs101/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/kdchang/reactjs101/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/kdchang/reactjs101/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/kdchang/reactjs101/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/kdchang/reactjs101/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/kdchang/reactjs101/languages",
      "stargazers_url": "https://api.github.com/repos/kdchang/reactjs101/stargazers",
      "contributors_url": "https://api.github.com/repos/kdchang/reactjs101/contributors",
      "subscribers_url": "https://api.github.com/repos/kdchang/reactjs101/subscribers",
      "subscription_url": "https://api.github.com/repos/kdchang/reactjs101/subscription",
      "commits_url": "https://api.github.com/repos/kdchang/reactjs101/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/kdchang/reactjs101/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/kdchang/reactjs101/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/kdchang/reactjs101/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/kdchang/reactjs101/contents/{+path}",
      "compare_url": "https://api.github.com/repos/kdchang/reactjs101/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/kdchang/reactjs101/merges",
      "archive_url": "https://api.github.com/repos/kdchang/reactjs101/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/kdchang/reactjs101/downloads",
      "issues_url": "https://api.github.com/repos/kdchang/reactjs101/issues{/number}",
      "pulls_url": "https://api.github.com/repos/kdchang/reactjs101/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/kdchang/reactjs101/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/kdchang/reactjs101/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/kdchang/reactjs101/labels{/name}",
      "releases_url": "https://api.github.com/repos/kdchang/reactjs101/releases{/id}",
      "deployments_url": "https://api.github.com/repos/kdchang/reactjs101/deployments",
      "created_at": "2016-03-06T04:33:40Z",
      "updated_at": "2020-02-25T13:23:51Z",
      "pushed_at": "2019-09-25T05:34:39Z",
      "git_url": "git://github.com/kdchang/reactjs101.git",
      "ssh_url": "git@github.com:kdchang/reactjs101.git",
      "clone_url": "https://github.com/kdchang/reactjs101.git",
      "svn_url": "https://github.com/kdchang/reactjs101",
      "homepage": "https://www.gitbook.com/book/kdchang/react101/details",
      "size": 7719,
      "stargazers_count": 3538,
      "watchers_count": 3538,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": true,
      "forks_count": 1099,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 54,
      "license": {
        "key": "other",
        "name": "Other",
        "spdx_id": "NOASSERTION",
        "url": null,
        "node_id": "MDc6TGljZW5zZTA="
      },
      "forks": 1099,
      "open_issues": 54,
      "watchers": 3538,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 64466362,
      "node_id": "MDEwOlJlcG9zaXRvcnk2NDQ2NjM2Mg==",
      "name": "react",
      "full_name": "zf-huangxiao/react",
      "private": false,
      "owner": {
        "login": "zf-huangxiao",
        "id": 16551082,
        "node_id": "MDQ6VXNlcjE2NTUxMDgy",
        "avatar_url": "https://avatars0.githubusercontent.com/u/16551082?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/zf-huangxiao",
        "html_url": "https://github.com/zf-huangxiao",
        "followers_url": "https://api.github.com/users/zf-huangxiao/followers",
        "following_url": "https://api.github.com/users/zf-huangxiao/following{/other_user}",
        "gists_url": "https://api.github.com/users/zf-huangxiao/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/zf-huangxiao/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/zf-huangxiao/subscriptions",
        "organizations_url": "https://api.github.com/users/zf-huangxiao/orgs",
        "repos_url": "https://api.github.com/users/zf-huangxiao/repos",
        "events_url": "https://api.github.com/users/zf-huangxiao/events{/privacy}",
        "received_events_url": "https://api.github.com/users/zf-huangxiao/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/zf-huangxiao/react",
      "description": "demo of React.js",
      "fork": false,
      "url": "https://api.github.com/repos/zf-huangxiao/react",
      "forks_url": "https://api.github.com/repos/zf-huangxiao/react/forks",
      "keys_url": "https://api.github.com/repos/zf-huangxiao/react/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/zf-huangxiao/react/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/zf-huangxiao/react/teams",
      "hooks_url": "https://api.github.com/repos/zf-huangxiao/react/hooks",
      "issue_events_url": "https://api.github.com/repos/zf-huangxiao/react/issues/events{/number}",
      "events_url": "https://api.github.com/repos/zf-huangxiao/react/events",
      "assignees_url": "https://api.github.com/repos/zf-huangxiao/react/assignees{/user}",
      "branches_url": "https://api.github.com/repos/zf-huangxiao/react/branches{/branch}",
      "tags_url": "https://api.github.com/repos/zf-huangxiao/react/tags",
      "blobs_url": "https://api.github.com/repos/zf-huangxiao/react/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/zf-huangxiao/react/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/zf-huangxiao/react/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/zf-huangxiao/react/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/zf-huangxiao/react/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/zf-huangxiao/react/languages",
      "stargazers_url": "https://api.github.com/repos/zf-huangxiao/react/stargazers",
      "contributors_url": "https://api.github.com/repos/zf-huangxiao/react/contributors",
      "subscribers_url": "https://api.github.com/repos/zf-huangxiao/react/subscribers",
      "subscription_url": "https://api.github.com/repos/zf-huangxiao/react/subscription",
      "commits_url": "https://api.github.com/repos/zf-huangxiao/react/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/zf-huangxiao/react/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/zf-huangxiao/react/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/zf-huangxiao/react/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/zf-huangxiao/react/contents/{+path}",
      "compare_url": "https://api.github.com/repos/zf-huangxiao/react/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/zf-huangxiao/react/merges",
      "archive_url": "https://api.github.com/repos/zf-huangxiao/react/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/zf-huangxiao/react/downloads",
      "issues_url": "https://api.github.com/repos/zf-huangxiao/react/issues{/number}",
      "pulls_url": "https://api.github.com/repos/zf-huangxiao/react/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/zf-huangxiao/react/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/zf-huangxiao/react/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/zf-huangxiao/react/labels{/name}",
      "releases_url": "https://api.github.com/repos/zf-huangxiao/react/releases{/id}",
      "deployments_url": "https://api.github.com/repos/zf-huangxiao/react/deployments",
      "created_at": "2016-07-29T08:57:29Z",
      "updated_at": "2020-02-28T01:29:19Z",
      "pushed_at": "2019-10-29T14:11:14Z",
      "git_url": "git://github.com/zf-huangxiao/react.git",
      "ssh_url": "git@github.com:zf-huangxiao/react.git",
      "clone_url": "https://github.com/zf-huangxiao/react.git",
      "svn_url": "https://github.com/zf-huangxiao/react",
      "homepage": null,
      "size": 971,
      "stargazers_count": 38,
      "watchers_count": 38,
      "language": "JavaScript",
      "has_issues": false,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 115,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 2,
      "license": null,
      "forks": 115,
      "open_issues": 2,
      "watchers": 38,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 23338716,
      "node_id": "MDEwOlJlcG9zaXRvcnkyMzMzODcxNg==",
      "name": "react-select",
      "full_name": "JedWatson/react-select",
      "private": false,
      "owner": {
        "login": "JedWatson",
        "id": 872310,
        "node_id": "MDQ6VXNlcjg3MjMxMA==",
        "avatar_url": "https://avatars3.githubusercontent.com/u/872310?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/JedWatson",
        "html_url": "https://github.com/JedWatson",
        "followers_url": "https://api.github.com/users/JedWatson/followers",
        "following_url": "https://api.github.com/users/JedWatson/following{/other_user}",
        "gists_url": "https://api.github.com/users/JedWatson/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/JedWatson/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/JedWatson/subscriptions",
        "organizations_url": "https://api.github.com/users/JedWatson/orgs",
        "repos_url": "https://api.github.com/users/JedWatson/repos",
        "events_url": "https://api.github.com/users/JedWatson/events{/privacy}",
        "received_events_url": "https://api.github.com/users/JedWatson/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/JedWatson/react-select",
      "description": "The Select Component for React.js",
      "fork": false,
      "url": "https://api.github.com/repos/JedWatson/react-select",
      "forks_url": "https://api.github.com/repos/JedWatson/react-select/forks",
      "keys_url": "https://api.github.com/repos/JedWatson/react-select/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/JedWatson/react-select/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/JedWatson/react-select/teams",
      "hooks_url": "https://api.github.com/repos/JedWatson/react-select/hooks",
      "issue_events_url": "https://api.github.com/repos/JedWatson/react-select/issues/events{/number}",
      "events_url": "https://api.github.com/repos/JedWatson/react-select/events",
      "assignees_url": "https://api.github.com/repos/JedWatson/react-select/assignees{/user}",
      "branches_url": "https://api.github.com/repos/JedWatson/react-select/branches{/branch}",
      "tags_url": "https://api.github.com/repos/JedWatson/react-select/tags",
      "blobs_url": "https://api.github.com/repos/JedWatson/react-select/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/JedWatson/react-select/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/JedWatson/react-select/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/JedWatson/react-select/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/JedWatson/react-select/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/JedWatson/react-select/languages",
      "stargazers_url": "https://api.github.com/repos/JedWatson/react-select/stargazers",
      "contributors_url": "https://api.github.com/repos/JedWatson/react-select/contributors",
      "subscribers_url": "https://api.github.com/repos/JedWatson/react-select/subscribers",
      "subscription_url": "https://api.github.com/repos/JedWatson/react-select/subscription",
      "commits_url": "https://api.github.com/repos/JedWatson/react-select/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/JedWatson/react-select/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/JedWatson/react-select/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/JedWatson/react-select/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/JedWatson/react-select/contents/{+path}",
      "compare_url": "https://api.github.com/repos/JedWatson/react-select/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/JedWatson/react-select/merges",
      "archive_url": "https://api.github.com/repos/JedWatson/react-select/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/JedWatson/react-select/downloads",
      "issues_url": "https://api.github.com/repos/JedWatson/react-select/issues{/number}",
      "pulls_url": "https://api.github.com/repos/JedWatson/react-select/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/JedWatson/react-select/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/JedWatson/react-select/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/JedWatson/react-select/labels{/name}",
      "releases_url": "https://api.github.com/repos/JedWatson/react-select/releases{/id}",
      "deployments_url": "https://api.github.com/repos/JedWatson/react-select/deployments",
      "created_at": "2014-08-26T04:27:45Z",
      "updated_at": "2020-02-28T10:04:35Z",
      "pushed_at": "2020-02-26T11:46:36Z",
      "git_url": "git://github.com/JedWatson/react-select.git",
      "ssh_url": "git@github.com:JedWatson/react-select.git",
      "clone_url": "https://github.com/JedWatson/react-select.git",
      "svn_url": "https://github.com/JedWatson/react-select",
      "homepage": "https://react-select.com/",
      "size": 15411,
      "stargazers_count": 19334,
      "watchers_count": 19334,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": true,
      "forks_count": 3466,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 1385,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 3466,
      "open_issues": 1385,
      "watchers": 19334,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 80149262,
      "node_id": "MDEwOlJlcG9zaXRvcnk4MDE0OTI2Mg==",
      "name": "react-navigation",
      "full_name": "react-navigation/react-navigation",
      "private": false,
      "owner": {
        "login": "react-navigation",
        "id": 29647600,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjI5NjQ3NjAw",
        "avatar_url": "https://avatars2.githubusercontent.com/u/29647600?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/react-navigation",
        "html_url": "https://github.com/react-navigation",
        "followers_url": "https://api.github.com/users/react-navigation/followers",
        "following_url": "https://api.github.com/users/react-navigation/following{/other_user}",
        "gists_url": "https://api.github.com/users/react-navigation/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/react-navigation/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/react-navigation/subscriptions",
        "organizations_url": "https://api.github.com/users/react-navigation/orgs",
        "repos_url": "https://api.github.com/users/react-navigation/repos",
        "events_url": "https://api.github.com/users/react-navigation/events{/privacy}",
        "received_events_url": "https://api.github.com/users/react-navigation/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/react-navigation/react-navigation",
      "description": "Routing and navigation for your React Native apps",
      "fork": false,
      "url": "https://api.github.com/repos/react-navigation/react-navigation",
      "forks_url": "https://api.github.com/repos/react-navigation/react-navigation/forks",
      "keys_url": "https://api.github.com/repos/react-navigation/react-navigation/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/react-navigation/react-navigation/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/react-navigation/react-navigation/teams",
      "hooks_url": "https://api.github.com/repos/react-navigation/react-navigation/hooks",
      "issue_events_url": "https://api.github.com/repos/react-navigation/react-navigation/issues/events{/number}",
      "events_url": "https://api.github.com/repos/react-navigation/react-navigation/events",
      "assignees_url": "https://api.github.com/repos/react-navigation/react-navigation/assignees{/user}",
      "branches_url": "https://api.github.com/repos/react-navigation/react-navigation/branches{/branch}",
      "tags_url": "https://api.github.com/repos/react-navigation/react-navigation/tags",
      "blobs_url": "https://api.github.com/repos/react-navigation/react-navigation/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/react-navigation/react-navigation/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/react-navigation/react-navigation/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/react-navigation/react-navigation/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/react-navigation/react-navigation/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/react-navigation/react-navigation/languages",
      "stargazers_url": "https://api.github.com/repos/react-navigation/react-navigation/stargazers",
      "contributors_url": "https://api.github.com/repos/react-navigation/react-navigation/contributors",
      "subscribers_url": "https://api.github.com/repos/react-navigation/react-navigation/subscribers",
      "subscription_url": "https://api.github.com/repos/react-navigation/react-navigation/subscription",
      "commits_url": "https://api.github.com/repos/react-navigation/react-navigation/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/react-navigation/react-navigation/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/react-navigation/react-navigation/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/react-navigation/react-navigation/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/react-navigation/react-navigation/contents/{+path}",
      "compare_url": "https://api.github.com/repos/react-navigation/react-navigation/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/react-navigation/react-navigation/merges",
      "archive_url": "https://api.github.com/repos/react-navigation/react-navigation/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/react-navigation/react-navigation/downloads",
      "issues_url": "https://api.github.com/repos/react-navigation/react-navigation/issues{/number}",
      "pulls_url": "https://api.github.com/repos/react-navigation/react-navigation/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/react-navigation/react-navigation/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/react-navigation/react-navigation/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/react-navigation/react-navigation/labels{/name}",
      "releases_url": "https://api.github.com/repos/react-navigation/react-navigation/releases{/id}",
      "deployments_url": "https://api.github.com/repos/react-navigation/react-navigation/deployments",
      "created_at": "2017-01-26T19:51:40Z",
      "updated_at": "2020-02-28T09:38:17Z",
      "pushed_at": "2020-02-26T19:12:10Z",
      "git_url": "git://github.com/react-navigation/react-navigation.git",
      "ssh_url": "git@github.com:react-navigation/react-navigation.git",
      "clone_url": "https://github.com/react-navigation/react-navigation.git",
      "svn_url": "https://github.com/react-navigation/react-navigation",
      "homepage": "https://reactnavigation.org",
      "size": 24721,
      "stargazers_count": 17544,
      "watchers_count": 17544,
      "language": "TypeScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 3590,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 233,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 3590,
      "open_issues": 233,
      "watchers": 17544,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 62127931,
      "node_id": "MDEwOlJlcG9zaXRvcnk2MjEyNzkzMQ==",
      "name": "React",
      "full_name": "leilihuang/React",
      "private": false,
      "owner": {
        "login": "leilihuang",
        "id": 13639327,
        "node_id": "MDQ6VXNlcjEzNjM5MzI3",
        "avatar_url": "https://avatars1.githubusercontent.com/u/13639327?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/leilihuang",
        "html_url": "https://github.com/leilihuang",
        "followers_url": "https://api.github.com/users/leilihuang/followers",
        "following_url": "https://api.github.com/users/leilihuang/following{/other_user}",
        "gists_url": "https://api.github.com/users/leilihuang/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/leilihuang/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/leilihuang/subscriptions",
        "organizations_url": "https://api.github.com/users/leilihuang/orgs",
        "repos_url": "https://api.github.com/users/leilihuang/repos",
        "events_url": "https://api.github.com/users/leilihuang/events{/privacy}",
        "received_events_url": "https://api.github.com/users/leilihuang/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/leilihuang/React",
      "description": "写写React组件",
      "fork": false,
      "url": "https://api.github.com/repos/leilihuang/React",
      "forks_url": "https://api.github.com/repos/leilihuang/React/forks",
      "keys_url": "https://api.github.com/repos/leilihuang/React/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/leilihuang/React/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/leilihuang/React/teams",
      "hooks_url": "https://api.github.com/repos/leilihuang/React/hooks",
      "issue_events_url": "https://api.github.com/repos/leilihuang/React/issues/events{/number}",
      "events_url": "https://api.github.com/repos/leilihuang/React/events",
      "assignees_url": "https://api.github.com/repos/leilihuang/React/assignees{/user}",
      "branches_url": "https://api.github.com/repos/leilihuang/React/branches{/branch}",
      "tags_url": "https://api.github.com/repos/leilihuang/React/tags",
      "blobs_url": "https://api.github.com/repos/leilihuang/React/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/leilihuang/React/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/leilihuang/React/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/leilihuang/React/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/leilihuang/React/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/leilihuang/React/languages",
      "stargazers_url": "https://api.github.com/repos/leilihuang/React/stargazers",
      "contributors_url": "https://api.github.com/repos/leilihuang/React/contributors",
      "subscribers_url": "https://api.github.com/repos/leilihuang/React/subscribers",
      "subscription_url": "https://api.github.com/repos/leilihuang/React/subscription",
      "commits_url": "https://api.github.com/repos/leilihuang/React/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/leilihuang/React/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/leilihuang/React/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/leilihuang/React/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/leilihuang/React/contents/{+path}",
      "compare_url": "https://api.github.com/repos/leilihuang/React/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/leilihuang/React/merges",
      "archive_url": "https://api.github.com/repos/leilihuang/React/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/leilihuang/React/downloads",
      "issues_url": "https://api.github.com/repos/leilihuang/React/issues{/number}",
      "pulls_url": "https://api.github.com/repos/leilihuang/React/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/leilihuang/React/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/leilihuang/React/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/leilihuang/React/labels{/name}",
      "releases_url": "https://api.github.com/repos/leilihuang/React/releases{/id}",
      "deployments_url": "https://api.github.com/repos/leilihuang/React/deployments",
      "created_at": "2016-06-28T09:25:07Z",
      "updated_at": "2020-02-13T04:19:44Z",
      "pushed_at": "2016-11-28T01:56:31Z",
      "git_url": "git://github.com/leilihuang/React.git",
      "ssh_url": "git@github.com:leilihuang/React.git",
      "clone_url": "https://github.com/leilihuang/React.git",
      "svn_url": "https://github.com/leilihuang/React",
      "homepage": null,
      "size": 2288,
      "stargazers_count": 137,
      "watchers_count": 137,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 61,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 1,
      "license": null,
      "forks": 61,
      "open_issues": 1,
      "watchers": 137,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 105963253,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMDU5NjMyNTM=",
      "name": "reactjs.org",
      "full_name": "reactjs/reactjs.org",
      "private": false,
      "owner": {
        "login": "reactjs",
        "id": 6412038,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjY0MTIwMzg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/6412038?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/reactjs",
        "html_url": "https://github.com/reactjs",
        "followers_url": "https://api.github.com/users/reactjs/followers",
        "following_url": "https://api.github.com/users/reactjs/following{/other_user}",
        "gists_url": "https://api.github.com/users/reactjs/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/reactjs/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/reactjs/subscriptions",
        "organizations_url": "https://api.github.com/users/reactjs/orgs",
        "repos_url": "https://api.github.com/users/reactjs/repos",
        "events_url": "https://api.github.com/users/reactjs/events{/privacy}",
        "received_events_url": "https://api.github.com/users/reactjs/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/reactjs/reactjs.org",
      "description": "The React documentation website",
      "fork": false,
      "url": "https://api.github.com/repos/reactjs/reactjs.org",
      "forks_url": "https://api.github.com/repos/reactjs/reactjs.org/forks",
      "keys_url": "https://api.github.com/repos/reactjs/reactjs.org/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/reactjs/reactjs.org/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/reactjs/reactjs.org/teams",
      "hooks_url": "https://api.github.com/repos/reactjs/reactjs.org/hooks",
      "issue_events_url": "https://api.github.com/repos/reactjs/reactjs.org/issues/events{/number}",
      "events_url": "https://api.github.com/repos/reactjs/reactjs.org/events",
      "assignees_url": "https://api.github.com/repos/reactjs/reactjs.org/assignees{/user}",
      "branches_url": "https://api.github.com/repos/reactjs/reactjs.org/branches{/branch}",
      "tags_url": "https://api.github.com/repos/reactjs/reactjs.org/tags",
      "blobs_url": "https://api.github.com/repos/reactjs/reactjs.org/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/reactjs/reactjs.org/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/reactjs/reactjs.org/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/reactjs/reactjs.org/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/reactjs/reactjs.org/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/reactjs/reactjs.org/languages",
      "stargazers_url": "https://api.github.com/repos/reactjs/reactjs.org/stargazers",
      "contributors_url": "https://api.github.com/repos/reactjs/reactjs.org/contributors",
      "subscribers_url": "https://api.github.com/repos/reactjs/reactjs.org/subscribers",
      "subscription_url": "https://api.github.com/repos/reactjs/reactjs.org/subscription",
      "commits_url": "https://api.github.com/repos/reactjs/reactjs.org/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/reactjs/reactjs.org/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/reactjs/reactjs.org/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/reactjs/reactjs.org/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/reactjs/reactjs.org/contents/{+path}",
      "compare_url": "https://api.github.com/repos/reactjs/reactjs.org/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/reactjs/reactjs.org/merges",
      "archive_url": "https://api.github.com/repos/reactjs/reactjs.org/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/reactjs/reactjs.org/downloads",
      "issues_url": "https://api.github.com/repos/reactjs/reactjs.org/issues{/number}",
      "pulls_url": "https://api.github.com/repos/reactjs/reactjs.org/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/reactjs/reactjs.org/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/reactjs/reactjs.org/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/reactjs/reactjs.org/labels{/name}",
      "releases_url": "https://api.github.com/repos/reactjs/reactjs.org/releases{/id}",
      "deployments_url": "https://api.github.com/repos/reactjs/reactjs.org/deployments",
      "created_at": "2017-10-06T03:16:04Z",
      "updated_at": "2020-02-28T09:00:21Z",
      "pushed_at": "2020-02-28T01:05:46Z",
      "git_url": "git://github.com/reactjs/reactjs.org.git",
      "ssh_url": "git@github.com:reactjs/reactjs.org.git",
      "clone_url": "https://github.com/reactjs/reactjs.org.git",
      "svn_url": "https://github.com/reactjs/reactjs.org",
      "homepage": "https://reactjs.org/",
      "size": 77628,
      "stargazers_count": 4323,
      "watchers_count": 4323,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": false,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 3830,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 988,
      "license": {
        "key": "cc-by-4.0",
        "name": "Creative Commons Attribution 4.0 International",
        "spdx_id": "CC-BY-4.0",
        "url": "https://api.github.com/licenses/cc-by-4.0",
        "node_id": "MDc6TGljZW5zZTI1"
      },
      "forks": 3830,
      "open_issues": 988,
      "watchers": 4323,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 68626716,
      "node_id": "MDEwOlJlcG9zaXRvcnk2ODYyNjcxNg==",
      "name": "ReactNativeReduxCasts",
      "full_name": "StephenGrider/ReactNativeReduxCasts",
      "private": false,
      "owner": {
        "login": "StephenGrider",
        "id": 5003903,
        "node_id": "MDQ6VXNlcjUwMDM5MDM=",
        "avatar_url": "https://avatars1.githubusercontent.com/u/5003903?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/StephenGrider",
        "html_url": "https://github.com/StephenGrider",
        "followers_url": "https://api.github.com/users/StephenGrider/followers",
        "following_url": "https://api.github.com/users/StephenGrider/following{/other_user}",
        "gists_url": "https://api.github.com/users/StephenGrider/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/StephenGrider/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/StephenGrider/subscriptions",
        "organizations_url": "https://api.github.com/users/StephenGrider/orgs",
        "repos_url": "https://api.github.com/users/StephenGrider/repos",
        "events_url": "https://api.github.com/users/StephenGrider/events{/privacy}",
        "received_events_url": "https://api.github.com/users/StephenGrider/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/StephenGrider/ReactNativeReduxCasts",
      "description": "Companion Repo for The Complete React Native and Redux Course",
      "fork": false,
      "url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts",
      "forks_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/forks",
      "keys_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/teams",
      "hooks_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/hooks",
      "issue_events_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/issues/events{/number}",
      "events_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/events",
      "assignees_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/assignees{/user}",
      "branches_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/branches{/branch}",
      "tags_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/tags",
      "blobs_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/languages",
      "stargazers_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/stargazers",
      "contributors_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/contributors",
      "subscribers_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/subscribers",
      "subscription_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/subscription",
      "commits_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/contents/{+path}",
      "compare_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/merges",
      "archive_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/downloads",
      "issues_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/issues{/number}",
      "pulls_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/labels{/name}",
      "releases_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/releases{/id}",
      "deployments_url": "https://api.github.com/repos/StephenGrider/ReactNativeReduxCasts/deployments",
      "created_at": "2016-09-19T16:57:30Z",
      "updated_at": "2020-02-27T17:53:56Z",
      "pushed_at": "2018-07-09T18:30:16Z",
      "git_url": "git://github.com/StephenGrider/ReactNativeReduxCasts.git",
      "ssh_url": "git@github.com:StephenGrider/ReactNativeReduxCasts.git",
      "clone_url": "https://github.com/StephenGrider/ReactNativeReduxCasts.git",
      "svn_url": "https://github.com/StephenGrider/ReactNativeReduxCasts",
      "homepage": null,
      "size": 349,
      "stargazers_count": 2582,
      "watchers_count": 2582,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 1371,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 6,
      "license": null,
      "forks": 1371,
      "open_issues": 6,
      "watchers": 2582,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 12926963,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMjkyNjk2Mw==",
      "name": "reaction",
      "full_name": "reactioncommerce/reaction",
      "private": false,
      "owner": {
        "login": "reactioncommerce",
        "id": 5605462,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjU2MDU0NjI=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/5605462?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/reactioncommerce",
        "html_url": "https://github.com/reactioncommerce",
        "followers_url": "https://api.github.com/users/reactioncommerce/followers",
        "following_url": "https://api.github.com/users/reactioncommerce/following{/other_user}",
        "gists_url": "https://api.github.com/users/reactioncommerce/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/reactioncommerce/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/reactioncommerce/subscriptions",
        "organizations_url": "https://api.github.com/users/reactioncommerce/orgs",
        "repos_url": "https://api.github.com/users/reactioncommerce/repos",
        "events_url": "https://api.github.com/users/reactioncommerce/events{/privacy}",
        "received_events_url": "https://api.github.com/users/reactioncommerce/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/reactioncommerce/reaction",
      "description": "Reaction is an API-first, headless commerce platform built using Node.js, React, GraphQL. Deployed via Docker and Kubernetes. ",
      "fork": false,
      "url": "https://api.github.com/repos/reactioncommerce/reaction",
      "forks_url": "https://api.github.com/repos/reactioncommerce/reaction/forks",
      "keys_url": "https://api.github.com/repos/reactioncommerce/reaction/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/reactioncommerce/reaction/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/reactioncommerce/reaction/teams",
      "hooks_url": "https://api.github.com/repos/reactioncommerce/reaction/hooks",
      "issue_events_url": "https://api.github.com/repos/reactioncommerce/reaction/issues/events{/number}",
      "events_url": "https://api.github.com/repos/reactioncommerce/reaction/events",
      "assignees_url": "https://api.github.com/repos/reactioncommerce/reaction/assignees{/user}",
      "branches_url": "https://api.github.com/repos/reactioncommerce/reaction/branches{/branch}",
      "tags_url": "https://api.github.com/repos/reactioncommerce/reaction/tags",
      "blobs_url": "https://api.github.com/repos/reactioncommerce/reaction/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/reactioncommerce/reaction/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/reactioncommerce/reaction/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/reactioncommerce/reaction/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/reactioncommerce/reaction/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/reactioncommerce/reaction/languages",
      "stargazers_url": "https://api.github.com/repos/reactioncommerce/reaction/stargazers",
      "contributors_url": "https://api.github.com/repos/reactioncommerce/reaction/contributors",
      "subscribers_url": "https://api.github.com/repos/reactioncommerce/reaction/subscribers",
      "subscription_url": "https://api.github.com/repos/reactioncommerce/reaction/subscription",
      "commits_url": "https://api.github.com/repos/reactioncommerce/reaction/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/reactioncommerce/reaction/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/reactioncommerce/reaction/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/reactioncommerce/reaction/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/reactioncommerce/reaction/contents/{+path}",
      "compare_url": "https://api.github.com/repos/reactioncommerce/reaction/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/reactioncommerce/reaction/merges",
      "archive_url": "https://api.github.com/repos/reactioncommerce/reaction/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/reactioncommerce/reaction/downloads",
      "issues_url": "https://api.github.com/repos/reactioncommerce/reaction/issues{/number}",
      "pulls_url": "https://api.github.com/repos/reactioncommerce/reaction/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/reactioncommerce/reaction/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/reactioncommerce/reaction/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/reactioncommerce/reaction/labels{/name}",
      "releases_url": "https://api.github.com/repos/reactioncommerce/reaction/releases{/id}",
      "deployments_url": "https://api.github.com/repos/reactioncommerce/reaction/deployments",
      "created_at": "2013-09-18T15:30:36Z",
      "updated_at": "2020-02-28T09:36:35Z",
      "pushed_at": "2020-02-28T07:14:16Z",
      "git_url": "git://github.com/reactioncommerce/reaction.git",
      "ssh_url": "git@github.com:reactioncommerce/reaction.git",
      "clone_url": "https://github.com/reactioncommerce/reaction.git",
      "svn_url": "https://github.com/reactioncommerce/reaction",
      "homepage": "https://reactioncommerce.com/",
      "size": 70265,
      "stargazers_count": 9697,
      "watchers_count": 9697,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 1779,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 94,
      "license": {
        "key": "gpl-3.0",
        "name": "GNU General Public License v3.0",
        "spdx_id": "GPL-3.0",
        "url": "https://api.github.com/licenses/gpl-3.0",
        "node_id": "MDc6TGljZW5zZTk="
      },
      "forks": 1779,
      "open_issues": 94,
      "watchers": 9697,
      "default_branch": "trunk",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 38934449,
      "node_id": "MDEwOlJlcG9zaXRvcnkzODkzNDQ0OQ==",
      "name": "react-redux",
      "full_name": "reduxjs/react-redux",
      "private": false,
      "owner": {
        "login": "reduxjs",
        "id": 13142323,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzMTQyMzIz",
        "avatar_url": "https://avatars3.githubusercontent.com/u/13142323?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/reduxjs",
        "html_url": "https://github.com/reduxjs",
        "followers_url": "https://api.github.com/users/reduxjs/followers",
        "following_url": "https://api.github.com/users/reduxjs/following{/other_user}",
        "gists_url": "https://api.github.com/users/reduxjs/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/reduxjs/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/reduxjs/subscriptions",
        "organizations_url": "https://api.github.com/users/reduxjs/orgs",
        "repos_url": "https://api.github.com/users/reduxjs/repos",
        "events_url": "https://api.github.com/users/reduxjs/events{/privacy}",
        "received_events_url": "https://api.github.com/users/reduxjs/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/reduxjs/react-redux",
      "description": "Official React bindings for Redux",
      "fork": false,
      "url": "https://api.github.com/repos/reduxjs/react-redux",
      "forks_url": "https://api.github.com/repos/reduxjs/react-redux/forks",
      "keys_url": "https://api.github.com/repos/reduxjs/react-redux/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/reduxjs/react-redux/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/reduxjs/react-redux/teams",
      "hooks_url": "https://api.github.com/repos/reduxjs/react-redux/hooks",
      "issue_events_url": "https://api.github.com/repos/reduxjs/react-redux/issues/events{/number}",
      "events_url": "https://api.github.com/repos/reduxjs/react-redux/events",
      "assignees_url": "https://api.github.com/repos/reduxjs/react-redux/assignees{/user}",
      "branches_url": "https://api.github.com/repos/reduxjs/react-redux/branches{/branch}",
      "tags_url": "https://api.github.com/repos/reduxjs/react-redux/tags",
      "blobs_url": "https://api.github.com/repos/reduxjs/react-redux/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/reduxjs/react-redux/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/reduxjs/react-redux/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/reduxjs/react-redux/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/reduxjs/react-redux/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/reduxjs/react-redux/languages",
      "stargazers_url": "https://api.github.com/repos/reduxjs/react-redux/stargazers",
      "contributors_url": "https://api.github.com/repos/reduxjs/react-redux/contributors",
      "subscribers_url": "https://api.github.com/repos/reduxjs/react-redux/subscribers",
      "subscription_url": "https://api.github.com/repos/reduxjs/react-redux/subscription",
      "commits_url": "https://api.github.com/repos/reduxjs/react-redux/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/reduxjs/react-redux/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/reduxjs/react-redux/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/reduxjs/react-redux/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/reduxjs/react-redux/contents/{+path}",
      "compare_url": "https://api.github.com/repos/reduxjs/react-redux/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/reduxjs/react-redux/merges",
      "archive_url": "https://api.github.com/repos/reduxjs/react-redux/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/reduxjs/react-redux/downloads",
      "issues_url": "https://api.github.com/repos/reduxjs/react-redux/issues{/number}",
      "pulls_url": "https://api.github.com/repos/reduxjs/react-redux/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/reduxjs/react-redux/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/reduxjs/react-redux/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/reduxjs/react-redux/labels{/name}",
      "releases_url": "https://api.github.com/repos/reduxjs/react-redux/releases{/id}",
      "deployments_url": "https://api.github.com/repos/reduxjs/react-redux/deployments",
      "created_at": "2015-07-11T17:32:01Z",
      "updated_at": "2020-02-28T07:39:16Z",
      "pushed_at": "2020-02-27T16:27:40Z",
      "git_url": "git://github.com/reduxjs/react-redux.git",
      "ssh_url": "git@github.com:reduxjs/react-redux.git",
      "clone_url": "https://github.com/reduxjs/react-redux.git",
      "svn_url": "https://github.com/reduxjs/react-redux",
      "homepage": "https://react-redux.js.org",
      "size": 3332,
      "stargazers_count": 18985,
      "watchers_count": 18985,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": false,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 2795,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 26,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 2795,
      "open_issues": 26,
      "watchers": 18985,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }, {
      "id": 15480067,
      "node_id": "MDEwOlJlcG9zaXRvcnkxNTQ4MDA2Nw==",
      "name": "react-bootstrap",
      "full_name": "react-bootstrap/react-bootstrap",
      "private": false,
      "owner": {
        "login": "react-bootstrap",
        "id": 6853419,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjY4NTM0MTk=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/6853419?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/react-bootstrap",
        "html_url": "https://github.com/react-bootstrap",
        "followers_url": "https://api.github.com/users/react-bootstrap/followers",
        "following_url": "https://api.github.com/users/react-bootstrap/following{/other_user}",
        "gists_url": "https://api.github.com/users/react-bootstrap/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/react-bootstrap/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/react-bootstrap/subscriptions",
        "organizations_url": "https://api.github.com/users/react-bootstrap/orgs",
        "repos_url": "https://api.github.com/users/react-bootstrap/repos",
        "events_url": "https://api.github.com/users/react-bootstrap/events{/privacy}",
        "received_events_url": "https://api.github.com/users/react-bootstrap/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/react-bootstrap/react-bootstrap",
      "description": "Bootstrap components built with React",
      "fork": false,
      "url": "https://api.github.com/repos/react-bootstrap/react-bootstrap",
      "forks_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/forks",
      "keys_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/teams",
      "hooks_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/hooks",
      "issue_events_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/events{/number}",
      "events_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/events",
      "assignees_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/assignees{/user}",
      "branches_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/branches{/branch}",
      "tags_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/tags",
      "blobs_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/languages",
      "stargazers_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/stargazers",
      "contributors_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/contributors",
      "subscribers_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/subscribers",
      "subscription_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/subscription",
      "commits_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/contents/{+path}",
      "compare_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/merges",
      "archive_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/downloads",
      "issues_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues{/number}",
      "pulls_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/labels{/name}",
      "releases_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/releases{/id}",
      "deployments_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/deployments",
      "created_at": "2013-12-27T19:06:07Z",
      "updated_at": "2020-02-28T09:17:19Z",
      "pushed_at": "2020-02-28T09:17:16Z",
      "git_url": "git://github.com/react-bootstrap/react-bootstrap.git",
      "ssh_url": "git@github.com:react-bootstrap/react-bootstrap.git",
      "clone_url": "https://github.com/react-bootstrap/react-bootstrap.git",
      "svn_url": "https://github.com/react-bootstrap/react-bootstrap",
      "homepage": "https://react-bootstrap.github.io/",
      "size": 18928,
      "stargazers_count": 17106,
      "watchers_count": 17106,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 2786,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 135,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 2786,
      "open_issues": 135,
      "watchers": 17106,
      "default_branch": "master",
      "permissions": {
        "admin": false,
        "push": false,
        "pull": true
      },
      "score": 1.0
    }]
  }
}); //after=Y3Vyc29yOnYyOpK5MjAxNy0wOC0xNlQwOTo1NDo0MiswODowMM4Fu93A
//Y3Vyc29yOnYyOpK5MjAxOS0wNS0yMlQyMTo0MjoyNiswODowMM4KM4O3

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/search.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\编程\项目\next项目\next-github\pages\search.js */"./pages/search.js");


/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/list":
/*!********************************!*\
  !*** external "antd/lib/list" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/list");

/***/ }),

/***/ "antd/lib/pagination":
/*!**************************************!*\
  !*** external "antd/lib/pagination" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/statistic":
/*!*************************************!*\
  !*** external "antd/lib/statistic" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/statistic");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "lru-cache":
/*!****************************!*\
  !*** external "lru-cache" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=search.js.map