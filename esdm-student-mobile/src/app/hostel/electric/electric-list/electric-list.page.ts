import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electric-list',
  templateUrl: './electric-list.page.html',
  styleUrls: ['./electric-list.page.scss'],
})
export class ElectricListPage implements OnInit {

  constructor(private route: Router) {}

  ngOnInit() {
  }
  formPage() {
    this.route.navigate(['hostel/electric']);
  }
  historyPage() {
    this.route.navigate(['hostel/electric/payment/payment-history']);
  }

}
