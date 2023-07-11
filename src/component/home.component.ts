import {VComponent, VInit, VLogger} from "vienna-ts";
import {AuthService} from "../service/auth.service";

@VComponent({
    selector: 'home-component',
    styles: [`
        .wrapper {
            padding: 10px;
        }
    `],
    html: `
        <navbar-component></navbar-component>
        
        <div class="wrapper">
            <v-check if="{{ isLoggedIn }}">
                <true>
                    <blog-list-component></blog-list-component>
                </true>
                <false>
                    <blog-list-component></blog-list-component>
                    <div class="mt-4 is-italic">Not logged in. <a href="#/login">Log in first</a>.</div>
                </false>
            </v-check>
        </div>
        
        <footer-component></footer-component>
    `
})
export class HomeComponent implements VInit {

    isLoggedIn = false;

    constructor(private _authService: AuthService, private _logger: VLogger) {}

    vInit(): void {
        this.isLoggedIn = this._authService.isLoggedIn();
        this._logger.debug(`User is logged in: ${this.isLoggedIn}`);
    }
}
