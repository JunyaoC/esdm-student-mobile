import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private router:Router,public alertController: AlertController) { }


  ngOnInit() {
  }

  backCourse(){
  	this.router.navigate(['./procourse/courselist'])
  }
  
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Design Thinking For Enterpreneur - Section 1',
      message: 'Date : 30/5/2021<br>Location : UTM P20<br>Facilitator : ASSOC. PROF. DR ABDUL RASHID BIN HUSAIN',
      buttons: ['Cancel', 'Register']
    });

    await alert.present();
    
  }
  
}
