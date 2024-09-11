var polymorphism = /** @class */ (function () {
    function polymorphism() {
    }
    polymorphism.prototype.my_func = function (arg1, arg2) {
        console.log('Arg1===>', arg1);
        console.log('Arg2===>', arg2);
    };
    return polymorphism;
}());
//let obj:class_one=new class_one()
new polymorphism().my_func(10, 20);
new polymorphism().my_func("aa", "bb");
new polymorphism().my_func(true, false);
