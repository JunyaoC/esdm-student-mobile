import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import axios from 'axios';
import { UserServiceService } from '../../../user-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  electric:any = [];
  qty_iron: any;
  qty_charger:any;
  qty_heater:any;
  qty_toaster:any;
  qty_dryer:any;
  qty_radio:any;
  price:any = [];
  total:any;
  name;
  itemprice;
  selectedOption;

  constructor(private route: Router, private aroute: ActivatedRoute, private toastController:ToastController,public us:UserServiceService) { }

  ngOnInit() {
    this.fetchAppliances();
    this.aroute.queryParams
      .subscribe(params => {
        //console.log(params); // { kolej_id: 1 }
        this.qty_iron = params['qty_iron'];
        this.qty_charger = params['qty_charger'];
        this.qty_heater = params['qty_heater'];
        this.qty_toaster = params['qty_toaster'];
        this.qty_dryer = params['qty_dryer'];
        this.qty_radio = params['qty_radio'];
        this.total = params['total'];// 1
      }
    );
  }


  fetchAppliances(){
    let body = {
      action:'list_electric',
    }

    axios.post(this.server + 'hostel/electric-page.php', JSON.stringify(body)).then((res:any) => {

      this.electric = res.data.detail

      //console.log(res);
    })

  }

    electricHistory(){
      let body = {
        student_id : this.us.currentUserData.u_id,
        iron : this.qty_iron,
        heater : this.qty_heater,
        dryer : this.qty_dryer,
        toaster : this.qty_toaster,
        radio : this.qty_radio,
        charger : this.qty_charger,
        total : this.total,
        method: this.selectedOption,
        action:'paymentMethod',
      }
      axios.post(this.server + 'hostel/electric-page.php', JSON.stringify(body)).then((res:any) => {

        console.log(res);
        this.route.navigate(['hostel/electric/electric-list']);
        if(this.selectedOption != null){
          this.presentToast('Register successfully !', 'success');
        }else{
          this.presentToast('Undefined payment method !', 'danger');
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
