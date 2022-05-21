import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './portfolio/pages/main/main.component';
import { AboutMeComponent } from './portfolio/pages/about-me/about-me.component';
import { ContactComponent } from './portfolio/pages/contact/contact.component';
import { ProjectsComponent } from './portfolio/pages/projects/projects.component';
import { PortfolioModule } from './portfolio/portfolio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
