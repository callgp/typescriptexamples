/*
class==> collection of data member and member function
class encapsulation binding of data with data memebt and exposig data to outside workd through member functions
*/
var class1 = /** @class */ (function () {
    function class1() {
        this.uiTech = "angular";
        this.backEnd = "sing";
        this.db = "db2";
    }
    class1.prototype.getUiTech = function () {
        return this.uiTech;
    };
    class1.prototype.getBackend = function () {
        return this.backEnd;
    };
    class1.prototype.getDB = function () {
        return this.db;
    };
    return class1;
}());
var obj = new class1(); //creating obh of class1
console.log('ui tech ===>', obj.getUiTech());
console.log('bakend tech ===>', obj.getBackend());
console.log('db tech ===>', obj.getDB());
