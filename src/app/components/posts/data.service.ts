import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  getAllComments(): Observable<any>{
    const urlApi = 'https://jsonplaceholder.typicode.com/comments';
    return this.http.get(urlApi);
  }

  getPostsByUser(){
    const urlApi = 'https://jsonplaceholder.typicode.com/posts?userId=1';
    return this.http.get(urlApi);
  }

}
