import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";
import axios from 'axios';
import { ToastController } from '@ionic/angular';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-registersticker',
  templateUrl: './registersticker.page.html',
  styleUrls: ['./registersticker.page.scss'],
})
export class RegisterstickerPage implements OnInit {
  server: string = "https://esdm-php-divio.us.aldryn.io/php-folder/";

  stickerid: any = "";
  platenumber: any = "";
  college: any = "";
  applydate: any = "";
  sfee: any = "";
  sstatus: any="";
  constructor(private formBuilder: FormBuilder,private router: Router, public toastController: ToastController, public userService: UserServiceService) { }
  // get platenumber() {
  //   return this.registrationForm.get("platenumber");
  // }
  // get college() {
  //   return this.registrationForm.get('college');
  // }
  // get applydate() {
  //   return this.registrationForm.get('applydate');
  // }
  // get sfee() {
  //   return this.registrationForm.get('sfee');
  // }

  ngOnInit() {
  }


  // public errorMessages = {
  //   platenumber: [
  //     { type: 'required', message: 'Plate number is required' },
  //     { type: 'maxlength', message: 'Plate number cannot be longer than 8 characters' }
  //   ],
  //   college: [
  //     { type: 'required', message: 'College is required' }
  //   ],
  //   applydate: [
  //     { type: 'required', message: 'Apply date is required' }
  //   ],
  //   sfee: [
  //     { type: 'required', message: 'Amount is required' }
  //   ]
  // };
  // registrationForm = this.formBuilder.group({
  //   platenumber: ['', [Validators.required, Validators.maxLength(8)]],
  //   college: [
  //     '',
  //     [
  //       Validators.required
  //     ]
  //   ],
  //   applydate: [
  //     '',
  //     [
  //       Validators.required
  //     ]
  //   ],
  //   sfee: [
  //     '',
  //     [
  //       Validators.required
  //     ]
  //   ]

  // });

submit() {
   // console.log(this.registrationForm.value);
   // this.router.navigate(['./vehicle/payment'])
     //    this._apiService.submit(this.registrationForm.value).then((res:any) =>{
     //   console.log("SUCCESS ===",res);
     // },(error: any) => {
     //   console.log("ERROR ===",error);
     // })
let body = {
  action: 'addsticker',
  stickerID: this.stickerid,
  vehiclePlateNo: this.platenumber,
  stickerCollege: this.college,
  stickerDate: this.applydate,
  stickerStatus: this.sstatus,
  stickerFee: this.sfee
}

axios.post(this.server + 'vehicle/registerstickers.php', JSON.stringify(body)).then((res: any) => {
  console.log(body);
  if (res.data.success) {
    this.presentToast('Sticker Created!', 'success');
    this.router.navigate(['./vehicle/payment'])
    
  } else {
    this.presentToast(res.data.msg, 'danger');
    
  }
 
  
})

   }



   govehicle(){
  	this.router.navigate(['./vehicle/registervehicle'])
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
