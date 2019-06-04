import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, CheckingResponse, Schedule, ScheduleList } from '../models/model';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ScheduleService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(`${environment.baseUrl}/api/schedules/all`);
    }

    getById(id: number) {
        return this.http.get<Schedule>(`${environment.baseUrl}/api/public/schedules` + id);
    }

    save(schedule: Schedule) {
        return this.http.post<Schedule>(`${environment.baseUrl}/api/schedules`, schedule);
    }

    update(schedule: Schedule) {
        return this.http.put(`${environment.baseUrl}/api/schedules/`, schedule);
    }

    delete(id: number) {
        return this.http.delete(`${environment.baseUrl}/api/schedules/` + id);
    }
}