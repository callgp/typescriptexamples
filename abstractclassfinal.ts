abstract class class_onesa{
    public fun_one():string{
        return "fun 1"; //non abstract method
    }
    abstract fun_two():string;//abstract method
}

class class_twosa extends class_onesa{
     fun_two():string{

        return "aaa";
     }
}

let objsa:class_twosa=new class_twosa();
console.log(objsa.fun_one());
console.log(objsa.fun_two());