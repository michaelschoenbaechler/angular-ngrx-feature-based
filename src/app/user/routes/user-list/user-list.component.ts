import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { takeUntil } from 'rxjs/operators';

import * as fromApp from '../../../app.state';
import * as fromUser from '../../ngrx/user.reducer';
import * as UserAction from '../../ngrx/user.action';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  private ngDestroyed = new Subject<any>();

  users: User[] = [];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(UserAction.fetchUser());
    this.store.select(fromUser.selectArray)
    .pipe(takeUntil(this.ngDestroyed))
    .subscribe((users: User[]) => {
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    this.ngDestroyed.next();
    this.ngDestroyed.complete();
  }
}
