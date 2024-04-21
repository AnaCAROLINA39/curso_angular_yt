import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from "./moments/header/header.component";
import { FooterComponent } from "./moments/footer/footer.component";
import { MomentFormComponent } from './moments/moment-form/moment-form.component';
import { AboutComponent } from './moments/pages/about/about.component';
import { NewMomentComponent } from './moments/pages/new-moment/new-moment.component';

@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule, HeaderComponent, FooterComponent,AboutComponent,NewMomentComponent,MomentFormComponent]
})
export class AppModule {}
