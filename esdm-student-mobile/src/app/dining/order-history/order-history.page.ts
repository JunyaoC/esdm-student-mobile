import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import axios from 'axios';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  orderhistory_records:any = [];
  order_id : string ;


  constructor(private router:Router,public us:UserServiceService) { }

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

   cart(){
      this.router.navigate(['dining/cart'])
  }

  trackOrder(event,index){
     this.router.navigate(['dining/track-order'],{queryParams:{order_id:index}})
     event.stopPropagation();
  }


  checkOrder(index){
    this.router.navigate(['dining/order'],{queryParams:{order_id:index}})
  }

  fetchOrderHistory(event){
    let body = {
      action:'list_orderhistory',
      student_id : this.us.currentUserData.u_id,
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
