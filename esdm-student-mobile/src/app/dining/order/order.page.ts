import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import {ActivatedRoute} from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  order_list:any = [];
  order_list2:any = [];
  order_id:string;
  constructor(private router:Router,private activatedRoute: ActivatedRoute) { }



  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let order_id = params['order_id'];
      console.log(order_id);
      this.order_id=order_id;
      this.fetchOrderList(0);
    });
    this.activatedRoute.queryParams.subscribe(params => {
      let order_id = params['order_id'];
      console.log(order_id);
      this.order_id=order_id;
      this.fetchOrderList2(0);
    });


  }

  home(){
  	  this.router.navigate(['dining'])
  }

  backHome(){
    this.router.navigate(['dining'])
  }

  history(){
  	  this.router.navigate(['dining/order-history'])
  }

  cart(){
      this.router.navigate(['dining/cart'])
  }

  personal(){
  	  this.router.navigate(['dining/personal-info'])
  }

  orderhistory(){
      this.router.navigate(['dining/order-history'])
  }
  fetchOrderList(event){
    let body = {
      action:'list_order',
      id:this.order_id,
    }

    axios.post(this.server + 'dining/itemorder.php', JSON.stringify(body)).then((res:any) => {
      this.order_list = [...res.data.order]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })

  }
  fetchOrderList2(event){
    let body = {
      action:'list_order',
      id:this.order_id,
    }

    axios.post(this.server + 'dining/itemorder.php', JSON.stringify(body)).then((res:any) => {
      this.order_list2 = [...res.data.order2]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })

  }
}
