import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MomentRoutingModule } from './moment-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NewMomentComponent } from './pages/new-moment/new-moment.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../angular-material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MomentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   MaterialModule,

  ]
})
export class MomentModule { }
