import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-electric',
  templateUrl: './electric.page.html',
  styleUrls: ['./electric.page.scss'],
})
export class ElectricPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  electric:any = [];
  private qty_iron = 0;
  private qty_heater = 0;
  private qty_charger = 0;
  private qty_toaster = 0;
  private qty_dryer = 0;
  private qty_radio = 0;
  iron;
  heater;
  charger;
  toaster;
  dryer;
  radio;
  private total = 0;
  electricName;
  price;
  count;



  constructor(private route: Router, private toastController:ToastController) { }

  ngOnInit() {
    this.fetchAppliances();
  }


  private increment (electricName) {
    if(electricName == 'iron'){
      this.qty_iron++;
    }
    if(electricName == 'heater'){
      this.qty_heater++;
    }
    if(electricName == 'charger'){
      this.qty_charger++;
    }
    if(electricName == 'toaster'){
      this.qty_toaster++;
    }
    if(electricName == 'dryer'){
      this.qty_dryer++;
    }
    if(electricName == 'radio'){
      this.qty_radio++;
    }

  }

  private decrement (electricName) {
    if(electricName == 'iron'){
      if(this.qty_iron>0){
        this.qty_iron--;
      }
    }
    if(electricName == 'heater'){
      if(this.qty_heater>0){
        this.qty_heater--;
      }
    }
    if(electricName == 'charger'){
      if(this.qty_charger>0){
        this.qty_charger--;
      }
    }
    if(electricName == 'toaster'){
      if(this.qty_toaster>0){
        this.qty_toaster--;
      }
    }
    if(electricName == 'dryer'){
      if(this.qty_dryer>0){
        this.qty_dryer--;
      }
    }
    if(electricName == 'radio'){
      if(this.qty_radio>0){
        this.qty_radio--;
      }
    }
  }

    fetchAppliances(){
    let body = {
      action:'list_electric',
    }

    axios.post(this.server + 'hostel/electric-page.php', JSON.stringify(body)).then((res:any) => {
      this.electric = res.data.detail
      console.log('ccc',res)
    })

  }
  getIron(iron){
      this.iron = iron;
  }
  getHeater(heater){
      this.heater = heater;
  }
  getDryer(dryer){
      this.dryer = dryer;
  }
  getCharger(charger){
      this.charger = charger;
  }
  getToaster(toaster){
      this.toaster = toaster;
  }
  getRadio(radio){
      this.radio = radio;
  }


  paymentPage(){

     this.route.navigate(['hostel/electric/payment'], {queryParams:{ qty_iron : this.qty_iron,
      qty_charger : this.qty_charger,
      qty_heater : this.qty_heater,
      qty_toaster : this.qty_toaster,
      qty_dryer : this.qty_dryer,
      qty_radio : this.qty_radio,
      total : this.iron * this.qty_iron + this.heater * this.qty_heater + this.dryer * this.qty_dryer + this.toaster * this.qty_toaster + this.radio * this.qty_radio,
    } });
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
