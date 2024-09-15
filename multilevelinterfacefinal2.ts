interface uiInterface{
    tech_one:string;
}

interface backInterface extends uiInterface{
    tech_two:string;
}


interface dbInterface extends backInterface,uiInterface{
    tech_three:string;
}


let objs:dbInterface={

    tech_one:'ang',
    tech_two:'spring',
    tech_three:'orcl'
}

let objss:dbInterface={

    tech_one:'js',
    tech_two:'css',
    tech_three:'html'
}

let objsss:dbInterface={

    tech_one:'mean',
    tech_two:'react',
    tech_three:'node'
}

console.log('full',objsss.tech_one);
console.log('full',objsss.tech_two);
console.log('full',objsss.tech_three);

console.log('2 s',objss.tech_one);
console.log('2 s',objss.tech_two);
console.log('2 s',objss.tech_three);

console.log('1 s',objs.tech_one);
console.log('1 s',objs.tech_two);
console.log('1 s',objs.tech_three);