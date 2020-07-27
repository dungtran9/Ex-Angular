import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBook} from "./ibook";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  API_url = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}
  getAll():Observable<IBook[]>{
    return this.http.get<IBook[]>(this.API_url);
  }
  add(book:Partial<IBook>):Observable<IBook>{
    return  this.http.post<IBook>(this.API_url,book)
  }
  getBookById(id:number):Observable<IBook>{
    return this.http.get<IBook>(this.API_url+'/'+id)
  }
  update(book:IBook,id:number):Observable<IBook>{
    return this.http.put<IBook>(this.API_url+'/'+id,book);
  }
  delete(id:number):Observable<IBook>{
    return this.http.delete<IBook>(this.API_url+'/'+id)
  }
}
