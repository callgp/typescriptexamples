import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

    { path:'home', title:'Home',component:HomeComponent},
    { path:'dashboard', title:'Dashboard',component:DashboardComponent},
    { path:'about', title:'About',component:AboutComponent},
    }

];
