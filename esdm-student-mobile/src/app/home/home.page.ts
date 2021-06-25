import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { UserServiceService } from '../user-service.service';
import { ToastController } from '@ionic/angular';
// import axios from 'axios';
import { HttpClient } from '@angular/common/http';

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
		iconPath:"assets/icon/dining.svg",
		label:"Dining",
		route:"dining"
	},
	{
		iconPath:"assets/icon/health.svg",
		label:"Health",
		route:"health"
	},
	{
		iconPath:"assets/icon/vehicle.svg",
		label:"Vehicle",
		route:"vehicle"
	},
	{
		iconPath:"assets/icon/hostel.svg",
		label:"Residential Colleges",
		route:"hostel"
	},
	{
		iconPath:"assets/icon/course-manage.svg",
		label:"ProCourse",
		route:"procourse"
	}

	]

	constructor( private router:Router, private storage:Storage, public us:UserServiceService, private toastController:ToastController, private http: HttpClient) {}

	visitService(path){
		let body = {
			msg: this.us.currentUserData.u_username + "+" + path + "+" + new Date(Date.now()),
			timestamp: new Date(Date.now()),
			module: path,
			user: this.us.currentUserData.u_username
		}

		const url = "https://iw8si6.deta.dev/"
		this.http.post(url, body).subscribe((res:any) => {
			console.log(res);
		})
		
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
