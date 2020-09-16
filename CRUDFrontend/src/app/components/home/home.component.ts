import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import { Router } from "@angular/router";
import {ProductsService} from '../../services/products.service';

import {Products} from '../../models/products.model'

import {ProductsComponent} from '../../components/products/products.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetails;

  productDetails;
  constructor(private userService: UserService, private router: Router, public productsService : ProductsService) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => {
        console.log(err);

      }
    );


    this.refreshProductList();



  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  refreshProductList() {
    this.productsService.getProductList().subscribe((res) => {
      this.productsService.products = res as Products[];
    });
  }


}

