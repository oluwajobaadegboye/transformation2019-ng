import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, CheckingResponse } from '../models/model';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.baseUrl}/api/registrations`);
    }

    getById(id: number) {
        return this.http.get<User>(`${environment.baseUrl}/api/registrations/` + id);
    }

    searchByName(name: string) {
        return this.http.get<User[]>(`${environment.baseUrl}/api/registrations/search?name=` + name);
    }

    register(user: User) {
        return this.http.post(`${environment.baseUrl}/api/public/registrations`, user);
    }

    createUser(user: any) {
        return this.http.post(`${environment.baseUrl}/api/users/signup`, user);
    }

    checkIn(id: number) {
        console.log(' checking ID ',id)
        const url = `${environment.baseUrl}/api/registrations/checkin/`+ id;
        console.log('URL ',url)
        return this.http.post<CheckingResponse>(url,{});
    }

    assignRoom(id: number, roomNumber: string) {
        return this.http.post(`${environment.baseUrl}/api/registrations/add_room_number`, { registrationId: id, roomNumber: roomNumber });
    }

    update(user: User) {
        return this.http.put(`${environment.baseUrl}/api/registrations/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.baseUrl}/api/registrations/` + id);
    }
}