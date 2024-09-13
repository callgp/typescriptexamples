class class_one_finals{
    public fun_one():string{
        return "mean function 1"
    }
}

class class_two_finals extends class_one_finals {
    public fun_two():string{
        return "mern function 2"
    }
}

class class_three_finals extends class_two_finals {
    public fun_three():string{
        return "mevn function 3"
    }
}

//let objonefi:class_one_final=new class_one_final;
let objfis:class_three_finals=new class_three_finals;


//console.log(objonefi.fun_one()); no fun_two
console.log(objfis.fun_one());


console.log(objfis.fun_two());
console.log(objfis.fun_three());