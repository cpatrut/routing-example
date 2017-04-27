"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ServerComponent = (function () {
    function ServerComponent(serversService, route, router) {
        this.serversService = serversService;
        this.route = route;
        this.router = router;
    }
    ServerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params["id"];
        this.server = this.serversService.getServer(id);
        this.route.params
            .subscribe(function (params) {
            _this.server = _this.serversService.getServer(+params['id']);
        });
    };
    ServerComponent.prototype.onEdit = function () {
        // this.rout
        this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    };
    return ServerComponent;
}());
ServerComponent = __decorate([
    core_1.Component({
        selector: 'app-server',
        templateUrl: './server.component.html',
        styleUrls: ['./server.component.css']
    })
], ServerComponent);
exports.ServerComponent = ServerComponent;
