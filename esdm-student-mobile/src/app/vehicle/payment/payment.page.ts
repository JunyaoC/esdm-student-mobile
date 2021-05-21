import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private router: Router) { }

  selectedFile=null;



  ngOnInit() {
  }

  govehicle(){
  	this.router.navigate(['./vehicle/registersticker'])
  }

  submit(){
    this.router.navigate(['./vehicle'])
  }



}
