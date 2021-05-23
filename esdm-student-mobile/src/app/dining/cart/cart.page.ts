import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import {ActivatedRoute} from '@angular/router';
import { AlertController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {

  server : string = 'http://localhost/php-folder/';
  cart_list :any = [];
  // user_id:string;

  total = 0;

  constructor(private router:Router,public alertController: AlertController) { }

  ngOnInit() {
    this.fetchCartList(0);
    this.total = 0;
  }


  showAlert() {

    this.alertController.create({
      header: 'Thank you!',
      subHeader: '',
      message: 'We have received your order!',
      buttons: ['OK']
    }).then(res => {

      res.present();
    });

  }

  addPrice(price,qty){
    var current_price = Number(price);
    var current_qty = Number(qty);
    current_price = current_price * current_qty;
    this.total = current_price + this.total;
    console.log(this.total);
  }

  checkout(){
    let body = {
      action:'checkout',
      totalPrice:this.total,
    }

    axios.post(this.server + 'dining/checkout.php', JSON.stringify(body)).then((res:any) => {
      console.log(res);
    })
    this.showAlert();
    this.router.navigate(['dining/order-history'])
  }

  home(){
      this.total=0;
  	  this.router.navigate(['./dining'])
  }

  history(){
      this.total=0;
  	  this.router.navigate(['dining/order-history'])
  }
  
  personal(){
      this.total=0;
  	  this.router.navigate(['dining/personal-info'])
  }

  fetchCartList(event){
    let body = {
      action:'list_cart',
      // id:this.user_id,
    }

    axios.post(this.server + 'dining/cart-list.php', JSON.stringify(body)).then((res:any) => {
      this.cart_list = [...res.data.cart]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })

  }


}
