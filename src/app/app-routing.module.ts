import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/routes/home/home.component';

const routes: Routes = [
  { path: 'user', loadChildren: () => import('src/app/user/user.module').then((m => m.UserModule)) },
  { path: 'todo', loadChildren: () => import('src/app/todo/todo.module').then((m => m.TodoModule)) },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
