import {VComponent, VRouteRedirect} from "vienna-ts";
import {BlogService} from "../service/blog.service";
import {AuthService} from "../service/auth.service";

@VComponent({
    selector: 'dashboard-component',
    styles: [],
    html: `
        <h2 class="subtitle">Publish new blog post</h2>
        <input @bind="blogTitle" class="input" type="text" placeholder="Blog title" minlength="1">
        <textarea @bind="blogBody" class="textarea mt-2" minlength="1"></textarea>
        <button @click="addBlogPost()" class="button is-primary mt-2 mr-2" type="button">Publish!</button>
        <button @click="cancel()" class="button is-secondary mt-2" type="button">Cancel</button>
    `
})
export class DashboardComponent {

    blogTitle: HTMLInputElement;
    blogBody: HTMLTextAreaElement;

    constructor(
        private blogService: BlogService,
        private redirectHelper: VRouteRedirect,
        private authService: AuthService) {}

    addBlogPost(): void {
        const title = this.blogTitle.value;
        const body = this.blogBody.value;
        if (!title || !body) {
            alert('Fill in valid title and body!');
            return;
        }

        const user = this.authService.getUser();
        const author = `${user.firstName} ${user.lastName}`;
        this.blogService.add(title, body, author);

        alert('Post published!');

        this.redirectHelper.redirectTo('#/blog');
    }

    cancel(): void {
        this.redirectHelper.redirectToRoot();
    }

}
