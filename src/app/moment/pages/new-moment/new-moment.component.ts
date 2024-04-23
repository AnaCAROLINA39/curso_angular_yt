import { Component } from '@angular/core';
import { MomentFormComponent } from "../../moment-form/moment-form.component";
import { Moment } from 'src/app/Moment';
import { MommentService } from 'src/app/services/momment.service';
@Component({
    selector: 'app-new-moment',
    standalone: true,
    templateUrl: './new-moment.component.html',
    styleUrl: './new-moment.component.css',
    imports: [MomentFormComponent]
})
export class NewMomentComponent {
  btnText = 'Compartilhar!';


  async createHandler(moment:Moment){
 const formData = new FormData()
 formData.append('title',moment.title);
 formData.append('description',moment.description);

if (moment.image){
 formData.append('image', moment.image);
}

//todo

//enviar


//exibir

//redirect
  }
}
