//implment interface through class
var uiClass = /** @class */ (function () {
    function uiClass() {
        this.techName = "angular";
    }
    return uiClass;
}());
//implement ineteface through json
var obj1 = {
    techName: 'React'
};
var obj2 = {
    techName: 'Spring Boot'
};
console.log('class level--->', new uiClass().techName);
console.log('json impl level--->', obj1.techName);
console.log('json level--->', obj2.techName);
