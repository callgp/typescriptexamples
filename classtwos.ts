class class2{

    constructor(
        public arg1:string, public arg2:string,public arg3:string)
        {}
        
}

let obj1:class2=new class2("angular","spring","db2");
console.log('front end----',obj1.arg1, 'backen---',obj1.arg2,'dbis',obj1.arg3);

let obj2:class2=new class2("react","struts","mysql");
console.log('front end----',obj2.arg1, 'backen---',obj2.arg2,'dbis',obj2.arg3);

