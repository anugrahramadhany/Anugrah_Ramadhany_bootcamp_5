import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
// import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product={}
  idcart={}
  constructor(private router:Router,private route:ActivatedRoute, private http : HttpClient) { }

  ngOnInit() {
    this.getProductDetail(this.route.snapshot.params['id']);
  }


  getProductDetail(id){
    this.http.get("http://localhost:3000/api/product/productdetail/"+id).subscribe(data=>
    {this.product=data})
  }

  saveCart() {
    this.http.post('http://localhost:3000/api/produk/cartlist', this.idcart)
      .subscribe(res => {
          
          this.router.navigate(['/cart']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
