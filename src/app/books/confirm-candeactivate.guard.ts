import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookEditComponent } from './book-edit/book-edit.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmCandeactivateGuard
  implements CanDeactivate<BookEditComponent> {
  canDeactivate(
    component: BookEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    if (!component.saved) {
      return confirm('Are you sure?');
    }
    return true;
  }
}
