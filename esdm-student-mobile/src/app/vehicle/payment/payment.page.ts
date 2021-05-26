import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { ToastController } from '@ionic/angular';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  server: string = "http://localhost/php-folder/";
  constructor(private router: Router, public toastController: ToastController, public userService: UserServiceService) { }
  platenumber: any = "";
  filename: any = "";
  stickerid: any= "";
  paymentid: any="";
  pstatus: any="";
  payment: any="";
  ptype: any="";
 



  ngOnInit() {
  }

  govehicle(){
  	this.router.navigate(['./vehicle/registersticker'])
  }

  submit(){
    //this.router.navigate(['./vehicle'])
    let body = {
      action: 'addpayment',
    //  paymentID: this.paymentid,
      stickerID: this.stickerid,
      vehicleID: this.platenumber,
      paymentStatus: this.pstatus,
      paymentType: this.ptype,
      paymentAmount: this.payment,
      paymentProve:this.filename,
      stuACID: this.userService.currentUserData.student.student_matric
    }
console.log(body);
    axios.post(this.server + 'vehicle/makepayment.php', JSON.stringify(body)).then((res: any) => {
      console.log(res);
      if (res.data.success) {
        this.presentToast('Payment Made!', 'success');
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
