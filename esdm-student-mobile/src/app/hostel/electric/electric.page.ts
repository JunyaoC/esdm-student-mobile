import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-electric',
  templateUrl: './electric.page.html',
  styleUrls: ['./electric.page.scss'],
})
export class ElectricPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  paymentPage(){
    this.route.navigate(['hostel/electric/payment']);
  }
  electricHistory(){
    this.route.navigate(['hostel/electric/payment/payment-history']);
  }
  

}
