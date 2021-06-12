import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import {ActivatedRoute} from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  food_list:any = [];
  restaurant_id:string;
  constructor(private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

     this.activatedRoute.queryParams.subscribe(params => {
      let restaurant_id = params['restaurant_id'];
      
      console.log(restaurant_id);
      this.restaurant_id=restaurant_id;
      this.fetchFoodList(0);
    });

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

  foodDetails(index){
      this.router.navigate(['dining/food-details'],{queryParams:{food_id:index}})
  }

  fetchFoodList(event){
    let body = {
      action:'list_food',
      id:this.restaurant_id,

    }
          console.log(this.restaurant_id);
    axios.post(this.server + 'dining/foodList.php', JSON.stringify(body)).then((res:any) => {
      this.food_list = [...res.data.food]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })

  }
}
