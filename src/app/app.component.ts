import { Component } from '@angular/core';
import { Posts } from './post';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userId: number;
  id: number;
  title: string;
  body: string;
   postInformation:any[] = [];
  constructor(private api: ApiService){}
  
  createData(){
    let postData:Posts={
      userId:this.userId,
      id:this.id,
      title:this.title,
      body:this.body
    }
    this.api.postInfo(postData).subscribe((data)=>{
      console.log(data);
      this.postInformation.push(data);
    })
  }
           delete(posts:Posts){
               this.api.deleteInfo(posts.userId).subscribe((data)=>{
                 this.postInformation = this.postInformation.filter(u=>u!==posts)
               })

           }
      
}
