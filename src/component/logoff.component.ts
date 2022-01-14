import {VComponent, VInit, VRouteRedirect} from "vienna-ts";
import {AuthService} from "../service/auth.service";

@VComponent({
    selector: 'logoff-component',
    styles: [],
    html: 'Logging you off...'
})
export class LogoffComponent implements VInit {

    constructor(private authService: AuthService, private redirectHelper: VRouteRedirect) {}

    vInit(): void {
        this.authService.logoff();
        this.redirectHelper.redirectToRoot();
    }
}