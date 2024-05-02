import { Validator  } from '@angular/forms';
import { CommentService } from './../../../services/comment.service';
import { MessagesService } from './../../../services/messages.service';

import { MommentService } from 'src/app/services/momment.service';
import { Moment } from './../../../Moment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes,faEdit } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Comment } from 'src/app/Comment';
@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,FormsModule,ReactiveFormsModule],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent implements OnInit{
moment?: Moment;
baseApiUrl = environment.baseApiUrl

faTimes= faTimes
faEdit = faEdit

commentForm!:FormGroup;

  constructor(
    private MommentService:MommentService,
    private route: ActivatedRoute,
  private MessagesService: MessagesService,
  private Router:Router,
  private CommentService :CommentService
  ){}

  ngOnInit(): void {
    //id que esta na url
    //criar uma id ´ja passado para number
const id = Number(this.route.snapshot.paramMap.get("id"));
//carregar os dados api id
this.MommentService.getMoment(id).subscribe(item => this.moment = item.data)

this.commentForm = new FormGroup({
  text: new FormControl("",[ Validators.required]),
  username:new FormControl("",[ Validators.required])
});
  }
  get text(){
    return this.commentForm.get('text')!;
  }

  get username(){
    return this.commentForm.get('username')!;
  }

 async removeHandler(id:number){
  await this.MommentService.removeMoment(id).subscribe()

  this.MessagesService.add("Excluido com sucesso")

  this.Router.navigate(['/'])
  }

  async onSubmit(formDirective:FormGroupDirective){
    if(this.commentForm.invalid){
      return
    }
    const data : Comment = this.commentForm.value

    data.momentId = Number (this.moment!.id)

    await this.CommentService.createComment(data).subscribe((comment) => this.moment!.comments!.push(comment.data))
    this.MessagesService.add("comentario adicionado")

    //comentarrio resetado
    this.commentForm.reset()

    formDirective.resetForm()
      }
}
