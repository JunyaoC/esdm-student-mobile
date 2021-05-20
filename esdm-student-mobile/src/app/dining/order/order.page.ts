import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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

  orderhistory(){
      this.router.navigate(['dining/order-history'])
  }

}
