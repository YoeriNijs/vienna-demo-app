import {VActivatedRoute, VComponent, VInit} from "vienna-ts";
import {BlogService} from "../service/blog.service";
import {BlogPost} from "../model/blogpost";

@VComponent({
    selector: 'blog-post-component',
    styles: [],
    html: `
        <navbar-component></navbar-component>
        
        <div class="container">
            <v-check if="hasBlogPost()">
                <true>
                    <div class="content">
                        <h2 class="subtitle">{{ post.title }}</h2>
                        <p>
                            <span>{{ post.body }}</span>
                        </p>
                    </div>
                </true>
                <false>
                    <span>Cannot find blog post with title '{{ postId }}'</span>
                </false>
            </v-check>
        </div>
        
        <footer-component></footer-component>
    `
})
export class BlogpostComponent implements VInit {
    post: BlogPost;
    postId = '';

    constructor(private blogsService: BlogService, private activatedRoute: VActivatedRoute) {}

    vInit(): void {
        this.activatedRoute.params((params) => {
            const id = params.find(p => p.id === 'id').value;
            this.postId = id;
            this.post = this.blogsService.getBlogById(id);
        });
    }

    hasBlogPost(): boolean {
        return !!this.post;
    }
}
