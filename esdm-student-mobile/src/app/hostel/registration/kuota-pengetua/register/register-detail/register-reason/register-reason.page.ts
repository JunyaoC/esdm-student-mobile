import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register-reason',
  templateUrl: './register-reason.page.html',
  styleUrls: ['./register-reason.page.scss'],
})
export class RegisterReasonPage implements OnInit {

  constructor(public alertController: AlertController,private route: Router, private toastController:ToastController) {}

  ngOnInit() {
  }

  async presentAlertConfirm() {
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
            //console.log('Confirm Okay');
            this.presentToast('Register successfully !', 'success');
            this.route.navigate(['hostel/registration/']);

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

