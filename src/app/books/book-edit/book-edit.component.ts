import { Component, OnInit } from '@angular/core';
import { IBook } from '../ibook';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';

// tslint:disable:no-string-literal
@Component({
  selector: 'salt-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book: IBook;
  saved = false;
  constructor(
    private route: ActivatedRoute,
    private service: BookDataService
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.service.getBook(params['isbn']).subscribe(b => (this.book = b));
  }
  save() {
    this.service.saveBook(this.book).subscribe(() => (this.saved = true));
  }
}
