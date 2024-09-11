class class_onee{
    public dbFunc():string{
        return "mysql connected";
    }
}
    class class_twoo extends class_onee{
        public dbFunc():string{
            return "nosql connected";
        }
    }
/*
        class class_three extends class_one{
            public dbFunc():string{
                return "nosql connected";
            }
            */

console.log(new class_onee.dbFunc());
console.log(new class_twoo.dbFunc());