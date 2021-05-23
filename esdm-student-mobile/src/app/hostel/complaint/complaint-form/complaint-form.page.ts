import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.page.html',
  styleUrls: ['./complaint-form.page.scss'],
})
export class ComplaintFormPage implements OnInit {

  server: string = 'http://localhost/php-folder/';
  matricNo;
  reasonComplaint;
  status_records: any = [];
  selectedOption;


  constructor(private route: Router, private toastController: ToastController) { }

  ngOnInit() {
    //this.fetchStatus();
    //this.submitComplaint();
  }

  /*fetchStatus() {
    let body = {
      action: 'list_status',
    }

    axios.post(this.server + 'hostel/complaint-form.php', JSON.stringify(body)).then((res: any) => {

      this.status_records = [...res.data.stats]

      // console.log(this.status_records);
  })

  }*/
  submitComplaint() {
    let body = {
      permissions: this.selectedOption,
      matric: this.matricNo,
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
