import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './routes/todo-list/todo-list.component';


const routes: Routes = [
    { path: 'list', component: TodoListComponent },

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
export class TodoRoutingModule {}
