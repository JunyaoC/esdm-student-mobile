import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-reportissue',
  templateUrl: './reportissue.page.html',
  styleUrls: ['./reportissue.page.scss'],
})
export class ReportissuePage implements OnInit {


  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router,public alertController: AlertController) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
	  this.loginForm = this.fb.group({
	      matric: ['',  [Validators.required,
      Validators.pattern('[A-Z0-9]+'), Validators.maxLength(9)]],
	      title: ['', Validators.required],
        name: ['',  Validators.required]

	});
  }
  isValidInput(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
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
