import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { icon: 'pi pi-fw pi-code', command: (click) => { this.navigateToSection('header') } },
      { label: 'Habilidades', command: (click) => { this.navigateToSection('skill') }},
      { label: 'Proyectos', command: (click) => { this.navigateToSection('project') }},
      { label: 'Acerca de mi', command: (click) => { this.navigateToSection('aboutMe') }},
      { label: 'Contactos', command: (click) => { this.navigateToSection('contact') }},
    ];
  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
    if(section == "header")
      window.scroll({top:0})
  }

}
