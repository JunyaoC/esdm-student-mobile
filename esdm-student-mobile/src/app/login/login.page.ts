import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { ToastController } from '@ionic/angular';
import { UserServiceService } from '../user-service.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	username:string = ''
	password:string = ''

//	server : string = 'http://localhost/php-folder/';
	server : string ='http://localhost/esdm-student-mobile-main/php-folder/';

  constructor(private router: Router, private toastController:ToastController, public us:UserServiceService,private storage: Storage,) { }

  ngOnInit() {
  }

  login(){

  	if(this.username == '') {
			this.presentToast('Please key in your username.', 'danger');
		} else if(this.password == '') {
			this.presentToast('Please key in your password.', 'danger');
		} else {

			console.log('login', this.username, this.password);

			let body = {
				u_username: this.username,
				u_password: this.password,
				action: 'login_user'
			}

			axios.post(this.server + 'user-login.php', JSON.stringify(body)).then((res:any) => {
				console.log(res);

				if(res.data.success) {
					this.us.currentUserData = res.data.user_data[0];
					this.us.currentRole = res.data.user_data[0].u_role;

					this.storage.create()

					this.storage.set('storage_xxx', this.us.currentRole);
					this.presentToast('Welcome to ESDM Boilderplate! 😁', 'success');
					// this.router.navigate(['/home-page']);
					this.router.navigate(['./home'],{'replaceUrl':true}) /// you can make replace URL false to enable back to login page. For security concerns and hygeine, we should not allow users to navigate back to login page.
				} else {
					this.presentToast('Wrong username or password.', 'danger');
				}

			})

		}


  	
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
