import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'salt-mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.scss']
})
export class MouseCursorComponent implements OnInit {
  x = 0;
  y = 0;
  constructor() {}
  mooooove(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
  }
  ngOnInit() {}
}
