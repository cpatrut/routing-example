"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var edit_server_component_1 = require("./servers/edit-server/edit-server.component");
var server_component_1 = require("./servers/server/server.component");
var servers_component_1 = require("./servers/servers.component");
var users_component_1 = require("./users/users.component");
var user_component_1 = require("./users/user/user.component");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var auth_guard_service_1 = require("./auth-guard.service");
var can_deactivate_guard_service_1 = require("./servers/edit-server/can-deactivate-guard.service");
var error_page_component_1 = require("./error-page/error-page.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent,
        children: [
            {
                path: ':id/:name',
                component: user_component_1.UserComponent
            }
        ]
    },
    {
        path: 'servers',
        component: servers_component_1.ServersComponent,
        // canActivate:[AuthGuard],
        canActivateChild: [auth_guard_service_1.AuthGuard],
        children: [
            {
                path: ':id',
                component: server_component_1.ServerComponent
            },
            {
                path: ':id/edit',
                component: edit_server_component_1.EditServerComponent,
                canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard]
            }
        ]
    },
    {
        path: 'not-found',
        // component:PageNotFoundComponent
        component: error_page_component_1.ErrorPageComponent
    },
    {
        path: '**',
        redirectTo: 'not-found',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes)
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
