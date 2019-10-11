function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


    __webpack_exports__["default"] = "<div class=\"container\" style=\"width: auto\">\n\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailsDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-lg-10 offset-lg-1 col-md-12 text-center\">\n        <form class=\"form-group\" novalidate>\n            <div class=\"row\">\n                <select class=\"form-control col-lg-7 col-md-7 col-sm-12\" placeholder=\"Location\"\n                    [(ngModel)]=\"input_location\" (change)=\"refresh()\" [ngModelOptions]=\"{standalone: true}\">\n                    <option *ngFor=\"let item of loc\" [value]=\"item\">\n                        {{item}}\n                    </option>\n\n                </select>\n                <input type=\"date\" class=\"form-control col-lg-5 col-md-5 col-sm-12\" placeholder=\"Start Date\"\n                    [(ngModel)]=\"start_date\" (change)=\"refresh()\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n\n        </form>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-2 col-sm-10 col-md-10 text-center\" style=\"margin-left: auto;margin-right:auto\">\n        <form class=\"form-group\" novalidate>\n            <div class=\"row\">\n                <input type=\"text\" class=\"fill\" placeholder=\"Search\" [(ngModel)]=\"inputSearch\" (keyup)=\"filter()\"\n                    [ngModelOptions]=\"{standalone: true}\" />\n            </div>\n            <div class=\"row\">\n                <select class=\"fill\" name=\"transmit\" [(ngModel)]=\"transmit\" (change)=\"filter()\">\n                    <option *ngFor=\"let item of transmission\" [value]=\"item\">\n                        {{item}}\n                    </option>\n\n                </select>\n            </div>\n\n            <div class=\"row\">\n                <select class=\"fill\" name=\"type_of_car\" [(ngModel)]=\"type_of_car\" (change)=\"filter()\">\n                    <option *ngFor=\"let item of cars\" [value]=\"item\">\n                        {{item}}\n                    </option>\n                </select>\n            </div>\n            <div class=\"row\">\n                <select class=\"fill\" name=\"fuel_type\" [(ngModel)]=\"fuel_type\" (change)=\"filter()\">\n                    <option *ngFor=\"let item of fuel\" [value]=\"item\">\n                        {{item}}\n                    </option>\n                </select>\n            </div>\n            <div class=\"row\">\n                <select class=\"fill\" name=\"sorts\" [(ngModel)]=\"sorts\" (change)=\"filter()\">\n                    <option *ngFor=\"let item of sort_by\" [value]=\"item\">\n                        {{item}}\n                    </option>\n                </select>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"col-lg-10 col-sm-12 col-md-12 text-center\" style=\"margin-bottom: 80px;\">\n        <div class=\"col-lg-10 offset-lg-1 col-md-12 card\" style=\"background:#7a7a7ac2 ; color: white\"\n            *ngFor=\"let item of items | paginate: { itemsPerPage:4, currentPage: page}\"\n            [class.bg-secondary]=\"item.selected\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-12\">\n                        <img class=\"\" src=\"{{item.photo}}\" alt=\"{{item.name}}\" width=\"100%\">\n                    </div>\n                    <div class=\"col-md-6 col-sm-12\">\n                        <h5 class=\"card-title\">\n                            {{item.name}}\n                        </h5>\n                        <p class=\"card-text\">\n                            <span> <img src=\"/assets/gear-box.svg\" style=\"width: 6%;\" /> {{item.transmission}}</span>\n                            <span><img src=\"/assets/car.svg\" style=\"width: 6%; margin-left: 5px;\" />\n                                {{item.car_Type}}</span>\n                            <span> <img src=\"/assets/gas-station.svg\" style=\"width: 6%;margin-left: 5px;\" />\n                                {{item.fuel_Type}}</span>\n                            <span><img src=\"/assets/seat.svg\" style=\"width: 6%;margin-left: 5px;\" />\n                                {{item.seats}}</span>\n                        </p>\n\n                        <div class=\"row\">\n                            <div class=\"col-6\">\n                                <button style=\"margin-left: 5px;\" *ngIf=\"checkAvailability(item)\" href=\"#\"\n                                    class=\"btn btn-primary btn-block \"><i class=\"fas fa-money-bill-wave\"></i>\n                                    Pay</button>\n                                <span *ngIf=\"!checkAvailability(item)\" class=\"btn btn-danger btn-block \"><i\n                                        class=\"fa fa-times-circle\"></i>\n                                    Not Available</span>\n                            </div>\n                            <div class=\"col-6\">\n                                <button style=\"margin-left: 5px;\" [disabled]=\"!checkAvailability(item)\"\n                                    (click)=\"item.selected = !item.selected\" class=\"btn btn-secondary btn-block\">\n                                    {{item.selected ? 'Clear' : 'Select'}}</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2 col-sm-12\" style=\"margin:auto\">\n                        <h3 class=\"d-flex justify-content-center text-white\">₹{{item.price}}</h3>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-10 col-md-12 text-center\">\n        <div class=\"lead\" style=\"margin-bottom : 35px;\">\n            <div class=\"d-flex justify-content-center\">\n                <pagination-controls (pageChange)=\"page = $event\" maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\"\n                    responsive=\"true\" previousLabel=\"Prev.\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n                    screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\"></pagination-controls>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center\">\n    <div class=\"text-center\">\n          <h1><img src=\"/assets/car-rental.svg\" class=\"image\"/></h1>  \n        <div  class=\"lead\">\n            <form [formGroup]=\"formObject\" (ngSubmit)=\"onSucessSubmit(formObject)\" class=\"form-group form-group-sm form-group-lg\" nonvalidate>\n\n                <div class=\"input-group input-group-lg\">\n                        <img src=\"/assets/locate.svg\" style=\"width: 5%;margin-right: 10px\"/>\n                    <select formControlName=\"locate\" class=\"form-control\" placeholder=\"Location\">\n                            <option *ngFor=\"let item of locations\" [value]=\"item\">\n                                    {{item}}\n                            </option>\n                            \n                    </select>\n\n                </div>\n                <br>\n                <div class=\"input-group input-group-lg\">\n                        <img src=\"/assets/calendar.svg\" style=\"width: 5%;margin-right: 10px\"/>\n                    <input type=\"date\" formControlName=\"dateArrival\" class=\"form-control\" placeholder=\"Start date\">\n                </div>    \n                <p style=\"color:red\" [hidden]=\"hid\">Please make a selection</p>\n                <button style=\"margin-top: 2%\" class=\"btn btn-success\">\n                    Search\n                </button>\n            </form>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

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
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
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

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
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
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/api-provider.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/api-provider.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiProviderService */

  /***/
  function srcAppApiProviderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiProviderService", function () {
      return ApiProviderService;
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
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ApiProviderService =
    /*#__PURE__*/
    function () {
      function ApiProviderService(Http) {
        _classCallCheck(this, ApiProviderService);

        this.Http = Http;
      }

      _createClass(ApiProviderService, [{
        key: "getLocation",
        value: function getLocation() {
          return this.Http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "311576ae-321a-43e3-9a5b-61b3ac373d85").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            //stroing data on local storage so we need not to fetch again
            localStorage.setItem("data", JSON.stringify(res));
            var r = []; // extracted locations

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = res[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var loc = _step.value;
                r.push(loc['location']);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return new Set(r);
          }));
        }
      }]);

      return ApiProviderService;
    }();

    ApiProviderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiProviderService);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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

      this.title = 'Rentalcars';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _details_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./details/details.component */
    "./src/app/details/details.component.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./api-provider.service */
    "./src/app/api-provider.service.ts");
    /* harmony import */


    var _filters_filters_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./filters/filters.service */
    "./src/app/filters/filters.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
      }, {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
      }, {
        path: 'details/:location/:start_date',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"]
      }], {
        useHash: false
      })],
      providers: [_api_provider_service__WEBPACK_IMPORTED_MODULE_10__["ApiProviderService"], _filters_filters_service__WEBPACK_IMPORTED_MODULE_11__["FiltersService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/details/details.component.scss":
  /*!************************************************!*\
    !*** ./src/app/details/details.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailsDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fill {\n  width: -webkit-fill-available;\n}\n\n.bg-secondary {\n  background-color: #000000cf !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9DOlxcVXNlcnNcXGthdnlhIHNheGVuYVxcRGVza3RvcFxcUmVudGFsY2Fycy9zcmNcXGFwcFxcZGV0YWlsc1xcZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjs7QURDQTtFQUNJLHNDQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsbHtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcbi5iZy1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGNmICFpbXBvcnRhbnQ7XHJcbn0iLCIuZmlsbCB7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuXG4uYmctc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGNmICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/details/details.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/details/details.component.ts ***!
    \**********************************************/

  /*! exports provided: DetailsComponent */

  /***/
  function srcAppDetailsDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
      return DetailsComponent;
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


    var _api_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api-provider.service */
    "./src/app/api-provider.service.ts");
    /* harmony import */


    var _filters_filters_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../filters/filters.service */
    "./src/app/filters/filters.service.ts");

    var DetailsComponent =
    /*#__PURE__*/
    function () {
      function DetailsComponent(router, route, api, filters) {
        var _this = this;

        _classCallCheck(this, DetailsComponent);

        this.router = router;
        this.route = route;
        this.api = api;
        this.filters = filters;
        this.inputSearch = "";
        this.transmission = ['Transmission', 'Manual', 'Automatic'];
        this.transmit = this.transmission[0];
        this.cars = ['Cars', 'Hatchback', 'SUV', 'Mini SUV', 'Sedan'];
        this.type_of_car = this.cars[0];
        this.fuel = ['Fuel', 'Petrol', 'Diesel'];
        this.fuel_type = this.fuel[0];
        this.sort_by = ['Price: low to high', 'Price: high to low'];
        this.sorts = this.sort_by[0];
        this.items = [];
        this.page = 1;
        this.api.getLocation().subscribe(function (res) {
          return _this.loc = res;
        });
        this.input_location = this.route.snapshot.params['location'];
        console.log(this.input_location);
        this.start_date = this.route.snapshot.params['start_date'];
        this.refresh();
      }

      _createClass(DetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "refresh",
        value: function refresh() {
          var path = ['details'];

          if (this.input_location && this.input_location.length > 0) {
            path = ['details', this.input_location, this.start_date];
          }

          this.router.navigate(path); // Fetch data
          // this.api.getDetailsFor(this.input_loc).subscribe((res) => {

          this.cars_data = JSON.parse(localStorage.getItem("data"));
          console.log(this.cars_data);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.cars_data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var item = _step2.value;
              //intially make selected as false;
              item.selected = false;
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          this.filter();
        }
      }, {
        key: "filter",
        value: function filter() {
          this.items = this.filters.filter(this.cars_data, this.inputSearch, this.transmit, this.type_of_car, this.fuel_type, this.items, this.input_location, this.sorts, this.start_date);
          console.log(this.items);
        } //service for sorting the data

      }, {
        key: "sort",
        value: function sort() {
          this.items = this.filters.sort(this.items, this.sort_by, this.cars_data, this.start_date);
        }
      }, {
        key: "checkAvailability",
        value: function checkAvailability(item) {
          return this.filters.checkAvailability(item, this.start_date);
        }
      }]);

      return DetailsComponent;
    }();

    DetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_provider_service__WEBPACK_IMPORTED_MODULE_3__["ApiProviderService"]
      }, {
        type: _filters_filters_service__WEBPACK_IMPORTED_MODULE_4__["FiltersService"]
      }];
    };

    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./details.component.scss */
      "./src/app/details/details.component.scss")).default]
    })], DetailsComponent);
    /***/
  },

  /***/
  "./src/app/filters/filters.service.ts":
  /*!********************************************!*\
    !*** ./src/app/filters/filters.service.ts ***!
    \********************************************/

  /*! exports provided: FiltersService */

  /***/
  function srcAppFiltersFiltersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltersService", function () {
      return FiltersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FiltersService =
    /*#__PURE__*/
    function () {
      function FiltersService() {
        _classCallCheck(this, FiltersService);

        this.sort_by = ['Price: Low to High', 'Price: High to Low'];
      }

      _createClass(FiltersService, [{
        key: "filter",
        value: function filter(data, query_input, trans_type_input, car_type_input, fuel_type_input, items, input_loc, sort_type, date) {
          console.log(query_input);
          console.log(trans_type_input);
          console.log(data);

          var newItems = _toConsumableArray(data);

          if (query_input && query_input.length > 1) {
            var query = query_input.trim().toLowerCase(); //filter by car name

            newItems = newItems.filter(function (x) {
              return x['name'].toLowerCase().indexOf(query) > -1;
            });

            if (newItems.length == 0) {
              newItems = _toConsumableArray(data); //filter by car type

              newItems = newItems.filter(function (x) {
                return x['car_Type'].toLowerCase().indexOf(query) > -1;
              });
            }
          }

          if (trans_type_input && trans_type_input !== "Transmission") {
            //filter by transition type
            newItems = newItems.filter(function (x) {
              return x['transmission'] === trans_type_input;
            });
          }

          if (car_type_input && car_type_input !== "Cars") {
            //filter by car type
            newItems = newItems.filter(function (x) {
              return x['car_Type'] === car_type_input;
            });
          }

          if (fuel_type_input && fuel_type_input !== "Fuel") {
            //fuel type filter
            newItems = newItems.filter(function (x) {
              return x['fuel_Type'] === fuel_type_input;
            });
          }

          if (input_loc) {
            //location filter
            newItems = newItems.filter(function (x) {
              return x['location'] === input_loc;
            });
          }

          items.length = 0;
          items.push.apply(items, _toConsumableArray(newItems));
          console.log(items); //sort data by the type;

          this.sort(items, sort_type, items, date);
          console.log(items);
          return items;
        }
      }, {
        key: "sort",
        value: function sort(items, sort_type, data, date) {
          var _this2 = this;

          if (sort_type) {
            switch (sort_type) {
              case this.sort_by[0]:
                items.sort(function (x, y) {
                  var temp1 = x['price'];
                  var temp2 = y['price'];

                  if (temp1 > temp2) {
                    return 1;
                  }

                  if (temp1 < temp2) {
                    return -1;
                  }

                  return 0;
                });
                break;

              case this.sort_by[1]:
                items.sort(function (x, y) {
                  var temp1 = x['price'];
                  var temp2 = y['price'];

                  if (temp1 > temp2) {
                    return -1;
                  }

                  if (temp1 < temp2) {
                    return 1;
                  }

                  return 0;
                });
                break;

              default:
                break;
            }
          }

          items.sort(function (x, y) {
            var temp1 = +_this2.checkAvailability(x, date);
            var temp2 = +_this2.checkAvailability(y, date);

            if (temp1 > temp2) {
              return -1;
            }

            if (temp1 < temp2) {
              return 1;
            }

            return 0;
          });
          return items;
        }
      }, {
        key: "checkAvailability",
        value: function checkAvailability(item, date) {
          //short form of the day of selected date
          var day = new Date(date).toLocaleDateString('en', {
            weekday: 'short'
          }).toLowerCase(); //check if there is matching day with the given day of a date

          if (item && item['availability'] && item['availability'].toLowerCase().indexOf(day) > -1) {
            return true;
          }

          return false;
        }
      }]);

      return FiltersService;
    }();

    FiltersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FiltersService);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api-provider.service */
    "./src/app/api-provider.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router, api, fb) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.api = api;
        this.fb = fb;
        this.hid = true;
        this.formObject = this.fb.group({
          locate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          dateArrival: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date().toISOString().substring(0, 10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.api.getLocation().subscribe(function (res) {
            return _this3.locations = res;
          });
        }
      }, {
        key: "onSucessSubmit",
        value: function onSucessSubmit(form) {
          if (this.formObject.invalid) {
            this.hid = false;
          } else {
            var path = ['details', this.formObject.controls.locate.value, this.formObject.controls.dateArrival.value];
            this.router.navigate(path);
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _api_provider_service__WEBPACK_IMPORTED_MODULE_4__["ApiProviderService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
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
      production: false,
      api: 'https://api.sheety.co/'
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

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! C:\Users\kavya saxena\Desktop\Rentalcars\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map