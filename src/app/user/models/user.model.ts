export const USER_COLLECTION = 'User';

export class User {
    firstName: string;
    lastName: string;

    static fromJson(object: any): User {
        const user = new User();
        user.firstName = object.firstName ? object.firstName : null;
        user.lastName = object.lastName ? object.lastName : null;
        return user;
    }
}
