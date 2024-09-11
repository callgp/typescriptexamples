function optional(name:string, salary:string, age?:number){

    console.log('name is ',name);
    
    
    console.log('age is ',age);

    if(age!=undefined){
        console.log('employee age is ',name);
    }

}


optional('vj','5000',33);
optional('vjs','5001');