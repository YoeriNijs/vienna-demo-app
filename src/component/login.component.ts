import {VComponent, VRouteRedirect} from "vienna-ts";
import {AuthService} from "../service/auth.service";

@VComponent({
    selector: 'login-component',
    styles: [`
        .wrapper {
            display: flex;
            justify-content: center;
        }
        
        form {
            width: 500px;
        }
    `],
    html: `
        <navbar-component></navbar-component>
        
        <div class="wrapper">
            <form class="m-3">
                <h1 class="title">Login</h1>
                <span>Demo user: admin@admin.nl (e-mail), admin (password)</span>
                <v-check if="{{ invalidCredentials }}">
                    <true>
                        <div class="notification is-danger my-2">Invalid credentials!</div>
                    </true>
                </v-check>
                <input @bind="emailInput" type="text" class="input" placeholder="Email" />
                <input @bind="passwordInput" type="password" class="input mt-2" placeholder="Password" />
                <button @click="login" class="button mt-2">Login</button>
            </form>
        </div>
        
        <footer-component></footer-component>
    `
})
export class LoginComponent {
    emailInput: HTMLInputElement;
    passwordInput: HTMLInputElement;
    invalidCredentials = false;

    constructor(private authService: AuthService, private redirect: VRouteRedirect) {}

    login(): void {
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        if (this.authService.login(email, password)) {
            const user = this.authService.getUser();
            alert(`Hi there, ${user.firstName}!`);
            this.redirect.redirectToRoot();
        } else {
            this.invalidCredentials = true;
        }
    }
}
