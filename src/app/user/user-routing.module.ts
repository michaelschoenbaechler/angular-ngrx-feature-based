import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserListComponent } from './routes/user-list/user-list.component';
import { UserDetailComponent } from './routes/user-detail/user-detail.component';


const routes: Routes = [
    { path: 'list', component: UserListComponent },
    { path: 'detail/:userId', component: UserDetailComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
