import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("edit", this.user.firstName)
  }

}
