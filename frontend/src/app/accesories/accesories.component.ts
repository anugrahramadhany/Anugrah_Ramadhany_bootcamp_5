import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accesories',
  templateUrl: './accesories.component.html',
  styleUrls: ['./accesories.component.css']
})
export class AccesoriesComponent implements OnInit {
  productList = [];
  constructor(private http: Http, private route: Router) { }

  ngOnInit() {
    this.loadProductList();
  }
  loadProductList() {
    this.http.get('localhost:3000/api/product/accessories')
    .subscribe(
      result=>{
        this.productList = result.json();
      },
      error =>{

      }
    )
  }
}
