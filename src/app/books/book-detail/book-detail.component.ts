import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { IBook } from '../ibook';
import { Observable } from 'rxjs';

@Component({
  selector: 'salt-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book$: Observable<IBook>;
  constructor(
    private route: ActivatedRoute,
    private service: BookDataService
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    // tslint:disable-next-line:no-string-literal
    this.book$ = this.service.getBook(params['isbn']);
  }
}
