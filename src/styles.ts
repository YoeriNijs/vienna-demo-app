import {VGlobalStyles} from "vienna-ts";

export const GLOBAL_STYLES: VGlobalStyles = [
    {
        href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css',
        integrity: "sha384-IJLmUY0f1ePPX6uSCJ9Bxik64/meJmjSYD7dHaJqTXXEBE4y+Oe9P2KBZa/z7p0Q",
        crossOrigin: "anonymous"
    },
    { href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap' },
    { style: `
            :host {
                font-family: 'Lato', sans-serif;  
            }
             
            footer {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
            }
            
            .dark-mode {
                background-color: #000;
                color: #fff;
            }
            
            `
    }
];