class class_ones{
    public  mean():string{
        return "mean stack";
    }
}

class class_twos extends class_ones{
    public  mern():string{
        return "mern stack";
    }
}


class class_threes extends class_twos{
    public  mevn():string{
        return "mevn stack";
    }
}


let objs:class_threes=new class_threes();

console.log(objs.mean);
console.log(objs.mern);
console.log(objs.mevn);