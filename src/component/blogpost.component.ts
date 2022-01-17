import {VActivatedRoute, VComponent, VInit} from "vienna-ts";
import {BlogService} from "../service/blog.service";
import {BlogPost} from "../model/blogpost";

@VComponent({
    selector: 'blog-post-component',
    styles: [],
    html: `
        <navbar-component></navbar-component>
        
        <v-check if="hasBlogPost()">
            <true>
                <div class="content">
                    <h2>{{ post.title }}</h2>
                    <p>
                        <span>{{ post.body }}</span>
                    </p>
                </div>
            </true>
            <false>
                <span>Cannot find blog post</span>
            </false>
        </v-check>
        
        <footer-component></footer-component>
    `
})
export class BlogpostComponent implements VInit {
    post: BlogPost;

    constructor(private blogsService: BlogService, private activatedRoute: VActivatedRoute) {}

    vInit(): void {
        // this.activatedRoute.params((params) => {
        //     // debugger;
        //     // const id = params.find(p => p.id === 'id').value;
        //     this.post = this.blogsService.getBlogById('1');
        // });

        this.post = this.blogsService.getBlogById('1');
    }

    hasBlogPost(): boolean {
        return !!this.post;
    }
}
