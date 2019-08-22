import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'salt-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  constructor(private builder: FormBuilder, private service: BookDataService) {}

  ngOnInit() {
    this.form = this.builder.group({
      title: ['', [Validators.required]],
      subtitle: ['', []],
      isbn: ['', []],
      abstract: ['', [Validators.required]],
      numPages: [0, []],
      author: ['', []],
      publisher: this.builder.group({
        name: ['', []],
        url: ['', []]
      })
    });
  }

  save() {
    this.service.createBook(this.form.value).subscribe();
  }
}
