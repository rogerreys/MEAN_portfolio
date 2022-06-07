import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';

@NgModule({
  exports: [
    AccordionModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    ChipModule,
    PanelModule,
  ]
})
export class PrimeNgModule { }
