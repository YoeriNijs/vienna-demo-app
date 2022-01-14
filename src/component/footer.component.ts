import {VComponent} from "vienna-ts";

@VComponent({
    selector: 'footer-component',
    styles: [],
    html: `
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              <strong>Vienna</strong> JavaScript framework by <a href="https://github.com/YoeriNijs/vienna">Yoeri Nijs</a>. The source code is licensed as
              <a href="https://github.com/YoeriNijs/vienna/blob/main/LICENSE">GPLv3</a>.
            </p>
          </div>
        </footer>
    `,
})
export class FooterComponent {}
