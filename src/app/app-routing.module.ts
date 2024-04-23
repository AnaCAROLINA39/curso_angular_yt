
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./moment/pages/home/home.component";
import { AboutComponent } from "./moment/pages/about/about.component";
import { NewMomentComponent } from "./moment/pages/new-moment/new-moment.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'moments/new',component: NewMomentComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
