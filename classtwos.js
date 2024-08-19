var class2 = /** @class */ (function () {
    function class2(arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
    return class2;
}());
var obj1 = new class2("angular", "spring", "db2");
console.log('front end----', obj1.arg1, 'backen---', obj1.arg2, 'dbis', obj1.arg3);
var obj2 = new class2("react", "struts", "mysql");
console.log('front end----', obj2.arg1, 'backen---', obj2.arg2, 'dbis', obj2.arg3);
