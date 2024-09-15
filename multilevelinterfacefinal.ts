interface uiInterface{
    tech_one:string;
}

interface backInterface extends uiInterface{
    tech_two:string;
}


interface dbInterface extends backInterface{
    tech_three:string;
}