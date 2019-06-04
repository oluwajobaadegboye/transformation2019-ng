import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/AuthenticationService';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService : AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //localStorage.getItem('currentUser)'
        if (this.authService.getCurrentUser()) {
            return true;
        }

        this.router.navigate(['/ui/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}