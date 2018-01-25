import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.css']
})
export class TshirtsComponent implements OnInit {

  constructor(private http:Http,private route:Router) { }
  productList=[]
  ngOnInit() {this.loadProductList();
  }
  loadProductList() {
    this.http.get('localhost:3000/api/product/tshirts')
    .subscribe(
      result=>{
        this.productList = result.json();
      },
      error =>{

      }
    )
  }
}
