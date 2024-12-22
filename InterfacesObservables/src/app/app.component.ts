import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessagesService } from './services/messages.service';
import { Post } from './interfaces/post';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  providers:[MessagesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  posts:Post[]=[];
 constructor(private messageService:MessagesService){}
 ngOnInt(){
  this.messageService.getPosts().subscribe({
    next:(response:Post[])=>{
      this.posts=response;
    },
  error:(error:Error)=>{
    console.error(error);
  },
  });
 }

}
