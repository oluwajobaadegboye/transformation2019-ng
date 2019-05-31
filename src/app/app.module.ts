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
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatExpansionModule } from '@angular/material';
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
    VerifyUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatExpansionModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
