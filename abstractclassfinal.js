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
var class_onesa = /** @class */ (function () {
    function class_onesa() {
    }
    class_onesa.prototype.fun_one = function () {
        return "fun 1"; //non abstract method
    };
    return class_onesa;
}());
var class_twosa = /** @class */ (function (_super) {
    __extends(class_twosa, _super);
    function class_twosa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_twosa.prototype.fun_two = function () {
        return "aaa";
    };
    return class_twosa;
}(class_onesa));
var objsa = new class_twosa();
console.log(objsa.fun_one());
console.log(objsa.fun_two());
