import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'salt-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input() title: string;
  @Output() ping = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  sendPing(e) {
    this.ping.emit(e);
  }
}
