import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppendPipe } from './pipes/append.pipe';
import { DatePipe,LowerCasePipe,UpperCasePipe,CurrencyPipe, PercentPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatePipe,LowerCasePipe,UpperCasePipe,CurrencyPipe, PercentPipe, AppendPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pipes';
  today: number=Date.now();

  currency:number =1.1234;
}
