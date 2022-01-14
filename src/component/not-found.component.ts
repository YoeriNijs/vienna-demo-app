import {VComponent} from "vienna-ts";

@VComponent({
    selector: 'not-found-component',
    styles: [],
    html: `
        <navbar-component></navbar-component>
        <h2 class="subtitle">Sad panda. This page does not exist.</h2>
        <footer-component></footer-component>
    `
})
export class NotFoundComponent {
}