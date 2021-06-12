import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import axios from 'axios';
import { UserServiceService } from '../../../user-service.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-issuedetails',
  templateUrl: './issuedetails.page.html',
  styleUrls: ['./issuedetails.page.scss'],
})
export class IssuedetailsPage implements OnInit {


  constructor(private router:Router,public alertController: AlertController,private activatedRoute: ActivatedRoute,public us:UserServiceService) { }

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  matricInput;
  nameInput;
  issueTitleInput;
  contentInput;
  id:any;
  issue_detail:any = [];

  ngOnInit() {
  	this.activatedRoute.queryParams.subscribe(params => {
      let issue_id = params['issue_id'];
      this.id=issue_id;
      this.fetchissue(0);
    });
  }

  backIssue(){
  	this.router.navigate(['./procourse/historyissue'])
  }

  fetchissue(event){
    let body = {
      action:'issue_detail',
      id:this.id,
    }

    axios.post(this.server + 'procourse/reportissue.php', JSON.stringify(body)).then((res:any) => {
      this.issue_detail = [...res.data.issue_detail]

      if(event != 0){
        event.target.complete();
      }
    })

  }

  async presentAlert(index) {

    let body = {
      // name: this.us.currentUserData.student.student_matric,
      title: this.issueTitleInput,
      matric: this.us.currentUserData.student.student_matric,
      content: this.contentInput,
      sid:index,
      // student: this.us.currentUserData.student.student_matric,
      action: 'edit_issue',
    }

    
    axios.post(this.server + 'procourse/reportissue.php', JSON.stringify(body)).then((res:any) => {

      console.log(res);

    })


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Reported issue edited',
      message: 'Report Edited. We will review your report and take action',
      buttons: ['Done']
    });
    this.router.navigate(['./procourse/historyissue']);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  

}
