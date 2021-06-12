import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-amendment',
  templateUrl: './amendment.page.html',
  styleUrls: ['./amendment.page.scss'],
})
export class AmendmentPage implements OnInit {
  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  college_records:any = [];
  matricNo;
  reason;
  selectedOption;

  constructor(public alertController: AlertController,private route: Router,public us:UserServiceService, private toastController:ToastController) {}

  ngOnInit() {
    this.fetchCollege();
  }

    getStudentData(){
    this.us.getStudentData();
  }
    fetchCollege(){
    let body = {
      action:'list_college',
    }

    axios.post(this.server + 'hostel/open-registration.php', JSON.stringify(body)).then((res:any) => {

      this.college_records = [...res.data.colleges]

    })

  }

  async submitForm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
                let body = {
                  reason:this.reason,
                  matricNo: this.matricNo,
                  kolej_id : this.selectedOption.kolej_id,
                  action:'add_amend',
          }
                axios.post(this.server + 'hostel/amendment.php', JSON.stringify(body)).then((res:any) => {

             console.log(res);

            //console.log('Confirm Okay');
            this.presentToast('Submitted successfully !', 'success');
            this.route.navigate(['hostel/registration/']);})

          }
        }
      ]
    });

    await alert.present();
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
