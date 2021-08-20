import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  infoCart: any;
  constructor(
    private pageService: PagesService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.pageService.getUserCart(2).subscribe(
      res => {
        console.log(res)
        this.infoCart = res;
        this.spinner.hide();
      }, err => {
        console.error(err.message)
        this.spinner.hide();
      }
    )
  }

}
