import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import axios from 'axios';



@Component({
  selector: 'app-reportissue',
  templateUrl: './reportissue.page.html',
  styleUrls: ['./reportissue.page.scss'],
})
export class ReportissuePage implements OnInit {


  // loginForm: FormGroup;
  matricInput;
  nameInput;
  issueTitleInput;
  contentInput;

server = 'http://localhost/php-folder/'

  constructor(private fb: FormBuilder,private router:Router,public alertController: AlertController) { }

  ngOnInit(): void {

  }


  backProcourse(){
    this.router.navigate(['./procourse/issue'])
  }

  async presentAlert() {

    let body = {
      name: this.nameInput,
      title: this.issueTitleInput,
      matric: this.matricInput,
      content: this.contentInput,
      action: 'create_issue',
    }

    
    axios.post(this.server + 'procourse/reportissue.php', JSON.stringify(body)).then((res:any) => {

      console.log(res);

    })


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Thanks for reporting',
      message: 'Report submitted. We will review your report and take action',
      buttons: ['Done']
    });
    this.router.navigate(['./procourse/issue']);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  

}