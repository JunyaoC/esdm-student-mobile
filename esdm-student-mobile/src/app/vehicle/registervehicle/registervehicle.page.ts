import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import axios from 'axios';
import { ToastController } from '@ionic/angular';
import { UserServiceService } from '../../user-service.service';

//import { ApiService } from '../api.service';



@Component({
  selector: 'app-registervehicle',
  templateUrl: './registervehicle.page.html',
  styleUrls: ['./registervehicle.page.scss'],
})
export class RegistervehiclePage implements OnInit {
  server: string = "http://localhost/php-folder/";
  vehicle_records: any = [];

  platenumber: any = "QM1234";
  vmodel: any = "Toyota";
  vcolor: any = "Red";
  vtype: any = "Car";

  constructor(private formBuilder: FormBuilder, private router: Router, public toastController: ToastController, public userService: UserServiceService) { }
  // get platenumber() {
  //   return this.registrationForm.get("platenumber");
  // }
  // get vmodel() {
  //   return this.registrationForm.get('vmodel');
  // }
  // get vcolor() {
  //   return this.registrationForm.get('vcolor');
  // }
  // get vtype() {
  //   return this.registrationForm.get('vtype');
  // }

  // public errorMessages = {
  //   platenumber: [
  //     { type: 'required', message: 'Plate number is required' },
  //     { type: 'maxlength', message: 'Plate number cannot be longer than 8 characters' }
  //   ],
  //   vmodel: [
  //     { type: 'required', message: 'Vehicle model is required' }
  //   ],
  //   vcolor: [
  //     { type: 'required', message: 'Vehicle color is required' }
  //   ],
  //   vtype: [
  //     { type: 'required', message: 'Type of vehicle is required' }
  //   ]
  // };
  // registrationForm = this.formBuilder.group({
  //   platenumber: ['', [Validators.required, Validators.maxLength(8)]],
  //   vmodel: [
  //     '',
  //     [
  //       Validators.required
  //     ]
  //   ],
  //   vcolor: [
  //     '',
  //     [
  //       Validators.required
  //     ]
  //   ],
  //   vtype: [
  //     '',
  //     [
  //       Validators.required
  //     ]
  //   ]

  // });


  ngOnInit() {
    // this.submit();
  }

  submit() {
    //  console.log(this.registrationForm.value);

    //    this._apiService.submit(this.registrationForm.value).then((res:any) =>{
    //   console.log("SUCCESS ===",res);
    // },(error: any) => {
    //   console.log("ERROR ===",error);
    // })

    // this.userService.currentUserData

    let body = {
      action: 'addvehicle',
      vehicleID: this.platenumber,
      vehicleModel: this.vmodel,
      vehicleColor: this.vcolor,
      vehicleType: this.vtype,
      stuACID: this.userService.currentUserData.student.student_matric
    }
    axios.post(this.server + 'vehicle/registervehicles.php', JSON.stringify(body)).then((res: any) => {
      console.log(res);
      if (res.data.success) {
        this.presentToast('Vehicle Added!', 'success');
        this.router.navigate(['./vehicle/registersticker'])
      } else {
        this.presentToast(res.data.msg, 'danger');
      }

      //console.log(this.vehicle_records);
    })





  }



  govehicle() {
    this.router.navigate(['./vehicle'])
  }

  addVehicle() {
    let data = {
      // platenumber: this.platenumber,
      // vmodel: this.vmodel,
      // vcolor: this.vcolor,
      // vtype: this.vtype
      // platenumber: JSON.stringify(this.platenumber),
      // vmodel: JSON.stringify(this.vmodel),
      // vcolor: JSON.stringify(this.vcolor),
      // vtype: JSON.stringify(this.vtype),
    }

    // this._apiService.addVehicle(data).subscribe((res:any) =>{
    //   console.log("SUCCESS ===",res);
    // },(error: any) => {
    //   console.log("ERROR ===",error);
    // })
    //   console.log(this.platenumber, this.vmodel, this.vcolor, this.vtype);
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

