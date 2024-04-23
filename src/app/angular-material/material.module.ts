import { CommonModule } from '@angular/common';

import { LOCALE_ID, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({

  exports:[
    
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[
   
    {provide: LOCALE_ID, useValue: 'pt-BR' },

  ]
})
export class MaterialModule { }