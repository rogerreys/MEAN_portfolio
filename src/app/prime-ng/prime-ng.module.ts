import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AccordionModule} from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';


@NgModule({
  exports: [
    AccordionModule,
    ButtonModule,
    CardModule,
    PanelModule,
    // BrowserAnimationsModule
  ]
})
export class PrimeNgModule { }
