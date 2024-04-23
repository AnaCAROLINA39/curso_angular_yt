import { Moment } from 'src/app/Moment';
import { MommentService } from './../../../services/momment.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  allMoments: Moment[] = []
  moments : Moment []= []
  baseApiUrl =environment.baseApiUrl

  constructor(private MommentService:MommentService){ }


  ngOnInit():void{

  this.MommentService.getMoments().subscribe((items) => {
  const data = items.data

  data.map((item) => {
    item.created_at = new Date(item.created_at!).toLocaleDateString(
      'pt-BR'
    );
  });

  this.allMoments = data
  this.moments = data

});
  }
}
