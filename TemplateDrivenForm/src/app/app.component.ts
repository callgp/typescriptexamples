import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface User{
  name:string;
  email:string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'TemplateDrivenForm';

  user: User={
    name:'',
    email:'',
  };


  submitForm(form:NgForm){
    if(form.valid){
      console.log(form.value,this.user)
    }
  }
}
