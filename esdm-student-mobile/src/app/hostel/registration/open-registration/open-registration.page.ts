import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import axios from 'axios';
import { UserServiceService } from '../../../user-service.service';

@Component({
  selector: 'app-open-registration',
  templateUrl: './open-registration.page.html',
  styleUrls: ['./open-registration.page.scss'],
})
export class OpenRegistrationPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  college_records:any = [];
  selectedOption;
  matricNo;
  register_detail;
  check_kp;
  check_op;

  constructor(private route:Router, private toastController:ToastController,public us:UserServiceService) { }

  ngOnInit() {
    //this.verify();
    this.check();
    this.register();
    this.fetchCollege();


  }

  // Check the user ald registered the open registration or not
  check(){
    let body ={
      student_id : this.us.currentUserData.u_id,
      action:'check_op',
    }

    axios.post(this.server + 'hostel/control-register.php', JSON.stringify(body)).then((res:any) => {

      this.check_op = res.data.detail;
      console.log(res);

    })
  }

  //Check kuota-pengetua status
 /* verify(){
    let body ={
      action:'check_kp',
    }
    axios.post(this.server + 'hostel/control-register.php', JSON.stringify(body)).then((res:any) => {

      this.check_kp = res.data.detail;
      console.log(res);

    })
  }*/

  // Check open-registration status
  register(){
    let body ={
      student_id : this.us.currentUserData.u_id,
      action:'checking',
    }

    axios.post(this.server + 'hostel/control-register.php', JSON.stringify(body)).then((res:any) => {

      this.register_detail = res.data.detail;
      console.log(res);

    })
  }

  fetchCollege(){
    let body = {
      action:'list_college',
    }

    axios.post(this.server + 'hostel/open-registration.php', JSON.stringify(body)).then((res:any) => {

      this.college_records = [...res.data.colleges]

      // console.log(this.college_records);

    })

  }
  submitCollege(){
    let body = {
      kolej_id : this.selectedOption.kolej_id,
      matric:this.matricNo,
      action:'select_college',
    }
    axios.post(this.server + 'hostel/open-registration.php', JSON.stringify(body)).then((res:any) => {

     console.log(res);
     this.route.navigate(['hostel/registration']);
     this.presentToast('Register successfully !', 'success');
    })
  }

  async presentToast(message:any ,color:any) {
		const toast = await this.toastController.create({
			color: color,
			message: message,
			duration: 2000
		});
		toast.present();
	}

}
