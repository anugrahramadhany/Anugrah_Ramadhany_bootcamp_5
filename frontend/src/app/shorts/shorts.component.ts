import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent implements OnInit {

  constructor(private http:Http,private route:Router) { }
  productList=[]
  ngOnInit() {this.loadProductList();
  }
  loadProductList() {
    this.http.get('localhost:3000/api/product/shorts')
    .subscribe(
      result=>{
        this.productList = result.json();
      },
      error =>{

      }
    )
  }
}
