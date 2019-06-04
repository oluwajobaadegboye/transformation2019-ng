import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Announcement } from '../models/model';

@Injectable()
export class AnnouncementService {
    constructor(private http: HttpClient) { }

    makeAnnouncent(announcement: any) {
        console.log('Announcement ', announcement);
        return this.http.post<Announcement>(`${environment.baseUrl}/api/announcements`, announcement);
    }

    getAllAnnouncement() {
        return this.http.get<Announcement[]>(`${environment.baseUrl}/api/public/announcements`);
    }

}