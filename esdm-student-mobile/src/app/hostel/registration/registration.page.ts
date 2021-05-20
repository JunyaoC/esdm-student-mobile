import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  kuotaPage() {
    this.route.navigate(['hostel/registration/kuota-pengetua']);
  }
  openPage() {
    this.route.navigate(['hostel/registration/open-registration']);
  }
  amendPage() {
    this.route.navigate(['hostel/registration/amendment']);
  }

}
