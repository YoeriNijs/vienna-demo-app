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
import {BlogComponent} from "./component/blog.component";
import {BlogpostComponent} from "./component/blogpost.component";
import {BlogListComponent} from "./component/blog-list.component";

@VApplication({
    declarations: [
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        LogoffComponent,
        RegisterComponent,
        NotFoundComponent,
        DashboardComponent,
        BlogComponent,
        BlogpostComponent,
        BlogListComponent
    ],
    routes: [
        { path: '/', component: HomeComponent },
        { path: '/login', component: LoginComponent, guards: [NotAuthorizedGuard] },
        { path: '/register', component: RegisterComponent, guards: [NotAuthorizedGuard] },
        { path: '/logoff', component: LogoffComponent, guards: [AuthorizedGuard] },
        { path: '/not-found', component: NotFoundComponent },
        {
            path: '/blog',
            component: BlogComponent,
            children: [
                { path: '/:id', component: BlogpostComponent }
            ]
        }
    ],
    routeNotFoundStrategy: { path: '/not-found' },
    globalStyles: [
        {
            href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css',
            integrity: "sha384-IJLmUY0f1ePPX6uSCJ9Bxik64/meJmjSYD7dHaJqTXXEBE4y+Oe9P2KBZa/z7p0Q",
            crossOrigin: "anonymous"
        },
        { href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap' },
        { style: `
            :host {
                font-family: 'Lato', sans-serif;  
            }
             
            footer {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
            }
            
            .dark-mode {
                background-color: #000;
                color: #fff;
            }
            
            `
        }
    ],
    darkModeClassOverride: 'dark-mode',
    plugins: {
        logger: {
            process: logs => {
                // Your logging implementation (e.g. send logs to external logging provider, such as Sentry).
                // For demo purposes, we just log everything for now.
                console.log(logs);
            }
        }
    }
})
export class Application {}

// Initialize app
new Application();
