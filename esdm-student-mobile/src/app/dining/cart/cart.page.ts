import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import {ActivatedRoute} from '@angular/router';
import { AlertController } from '@ionic/angular';
import axios from 'axios';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  cart_list :any = [];
  // user_id:string;

  total = 0;
  
  constructor(private router:Router,public alertController: AlertController,public us:UserServiceService) { }

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

  addPrice(price){
    var current_price = Number(price);
    this.total = current_price + this.total;
    console.log(this.total);
  }

  checkout(){
    let body = {
      action:'checkout',
      totalPrice:this.total,
      student_id : this.us.currentUserData.u_id,
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

  cart(){

      this.router.navigate(['dining/cart'])
  }


  history(){
 
  	  this.router.navigate(['dining/order-history'])
  }

  personal(){

  	  this.router.navigate(['dining/personal-info'])
  }

  deleteItem(itemorder_id){
    

    let body = {
      action:'delete',
       id:itemorder_id,
    }

    axios.post(this.server + 'dining/delete-item.php', JSON.stringify(body)).then((res:any) => {
      this.cart_list = [...res.data.cart]
    })

  }



  fetchCartList(event){
    
    this.total=0;

    let body = {
      action:'list_cart',
      // id:this.user_id,
    }

    axios.post(this.server + 'dining/cart-list.php', JSON.stringify(body)).then((res:any) => {
      this.cart_list = [...res.data.cart]

      this.total = 0;

      this.cart_list.forEach( _item => {
        _item['food_price'] = Number(_item['food_price'])
        _item['item_quantity'] = Number(_item['item_quantity'])
        this.total += _item['food_price']
      })

      console.log(this.cart_list,this.total);

      if(event != 0){
        event.target.complete();
      }
    })

  }


}
