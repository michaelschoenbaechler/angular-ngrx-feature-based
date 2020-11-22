import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as fromApp from 'src/app/app.state';
import * as fromRouter from 'src/app/app-router.reducer';
import * as fromUser from 'src/app/user/ngrx/user.reducer';
import { User } from '../../models/user.model';
import * as UserAction from "../../ngrx/user.action";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  private ngDestroyed = new Subject<any>();
  public user: User = User.fromJson({});

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(UserAction.fetchUserList());
    this.store.select(fromRouter.selectUserId)
    .pipe(takeUntil(this.ngDestroyed))
    .subscribe((userId: string) => {
      console.log(userId);
      this.loadUser(userId);
    });
  }

  loadUser(userId: string): void {
    this.store.select(fromUser.selectById, { userId })
      .pipe(takeUntil(this.ngDestroyed))
      .subscribe((user: User) => {
        this.user = user ? user : User.fromJson({});
      });
  }

  ngOnDestroy(): void {
    this.ngDestroyed.next();
    this.ngDestroyed.complete();
  }

}
