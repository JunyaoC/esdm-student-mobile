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

  server : string = 'http://localhost/php-folder/';
  procourse_list:any = [];
  code:string;
  constructor(private router:Router,public alertController: AlertController,private activatedRoute: ActivatedRoute) { }
 

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let procourse_code = params['procourse_code'];
      
      console.log(procourse_code);
      this.code=procourse_code;
      this.fetchCourselist(1);
    });
 
    
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
  fetchCourselist(event){
    let body = {
      action:'list_procourse',
      id:this.code,
    }

    axios.post(this.server + 'procourse/coursedetails.php', JSON.stringify(body)).then((res:any) => {
      this.procourse_list = [...res.data.procourse]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })

  }
  
}
