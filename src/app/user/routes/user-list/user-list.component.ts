import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  private ngDestroyed = new Subject<any>();
  private userService: UserService;
  
  users: User[];

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.userService.getUsers()
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
