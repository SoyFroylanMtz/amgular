import { Component,inject } from '@angular/core';
import { ProductComponent } from 'src/app/components/product/product.component';
import { Product } from './../../models/product.models';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgOptimizedImage } from '@angular/common';


@Component({
  standalone:true,
  imports:[ ProductComponent,CommonModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  http = inject(HttpClient);
  products:Product[]=[];

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data:any)=> {
      this.products=data;
    })
  }
}