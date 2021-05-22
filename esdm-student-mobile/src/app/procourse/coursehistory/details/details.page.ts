import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private router:Router,public alertController: AlertController,private activatedRoute: ActivatedRoute) { }
 
  
  section:string;
  server : string = 'http://localhost/php-folder/';
  section_list = [];

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let procourse_sec = params['procourse_sec'];
      this.section=procourse_sec;
      this.fetchSectionlist(0);
    });
    
    
    // console.log(this.section);
  }

  backCourse(){
  	this.router.navigate(['./procourse/coursehistory'])
  }

  fetchSectionlist(event){
    let body = {
      action:'list_section',
      id:this.section,
    }

    axios.post(this.server + 'procourse/historydetails.php', JSON.stringify(body)).then((res:any) => {
      this.section_list = [...res.data.section]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })

  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancel Appointment',
      message: 'Are you sure you want to cancel this appointment?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
