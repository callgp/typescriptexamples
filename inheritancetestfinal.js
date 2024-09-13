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
var class_one_finals = /** @class */ (function () {
    function class_one_finals() {
    }
    class_one_finals.prototype.fun_one = function () {
        return "mean function 1";
    };
    return class_one_finals;
}());
var class_two_finals = /** @class */ (function (_super) {
    __extends(class_two_finals, _super);
    function class_two_finals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two_finals.prototype.fun_two = function () {
        return "mern function 2";
    };
    return class_two_finals;
}(class_one_finals));
var class_three_finals = /** @class */ (function (_super) {
    __extends(class_three_finals, _super);
    function class_three_finals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_three_finals.prototype.fun_three = function () {
        return "mevn function 3";
    };
    return class_three_finals;
}(class_two_finals));
//let objonefi:class_one_final=new class_one_final;
var objfis = new class_three_finals;
//console.log(objonefi.fun_one()); no fun_two
console.log(objfis.fun_one());
console.log(objfis.fun_two());
console.log(objfis.fun_three());
