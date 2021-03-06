import {VActivatedRoute, VComponent, VInit, VWeb} from "vienna-ts";
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
                            <span>Written by: </span>
                            <span class="is-italic">{{ post.author }}</span>
                        </p>
                        <p>
                            <span>{{ post.body }}</span>
                        </p>
                    </div>
                </true>
                <false>
                    <span>Cannot find blog post with id '{{ postId }}'</span>
                </false>
            </v-check>
        </div>
        
        <footer-component></footer-component>
    `
})
export class BlogpostComponent implements VInit {
    post: BlogPost;
    postId = '';

    constructor(private blogsService: BlogService,
                private activatedRoute: VActivatedRoute,
                private web: VWeb) {}

    vInit(): void {
        this.activatedRoute.params((params) => {
            const id = params.find(p => p.id === 'id').value;
            this.postId = id;
            this.post = this.blogsService.getBlogById(id);
            this.web.overrideTags({ title: this.post.title })
        });
    }

    hasBlogPost(): boolean {
        return !!this.post;
    }
}
