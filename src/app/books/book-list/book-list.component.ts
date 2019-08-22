import { Component, OnInit, OnDestroy } from '@angular/core';
import { IBook } from '../ibook';
import { BookDataService } from '../book-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'salt-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;

  constructor(private service: BookDataService) {}

  ngOnInit() {
    this.books$ = this.service.getBooks();
  }
}
