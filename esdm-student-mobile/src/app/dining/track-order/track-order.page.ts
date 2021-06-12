import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.page.html',
  styleUrls: ['./track-order.page.scss'],
})
export class TrackOrderPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  order_records :any = [];
  order_id:string;
  constructor(private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      let order_id = params['order_id'];
      
      console.log(order_id);
      this.order_id=order_id;
      this.fetchOrder(0);
    });
  }

  home(){
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

  fetchOrder(event){
    let body = {
      action:'track_order',
      order_id:this.order_id,
    }

    axios.post(this.server + 'dining/track-order.php', JSON.stringify(body)).then((res:any) => {
      this.order_records = [...res.data.order_item];

      console.log(res);

      // if(event != 0){
      //   event.target.complete();
      // }
    })
  }

}
