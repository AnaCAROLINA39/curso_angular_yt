import { MessagesService } from './../../../services/messages.service';
import { Moment } from './../../../Moment';
import { MommentService } from 'src/app/services/momment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MomentFormComponent } from '../../moment-form/moment-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-moment',
  standalone: true,
  imports: [MomentFormComponent, CommonModule],
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.css'
})
export class EditMomentComponent implements OnInit {
    moment!:Moment;
    btnText: string = 'Editar';

   constructor(
    private MommentService: MommentService,
    private route: ActivatedRoute,
    private MessagesService :MessagesService,
    private router:Router

   ){}

   ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.MommentService.getMoment(id).subscribe(item =>{
      this.moment = item.data
    })
   }
   async editHandler(momentData:Moment){
   const id = this.moment.id

   const formData = new FormData()

   formData.append('title',momentData.title)
   formData.append('description',momentData.description)

   if(momentData.image){
    formData.append( 'image', momentData.image)
   }

   await this.MommentService.updateMoment(id!,formData).subscribe()

   this.MessagesService.add(`Moment ${id} foi atualizado com sucesso`)
   this.router.navigate(['/'])
  }
}
