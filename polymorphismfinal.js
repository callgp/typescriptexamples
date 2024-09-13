var class_one_finalss = /** @class */ (function () {
    function class_one_finalss() {
    }
    class_one_finalss.prototype.my_funcss = function (arg1, arg2) {
        console.log('argument1 ', arg1);
        console.log('argument2 ', arg2);
    };
    return class_one_finalss;
}());
//let obj:class_one_finalss=new class_one_finalss();
new class_one_finalss().my_funcss(10, 20);
new class_one_finalss().my_funcss("hi", "all");
new class_one_finalss().my_funcss(true, false);
