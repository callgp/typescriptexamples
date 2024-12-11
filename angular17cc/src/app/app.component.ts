import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular17cc';
  check: boolean=false;
  isLoggedIn: boolean=true;
username: string="xyz";


names: string[]=['xyz','abc','def']


grade: string= 'C';

}
