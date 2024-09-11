class class_one_final{
    public fun_one():string{
        return "class1final function 1"
    }
}

class class_two_final extends class_one_final {
    public fun_two():string{
        return "class2final function 2"
    }
}
//let objonefi:class_one_final=new class_one_final;
let objfi:class_two_final=new class_two_final;


//console.log(objonefi.fun_one()); no fun_two
console.log(objfi.fun_one());


console.log(objfi.fun_two());
