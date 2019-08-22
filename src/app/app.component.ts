import { Component } from '@angular/core';

@Component({
  selector: 'salt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngsalt';

  recivePing(e: string) {
    console.log(e);
  }
}
