import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserServiceService } from '../../user-service.service';
import axios from 'axios';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.page.html',
  styleUrls: ['./complaint.page.scss'],
})
export class ComplaintPage implements OnInit {
  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  status_info:any = [];
  constructor(private route: Router, private toastController:ToastController,public us:UserServiceService) { }

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
  formPage() {
    this.route.navigate(['hostel/complaint/complaint-form']);
  }
  historyPage() {
    this.route.navigate(['hostel/complaint/complaint-history']);
  }

}
