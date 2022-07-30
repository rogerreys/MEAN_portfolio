import { Component, OnInit } from '@angular/core';
import { Skills } from '../../../interface/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: []
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  abilities: Skills[] = [
    { title: "Lenguajes de Marcado", skills: ["CSS Grid / Flex", "HTML"] },
    { title: "Lenguajes de programacion", skills: ["PHP", "JavaScript", "TypeScript", "Python", "C#"] },
    { title: "Base de datos", skills: ["SQL / MySQL", "Mongoos"] },
    { title: "Librerias", skills: ["Bootstrap", "jQuery"] },
    { title: "Framework", skills: ["node JS", "Express", "Laravel", "Angular"] }
  ]

}
