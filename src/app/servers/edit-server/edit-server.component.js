"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EditServerComponent = (function () {
    function EditServerComponent(serversService, route, router) {
        this.serversService = serversService;
        this.route = route;
        this.router = router;
        this.serverName = '';
        this.serverStatus = '';
        this.allowEdit = false;
        this.changesSaved = false;
    }
    EditServerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (fragments) {
            console.log(fragments);
        });
        this.route.queryParams.subscribe(function (queryParams) {
            _this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        });
        var id = +this.route.snapshot.params['id'];
        this.server = this.serversService.getServer(id);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    };
    EditServerComponent.prototype.onUpdateServer = function () {
        this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
        this.changesSaved = true;
        this.router.navigate(["../"], { relativeTo: this.route });
    };
    EditServerComponent.prototype.canDeactivate = function () {
        if (!this.allowEdit) {
            return true;
        }
        if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
            return confirm("Do you want to discard the changes?");
        }
        return true;
    };
    return EditServerComponent;
}());
EditServerComponent = __decorate([
    core_1.Component({
        selector: 'app-edit-server',
        templateUrl: './edit-server.component.html',
        styleUrls: ['./edit-server.component.css']
    })
], EditServerComponent);
exports.EditServerComponent = EditServerComponent;
