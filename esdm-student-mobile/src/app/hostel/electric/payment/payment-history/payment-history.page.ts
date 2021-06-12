import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { UserServiceService } from '../../../../user-service.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.page.html',
  styleUrls: ['./payment-history.page.scss'],
})
export class PaymentHistoryPage implements OnInit {

  server : string = 'http://localhost/php-folder/';
	status_info:any = [];
  appliance_info:any =[];

  constructor(public us:UserServiceService) { }

  ngOnInit() {
    this.checkStatus();
    this.checkAppliance();
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
