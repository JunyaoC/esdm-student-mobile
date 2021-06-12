import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserServiceService } from '../../../user-service.service';
import axios from 'axios';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

	  server : string = 'http://localhost/php-folder/';
	  status_info:any = [];


  constructor(private route:Router, private toastController:ToastController,public us:UserServiceService) { }

  ngOnInit() {
  	this.checkStatus();
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

}
