import {VActivatedRoute, VComponent, VDarkMode, VInit} from "vienna-ts";
import {AuthService} from "../service/auth.service";
import {User} from "../model/user";
import {Role} from "../model/role";

@VComponent({
    selector: 'navbar-component',
    styles: [`
        .intro {
            margin-right: 10px;
        }
    `],
    html: `
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <h1 class="title">Vienna demo</h1>
            </a>
          </div>
        
          <div id="navbar" class="navbar-menu">        
            <v-check if="{{ isLoggedIn }}">
                <true>
                    <div class="navbar-end">
                      <div class="navbar-item">
                        <div class="intro">Hi there, {{ currentUser.firstName }} (<a href="#/logoff">log off</a>)</div>
                        <div class="buttons">
                            <v-check if="{{ isDarkModeEnabled }}">
                                <true>
                                    <button @click="disableDarkMode" class="button is-light">
                                        Disable dark mode
                                    </button>
                                </true>
                                <false>
                                    <button @click="enableDarkMode" class="button is-light">
                                        Enable dark mode
                                    </button>
                                </false>
                            </v-check>
                        </div>
                      </div>
                    </div>
                </true>
                <false>
                    <div class="navbar-end">
                      <div class="navbar-item">
                        <div class="buttons">
                          <a href="#/register" class="button is-primary">
                            <strong>Sign up</strong>
                          </a>
                          <a href="#/login" class="button is-light">
                            Log in
                          </a>
                          <v-check if="{{ isDarkModeEnabled }}">
                            <true>
                                <button @click="disableDarkMode" class="button is-light">
                                    Disable dark mode
                                </button>
                            </true>
                            <false>
                                <button @click="enableDarkMode" class="button is-light">
                                    Enable dark mode
                                </button>
                            </false>
                          </v-check>
                        </div>
                      </div>
                    </div>
                </false> 
            </v-check>
          </div>
        </nav>
    `
})
export class NavbarComponent implements VInit {

    currentUser: User;
    currentRole: string;
    isLoggedIn = false;
    isDarkModeEnabled = false;

    constructor(private activatedRoute: VActivatedRoute,
                private authService: AuthService,
                private darkModeService: VDarkMode) {}

    vInit(): void {
        this.isLoggedIn = this.authService.isLoggedIn();
        this.currentUser = this.authService.getUser();
        this.currentRole = this.currentUser
            ? this.currentUser.role === Role.ADMIN ? 'admin' : 'member'
            : undefined;
        this.isDarkModeEnabled = this.darkModeService.isDarkModeEnabled();
    }

    enableDarkMode(): void {
        this.darkModeService.enableDarkMode();
    }

    disableDarkMode(): void {
        this.darkModeService.disableDarkMode();
    }
}
