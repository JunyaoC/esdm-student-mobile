import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../../../../user-service.service';
import { filter } from 'rxjs/operators';
import axios from 'axios';

@Component({
  selector: 'app-register-detail',
  templateUrl: './register-detail.page.html',
  styleUrls: ['./register-detail.page.scss'],
})
export class RegisterDetailPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  kolej_id;
  block_id;
  room_id;
  matric;
  activity:any;
  reason:any;

  constructor(public alertController: AlertController,private route: Router,public us:UserServiceService, private toastController:ToastController, private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.aroute.queryParams
      .pipe(filter(params => params.kolej_id))
      .subscribe(params => {
        //console.log(params); // { kolej_id: 1 }

        this.kolej_id = params.kolej_id;
        this.block_id = params.block_id;
        this.room_id = params.room_id;
        console.log(this.kolej_id); // 1
      }
    );
  }

  submitForm() {
    let body = {
      kolej_id:this.kolej_id,
      room_id:this.room_id,
      block_id:this.block_id,
      student_id:this.us.currentUserData.u_id,
      activity:this.activity,
      reason:this.reason,
      action:'kuota-pengetua',
    }
    axios.post(this.server + 'hostel/kuota-pengetua.php', JSON.stringify(body)).then((res:any) => {
     console.log(res);
     this.route.navigate(['hostel/registration']);
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
