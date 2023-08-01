import {VRoute} from "vienna-ts";
import {HomeComponent} from "./component/home.component";
import {LoginComponent} from "./component/login.component";
import {NotAuthorizedGuard} from "./guards/not-authorized.guard";
import {RegisterComponent} from "./component/register.component";
import {DashboardComponent} from "./component/dashboard.component";
import {AuthorizedGuard} from "./guards/authorized.guard";
import {LogoffComponent} from "./component/logoff.component";
import {NotFoundComponent} from "./component/not-found.component";
import {BlogComponent} from "./component/blog.component";
import {BlogpostComponent} from "./component/blogpost.component";

export const ROUTES: VRoute[] = [
    { path: '/', component: HomeComponent },
    {
        path: '/login',
        component: LoginComponent,
        guards: [NotAuthorizedGuard],
        docTags: { title: 'Login'}
    },
    {
        path: '/register',
        component: RegisterComponent,
        guards: [NotAuthorizedGuard],
        docTags: { title: 'Register' }
    },
    {
        path: '/dashboard',
        component: DashboardComponent,
        guards: [AuthorizedGuard],
        docTags: { title: 'Dashboard'}
    },
    { path: '/logoff', component: LogoffComponent, guards: [AuthorizedGuard] },
    { path: '/not-found', component: NotFoundComponent },
    {
        path: '/blog',
        component: BlogComponent,
        children: [
            { path: '/:id', component: BlogpostComponent }
        ]
    }
]