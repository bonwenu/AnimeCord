function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n<div>\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChatChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"chat-container\">\r\n    <header class=\"chat-header\">\r\n      <h1><i class=\"fa fa-spinner\"></i> AnimeCord</h1>\r\n      <a (click)=\"leaveRoom()\" class=\"btn\">Leave Room</a>\r\n    </header>\r\n    <main class=\"chat-main\">\r\n      <div class=\"chat-sidebar\">\r\n        <h3><i class=\"fas fa-comments\"></i> Room Name:</h3>\r\n        <h2 id=\"room-name\" #roomName></h2>\r\n        <h3><i class=\"fas fa-users\"></i> Users</h3>\r\n        <ul id=\"users\" #userList></ul>\r\n      </div>\r\n      <div #chatMessages class=\"chat-messages\"></div>\r\n    </main>\r\n    <div class=\"chat-form-container\">\r\n      <form #chatForm id=\"chat-form\">\r\n        <input #msg id=\"msg\" type=\"text\" placeholder=\"Enter Message\" required autocomplete=\"off\"/>\r\n        <button class=\"btn\"><i class=\"fas fa-paper-plane\"></i> Send</button>\r\n      </form>\r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"join-container\">\r\n    <header class=\"join-header\">\r\n        <h1><i class=\"fa fa-spinner\"></i> AnimeCord</h1>\r\n    </header>\r\n    <main class=\"join-main\">\r\n        \r\n               \r\n            <button (click)= \"goToChat('Naruto')\" class=\"c-btn-1\">Naruto</button> <br>\r\n            <button (click)= \"goToChat('One Piece')\" class=\"c-btn-2\">One Piece</button> <br>\r\n            <button (click)= \"goToChat('My Hero Academia')\" class=\"c-btn-3\">My Hero Academia</button> <br>\r\n            <button (click)= \"goToChat('Bleach')\" class=\"c-btn-4\">Bleach</button> <br>\r\n        \r\n    </main>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"join-container\">\r\n    <header class=\"join-header\">\r\n        <h1><i class=\"fa fa-spinner\"></i> AnimeCord</h1>\r\n    </header>\r\n    <main class=\"join-main\">\r\n        <form >\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input [(ngModel)]= \"username\"\r\n                    type=\"text\"\r\n                    name=\"username\"\r\n                    id=\"username\"\r\n                    placeholder=\"Enter username...\"\r\n                    required\r\n                />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input class=\"format\" [(ngModel)]= \"password\"\r\n                    type=\"password\"\r\n                    name=\"password\"\r\n                    id=\"password\"\r\n                    placeholder=\"Enter password...\"\r\n                    required\r\n                />\r\n            </div>\r\n            <p>Not a memeber?<a routerLink = '/register'> Register</a> here</p> \r\n            <button (click)=\"checkLogin()\" class=\"btn\">Log In</button>\r\n        </form>\r\n    </main>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <nav class=\"navbar navbar-expand-lg navbar navbar-dark bg-dark\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\r\n      <h1 style=\"margin-top: 5px; color: white; font-size: 20px; padding-right: 20px;\"><i class=\"fa fa-spinner\"></i> AnimeCord</h1>\r\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n        <li class=\"nav-item active\">\r\n          <a routerLink=\"/login\" class=\"nav-link\">Home</a>\r\n        </li>\r\n        <li class= \"nav-item active\">\r\n          <a *ngIf=\"authorizor.loggedIn()\" routerLink=\"/profile\" class=\"nav-link\">Profile</a>\r\n        </li>\r\n      </ul>\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <!-- <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"> \r\n        <button class=\"btn btn-outline-success my-2 my-sm-0\"  *ngIf=\"!authorizor.loggedIn()\" routerLink=\"/login\" >Log In</button>\r\n        -->\r\n        <button class=\"btn btn-outline-warning my-2 my-sm-0\"  *ngIf=\"authorizor.loggedIn()\" (click)=\"logout()\" >Log Out</button>\r\n      </form>\r\n    </div>\r\n  </nav>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"join-container\">\r\n    <header class=\"join-header\">\r\n        <h1><i class=\"fa fa-spinner\"></i> AnimeCord</h1>\r\n        <h3>{{profileData?.username}}</h3>\r\n    </header>\r\n    <main class=\"join-main\">\r\n        <div class=\"container profile\">\r\n            <img class=\"profile\" src=\"../../../assets/profile.gif\"> <br><br> \r\n            <h4><i class=\"fas fa-envelope email\"></i>{{profileData?.email}}</h4>\r\n        </div>\r\n    <!--   <form >\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input [(ngModel)]= \"username\"\r\n                    type=\"text\"\r\n                    name=\"username\"\r\n                    id=\"username\"\r\n                    placeholder=\"Enter username...\"\r\n                    required\r\n                />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input class=\"format\" [(ngModel)]= \"password\"\r\n                    type=\"password\"\r\n                    name=\"password\"\r\n                    id=\"password\"\r\n                    placeholder=\"Enter password...\"\r\n                    required\r\n                />\r\n            </div> \r\n            \r\n        </form> --> \r\n        <button *ngIf=\"!editActive\"  (click)= \"edit()\" class=\"btn\">Change password</button> \r\n        <div *ngIf='editActive'>\r\n        <label>Old Password</label>\r\n            <input class=\"format\" [(ngModel)]= \"currentPassword\"\r\n                    type=\"password\"\r\n                    name=\"currentPassword\"\r\n                    id=\"currentPassword\"\r\n                    placeholder=\"Enter current password...\"\r\n                    required\r\n                />\r\n            <label>New Password</label>\r\n            <input class=\"format\" [(ngModel)]= \"newPassword\"\r\n            type=\"password\"\r\n            name=\"newPassword\"\r\n            id=\"newPassword\"\r\n            placeholder=\"Enter new password...\"\r\n            required\r\n        />\r\n        <button style = \"margin-right: 0.7in;\" (click)=cancel() class=\"btn btn-danger\">Cancel</button> \r\n                <button (click)=applyChanges() class=\"btn btn-primary\">Apply</button> \r\n            </div>\r\n    </main>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"join-container\">\r\n    <header class=\"join-header\">\r\n        <h1><i class=\"fa fa-spinner\"></i> AnimeCord</h1>\r\n        <h3>Register</h3>\r\n    </header>\r\n    <main class=\"join-main\">\r\n        <form  >\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input [(ngModel)]= \"username\"\r\n                    type=\"text\"\r\n                    name=\"username\"\r\n                    id=\"username\"\r\n                    placeholder=\"Enter username...\"\r\n                    required\r\n                />\r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input class=\"format\" [(ngModel)]= \"password\"\r\n                    type=\"password\"\r\n                    name=\"password\"\r\n                    id=\"password\"\r\n                    placeholder=\"Enter password...\"\r\n                    required\r\n                />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"email\">Email</label>\r\n                <input class=\"format\" [(ngModel)]= \"email\"\r\n                    type=\"text\"\r\n                    name=\"email\"\r\n                    id=\"email\"\r\n                    placeholder=\"Enter email...\"\r\n                    required\r\n                />\r\n            </div>\r\n               \r\n            <button (click)=register() class=\"btn\">Submit</button>\r\n        </form>\r\n    </main>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/chat/chat.component */
    "./src/app/components/chat/chat.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");

    var routes = [{
      path: "",
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: "chat",
      component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]]
    }, {
      path: "login",
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: "register",
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }, {
      path: "home",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]]
    }, {
      path: "profile",
      component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-frontend';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/chat/chat.component */
    "./src/app/components/chat/chat.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/validate.service */
    "./src/app/services/validate.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _services_app_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/app-user.service */
    "./src/app/services/app-user.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"]],
      providers: [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _services_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"], _services_app_user_service__WEBPACK_IMPORTED_MODULE_17__["AppUserService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/chat/chat.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/chat/chat.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChatChatComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n        \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/chat/chat.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/chat/chat.component.ts ***!
    \***************************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppComponentsChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ChatComponent = /*#__PURE__*/function () {
      function ChatComponent(router, renderer) {
        var _this = this;

        _classCallCheck(this, ChatComponent);

        this.router = router;
        this.renderer = renderer;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            _this.socket.emit('leave');
          }
        });
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.socket =  io("http://localhost:5000");
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()("http://3.137.105.70:5000");
          this.room = sessionStorage.getItem('room');
          this.user = sessionStorage.getItem('username');

          if (!this.room) {
            this.router.navigate(['home']);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          // Join chat room
          this.socket.emit('joinRoom', {
            username: this.user,
            room: this.room
          }); // Get room and users

          this.socket.on('roomUsers', function (_ref) {
            var room = _ref.room,
                users = _ref.users;

            _this2.outputRoomName(room);

            _this2.outputUsers(users);
          }); // Message from server

          this.socket.on('message', function (message) {
            _this2.outputMessage(message); // Scroll down


            _this2.chatMessages.nativeElement.scrollTop = _this2.chatMessages.nativeElement.scrollHeight;
          });
          this.chatForm.nativeElement.addEventListener('submit', function (event) {
            event.preventDefault(); // Get message text

            var msg = _this2.msg.nativeElement.value;
            msg = msg.trim();

            if (!msg) {
              return false;
            } // Emit message to server


            _this2.socket.emit('chatMessage', msg); // Clear input


            _this2.msg.nativeElement.value = "";

            _this2.msg.nativeElement.focus();
          });
        } // Output message to DOM

      }, {
        key: "outputMessage",
        value: function outputMessage(message) {
          var div = this.renderer.createElement('div');
          div.classList.add('message');
          var p = this.renderer.createElement('p');
          p.classList.add('meta');
          p.innerText = message.username;
          p.innerHTML += "<span> ".concat(message.time, "</span>");
          div.appendChild(p);
          var para = this.renderer.createElement('p');
          div.classList.add('text');
          para.innerText = message.text;
          div.appendChild(para);
          this.chatMessages.nativeElement.appendChild(div);
        } // Add room name to DOM

      }, {
        key: "outputRoomName",
        value: function outputRoomName(room) {
          this.roomName.nativeElement.innerText = room;
        } // Add users to DOM

      }, {
        key: "outputUsers",
        value: function outputUsers(users) {
          var _this3 = this;

          this.userList.nativeElement.innerHTML = '';
          users.forEach(function (user) {
            var li = _this3.renderer.createElement('li');

            li.innerText = user.username;

            _this3.userList.nativeElement.appendChild(li);
          });
        } // Lets others in room know that user has left

      }, {
        key: "leaveRoom",
        value: function leaveRoom() {
          this.router.navigate(['home']);
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userList', {
      "static": false
    })], ChatComponent.prototype, "userList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('roomName', {
      "static": false
    })], ChatComponent.prototype, "roomName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('username', {
      "static": false
    })], ChatComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatForm', {
      "static": false
    })], ChatComponent.prototype, "chatForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('msg', {
      "static": false
    })], ChatComponent.prototype, "msg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatMessages', {
      "static": false
    })], ChatComponent.prototype, "chatMessages", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat.component.css */
      "./src/app/components/chat/chat.component.css"))["default"]]
    })], ChatComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToChat",
        value: function goToChat(chatName) {
          sessionStorage.setItem('room', chatName);
          this.router.navigate(['chat']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authorizor, flashMessage, router) {
        _classCallCheck(this, LoginComponent);

        this.authorizor = authorizor;
        this.flashMessage = flashMessage;
        this.router = router;
        this.username = '';
        this.password = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.authorizor.loggedIn()) {
            this.router.navigate(['home']);
          }
        }
      }, {
        key: "checkLogin",
        value: function checkLogin() {
          var _this4 = this;

          var user = {
            username: this.username,
            password: this.password
          };
          this.authorizor.authenticatedUser(user).subscribe(function (data) {
            if (data.jwt) {
              _this4.authorizor.storeUserData(data.jwt, _this4.username);

              _this4.flashMessage.show('You are now logged in!', {
                cssClass: 'alert-success',
                timeout: 3500
              });

              _this4.router.navigate(['home']);
            } else {
              _this4.flashMessage.show("Incorrect credentials", {
                cssClass: 'alert-danger',
                timeout: 3000
              });

              _this4.username = "";
              _this4.password = "";
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(authorizor, flashMessage, router) {
        _classCallCheck(this, NavbarComponent);

        this.authorizor = authorizor;
        this.flashMessage = flashMessage;
        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.authorizor.logout();
          this.flashMessage.show('You have been logged out!', {
            cssClass: 'alert-warning',
            timeout: 3000
          });
          this.router.navigate(['login']);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/profile/profile.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_services_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/app-user.service */
    "./src/app/services/app-user.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/validate.service */
    "./src/app/services/validate.service.ts");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(authorizor, appUserService, flashMessage, validator) {
        _classCallCheck(this, ProfileComponent);

        this.authorizor = authorizor;
        this.appUserService = appUserService;
        this.flashMessage = flashMessage;
        this.validator = validator;
        this.editActive = false;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          var username = sessionStorage.getItem('username');
          this.appUserService.getProfile(username).subscribe(function (data) {
            _this5.profileData = data;
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "edit",
        value: function edit() {
          this.editActive = true;
        } // Change password

      }, {
        key: "applyChanges",
        value: function applyChanges() {
          var _this6 = this;

          var user = {
            username: this.profileData.username,
            password: this.currentPassword,
            newPassword: this.newPassword
          }; // Required fields

          if (!this.validator.validatePassword1(user)) {
            this.flashMessage.show("Please fill in all fields.", {
              cssClass: 'alert-danger',
              timeout: 3000
            });
            return false;
          } // New password format


          if (!this.validator.validateNewPAssword(user.newPassword)) {
            this.flashMessage.show("At least one number\nOne lowercase and one uppercase letter\nAt least six characters", {
              cssClass: 'alert-danger',
              timeout: 3000
            });
            this.currentPassword = undefined;
            this.newPassword = undefined;
            return false;
          } // Change Password


          this.appUserService.upDatePassword(user).subscribe(function (data) {
            console.log("Update: " + data);

            if (data) {
              _this6.profileData = data;

              _this6.flashMessage.show("Password successfully changed", {
                cssClass: 'alert-success',
                timeout: 3000
              }); // Clear fields if successful


              console.log("Password Change successful.");
              _this6.currentPassword = undefined;
              _this6.newPassword = undefined;
              _this6.editActive = false;
            } else {
              _this6.flashMessage.show("Current password did not match our records", {
                cssClass: 'alert-danger',
                timeout: 3000
              });

              _this6.currentPassword = undefined;
              _this6.newPassword = undefined;
            }
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.currentPassword = undefined;
          this.newPassword = undefined;
          this.editActive = false;
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_services_app_user_service__WEBPACK_IMPORTED_MODULE_3__["AppUserService"]
      }, {
        type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]
      }, {
        type: src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/components/profile/profile.component.css"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/register/register.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/register/register.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/validate.service */
    "./src/app/services/validate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(validator, flashMessage, authorizor, router) {
        _classCallCheck(this, RegisterComponent);

        this.validator = validator;
        this.flashMessage = flashMessage;
        this.authorizor = authorizor;
        this.router = router;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          var _this7 = this;

          var user = {
            username: this.username,
            password: this.password,
            email: this.email
          }; // Required fields

          if (!this.validator.validateRegister(user)) {
            this.flashMessage.show("Please fill in all fields.", {
              cssClass: 'alert-danger',
              timeout: 3000
            });
            return false;
          } // Password format


          if (!this.validator.validateNewPAssword(user.password)) {
            this.flashMessage.show("At least one number\nOne lowercase and one uppercase letter\nAt least six characters", {
              cssClass: 'alert-danger',
              timeout: 3000
            });
            this.password = undefined;
            return false;
          } // Validate email


          if (!this.validator.validateEmail(user.email)) {
            this.flashMessage.show("Please use a valid email.", {
              cssClass: 'alert-danger',
              timeout: 3000
            });
            return false;
          } // Clear fields if successful


          this.email = undefined;
          this.username = undefined;
          this.password = undefined; // Register user

          this.authorizor.registerUser(user).subscribe(function (data) {
            if (data.success) {
              _this7.flashMessage.show("You are now registered and can log in.", {
                cssClass: 'alert-success',
                timeout: 3000
              });

              setTimeout(function () {
                _this7.router.navigate(['/login']);
              }, 3000);
            } else {
              _this7.flashMessage.show(data.message, {
                cssClass: 'alert-danger',
                timeout: 3000
              });
            }
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"]
      }, {
        type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/components/register/register.component.css"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/services/app-user.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/app-user.service.ts ***!
    \**********************************************/

  /*! exports provided: AppUserService */

  /***/
  function srcAppServicesAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppUserService", function () {
      return AppUserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppUserService = /*#__PURE__*/function () {
      function AppUserService(http) {
        _classCallCheck(this, AppUserService);

        this.http = http; // url:string = 'http://localhost:8083';

        this.url = 'http://18.221.171.201:8083';
      }

      _createClass(AppUserService, [{
        key: "getProfile",
        value: function getProfile(username) {
          this.loadToken();
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authToken
          });
          return this.http.get(this.url + '/users/' + username, {
            headers: headers
          });
        }
      }, {
        key: "upDatePassword",
        value: function upDatePassword(user) {
          this.loadToken();
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authToken
          });
          return this.http.put(this.url + '/users/' + user.username, user, {
            headers: headers
          });
        }
      }, {
        key: "loadToken",
        value: function loadToken() {
          var token = sessionStorage.getItem('id_token');
          this.authToken = token;
        }
      }]);

      return AppUserService;
    }();

    AppUserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppUserService);
    /***/
  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(authorizor, router) {
        _classCallCheck(this, AuthGuardService);

        this.authorizor = authorizor;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authorizor.loggedIn()) {
            return true;
          } else {
            this.router.navigate(['login']);
            return false;
          }
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http; // url:string = 'http://localhost:8083';

        this.url = 'http://18.221.171.201:8083';
      }

      _createClass(AuthService, [{
        key: "registerUser",
        value: function registerUser(user) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post(this.url + '/users/register', user, {
            headers: headers
          });
        }
      }, {
        key: "authenticatedUser",
        value: function authenticatedUser(user) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post(this.url + '/authenticate', user, {
            headers: headers
          });
        } // Stroe user info after successful login

      }, {
        key: "storeUserData",
        value: function storeUserData(token, username) {
          sessionStorage.setItem('id_token', token);
          sessionStorage.setItem('username', username);
          this.authToken = token;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authToken = null;
          sessionStorage.removeItem('id_token');
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('room');
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          // For local session
          //return tokenNotExpired('id_token');
          var user = sessionStorage.getItem('id_token');
          return !(user === null);
        }
      }, {
        key: "loadToken",
        value: function loadToken() {
          var token = sessionStorage.getItem('id_token');
          this.authToken = token;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/validate.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/validate.service.ts ***!
    \**********************************************/

  /*! exports provided: ValidateService */

  /***/
  function srcAppServicesValidateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidateService", function () {
      return ValidateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ValidateService = /*#__PURE__*/function () {
      function ValidateService() {
        _classCallCheck(this, ValidateService);
      }

      _createClass(ValidateService, [{
        key: "validateRegister",
        value: function validateRegister(user) {
          if (user.email == undefined || user.email == '' || user.username == undefined || user.username == '' || user.password == undefined || user.password == '') {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "validateEmail",
        value: function validateEmail(email) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
        }
      }, {
        key: "validatePassword1",
        value: function validatePassword1(user) {
          if (user.password == undefined || user.password == '' || user.newPassword == undefined || user.newPassword == '') {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "validateNewPAssword",
        value: function validateNewPAssword(newPassword) {
          // at least one number, one lowercase and one uppercase letter
          // at least six characters
          var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
          return re.test(newPassword);
        }
      }]);

      return ValidateService;
    }();

    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ValidateService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Projects\AnimeCord\angular-frontend\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map