import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-amendment',
  templateUrl: './amendment.page.html',
  styleUrls: ['./amendment.page.scss'],
})
export class AmendmentPage implements OnInit {

  constructor(public alertController: AlertController,private route: Router, private toastController:ToastController) {}

  ngOnInit() {
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
            //console.log('Confirm Okay');
            this.presentToast('Submitted successfully !', 'success');
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
