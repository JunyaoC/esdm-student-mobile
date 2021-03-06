import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import {ActivatedRoute} from '@angular/router';
import { AlertController } from '@ionic/angular';
import axios from 'axios';
import { UserServiceService } from '../../user-service.service';


@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.page.html',
  styleUrls: ['./food-details.page.scss'],
})
export class FoodDetailsPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  food_list:any = [];
  food_id:string;
  currentNumber = 1;
  total = 0 ;

  constructor(private router:Router,private activatedRoute: ActivatedRoute,public alertController: AlertController,public us:UserServiceService) { }

  ngOnInit() {

      this.activatedRoute.queryParams.subscribe(params => {
      let food_id = params['food_id'];
      
      console.log(food_id);
      this.food_id=food_id;
      this.fetchFood(0);
    });

  }

  showAlert() {

    this.alertController.create({
      header: 'Successfully Added',
      subHeader: '',
      message: 'You have added an item',
      buttons: ['OK']
    }).then(res => {

      res.present();
      this.cart();
    });

  }

  increment(price) {
    this.currentNumber++;
    this.total = price*this.currentNumber
  }

  decrement(price) {
   if(this.currentNumber>1){
     this.currentNumber--;
   this.total = price*this.currentNumber;}
  }

  addCart(total_price,food_id,item_qty){
    let body = {
      action:'add_cart',
      id:food_id,
      total:total_price,
      item_quantity:item_qty,
      student_id : this.us.currentUserData.u_id,
    }

    axios.post(this.server + 'dining/add-cart.php', JSON.stringify(body)).then((res:any) => {
    // this.food_list = [...res.data.food]
      console.log(res);
    })

    this.showAlert();
    
  }

  backHome(){
  	  this.router.navigate(['dining'])
  }

  history(){
  	  this.router.navigate(['dining/order-history'])
  }

  personal(){
  	  this.router.navigate(['dining/personal-info'])
  }

  cart(){
    this.router.navigate(['dining/cart'])
  }

  fetchFood(event){
    let body = {
      action:'list_food',
      id:this.food_id,
    }

    axios.post(this.server + 'dining/food-details.php', JSON.stringify(body)).then((res:any) => {
     this.food_list = [...res.data.food]

     this.food_list.forEach( _item => {
        _item['food_price'] = Number(_item['food_price'])
        this.total = _item['food_price']
      })


      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })

  }

}
