import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [{
  path: "",
  children: [
    { path: "", component: MainComponent },
    // { path: "portfolio#AboutMe", component: AboutMeComponent },
    { path: "**", redirectTo: "portfolio" }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
