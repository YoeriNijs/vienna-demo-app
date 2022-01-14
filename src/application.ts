import {VApplication} from "vienna-ts";
import {HomeComponent} from "./component/home.component";
import {NavbarComponent} from "./component/navbar.component";
import {FooterComponent} from "./component/footer.component";
import {LoginComponent} from "./component/login.component";
import {AuthorizedGuard} from "./guards/authorized.guard";
import {NotAuthorizedGuard} from "./guards/not-authorized.guard";
import {NotFoundComponent} from "./component/not-found.component";
import {RegisterComponent} from "./component/register.component";
import {DashboardComponent} from "./component/dashboard.component";
import {LogoffComponent} from "./component/logoff.component";

@VApplication({
    declarations: [
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        LogoffComponent,
        RegisterComponent,
        NotFoundComponent,
        DashboardComponent
    ],
    routes: [
        { path: '/', component: HomeComponent },
        { path: '/login', component: LoginComponent, guards: [NotAuthorizedGuard] },
        { path: '/register', component: RegisterComponent, guards: [NotAuthorizedGuard] },
        { path: '/logoff', component: LogoffComponent, guards: [AuthorizedGuard] },
        { path: '/not-found', component: NotFoundComponent }
    ],
    routeNotFoundStrategy: { path: '/not-found' },
    globalStyles: [
        { href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css' },
        { style: `           
            footer {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
            }`
        }
    ]
})
export class Application {}

// Initialize app
new Application();