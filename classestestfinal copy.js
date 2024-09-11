var classfinal = /** @class */ (function () {
    function classfinal() {
        this.uiTech = "Angular";
        this.backEnd = "Spring Boot";
        this.db = "oracle";
    }
    classfinal.prototype.getUiTech = function () {
        return this.uiTech;
    };
    classfinal.prototype.getBackEnd = function () {
        return this.uiTech;
    };
    classfinal.prototype.getDb = function () {
        return this.uiTech;
    };
    return classfinal;
}());
var objfinal = new classfinal();
console.log('ui is ', objfinal.getUiTech());
console.log('backend is ', objfinal.getBackEnd());
console.log('db is ', objfinal.getDb());
