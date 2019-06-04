import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { RegisterComponent } from './register/register.component';
import { CheckinComponent } from './checkin/checkin.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ResourcesComponent } from './resources/resources.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatExpansionModule, MatSelectModule, MatTableModule, MatTabsModule, MatPaginatorModule } from '@angular/material';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertComponent } from './directives/alert/alert.component';
import { AuthGuard } from './guards/AuthGuard ';
import { AlertService } from './services/AlertService';
import { AuthenticationService } from './services/AuthenticationService';
import { UserService } from './services/UserService';
import { JwtInterceptor } from './helper/JwtInterceptor';
import { ErrorInterceptor } from './helper/ErrorInterceptor ';
import { AuthenticatedHomeComponent } from './authenticated-home/authenticated-home.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';
import { AddAnnouncementComponent } from './announcement/add-announcement/add-announcement.component';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AnnouncementService } from './services/AnnouncementService';
import { AssignRoomDialogComponent } from './checkin/assign-room-dialog/assign-room-dialog.component';
import { ScheduleService } from './services/ScheduleService';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { QuestionAndAnswerComponent } from './question-and-answer/question-and-answer.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AutoLogoutService } from './services/AutoLogoutService';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    RegisterComponent,
    CheckinComponent,
    ScheduleComponent,
    SpeakersComponent,
    AnnouncementComponent,
    ResourcesComponent,
    LoginComponent,
    AlertComponent,
    AuthenticatedHomeComponent,
    VerifyUserComponent,
    AddAnnouncementComponent,
    AssignRoomDialogComponent,
    QuestionAndAnswerComponent,
    UserRegistrationComponent
  ],
  entryComponents: [
    AddAnnouncementComponent,
    AssignRoomDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    AnnouncementService,
    ScheduleService,
    AutoLogoutService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);