import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input()
  user: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.router.navigate(['user', 'detail', this.user.id]);
  }

}
