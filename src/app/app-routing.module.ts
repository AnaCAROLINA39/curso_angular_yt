
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./moment/pages/home/home.component";
import { AboutComponent } from "./moment/pages/about/about.component";
import { NewMomentComponent } from "./moment/pages/new-moment/new-moment.component";
import { MomentComponent } from "./moment/pages/moment/moment.component";
import { EditMomentComponent } from "./moment/pages/edit-moment/edit-moment.component";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'moments/new',component: NewMomentComponent},
  {path:'moments/edit/:id',component: EditMomentComponent},
  {path:'moments/:id',component: MomentComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
