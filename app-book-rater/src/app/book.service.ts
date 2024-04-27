import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Book {
  id: number,
  title: string,
  description: string,
  author: string,
  rating: number[]
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private http: HttpClient = inject(HttpClient);
  private booksUrl = 'assets/book.json';

  constructor() { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl); 
  }

  getBookById(id: number): Observable<Book | undefined> {
    return this.getBooks().pipe(
      map(books => books.find(book => book.id === id))
    );
  }
}
