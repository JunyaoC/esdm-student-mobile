import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserServiceService } from '../../../user-service.service';
import axios from 'axios';

@Component({
  selector: 'app-complaint-history',
  templateUrl: './complaint-history.page.html',
  styleUrls: ['./complaint-history.page.scss'],
})
export class ComplaintHistoryPage implements OnInit {

	server : string = 'http://localhost/php-folder/';
	status_info:any = [];


  constructor(private route:Router, private toastController:ToastController,public us:UserServiceService) { }

  ngOnInit() {
  	this.viewComplaintHistory();
  }
  viewComplaintHistory(){
  	let body = {
      action:'view_complaint_history',
      student_id : this.us.currentUserData.u_id,
    }

    axios.post(this.server + 'hostel/complaint-history.php', JSON.stringify(body)).then((res:any) => {

      this.status_info = [...res.data.detail]
      console.log(res);

    })
  }

}
