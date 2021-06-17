import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { UserServiceService } from '../../../user-service.service';

@Component({
  selector: 'app-electric-list',
  templateUrl: './electric-list.page.html',
  styleUrls: ['./electric-list.page.scss'],
})
export class ElectricListPage implements OnInit {
  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  status_info:any = [];
  appliance_info:any =[];

  constructor(private route: Router,public us:UserServiceService) {}

  ngOnInit() {
        this.checkStatus();
    this.checkAppliance();
  }
  formPage() {
    this.route.navigate(['hostel/electric']);
  }
  historyPage() {
    this.route.navigate(['hostel/electric/payment/payment-history']);
  }
    checkStatus(){
    let body = {
      student_id : this.us.currentUserData.u_id,
      action:'check_status',
    }

    axios.post(this.server + 'hostel/electric-page.php', JSON.stringify(body)).then((res:any) => {

      this.status_info = [...res.data.detail]
      console.log(res);

    })
  }

  checkAppliance(){
    let body = {
      student_id : this.us.currentUserData.u_id,
      action:'check_appliance',
    }

    axios.post(this.server + 'hostel/electric-page.php', JSON.stringify(body)).then((res:any) => {

      this.appliance_info = [...res.data.detail]
      console.log(res);

    })
  }

}
