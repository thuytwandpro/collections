(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bookmark{\n    width: 600px;\n    margin:  20px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9va21hcmt7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogIDIwcHggYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        \n    <div class=\"alert {{status?'alert-success':'alert-danger'}}\" style=\"z-index: 999;position: absolute; bottom:20px; right: 10px\" *ngIf=\"status\" role=\"alert\">\n        {{message}}\n        <a href=\"#\" class=\"close ml-3\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">×</span>\n        </a>\n    </div>\n        <div class=\"dashboard-header\">\n          <nav class=\"navbar navbar-expand-lg bg-white\">\n                  <a class=\"navbar-brand\" href=\"index.html\">Conllections</a>\n                  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                      <span class=\"navbar-toggler-icon\"></span>\n                  </button>\n                  <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">\n                      <ul class=\"navbar-nav ml-auto navbar-right-top\">\n                          <li class=\"nav-item\">\n                              <div id=\"custom-search\" class=\"top-search-bar\">\n                                  <input class=\"form-control\" type=\"text\" placeholder=\"Search..\">\n                              </div>\n                          </li>\n                          <li class=\"nav-item dropdown notification\">\n                              <a class=\"nav-link nav-icons\" href=\"#\" id=\"navbarDropdownMenuLink1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fas fa-fw fa-bell\"></i> <span class=\"indicator\"></span></a>\n                              <ul class=\"dropdown-menu dropdown-menu-right notification-dropdown\">\n                                  <li>\n                                      <div class=\"notification-title\"> Notification</div>\n                                      <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 250px;\"><div class=\"notification-list\" style=\"overflow: hidden; width: auto; height: 250px;\">\n                                          <div class=\"list-group\">\n                                              <a href=\"#\" class=\"list-group-item list-group-item-action active\">\n                                                  <div class=\"notification-info\">\n                                                      <div class=\"notification-list-user-img\"><img src=\"assets/images/avatar-2.jpg\" alt=\"\" class=\"user-avatar-md rounded-circle\"></div>\n                                                      <div class=\"notification-list-user-block\"><span class=\"notification-list-user-name\">Jeremy Rakestraw</span>accepted your invitation to join the team.\n                                                          <div class=\"notification-date\">2 min ago</div>\n                                                      </div>\n                                                  </div>\n                                              </a>\n                                              <a href=\"#\" class=\"list-group-item list-group-item-action\">\n                                                  <div class=\"notification-info\">\n                                                      <div class=\"notification-list-user-img\"><img src=\"assets/images/avatar-3.jpg\" alt=\"\" class=\"user-avatar-md rounded-circle\"></div>\n                                                      <div class=\"notification-list-user-block\"><span class=\"notification-list-user-name\">John Abraham</span>is now following you\n                                                          <div class=\"notification-date\">2 days ago</div>\n                                                      </div>\n                                                  </div>\n                                              </a>\n                                              <a href=\"#\" class=\"list-group-item list-group-item-action\">\n                                                  <div class=\"notification-info\">\n                                                      <div class=\"notification-list-user-img\"><img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"user-avatar-md rounded-circle\"></div>\n                                                      <div class=\"notification-list-user-block\"><span class=\"notification-list-user-name\">Monaan Pechi</span> is watching your main repository\n                                                          <div class=\"notification-date\">2 min ago</div>\n                                                      </div>\n                                                  </div>\n                                              </a>\n                                              <a href=\"#\" class=\"list-group-item list-group-item-action\">\n                                                  <div class=\"notification-info\">\n                                                      <div class=\"notification-list-user-img\"><img src=\"assets/images/avatar-5.jpg\" alt=\"\" class=\"user-avatar-md rounded-circle\"></div>\n                                                      <div class=\"notification-list-user-block\"><span class=\"notification-list-user-name\">Jessica Caruso</span>accepted your invitation to join the team.\n                                                          <div class=\"notification-date\">2 min ago</div>\n                                                      </div>\n                                                  </div>\n                                              </a>\n                                          </div>\n                                      </div><div class=\"slimScrollBar\" style=\"background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"></div><div class=\"slimScrollRail\" style=\"width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div>\n                                  </li>\n                                  <li>\n                                      <div class=\"list-footer\"> <a href=\"#\">View all notifications</a></div>\n                                  </li>\n                              </ul>\n                          </li>\n                          <li class=\"nav-item dropdown connection\">\n                              <a class=\"nav-link\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"fas fa-fw fa-th\"></i> </a>\n                              <ul class=\"dropdown-menu dropdown-menu-right connection-dropdown\">\n                                  <li class=\"connection-list\">\n                                      <div class=\"row\">\n                                          <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 \">\n                                              <a href=\"#\" class=\"connection-item\"><img src=\"assets/images/github.png\" alt=\"\"> <span>Github</span></a>\n                                          </div>\n                                          <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 \">\n                                              <a href=\"#\" class=\"connection-item\"><img src=\"assets/images/dribbble.png\" alt=\"\"> <span>Dribbble</span></a>\n                                          </div>\n                                          <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 \">\n                                              <a href=\"#\" class=\"connection-item\"><img src=\"assets/images/dropbox.png\" alt=\"\"> <span>Dropbox</span></a>\n                                          </div>\n                                      </div>\n                                      <div class=\"row\">\n                                          <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 \">\n                                              <a href=\"#\" class=\"connection-item\"><img src=\"assets/images/bitbucket.png\" alt=\"\"> <span>Bitbucket</span></a>\n                                          </div>\n                                          <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 \">\n                                              <a href=\"#\" class=\"connection-item\"><img src=\"assets/images/mail_chimp.png\" alt=\"\"><span>Mail chimp</span></a>\n                                          </div>\n                                          <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 \">\n                                              <a href=\"#\" class=\"connection-item\"><img src=\"assets/images/slack.png\" alt=\"\"> <span>Slack</span></a>\n                                          </div>\n                                      </div>\n                                  </li>\n                                  <li>\n                                      <div class=\"conntection-footer\"><a href=\"#\">More</a></div>\n                                  </li>\n                              </ul>\n                          </li>\n                          <li class=\"nav-item dropdown nav-user\">\n                              <a class=\"nav-link nav-user-img\" href=\"#\" id=\"navbarDropdownMenuLink2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\" class=\"user-avatar-md rounded-circle\"></a>\n                              <div class=\"dropdown-menu dropdown-menu-right nav-user-dropdown\" aria-labelledby=\"navbarDropdownMenuLink2\">\n                                  <div class=\"nav-user-info\">\n                                      <h5 class=\"mb-0 text-white nav-user-name\">John Abraham</h5>\n                                      <span class=\"status\"></span><span class=\"ml-2\">Available</span>\n                                  </div>\n                                  <a class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-user mr-2\"></i>Account</a>\n                                  <a class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-cog mr-2\"></i>Setting</a>\n                                  <a class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-power-off mr-2\"></i>Logout</a>\n                              </div>\n                          </li>\n                      </ul>\n                  </div>\n              </nav>\n  </div>\n  <div class=\"dashboard-button\">\n          <div class=\"row\">\n                  <div class=\"col-lg-8 col-md-6 col-sm-12\">\n                  </div>\n                  <div class=\"col-lg-4 col-md-6 col-sm-12 text-right\">\n                          <a href=\"#\" class=\"btn btn-outline-primary mr-2\" data-toggle=\"modal\" data-target=\"#bookmark\">Add bookmark</a>\n                          <a href=\"#\" class=\"btn btn-dark\" data-toggle=\"modal\" data-target=\"#collection\">\u001bAdd collection</a>\n                  </div>\n              </div>\n  </div>\n  <div class=\"dashboard-wrapper\">\n      <div class=\"container-fluid dashboard-content\">\n              <div class=\"row\">\n                      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12\" *ngFor=\"let item of items | async\">\n                          <div class=\"card\">\n                              <div class=\"card-header\">\n                                {{ item.name }}\n                              </div>\n                              <div class=\"card-body\">\n                                      <a href=\"#\" class=\"btn btn-light btn-block btn-sm\">Block level button</a>\n                                      <a href=\"#\" class=\"btn btn-light btn-block btn-sm\">Block level button</a>\n                                      <a href=\"#\" class=\"btn btn-light btn-block btn-sm\">Block level button</a>\n                                      <a href=\"#\" class=\"btn btn-light btn-block btn-sm\">Block level button</a>\n                                      <a href=\"#\" class=\"btn btn-light btn-block btn-sm\">Block level button</a>\n                                      <a href=\"#\" class=\"btn btn-light btn-block btn-sm\">Block level button</a>\n                                      <a href=\"#\" class=\"btn btn-light btn-block btn-sm\">Block level button</a>\n                                      <a href=\"#\" class=\"btn btn-light btn-block btn-sm\">Block level button</a>\n                                      <a href=\"#\" class=\"btn btn-light btn-block btn-sm\">Block level button</a>\n                                      <a href=\"#\" class=\"btn btn-light btn-block btn-sm\">Block level button</a>\n                              </div>\n                              <div class=\"card-footer d-flex text-muted\">\n                                  Card Footer\n                              </div>\n                          </div>\n                      </div>\n              </div>\n      </div>\n\n<div class=\"modal fade\" id=\"bookmark\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">New Bookmark</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n              <label for=\"inputText3\" class=\"col-form-label\">Name</label>\n              <input id=\"inputText3\" type=\"text\" class=\"form-control\" [(ngModel)]=\"new['bookmark']\" name=\"bookmark\">\n          </div>\n      </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"addBookmark()\">Add</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n      <div class=\"footer\">\n          <div class=\"container-fluid\">\n              <div class=\"row\">\n                  <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12\">\n                      Copyright © 2018 \n                      <!-- Concept. All rights reserved. Dashboard by <a href=\"https://colorlib.com/wp/\">Colorlib</a>. -->\n                  </div>\n                  <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12\">\n                      <div class=\"text-md-right footer-links d-none d-sm-block\">\n                          <a href=\"javascript: void(0);\">About</a>\n                          <a href=\"javascript: void(0);\">Support</a>\n                          <a href=\"javascript: void(0);\">Contact Us</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(afs) {
        this.afs = afs;
        this.title = 'Collection';
        this.message = '';
        this.new = {
            bookmark: '',
            collection: ''
        };
        // this.afs.list('collection').push({ slug: 'code-fight', name: 'Code Fight' });
        this.items = afs.list('collection').valueChanges();
    }
    AppComponent.prototype.addBookmark = function () {
        var _this = this;
        if (confirm('Are you sure want add this bookmark?')) {
            this.afs.list('collection').push({
                slug: this.new['bookmark'].toLowerCase().trim().split(' ').join('-'),
                name: this.new['bookmark']
            }).then(function () {
                $('#bookmark').modal('hide'),
                    _this.status = true,
                    _this.message = 'Add new bookmark successfully';
            });
            this.new['bookmark'] = '';
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/ */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire//auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_fire___WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabaseModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDdtn4thzPHjQ3BAygyQ91uIjCyJkkQ95I",
        authDomain: "collection-42d2c.firebaseapp.com",
        databaseURL: "https://collection-42d2c.firebaseio.com",
        projectId: "collection-42d2c",
        storageBucket: "",
        messagingSenderId: "536943652707"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/BOOTCAMP/Collection/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map