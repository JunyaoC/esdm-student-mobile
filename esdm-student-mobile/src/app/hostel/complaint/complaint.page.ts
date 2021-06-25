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
  reasonComplaint;
  status_records: any = [];
  selectedOption;

  constructor(private route: Router, private toastController:ToastController,public us:UserServiceService) { }

  ngOnInit() {
    this.viewComplaintHistory();
  }
    doRefresh(event) {
    console.log('Begin async operation');
    
    let body = {
      action:'view_complaint_history',
      student_id : this.us.currentUserData.u_id,
    }

    axios.post(this.server + 'hostel/complaint-history.php', JSON.stringify(body)).then((res:any) => {

      this.status_info = [...res.data.detail]
      console.log(res);

    })
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
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
    submitComplaint() {
    let body = {
      student_id : this.us.currentUserData.u_id,
      permissions: this.selectedOption,
      reason: this.reasonComplaint,
      action: 'select_status',
    }
    axios.post(this.server + 'hostel/complaint-form.php', JSON.stringify(body)).then((res: any) => {

      console.log(body);
      this.route.navigate(['hostel/complaint']);
     this.presentToast('Submit complaint successfully !', 'success');
    })

  }

  async presentToast(message: any, color: any) {
    const toast = await this.toastController.create({
      color: color,
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
