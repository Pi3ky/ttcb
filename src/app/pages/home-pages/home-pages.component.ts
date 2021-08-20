import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Products } from 'src/app/common/type';
import { PagesService } from '../pages.service';
import { BsModalService } from "ngx-bootstrap/modal";
import { ModalViewProductComponent } from 'src/app/components/modal-view-product/modal-view-product.component';

const ALL_PRODUCT = 'All product';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss']
})
export class HomePagesComponent implements OnInit {
  banners = [
    { id: 'banner-2', image: './assets/images/banner/banner-2.png' },
    { id: 'banner-3', image: './assets/images/banner/banner-3.png' },
    { id: 'banner-4', image: './assets/images/banner/banner-4.png' },
    { id: 'banner-5', image: './assets/images/banner/banner-5.png' },
    { id: 'banner-6', image: './assets/images/banner/banner-6.png' },
    { id: 'banner-7', image: './assets/images/banner/banner-7.png' },
  ]
  products: Products[] = [];
  categories: string[] = [];
  selectedTag: string = '';

  constructor(
    private pageService: PagesService,
    private spinner: NgxSpinnerService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.selectedTag = ALL_PRODUCT;
    this.getProduct();
    this.getListCategory();
  }

  /**
   * Fetch data product
   */
  getProduct(){
    this.spinner.show();
    this.pageService.getProducts().subscribe(
      res => {
        this.products = res;
        console.log(res)
        this.spinner.hide();
      },
      err => {
        console.error(err)
        this.spinner.hide();
      }
    )
  }

  /**
   * Get list category
   * @returns
   */
  getListCategory(){
    this.pageService.getCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => {
        console.error(err);
      }
    )
  }

  /**
   * Select product to handle
   * @param product
   */
  selectProduct(product: any){
    console.log(product)
    const _bsModalRef = this.modalService.show(ModalViewProductComponent, {
      class: "modal-lg modal-dialog-centered",
      initialState: {
        product: product,
      }
    })
  }

  getProductByTag(tag: string){
    if(tag){
      this.selectedTag = tag;
      this.spinner.show();
      this.pageService.filterCategory(tag).subscribe(
        res => {
          this.products = res;
          this.spinner.hide();
        },
        err => {
          console.error(err)
          this.spinner.hide();
        }
      )
    } else {
      this.getProduct();
      this.selectedTag = ALL_PRODUCT;
    }
  }

}
