import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from './user/models/user.model';
import { UserService } from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'angular-ngrx-feature-based';

  private ngDestroyed = new Subject<any>();

  constructor(userService: UserService) {
    userService.getUsers()
    .pipe(takeUntil(this.ngDestroyed))
    .subscribe((users: User[]) => {
      console.log(users);
    });
  }

  ngOnDestroy(): void {
    this.ngDestroyed.next();
    this.ngDestroyed.complete();
  }
}
