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

  constructor(private router:Router,public alertController: AlertController) { }

  ngOnInit() {
    this.fetchCartList(0);
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

  checkout(){
    let body = {
      action:'checkout',
      // id:this.user_id,
    }

    axios.post(this.server + 'dining/checkout.php', JSON.stringify(body)).then((res:any) => {
      console.log(res);
    })
    this.showAlert();
    this.router.navigate(['dining/order-history'])
  }

  home(){
  	  this.router.navigate(['./dining'])
  }

  history(){
  	  this.router.navigate(['dining/order-history'])
  }

  personal(){
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
