import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import axios from 'axios';
import { UserServiceService } from '../../../user-service.service';
import { ThisReceiver } from '@angular/compiler';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  server : string = 'http://localhost/php-folder/';
  procourse_list:any = [];
  code:string;
  section_list = [];
  occSeat;

  constructor(private router:Router,public alertController: AlertController,private activatedRoute: ActivatedRoute,public us:UserServiceService, private toastController:ToastController,private storage: Storage) { }
  


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let procourse_code = params['procourse_code'];
      this.code=procourse_code;
      this.fetchCourselist(0);
      this.fetchSectionlist(0);
    });
    
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 20);
  }

  backCourse(){
  	this.router.navigate(['./procourse/courselist'])
  }


  
  fetchCourselist(event){
    let body = {
      action:'list_procourse',
      id:this.code,
    }

    axios.post(this.server + 'procourse/coursedetails.php', JSON.stringify(body)).then((res:any) => {
      this.procourse_list = [...res.data.procourse]

      if(event != 0){
        event.target.complete();
      }
    })

  }
  
  fetchSectionlist(event){
    let body = {
      action:'list_section',
      id:this.code,
    }

    axios.post(this.server + 'procourse/coursedetails.php', JSON.stringify(body)).then((res:any) => {
      this.section_list = [...res.data.section]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })

  }

  async presentAlertMultipleButtons(section) {
    if(section.courseSec_maxseat!=section.courseSec_seat)
    {
       const alert = await this.alertController.create({
      header: `${section.courseSec_courseID} - Section ${section.section_no}`,
      message: `Date : ${section.courseSec_date}<br>Location : ${section.courseSec_loc}<br>Facilitator : ${section.fac_name}`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: Cancel');
          }
        }, {
          text: 'Register',
          handler: () => {
            this.registerCourse(section)
            
          }
        }
      ]
    });
    await alert.present();
    }
   

    
    
  }


  async registerCourse(section){
    console.log(section)
    this.occSeat=parseInt( section.courseSec_seat, 10) +1;
    let body = {
      
      course_section: section.courseSec_id,
      procourse_code:section.courseSec_courseID,
      student: this.us.currentUserData.student.student_matric,
      seat: this.occSeat,
      action: 'register',
    }

    
    axios.post(this.server + 'procourse/coursedetails.php', JSON.stringify(body)).then((res:any) => {

      console.log(res.data.success);

      if(res.data.success==true) {
        
        this.presentToast('Successfully make an appointment.', 'success');
        this.router.navigate(['./procourse/courselist'],{'replaceUrl':true});
      
      } else {
        this.presentToast('You had registered in other section.', 'danger');
        this.router.navigate(['./procourse/courselist']);
      }

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
