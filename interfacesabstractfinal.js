var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var class_onesssss = /** @class */ (function () {
    function class_onesssss() {
    }
    class_onesssss.prototype.mean = function () {
        console.log('mean statc');
    };
    class_onesssss.prototype.mern = function () {
        console.log('mern statc');
    };
    return class_onesssss;
}());
var class_twosssss = /** @class */ (function (_super) {
    __extends(class_twosssss, _super);
    function class_twosssss() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_twosssss.prototype.mevn = function () {
        console.log('mevn stack');
    };
    return class_twosssss;
}(class_onesssss));
var objssssss = new class_twosssss;
objssssss.mean();
objssssss.mern();
objssssss.mevn();
