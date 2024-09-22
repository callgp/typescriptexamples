function disp_empdetails(name:string, salary:string, age?:number){
      console.log('emp name',name);
      console.log('emp name',salary);
      if(age!=undefined){
        console.log('emp age',age);
      }

      disp_empdetails('vk','111',32);
      disp_empdetails('aa','3333',22);