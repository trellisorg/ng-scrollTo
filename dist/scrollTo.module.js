"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var scrollTo_directive_1 = require("./scrollTo.directive");
var scrollTo_service_1 = require("./scrollTo.service");
var ScrollToModule = (function () {
    function ScrollToModule() {
    }
    ScrollToModule.forRoot = function () {
        return {
            ngModule: ScrollToModule
        };
    };
    return ScrollToModule;
}());
ScrollToModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    scrollTo_directive_1.ScrollToDirective
                ],
                imports: [
                    common_1.CommonModule
                ],
                exports: [
                    scrollTo_directive_1.ScrollToDirective
                ],
                providers: [
                    scrollTo_service_1.ScrollToService
                ]
            },] },
];
/** @nocollapse */
ScrollToModule.ctorParameters = function () { return []; };
exports.ScrollToModule = ScrollToModule;
//# sourceMappingURL=scrollTo.module.js.map