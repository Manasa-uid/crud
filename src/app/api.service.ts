import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Posts } from './post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
public url:string ="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }

     postInfo(id:any):Observable<any[]>{
       return this.http.post<any[]>(this.url,id);
     }

     deleteInfo(userId):Observable<any[]>{
       return this.http.delete<any[]>(this.url+"/"+userId)
     }
     

}
