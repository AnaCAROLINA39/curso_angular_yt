
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MomentFormComponent } from './moment/moment-form/moment-form.component';
import { FooterComponent } from "./moment/footer/footer.component";
import { HeaderComponent } from "./moment/header/header.component";
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagesComponent } from "./moment/messages/messages.component";
import { HomeComponent } from "./moment/pages/home/home.component";


@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule, HeaderComponent, FooterComponent, FontAwesomeModule, MessagesComponent, HomeComponent]
})
export class AppModule {

}
