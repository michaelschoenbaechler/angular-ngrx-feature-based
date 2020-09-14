import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './routes/user-list/user-list.component';
import { UserDetailComponent } from './routes/user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
