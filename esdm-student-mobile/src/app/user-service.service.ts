import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
	providedIn: 'root'
})
export class UserServiceService {

	currentUserData:any
	currentRole:any

	server = 'http://185.185.40.33:14896/esdm-php/php-folder/'
	// server = 'http://localhost:4896/php-folder/'

	constructor() { }

	getStudentData(){
		axios.post('http://localhost/php-folder/get_student.php',JSON.stringify({u_id:this.currentUserData.u_id})).then(res => {
			this.currentUserData.student = res.data.student[0]
		})
	}
}
