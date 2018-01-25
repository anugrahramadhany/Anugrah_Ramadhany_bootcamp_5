import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from "@angular/http";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productList=[];
  productList2=[];

  constructor(private http:Http, private route:Router) { }

  ngOnInit() { this.loadProductList()
  }



  loadProductList(){
    this.http.get("http://localhost:3000/api/produk/cartlist")
    .subscribe(
      result => {
        this.productList = result.json();
        this.loadProductList2();
        ;
      },
      error => {

      }
    );
  }


  loadProductList2(){
    for(let i=0;i<this.productList.length;i++){
      this.http.get("http://localhost:3000/api/produk/detail/"+this.productList[i].id)
      .subscribe(
        result => {
          this.productList2.push(result.json());
          console.log(this.productList2);
        },
        error => {

        }
      );
    }
  }


  CheckOut(){
    let header = new Headers();
    let options = new RequestOptions({headers : header});

    this.http.delete("http://localhost:3000/api/produk/cartlist/", options)
    .subscribe(
      result => {
        this.route.navigate(['/cart']);
      },
      error => {
        console.log(error);
      }
    )
    this.productList2=[];
  }

}
