import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewportfolioRoutingModule } from './newportfolio-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ExperienceComponent } from './experience/experience.component';
import { FamilyComponent } from './family/family.component';
import { LoginfolioComponent } from './loginfolio/loginfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdddegreeComponent } from './adddegree/adddegree.component';


@NgModule({
  declarations: [
    
    NavbarComponent,
    AboutusComponent,
    ExperienceComponent,
    FamilyComponent,
    LoginfolioComponent,
    AdddegreeComponent
  ],
  imports: [
    CommonModule,
    NewportfolioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarComponent,
    AboutusComponent,
    ExperienceComponent,
    FamilyComponent,
    LoginfolioComponent
  ]
})
export class NewportfolioModule { }
