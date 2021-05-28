import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-complaint-history',
  templateUrl: './complaint-history.page.html',
  styleUrls: ['./complaint-history.page.scss'],
})
export class ComplaintHistoryPage implements OnInit {

	server : string = 'http://localhost/php-folder/';
	status_info:any = [];


  constructor(private route:Router, private toastController:ToastController) { }

  ngOnInit() {
  	this.viewComplaintHistory();
  }
  viewComplaintHistory(){
  	let body = {
      action:'view_complaint_history',
    }

    axios.post(this.server + 'hostel/complaint-history.php', JSON.stringify(body)).then((res:any) => {

      this.status_info = [...res.data.detail]
      console.log(res);

    })
  }

}