import { Component, OnInit } from '@angular/core';
import { Projects } from '../../interface/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {

  projects: Projects[] = [
    { title: "Tienda online", description: "Uso de CSS, HTML, PHP (POO y MVC) y SQL", url: "https://github.com/Roger-Rys/tienda_onli_php_poo_mvc", img: "asset/img/tiendaOnline.png", altImg: "tiendaOnline" },
    { title: "Pagina con JS y jQuery", description: "Uso de CSS, HTML, JS y libreria jQuery", url: "https://github.com/Roger-Rys/proyecto_JS_jQuery", img: "asset/img/js_jquery.png", altImg: "js y jQuery" },
    { title: "Rastreador de bicicleta con dispositivo", description: "Uso de CSS, HTML, JS, PHP, JSON, Mapbox y SQL", url: "https://github.com/Roger-Rys/proA7", img: "asset/img/rastreador.png", altImg: "rastreador" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
