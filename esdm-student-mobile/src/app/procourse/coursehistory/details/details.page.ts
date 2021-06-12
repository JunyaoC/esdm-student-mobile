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
 
  remainSeat
  regHis_id:string;
  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  section_list = [];

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let regHis_id = params['regHis_id'];
      this.regHis_id=regHis_id;
      this.fetchSectionlist(0);
    });
    

  }

  backCourse(){
  	this.router.navigate(['./procourse/coursehistory'])
  }
  report()
  {
    this.router.navigate(['./procourse/reportissue'])
  }

  fetchSectionlist(event){
    let body = {
      action:'list_section',
      id:this.regHis_id,
    }

    axios.post(this.server + 'procourse/historydetails.php', JSON.stringify(body)).then((res:any) => {
      this.section_list = [...res.data.section]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })

  }

  async presentAlertConfirm(history) {
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
            console.log('Confirm Cancel: Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.cancelReg(history);
            
          }
        }
      ]
    });

    await alert.present();
  }

  async cancelReg(history){
    console.log(history);
    this.remainSeat=parseInt(history.courseSec_seat, 10) -1;
    let body = {
      regHis_id: history.regHis_id,
      coursesec_id:history.procourse_sec,
      seat: this.remainSeat,
      action: 'cancel',
    }

    
    axios.post(this.server + 'procourse/historydetails.php', JSON.stringify(body)).then((res:any) => {

      console.log(res);

    })

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      message: 'Your appointment was deleted.',
      buttons: ['Done']
    });
    this.router.navigate(['./procourse/coursehistory']);
    
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
