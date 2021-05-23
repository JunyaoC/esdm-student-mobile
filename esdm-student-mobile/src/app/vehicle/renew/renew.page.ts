import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios'; 
import { ToastController } from '@ionic/angular';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.page.html',
  styleUrls: ['./renew.page.scss'],
})

export class RenewPage implements OnInit {
  server : string = "http://localhost/php-folder/";
  constructor(private router: Router, public toastController: ToastController, public userService: UserServiceService) { }
  
  stickerid: any= "";
  platenumber: any = "";
  payment: any="";
  filename: any = "";
  pstatus: any = "";

  ngOnInit() {
  }

  govehicle(){
  	this.router.navigate(['./vehicle'])
  }

  submit() {
    //this.router.navigate(['./vehicle'])
    let body = {
      action: 'renew_sticker',
    //  paymentID: this.paymentid,
      stickerID: this.stickerid,
      vehicleID: this.platenumber,
      paymentAmount: this.payment,
      paymentProve:this.filename,
      paymentStatus: this.pstatus,
      stuACID: this.userService.currentUserData.student.student_matric
  }

console.log(body);
    axios.post(this.server + 'vehicle/renew.php', JSON.stringify(body)).then((res: any) => {
      console.log(res);
      if (res.data.success) {
        this.presentToast('Request submitted!', 'success');
        this.router.navigate(['./vehicle'])
      } else {
        this.presentToast(res.data.msg, 'danger');
      }

      //console.log(this.vehicle_records);
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
