import { Component, OnInit, OnDestroy } from '@angular/core';
import { IBook } from '../ibook';
import { BookDataService } from '../book-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'salt-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: IBook[];
  sub: Subscription;
  constructor(private service: BookDataService) {}

  ngOnInit() {
    this.sub = this.service.getBooks().subscribe(
      b => {
        console.log('Moin', b);
        this.books = b;
      },
      err => console.error(err),
      () => console.warn('DONE')
    );
  }
  ngOnDestroy(): void {
    console.log('*****');
    this.sub.unsubscribe();
  }
}
