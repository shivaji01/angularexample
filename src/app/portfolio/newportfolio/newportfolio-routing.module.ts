import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdddegreeComponent } from './adddegree/adddegree.component';
import { ExperienceComponent } from './experience/experience.component';
import { FamilyComponent } from './family/family.component';
import { LoginfolioComponent } from './loginfolio/loginfolio.component';

const routes: Routes = [
  {path : '', component:LoginfolioComponent},
  {path : 'aboutus', component:AboutusComponent},
  {path : 'experience', component:ExperienceComponent},
  {path : 'family', component:FamilyComponent},
  {path : 'loginfolio', component:LoginfolioComponent},
  {path : 'adddegree', component:AdddegreeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewportfolioRoutingModule { }
