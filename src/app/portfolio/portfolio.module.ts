import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    MainComponent,
    AboutMeComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  exports: [
    MainComponent,
    AboutMeComponent,
    ContactComponent,
    ProjectsComponent
  ]
  
})
export class PortfolioModule { }
