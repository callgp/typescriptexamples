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
var class_one_final = /** @class */ (function () {
    function class_one_final() {
    }
    class_one_final.prototype.fun_one = function () {
        return "class1final function 1";
    };
    return class_one_final;
}());
var class_two_final = /** @class */ (function (_super) {
    __extends(class_two_final, _super);
    function class_two_final() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two_final.prototype.fun_two = function () {
        return "class2final function 2";
    };
    return class_two_final;
}(class_one_final));
//let objonefi:class_one_final=new class_one_final;
var objfi = new class_two_final;
//console.log(objonefi.fun_one()); no fun_two
console.log(objfi.fun_one());
console.log(objfi.fun_two());
