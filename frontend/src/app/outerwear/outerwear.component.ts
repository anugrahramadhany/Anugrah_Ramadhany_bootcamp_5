import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-outerwear',
  templateUrl: './outerwear.component.html',
  styleUrls: ['./outerwear.component.css']
})
export class OuterwearComponent implements OnInit {
  productList=[]
  constructor(private http:Http,private route:Router) { }

  ngOnInit() {this.loadProductList();
  }
  loadProductList() {
    this.http.get('localhost:3000/api/product/outerwear')
    .subscribe(
      result=>{
        this.productList = result.json();
      },
      error =>{

      }
    )
  }
}
