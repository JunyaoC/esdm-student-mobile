import { Injectable } from '@angular/core';
import axios from 'axios';
import { Storage } from '@ionic/storage-angular';

@Injectable({
	providedIn: 'root'
})
export class UserServiceService {

	currentUserData:any
	currentRole:any

	server = 'https://esdm-php-divio.us.aldryn.io/php-folder/'
	// server = 'http://localhost:4896/php-folder/'

	constructor(private storage: Storage) {
		this.storage.create()
		this.storage.get('user_data').then((res:any) => {
			this.currentUserData = res;
			console.log(res);
		})
	}

	getStudentData(){
		axios.post('https://esdm-php-divio.us.aldryn.io/php-folder/get_student.php',JSON.stringify({u_id:this.currentUserData.u_id})).then(res => {
			this.currentUserData.student = res.data.student[0]
		})
	}

}
