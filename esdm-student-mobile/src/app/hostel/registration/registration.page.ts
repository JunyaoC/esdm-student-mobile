import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  server : string = 'http://localhost/php-folder/';
  phase_info:any = [];

  constructor(private route: Router) { }

  ngOnInit() {
    this.CheckPhase();
  }
  CheckPhase(){
    let body = {
      action:'phase_period',
    }

    axios.post(this.server + 'hostel/phase.php', JSON.stringify(body)).then((res:any) => {

      this.phase_info = [...res.data.detail]
      console.log(res);

    })

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

  checkStatus() {
    this.route.navigate(['hostel/registration/status']);
  }

}
