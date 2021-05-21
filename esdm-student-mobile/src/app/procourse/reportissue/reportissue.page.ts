import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reportissue',
  templateUrl: './reportissue.page.html',
  styleUrls: ['./reportissue.page.scss'],
})
export class ReportissuePage implements OnInit {

  constructor(private router:Router,public alertController: AlertController) { }

  ngOnInit() {
  }

  backProcourse(){
  	this.router.navigate(['./procourse'])
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Thanks for reporting',
      message: 'Report submitted. We will review your report and take action',
      buttons: ['Done']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  

}
