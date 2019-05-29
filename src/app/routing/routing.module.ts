import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { CheckinComponent } from '../checkin/checkin.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { SpeakersComponent } from '../speakers/speakers.component';
import { AnnouncementComponent } from '../announcement/announcement.component';
import { ResourcesComponent } from '../resources/resources.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent},
  { path: 'checkin', component: CheckinComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'speakers', component: SpeakersComponent},
  { path: 'announcement', component: AnnouncementComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'login', component: LoginComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
