import { Moment } from 'src/app/Moment';
import { MommentService } from './../../../services/momment.service';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  allMoments: Moment[] = []
  moments : Moment []= []
  baseApiUrl =environment.baseApiUrl

  faSearch = faSearch;

  searchterm : string = '';
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
//filtro de pesquisa
  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.moments = this.allMoments.filter((moment) => {
      if (moment.title) {
        return moment.title.toLowerCase().includes(value);
      }
      return false;
    });
  }

}
