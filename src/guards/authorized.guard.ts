import {VInjectable, VRouteGuard} from "vienna-ts";
import {AuthService} from "../service/auth.service";

@VInjectable()
export class AuthorizedGuard implements VRouteGuard {
    constructor(private authService: AuthService) {}

    guard(): boolean {
        return this.authService.isLoggedIn();
    }
}