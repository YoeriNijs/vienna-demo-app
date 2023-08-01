import {VApplication} from "vienna-ts";
import {HomeComponent} from "./component/home.component";
import {NavbarComponent} from "./component/navbar.component";
import {FooterComponent} from "./component/footer.component";
import {LoginComponent} from "./component/login.component";
import {NotFoundComponent} from "./component/not-found.component";
import {RegisterComponent} from "./component/register.component";
import {DashboardComponent} from "./component/dashboard.component";
import {LogoffComponent} from "./component/logoff.component";
import {BlogComponent} from "./component/blog.component";
import {BlogpostComponent} from "./component/blogpost.component";
import {BlogListComponent} from "./component/blog-list.component";
import {GLOBAL_STYLES} from "./styles";
import {ROUTES} from "./routes";

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
    routes: ROUTES,
    routeNotFoundStrategy: { path: '/not-found' },
    globalStyles: GLOBAL_STYLES,
    darkMode: {
        darkModeClassOverride: 'dark-mode'
    },
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
