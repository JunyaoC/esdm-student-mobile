import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';
import * as moment from 'moment';
import { UserServiceService } from '../user-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

	slot:any
	status:any = 'pending'
	server : string = 'http://localhost/php-folder/';

  constructor(
  	private router:Router,
  	private route:ActivatedRoute,
  	public userService:UserServiceService,
  	public toastController: ToastController
  	) { }

  ngOnInit() {

  	this.route.queryParamMap.subscribe(params => {
      let data = JSON.parse(params.get("slot"));
      this.slot = data;
      console.log(data)
    });

  }
  
  submit(){
  	this.status = "Confirmed"
  	
  	let body = {
  		action:'book_slot',
  		u_id:'2',
  		slot_id: this.slot.slot_id
  	}

  	axios.post(this.server + '/health/health-student.php', JSON.stringify(body)).then((res:any) => {
    	if(res.data.success){
    		this.presentToast();
    	}
    })

  }

  cancel(){
    this.router.navigate(['./appointment'])
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Book succesfully!',
      duration: 2000,
      color:'success'
    });
    toast.present();
    this.router.navigate(['./record'])
  }

}
