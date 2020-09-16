import { Component, OnInit } from '@angular/core';

import {ProductsService} from '../../services/products.service';
import {NgForm} from '@angular/forms';
import { Products } from 'src/app/models/products.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers : [ProductsService]
})
export class ProductsComponent implements OnInit {

  constructor(public productsService : ProductsService) { }

  ngOnInit() {

   this.refreshProductList();

   this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.productsService.selectedProduct = {
      _id: "",
      name: "",
      description: "",
      quantity: "",
      uid: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.productsService.postProduct(form.value).subscribe((res) => {
        this.resetForm();
        this.refreshProductList();

      });
    }
    else {
      this.productsService.putProduct(form.value).subscribe((res) => {
        this.resetForm();
        this.refreshProductList();

      });
    }
  }

  refreshProductList() {
    this.productsService.getProductList().subscribe((res) => {
      this.productsService.products = res as Products[];
    });
  }

  onEdit(newProducts: Products) {
    this.productsService.selectedProduct = newProducts;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.productsService.deleteProduct(_id).subscribe((res) => {
        this.refreshProductList();
        this.resetForm();

      });
    }
  }

}
