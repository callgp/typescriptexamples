interface uiInterface{
    tech_one:string;
}

interface backInterface extends uiInterface{
    tech_two:string;
}


interface dbInterface extends backInterface{
    tech_three:string;
}


let obj:dbInterface={

    tech_one='ang',
    tech_two='spring',
    tech_three='orcl'
}