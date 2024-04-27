import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '../book.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.css'
})
export class BookViewComponent implements OnInit {

  books!: Book[];
  currentBook: Book | null = null;
  avgRatingCurrentBook: number | null = null;
  isRated: boolean = false;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data
        this.currentBook = this.books[0];
        console.log(this.books);
      }
    });
    
  }


  rate(idx: number) {
    this.currentBook?.rating.push(idx);
    console.log(this.currentBook?.rating);
    
    if (this.currentBook) {
      this.avgRatingCurrentBook = this.currentBook.rating.reduce((acc, currValue) => {
        return acc + currValue;
      }, 0);
      this.avgRatingCurrentBook = this.avgRatingCurrentBook / this.currentBook.rating.length;
      this.isRated = true;
    }

    console.log(this.currentBook);
  }

  showPrevBook() {
    if (this.currentBook && this.currentBook?.id !== 1) {
      console.log(this.currentBook.id);
      this.currentBook = this.books[this.currentBook.id - 2];
    }
  }

  showNextBook() {
    if (this.currentBook && this.currentBook?.id !== 10) {
      console.log(this.currentBook.id);
      this.currentBook = this.books[this.currentBook.id];
    }
  }
}
