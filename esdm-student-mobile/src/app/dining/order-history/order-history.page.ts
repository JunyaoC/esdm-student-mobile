import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {

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

  orderpage(){
      this.router.navigate(['dining/order'])
  }


}
