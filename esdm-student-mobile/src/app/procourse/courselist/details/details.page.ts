import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import axios from 'axios';
import { ThisReceiver } from '@angular/compiler';

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


  constructor(private router:Router,public alertController: AlertController,private activatedRoute: ActivatedRoute) { }
 

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let procourse_code = params['procourse_code'];
      this.code=procourse_code;
      this.fetchCourselist(0);
      this.fetchSectionlist(0);
    });
    
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

    const alert = await this.alertController.create({
      header: `Section ${section.section_no}`,
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


  registerCourse(section){
    console.log(section)

    let body = {
      course_section: section.courseSec_id,
      // need to change
      student: 'A18CS1234',
      seat: section.courseSec_seat-1,
      action: 'register',
    }

    
    axios.post(this.server + 'procourse/coursedetails.php', JSON.stringify(body)).then((res:any) => {

      console.log(res);

    })
  }
  
}
