import {VComponent, VRouteRedirect} from "vienna-ts";
import {BlogService} from "../service/blog.service";

@VComponent({
    selector: 'dashboard-component',
    styles: [],
    html: `
        <h2 class="subtitle">Publish new blog post</h2>
        <input @bind="blogTitle" class="input" type="text" placeholder="Blog title" minlength="1">
        <textarea @bind="blogBody" class="textarea mt-2" minlength="1"></textarea>
        <button @click="addBlogPost()" class="button is-primary mt-2" type="button">Publish!</button>
    `
})
export class DashboardComponent {

    blogTitle: HTMLInputElement;
    blogBody: HTMLTextAreaElement;

    constructor(private blogService: BlogService, private redirectHelper: VRouteRedirect) {}

    addBlogPost(): void {
        const title = this.blogTitle.value;
        const body = this.blogBody.value;
        if (!title || !body) {
            alert('Fill in valid title and body!');
            return;
        }

        this.blogService.add(title, body);

        alert('Post published!');

        this.redirectHelper.redirectTo('#/blog');
    }

}
