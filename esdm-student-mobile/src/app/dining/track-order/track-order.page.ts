import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.page.html',
  styleUrls: ['./track-order.page.scss'],
})
export class TrackOrderPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  home(){
  	  this.router.navigate(['dining'])
  }

  history(){
  	  this.router.navigate(['dining/order-history'])
  }

  personal(){
  	  this.router.navigate(['dining/personal-info'])
  }

  fetchRestaurant(event){
    let body = {
      action:'list_restaurant',
    }

    axios.post(this.server + 'dining/restaurant.php', JSON.stringify(body)).then((res:any) => {
      this.restaurant_records = [...res.data.restaurant]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })
  }
}
