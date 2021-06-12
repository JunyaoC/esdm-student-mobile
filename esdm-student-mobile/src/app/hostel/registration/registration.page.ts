import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserServiceService } from '../../user-service.service';
import axios from 'axios';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  phase_info:any = [];
  status_info:any = [];

  constructor(private route: Router, private toastController:ToastController,public us:UserServiceService) { }

  ngOnInit() {
    this.CheckPhase();
    this.checkStatus();
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
   checkStatus(){
    let body = {
      action:'check_status',
      student_id : this.us.currentUserData.u_id,
    }

    axios.post(this.server + 'hostel/registration-status.php', JSON.stringify(body)).then((res:any) => {

      this.status_info = [...res.data.detail]
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



}
