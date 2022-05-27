import { Component, OnInit } from '@angular/core';
import { Skills } from '../../interface/skills';

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

  abilities: Skills[] = [
    { title: "Lenguajes de Marcado", skills: ["CSS Grid / Flex", "HTML"] },
    { title: "Lenguajes de programacion", skills: ["PHP", "JavaScript", "TypeScript", "Python", "C#"] },
    { title: "Base de datos", skills: ["SQL / MySQL", "Mongoos"] },
    { title: "Librerias", skills: ["Bootstrap", "jQuery"] },
    { title: "Framework", skills: ["node JS", "Express", "Laravel", "Angular"] }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
