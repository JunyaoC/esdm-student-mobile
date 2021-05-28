import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.page.html',
  styleUrls: ['./payment-history.page.scss'],
})
export class PaymentHistoryPage implements OnInit {

  server : string = 'http://localhost/php-folder/';
	status_info:any = [];

  constructor() { }

  ngOnInit() {
    this.checkStatus();
  }

  checkStatus(){
  	let body = {
      action:'check_status',
    }

    axios.post(this.server + 'hostel/electric-page.php', JSON.stringify(body)).then((res:any) => {

      this.status_info = [...res.data.detail]
      console.log(res);

    })
}

}