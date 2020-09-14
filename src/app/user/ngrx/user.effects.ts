import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Subject } from 'rxjs';
import { map, mergeMap, takeUntil } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import * as UserAction from './user.action';

@Injectable({
    providedIn: 'root'
})
export class UserEffects {

    private initialize = new Subject<any>();

    constructor(private actions$: Actions, private userService: UserService) { }

    fetchUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserAction.fetchUser),
        map(() => this.initialize.next()),
        mergeMap(() => {
            return this.userService.getUsers()
            .pipe(
                takeUntil(this.initialize),
                map((users: User[]) => UserAction.setUser({ users }))
            )
        })
    ));

}