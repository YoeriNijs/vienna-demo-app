import {VComponent, VInit} from "vienna-ts";

@VComponent({
    selector: 'blog-component',
    styles: [],
    html: `
        <navbar-component></navbar-component>
        <blog-list-component></blog-list-component>
        <footer-component></footer-component>
    `
})
export class BlogComponent {}
