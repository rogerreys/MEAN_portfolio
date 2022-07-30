import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styles: [
  ]
})
export class AboutMeComponent implements OnInit {

  aboutMeParagraph: string = `Hola!!! Me llamo Roger Reyes y soy un desarrollador web fullstack junior, en constante aprendizaje y con el deseo de desarrollar grandes proyectos 
  para solucionar problemas.
  Dispuesto a trabajar en grupo para lograr objetivos mutuos.
  Tambien, llevo algunos años programando pero ultimamente me he dedicado al mundo del desarrollo web.`;

  constructor() { }

  ngOnInit(): void {
  }

}
