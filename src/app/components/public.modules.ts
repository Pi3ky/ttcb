import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxSpinnerModule } from "ngx-spinner";
import { ModalViewProductComponent } from './modal-view-product/modal-view-product.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const MODULES = [
  CarouselModule.forRoot(),
  NgxSpinnerModule,
  ModalModule.forRoot(),
];

const ENTRIES = [ModalViewProductComponent]

@NgModule({
  declarations: [ModalViewProductComponent],
  imports: [
    CommonModule,
    ...MODULES,
  ],
  exports: [MODULES,],
  entryComponents: [...ENTRIES]
})
export class PublicModule { }
