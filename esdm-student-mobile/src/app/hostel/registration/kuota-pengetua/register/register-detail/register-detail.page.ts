import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-detail',
  templateUrl: './register-detail.page.html',
  styleUrls: ['./register-detail.page.scss'],
})
export class RegisterDetailPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  registerReason() {
    this.route.navigate(['hostel/registration/kuota-pengetua/register/register-detail/register-reason']);
  }
}
