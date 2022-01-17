import {VComponent, VInit} from "vienna-ts";
import {BlogService} from "../service/blog.service";
import {BlogPost} from "../model/blogpost";

@VComponent({
    selector: 'blog-component',
    styles: [],
    html: `
        <navbar-component></navbar-component>
        
        <ul>
            <v-repeat let="{{ blog }}" for="{{ blogs }}">
                <li><a href="#/blog/{{ blog.id }}">{{ blog.title }}</a></li>
            </v-repeat>
        </ul>
        
        <footer-component></footer-component>
    `
})
export class BlogComponent implements VInit {
    blogs: BlogPost[] = [];

    constructor(private blogService: BlogService) {}

    vInit(): void {
        this.blogs = this.blogService.getAll();
    }
}
