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
      { icon: 'pi pi-fw pi-home' },
      { label: 'Acerca de mi', icon: 'pi pi-fw pi-calendar' },
      { label: 'Habilidades', icon: 'pi pi-fw pi-pencil' },
      { label: 'Proyectos', icon: 'pi pi-fw pi-file' },
      { label: 'Contactos', icon: 'pi pi-fw pi-cog' }
    ];

  }

}
