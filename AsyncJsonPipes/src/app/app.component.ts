import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { AsyncPipe, JsonPipe,NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,AsyncPipe,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(){}
  private userService = inject(UserService);
  user=this.userService.getUser();
  title = "this is the Title Property";
  userData = {
    id: 1,
    name: 'Umair Jameel',
    roles: ['Admin', 'User'],
    status: {
      active: true,
      lastLogin: new Date(2024, 3, 14),
    }};
}
