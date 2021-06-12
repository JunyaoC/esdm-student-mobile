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

  server : string = 'http://localhost/php-folder/';
  electric:any = [];
  qty_iron: any;
  qty_charger:any;
  qty_heater:any;
  qty_toaster:any;
  qty_dryer:any;
  qty_radio:any;
  price:any;
  selectedOption;

  constructor(private route: Router, private aroute: ActivatedRoute, private toastController:ToastController,public us:UserServiceService) { }

  ngOnInit() {
    this.fetchAppliances();
    this.totalPrice();
    this.aroute.queryParams
      .subscribe(params => {
        //console.log(params); // { kolej_id: 1 }

        this.qty_iron = params['qty_iron'];
        this.qty_charger = params['qty_charger'];
        this.qty_heater = params['qty_heater'];
        this.qty_toaster = params['qty_toaster'];
        this.qty_dryer = params['qty_dryer'];
        this.qty_radio = params['qty_radio'];

        console.log(this.qty_iron); // 1
      }
    );
  }


  fetchAppliances(){
    let body = {
      action:'list_electric',
    }

    axios.post(this.server + 'hostel/electric-page.php', JSON.stringify(body)).then((res:any) => {

      this.electric = [...res.data.detail]

      //console.log(res);
    })

  }

  totalPrice(){
    let body = {
        student_id : this.us.currentUserData.u_id,
        qty_iron:this.qty_iron,
        qty_charger:this.qty_charger,
        qty_heater:this.qty_heater,
        qty_toaster:this.qty_toaster,
        qty_dryer:this.qty_dryer,
        qty_radio:this.qty_radio,
        action:'totalprice',
    }

    axios.post(this.server + 'hostel/electric-page.php', JSON.stringify(body)).then((res:any) => {

      this.price = res.data.detail;

      //console.log(body);
    })

  }

    electricHistory(){
      let body = {
        student_id : this.us.currentUserData.u_id,
        method: this.selectedOption,
        action:'paymentMethod',
      }
      axios.post(this.server + 'hostel/electric-page.php', JSON.stringify(body)).then((res:any) => {

        console.log(res);
        this.route.navigate(['hostel/electric/electric-list']);
        this.presentToast('Register successfully !', 'success');

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
