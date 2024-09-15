var uiClass = /** @class */ (function () {
    function uiClass() {
        this.techname = "ang";
    }
    return uiClass;
}());
//impl inteface through json
var obj111 = {
    techname: 'react'
};
var obj112 = {
    techname: "spring"
};
console.log('class level', new uiClass().techname);
console.log('json impl', obj111.techname);
console.log('json impl', obj112.techname);
