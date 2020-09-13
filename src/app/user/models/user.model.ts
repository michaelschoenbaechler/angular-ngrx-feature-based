export const USER_COLLECTION = 'User';

export class User {
    id: string;
    firstName: string;
    lastName: string;

    static fromJson(object: any): User {
        const user = new User();
        user.id = object.id ? object.id : null;
        user.firstName = object.firstName ? object.firstName : null;
        user.lastName = object.lastName ? object.lastName : null;
        return user;
    }
}
