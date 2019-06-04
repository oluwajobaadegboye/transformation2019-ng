import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.baseUrl}/api/login`, { username: username, password: password })
            .pipe(map(user => {
                if (user && user.accessToken) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    getCurrentUser(){
        const logginUser = localStorage.getItem('currentUser');

        return logginUser ?  JSON.parse(logginUser) : '';
    }
}