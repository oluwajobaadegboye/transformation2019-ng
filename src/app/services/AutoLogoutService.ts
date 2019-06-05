import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { AuthenticationService } from './AuthenticationService';

const MINUTES_UNITL_AUTO_LOGOUT = 30; // in Minutes
const CHECK_INTERVALL = 1000 // in ms
const STORE_KEY = 'lastAction';

@Injectable()
export class AutoLogoutService {

    constructor(
        private auth: AuthenticationService,
        private router: Router,
        private ngZone: NgZone
    ) {
        this.check();
        this.initListener();
        this.initInterval();
    }

    get lastAction() {
        return parseInt(localStorage.getItem(STORE_KEY));
    }
    set lastAction(value) {
        localStorage.setItem(STORE_KEY, "" + value);
    }

    initListener() {
        this.ngZone.runOutsideAngular(() => {
            document.body.addEventListener('click', () => this.reset());
        });
    }

    initInterval() {
        this.ngZone.runOutsideAngular(() => {
            setInterval(() => {
                this.check();
            }, CHECK_INTERVALL);
        })
    }

    reset() {
        this.lastAction = Date.now();
    }

    check() {
        const now = Date.now();
        const timeleft = this.lastAction + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
        const diff = timeleft - now;
        const isTimeout = diff < 0;

        this.ngZone.run(() => {
            if (isTimeout && this.auth.getCurrentUser()) {
                this.auth.logout();
                window.location.href = '/ui/login';
                // this.router.navigate(['/ui/login']);
            }
        });
    }
}