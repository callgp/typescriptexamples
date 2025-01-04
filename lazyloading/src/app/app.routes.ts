import { Routes } from '@angular/router';

export const routes: Routes = [

{

    path:'customers',
    loadChildren: ()=>
         import('./customers/customers.module').then((m)=>m.CustomersModule),
},


];
