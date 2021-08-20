import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-view-product',
  templateUrl: './modal-view-product.component.html',
  styleUrls: ['./modal-view-product.component.scss']
})
export class ModalViewProductComponent implements OnInit {
  product: any;
  constructor(
    private bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
    console.log(this.product)
  }

  close() {
    this.bsModalRef.hide();
  }

}
