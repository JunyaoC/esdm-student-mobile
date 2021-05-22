import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import axios from 'axios';


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {

  server : string = 'http://localhost/php-folder/';
  orderhistory_records:any = [];
  order_id : string ;


  constructor(private router:Router) { }

  ngOnInit() {
    this.fetchOrderHistory(0);
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

  personal(){
  	  this.router.navigate(['dining/personal-info'])
  }

  orderpage(){
      this.router.navigate(['dining/order'])
  }

  checkOrder(index){
    this.router.navigate(['dining/order'],{queryParams:{order_id:index}})
  }

  fetchOrderHistory(event){
    let body = {
      action:'list_orderhistory',
    }

    axios.post(this.server + 'dining/order-history.php', JSON.stringify(body)).then((res:any) => {
      this.orderhistory_records = [...res.data.orderhistory]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })
  }

}
