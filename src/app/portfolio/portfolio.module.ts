import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SkillsComponent } from './pages/skills/skills/skills.component';


@NgModule({
  declarations: [
    MainComponent,
    AboutMeComponent,
    ContactComponent,
    ProjectsComponent,
    MenuComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    PrimeNgModule
  ],
  exports: [
    MainComponent,
    AboutMeComponent,
    ContactComponent,
    ProjectsComponent
  ]
  
})
export class PortfolioModule { }
