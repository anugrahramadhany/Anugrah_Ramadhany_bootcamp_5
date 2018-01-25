import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {

  constructor(private http:Http,private route:Router) { }
  productList=[]
  ngOnInit() {this.loadProductList();
  }
  loadProductList() {
    this.http.get('localhost:3000/api/product/shirts')
    .subscribe(
      result=>{
        this.productList = result.json();
      },
      error =>{

      }
    )
  }
}
