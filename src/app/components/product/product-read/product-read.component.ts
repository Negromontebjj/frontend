import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[]; 
  displayedColumns = ['id', 'name', 'autor', 'action', 'isbn'];

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.read().subscribe(products => {
      this.products = products
      
      
    })
  }

}
