import {VComponent} from "vienna-ts";

interface MenuItem {
    label: string;
    link: string;
}

@VComponent({
    selector: 'dashboard-component',
    styles: [],
    html: `
        <v-repeat let="{{ item }}" for="{{ menuItems }}">
            <a href="{{ item.link }}">{{ item.label }}</a>
        </v-repeat>
    `
})
export class DashboardComponent {

    menuItems: MenuItem[] = [
        { label: 'Log off', link: '#/logoff' }
    ]

}