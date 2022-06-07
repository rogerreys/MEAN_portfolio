import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Projects } from '../../interface/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [`
    img{
    /* height: 200px; */
      width: 200px;
    }
  `]
})
export class ProjectsComponent implements OnInit {

  imagePath: string = environment.imgPath;

  projects: Projects[] = [
    { title: "Tienda online", description: "Uso de CSS, HTML, PHP (POO y MVC) y SQL", url: "https://github.com/Roger-Rys/tienda_onli_php_poo_mvc", img: `${this.imagePath}/store1.png`, altImg: "tiendaOnline" },
    { title: "Pagina con JS y jQuery", description: "Uso de CSS, HTML, JS y libreria jQuery", url: "https://github.com/Roger-Rys/proyecto_JS_jQuery", img: `${this.imagePath}/store2.png`, altImg: "js y jQuery" },
    { title: "Rastreador de bicicleta con dispositivo", description: "Uso de CSS, HTML, JS, PHP, JSON, Mapbox y SQL", url: "https://github.com/Roger-Rys/proA7", img: `${this.imagePath}/store3.png`, altImg: "rastreador" }
  ]
 

  ngOnInit(): void {
  }

}
