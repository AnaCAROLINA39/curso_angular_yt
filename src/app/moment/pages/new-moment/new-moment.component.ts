import { MessagesService } from 'src/app/services/messages.service';
import { MommentService } from 'src/app/services/momment.service';
import { Component } from '@angular/core';
import { MomentFormComponent } from "../../moment-form/moment-form.component";
import { Moment } from 'src/app/Moment';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-moment',
    standalone: true,
    templateUrl: './new-moment.component.html',
    styleUrl: './new-moment.component.css',
    imports: [MomentFormComponent]
})
export class NewMomentComponent {
  btnText = 'Compartilhar!';

constructor (
   
  private mommentService: MommentService,
   private MessagesService: MessagesService,
   private router :Router,
  )
   
   {}
  async createHandler(moment:Moment){
 const formData = new FormData()
 formData.append('title',moment.title);
 formData.append('description',moment.description);

if (moment.image){
 formData.append('image', moment.image);
}

//todo


//enviar
await this.mommentService.createMoment(formData).subscribe();

//exibir
this.MessagesService.add("Momento adicionado com sucesso!");
//redirect

this.router.navigate(['/']);
  }
}
