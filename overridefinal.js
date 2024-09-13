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
var class_oness = /** @class */ (function () {
    function class_oness() {
    }
    class_oness.prototype.doFunc = function () {
        //console.log('mysql');
        return "mysql";
    };
    return class_oness;
}());
var class_twoss = /** @class */ (function (_super) {
    __extends(class_twoss, _super);
    function class_twoss() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_twoss.prototype.doFunc = function () {
        // console.log('mevn stack');
        return "nosql";
    };
    return class_twoss;
}(class_oness));
var class_threess = /** @class */ (function (_super) {
    __extends(class_threess, _super);
    function class_threess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_threess.prototype.doFunc = function () {
        return _super.prototype.doFunc.call(this);
    };
    return class_threess;
}(class_oness));
//let obj:class_twos=new class_twos;
console.log(new class_oness().doFunc());
console.log(new class_twoss().doFunc());
console.log(new class_threess().doFunc());
