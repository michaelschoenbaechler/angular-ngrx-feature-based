import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User, USER_COLLECTION } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private firestore: AngularFirestore;

    constructor(firestore: AngularFirestore) {
        this.firestore = firestore;
    }

    getUsers(): Observable<User[]> {
        return this.firestore.collection(USER_COLLECTION)
        .snapshotChanges()
        .pipe(
            map(res => res.map(u => User.fromJson(u.payload.doc.data())))
        );
    }
}
