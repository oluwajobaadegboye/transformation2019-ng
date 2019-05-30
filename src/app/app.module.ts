import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

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
import { MatCardModule } from '@angular/material';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

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
    LoginComponent
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
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
