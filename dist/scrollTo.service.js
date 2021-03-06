"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var ScrollToService = (function () {
    function ScrollToService() {
    }
    ScrollToService.prototype.scrollTo = function (element, duration, offset) {
        if (duration === void 0) { duration = 500; }
        if (offset === void 0) { offset = 0; }
        var subject = new Subject_1.Subject();
        if (typeof element === 'string') {
            var el = document.querySelector(element);
            this.scrollToElement(el, duration, offset, subject);
        }
        else if (element instanceof HTMLElement) {
            this.scrollToElement(element, duration, offset, subject);
        }
        else {
            subject.error('I don\'t find element');
        }
        return subject;
    };
    ScrollToService.prototype.scrollToElement = function (el, duration, offset, subject) {
        if (el) {
            var viewportOffset = el.getBoundingClientRect();
            var offsetTop = viewportOffset.top + window.pageYOffset;
            this.doScrolling(offsetTop + offset, duration, subject);
        }
        else {
            subject.error('I don\'t find element');
        }
        return subject;
    };
    ScrollToService.prototype.doScrolling = function (elementY, duration, subject) {
        var startingY = window.pageYOffset;
        var diff = elementY - startingY;
        var start;
        window.requestAnimationFrame(function step(timestamp) {
            start = (!start) ? timestamp : start;
            var time = timestamp - start;
            var percent = Math.min(time / duration, 1);
            window.scrollTo(0, startingY + diff * percent);
            if (time < duration) {
                window.requestAnimationFrame(step);
                subject.next({});
            }
            else {
                subject.complete();
            }
        });
    };
    return ScrollToService;
}());
ScrollToService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ScrollToService.ctorParameters = function () { return []; };
exports.ScrollToService = ScrollToService;
//# sourceMappingURL=scrollTo.service.js.map