export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    accessToken: string;
    phoneNumber: string;
    email: string;
    state: string;
    gender:string;
    describes: string;
    diet: string;
    emergencyContact: string;
    deeperLifeMember: string;
    role:string;
}

export class LoggedUser {
    username: string;
    name: string;
    email: string;
    roles: string;
    accessToken: string;
}

export class CheckingResponse {
    checkIn: Boolean;
    message: string;
}

export class Announcement {
    id: number;
    subject: string;
    message: string;
    date: Date;
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

export class Schedule {
    day: string;
    id: number;
    preacher: string;
    time: string;
    topic: string;
    venue: string;
}

export class ScheduleList {
    thursdayList: Schedule[];
    fridayList: Schedule[];
    SaturdayList: Schedule[];
    SundayList: Schedule[];
}