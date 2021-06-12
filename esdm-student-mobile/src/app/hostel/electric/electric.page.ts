import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import axios from 'axios';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-electric',
  templateUrl: './electric.page.html',
  styleUrls: ['./electric.page.scss'],
})
export class ElectricPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  private qty_iron = 0;
  private qty_heater = 0;
  private qty_charger = 0;
  private qty_toaster = 0;
  private qty_dryer = 0;
  private qty_radio = 0;
  electric;
  count;


  constructor(private route: Router, private toastController:ToastController,public us:UserServiceService) { }

  ngOnInit() {
    this.controlRegistration();

  }

  controlRegistration(){
    let body = {
      student_id : this.us.currentUserData.u_id,
      action:"checkStudent",
    }

    axios.post(this.server + 'hostel/electric-page.php', JSON.stringify(body)).then((res:any) => {

      this.count = res.data.detail;

      //console.log(res);
    })
  }

  private increment (electric) {
    if(electric == 'iron'){
      this.qty_iron++;
    }
    if(electric == 'heater'){
      this.qty_heater++;
    }
    if(electric == 'charger'){
      this.qty_charger++;
    }
    if(electric == 'toaster'){
      this.qty_toaster++;
    }
    if(electric == 'dryer'){
      this.qty_dryer++;
    }
    if(electric == 'radio'){
      this.qty_radio++;
    }

  }

  private decrement (electric) {
    if(electric == 'iron'){
      if(this.qty_iron>0){
        this.qty_iron--;
      }
    }
    if(electric == 'heater'){
      if(this.qty_heater>0){
        this.qty_heater--;
      }
    }
    if(electric == 'charger'){
      if(this.qty_charger>0){
        this.qty_charger--;
      }
    }
    if(electric == 'toaster'){
      if(this.qty_toaster>0){
        this.qty_toaster--;
      }
    }
    if(electric == 'dryer'){
      if(this.qty_dryer>0){
        this.qty_dryer--;
      }
    }
    if(electric == 'radio'){
      if(this.qty_radio>0){
        this.qty_radio--;
      }
    }
  }

  paymentPage(){
    let body = {
      student_id : this.us.currentUserData.u_id,
      qty_iron : this.qty_iron,
      qty_charger : this.qty_charger,
      qty_heater : this.qty_heater,
      qty_toaster : this.qty_toaster,
      qty_dryer : this.qty_dryer,
      qty_radio : this.qty_radio,
      action:'add-item',
    }
    axios.post(this.server + 'hostel/electric-page.php', JSON.stringify(body)).then((res:any) => {

     console.log(res);
     this.route.navigate(['hostel/electric/payment'], {queryParams:{ qty_iron : this.qty_iron,
      qty_charger : this.qty_charger,
      qty_heater : this.qty_heater,
      qty_toaster : this.qty_toaster,
      qty_dryer : this.qty_dryer,
      qty_radio : this.qty_radio } });
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

  electricHistory(){
    this.route.navigate(['hostel/electric/payment/payment-history']);
  }


}
