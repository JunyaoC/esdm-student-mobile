import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { UserServiceService } from '../user-service.service';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	services:any = [
	{
		iconPath:"assets/icon/attendance.svg",
		label:"Attendance",
		route:"attendance"
	},
	{
		iconPath:"assets/icon/library.svg",
		label:"Library",
		route:"library"
	},
	{
		iconPath:"assets/icon/attendance.svg",
		label:"Attendance",
		route:"attendance"
	},
	{
		iconPath:"assets/icon/attendance.svg",
		label:"Attendance",
		route:"attendance"
	},
	{
		iconPath:"assets/icon/attendance.svg",
		label:"Attendance",
		route:"attendance"
	},
	{
		iconPath:"assets/icon/attendance.svg",
		label:"Attendance",
		route:"attendance"
	}

	]

	constructor( private router:Router, private storage:Storage, public us:UserServiceService, private toastController:ToastController) {}

	visitService(path){
		this.router.navigate(['./' + path])
	}

	logout(){
		this.storage.set('storage_xxx', null);
		this.us.currentRole = null;
		this.presentToast('Bye Bye... 😥', 'dark');
		this.router.navigate(['/login']);
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
