"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var scrollTo_service_1 = require("./scrollTo.service");
var ScrollToDirective = (function () {
    function ScrollToDirective(scrollToService) {
        this.scrollToService = scrollToService;
    }
    ScrollToDirective.prototype.ngOnInit = function () {
        this.scrollDuration = (!this.scrollDuration) ? 500 : this.scrollDuration;
        this.scrollOffset = (!this.scrollOffset) ? 0 : this.scrollOffset;
    };
    ScrollToDirective.prototype.onMouseClick = function () {
        this.scrollToService.scrollTo(this.scrollTo, this.scrollDuration, this.scrollOffset);
    };
    return ScrollToDirective;
}());
ScrollToDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[scrollTo]'
            },] },
];
/** @nocollapse */
ScrollToDirective.ctorParameters = function () { return [
    { type: scrollTo_service_1.ScrollToService, },
]; };
ScrollToDirective.propDecorators = {
    'scrollTo': [{ type: core_1.Input, args: ['scrollTo',] },],
    'scrollDuration': [{ type: core_1.Input, args: ['scrollDuration',] },],
    'scrollOffset': [{ type: core_1.Input, args: ['scrollOffset',] },],
    'onMouseClick': [{ type: core_1.HostListener, args: ['mousedown',] },],
};
exports.ScrollToDirective = ScrollToDirective;
//# sourceMappingURL=scrollTo.directive.js.map