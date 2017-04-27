"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var users_component_1 = require("./users/users.component");
var servers_component_1 = require("./servers/servers.component");
var user_component_1 = require("./users/user/user.component");
var edit_server_component_1 = require("./servers/edit-server/edit-server.component");
var server_component_1 = require("./servers/server/server.component");
var servers_service_1 = require("./servers/servers.service");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var app_routing_module_1 = require("./app-routing-module");
var auth_service_1 = require("./auth.service");
var auth_guard_service_1 = require("./auth-guard.service");
var can_deactivate_guard_service_1 = require("./servers/edit-server/can-deactivate-guard.service");
var error_page_component_1 = require("./error-page/error-page.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            users_component_1.UsersComponent,
            servers_component_1.ServersComponent,
            user_component_1.UserComponent,
            edit_server_component_1.EditServerComponent,
            server_component_1.ServerComponent,
            page_not_found_component_1.PageNotFoundComponent,
            error_page_component_1.ErrorPageComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        providers: [servers_service_1.ServersService, auth_service_1.AuthService, auth_guard_service_1.AuthGuard, can_deactivate_guard_service_1.CanDeactivateGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
