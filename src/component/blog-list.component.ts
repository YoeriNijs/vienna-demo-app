import {VComponent, VInit} from "vienna-ts";
import {BlogService} from "../service/blog.service";
import {BlogPost} from "../model/blogpost";

@VComponent({
    selector: 'blog-list-component',
    styles: [],
    html: `
        <h2 class="subtitle">Latest blog articles</h2>
        <ul>
            <v-repeat let="{{ blog }}" for="{{ blogs }}">
                <li><a href="#/blog/{{ blog.id }}">{{ blog.title }}</a></li>
            </v-repeat>
        </ul>
    `
})
export class BlogListComponent implements VInit {
    blogs: BlogPost[] = [];

    constructor(private blogService: BlogService) {}

    vInit(): void {
        this.blogs = this.blogService.getAll();
    }
}
