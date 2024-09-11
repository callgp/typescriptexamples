class classfinal{
    private uiTech:string;
    private backEnd:String;
    private db:string;

    constructor(){
        this.uiTech="Angular";
        this.backEnd="Spring Boot";
        this.db="oracle";
    }
        public getUiTech():string{
            return this.uiTech;
        }

        public getBackEnd():string{
            return this.uiTech;
        }

        public getDb():string{
            return this.uiTech;
        }
    }

        var objfinal:classfinal=new classfinal();

        console.log('ui is ',objfinal.getUiTech());
        console.log('backend is ',objfinal.getBackEnd());
        console.log('db is ',objfinal.getDb());
    
