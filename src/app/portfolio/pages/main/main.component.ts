import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  title: string = "PORTFOLIO";
  occupation: string = "Desarrollador Web Full-Stack";
  level: string = "Junior";
  msg: string = "Cumpliendo objetivos mutuos";
  
  constructor() { }

  ngOnInit(): void {
  }


}
