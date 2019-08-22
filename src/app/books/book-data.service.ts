import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from './ibook';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  url = 'http://localhost:4730/books';
  // url = 'https://bookmonkey.azurewebsites.net/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }

  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(`${this.url}/${isbn}`);
  }

  saveBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.url}/${book.isbn}`, book);
  }

  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(`${this.url}`, book);
  }
}
