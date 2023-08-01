import {VComponent, VInit, VLogger} from "vienna-ts";
import {BlogService} from "../service/blog.service";
import {BlogPost} from "../model/blogpost";
import {AuthService} from "../service/auth.service";

@VComponent({
    selector: 'blog-list-component',
    styles: [`
        .button {
            margin-top: 20px;
        }
    `],
    html: `
        <h2 class="subtitle">Latest blog articles</h2>
        <ul>
            <v-repeat let="{{ blog }}" for="{{ blogs }}">
                <li><a href="#/blog/{{ blog.id }}">{{ blog.title }}</a></li>
            </v-repeat>
        </ul>
        
        <v-check if="{{ isLoggedIn }}">
            <true>
                <a href="#/dashboard">
                    <button class="button is-primary">Write new post</button>
                </a>
            </true>
        </v-check>
    `
})
export class BlogListComponent implements VInit {
    blogs: BlogPost[] = [];
    isLoggedIn = false;

    constructor(private blogService: BlogService,
                private _authService: AuthService,
                private _logger: VLogger) {}

    vInit(): void {
        this.blogs = this.blogService.getAll();
        this.isLoggedIn = this._authService.isLoggedIn();
        this._logger.debug(`User is logged in: ${this.isLoggedIn}`);
    }
}
