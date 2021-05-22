import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.page.html',
  styleUrls: ['./track-order.page.scss'],
})
export class TrackOrderPage implements OnInit {

  server : string = 'http://localhost/php-folder/';
  order_records :any = [];

  constructor(private router:Router) { }

  ngOnInit() {
    this.fetchOrder(0);
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

  fetchOrder(event){
    let body = {
      action:'list_order',
    }

    axios.post(this.server + 'dining/order.php', JSON.stringify(body)).then((res:any) => {
      this.order_records = [...res.data.order]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })
  }
}
