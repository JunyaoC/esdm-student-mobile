import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-open-registration',
  templateUrl: './open-registration.page.html',
  styleUrls: ['./open-registration.page.scss'],
})
export class OpenRegistrationPage implements OnInit {

  server : string = 'http://localhost/php-folder/';
  college_records:any = [];
  selectedOption;
  matricNo;

  constructor(private route:Router, private toastController:ToastController) { }

  ngOnInit() {
    this.fetchCollege();
  }

  fetchCollege(){
    let body = {
      action:'list_college',
    }

    axios.post(this.server + 'hostel/kuota-pengetua.php', JSON.stringify(body)).then((res:any) => {

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
