import {VComponent, VRouteRedirect} from "vienna-ts";
import {AuthService} from "../service/auth.service";
import {Role} from "../model/role";

@VComponent({
    selector: 'register-component',
    styles: [`
        .wrapper {
            display: flex;
            justify-content: center;
        }
        
        form, .user-created {
            width: 500px;
        }
    `],
    html: `
        <navbar-component></navbar-component>
        
        <div class="wrapper">
            <v-check if="{{ userCreated }}">
                <true>
                    <div class="user-created notification is-success">User created successfully</div>
                </true>
                <false>
                    <form>
                        <h1 class="title">Register</h1>
                        <v-check if="{{ invalidFirstName }}">
                            <true>
                                <div class="notification is-danger my-2">Invalid first name!</div>
                            </true>
                            <false><div class="mt-2"></div></false>
                        </v-check>
                        <input @bind="firstNameInput" type="text" class="input" placeholder="First name" />
                        
                        <v-check if="{{ invalidLastName }}">
                            <true>
                                <div class="notification is-danger my-2">Invalid last name!</div>
                            </true>
                            <false><div class="mt-2"></div></false>
                        </v-check>
                        <input @bind="lastNameInput" type="text" class="input" placeholder="Last name" />
                        
                        <v-check if="{{ invalidEmail }}">
                            <true>
                                <div class="notification is-danger my-2">Invalid e-mail!</div>
                            </true>
                            <false><div class="mt-2"></div></false>
                        </v-check>
                        <input @bind="emailInput" type="email" class="input" placeholder="E-mail" />
                        
                        <v-check if="{{ invalidPassword }}">
                            <true>
                                <div class="notification is-danger my-2">Invalid password (should be at least 8 chars)!</div>
                            </true>
                            <false><div class="mt-2"></div></false>
                        </v-check>
                        <input @bind="passwordInput" type="password" class="input" placeholder="Password" />
                        
                        <button @click="register" class="button mt-2">Register</button>
                    </form>
                </false>
            </v-check>
        </div>
        
        <footer-component></footer-component>
    `
})
export class RegisterComponent {

    firstNameInput: HTMLInputElement;
    lastNameInput: HTMLInputElement;
    emailInput: HTMLInputElement;
    passwordInput: HTMLInputElement;

    invalidEmail = false;
    invalidFirstName = false;
    invalidLastName = false;
    invalidPassword = false;

    userCreated = false;

    constructor(private authService: AuthService, private redirectHelper: VRouteRedirect) {}

    register(): void {
        const firstName = this.firstNameInput.value;
        this.invalidFirstName = !firstName || firstName.length < 1;

        const lastName = this.lastNameInput.value;
        this.invalidLastName = !lastName || lastName.length < 1;

        const email = this.emailInput.value;
        this.invalidEmail = !email || email.length < 1;

        const password = this.passwordInput.value;
        this.invalidPassword = !password || password.length < 8;

        if (this.invalidFirstName || this.invalidLastName || this.invalidEmail || this.invalidPassword) {
            return;
        }

        const isRegistered = this.authService.register({ firstName, lastName, email, password, role: Role.MEMBER });
        if (isRegistered) {
            this.userCreated = true;
            setTimeout(() => this.redirectHelper.redirectToRoot(), 3000);
        } else {
            alert('Cannot register. Probably there is already an user with this e-mail address registered.')
        }
    }
}