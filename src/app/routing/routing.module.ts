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
import { AuthGuard } from '../guards/AuthGuard ';
import { AuthenticatedHomeComponent } from '../authenticated-home/authenticated-home.component';
import { VerifyUserComponent } from '../verify-user/verify-user.component';
import { QuestionAndAnswerComponent } from '../question-and-answer/question-and-answer.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { AdminComponent } from '../admin/admin.component';

const routes: Routes = [
  { path: 'ui/home', component: HomeComponent },
  { path: '', redirectTo: '/ui/home', pathMatch: 'full' },
  { path: 'ui/register', component: RegisterComponent },
  { path: 'ui/checkin', component: CheckinComponent, canActivate: [AuthGuard] },
  { path: 'ui/schedule', component: ScheduleComponent },
  { path: 'ui/speakers', component: SpeakersComponent },
  { path: 'ui/announcement', component: AnnouncementComponent },
  { path: 'ui/resources', component: ResourcesComponent },
  { path: 'ui/login', component: LoginComponent },
  { path: 'ui/questionandaswer', component: QuestionAndAnswerComponent },
  { path: 'ui/auth/home', component: AuthenticatedHomeComponent, canActivate: [AuthGuard] },
  { path: 'ui/verify', component: VerifyUserComponent, canActivate: [AuthGuard] },
  { path: 'ui/user', component: UserRegistrationComponent, canActivate: [AuthGuard] },
  { path: 'ui/admin', component: AdminComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
