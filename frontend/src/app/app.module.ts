import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRollNumberComponent } from './student-roll-number/student-roll-number.component';
import { StudentServiceService } from './student-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FGLformComponent } from './fglform/fglform.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentRollNumberComponent,
    HomeComponent,
    HeaderComponent,
    FGLformComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [StudentServiceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
