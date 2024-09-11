interface interface1{
    techName:string;

}
//implment interface through class
class uiClass implements interface1{
    techName: string="angular";
    
}
//implement ineteface through json

let obj1:interface1={
    techName:'React'


}

let obj2:interface1={
    techName:'Spring Boot'
}

console.log('class level--->', new uiClass().techName);
console.log('json impl level--->',obj1.techName);
console.log('json level--->',obj2.techName);