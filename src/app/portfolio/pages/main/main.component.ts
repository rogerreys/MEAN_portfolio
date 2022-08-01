import { Component, OnInit } from '@angular/core';
import { DimensionsService } from '../../services/dimensions.service';


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


  constructor(private dimensions: DimensionsService) {
  }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--height', this.dimensions.getHeight().toString()+"px");
  }

}
