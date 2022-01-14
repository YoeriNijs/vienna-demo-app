import {VInjectable} from "vienna-ts";
import {User} from "../model/user";
import {Role} from "../model/role";

@VInjectable({ singleton: true})
export class AuthService {

    private _users: User[] = [{
        firstName: 'Ad',
        lastName: 'Min',
        email: 'admin@admin.nl',
        password: 'admin',
        role: Role.ADMIN
    }];
    private _activeUser: User;

    isLoggedIn(): boolean {
        return !!this._activeUser;
    }

    register(user: User): boolean {
        const alreadyExistingUser = this._users.find(u => u.email === user.email);
        if (alreadyExistingUser) {
            return false;
        } else {
            this._users.push(user);
            return true;
        }
    }

    login(email: string, password: string): boolean {
        const user = this._users.find(u => u.email === email);
        if (user && user.password === password) {
            this._activeUser = user;
            return true;
        } else {
            this.logoff();
            return false;
        }
    }

    logoff(): void {
        this._activeUser = undefined;
    }

    getUser(): User | undefined {
        return this._activeUser;
    }
}