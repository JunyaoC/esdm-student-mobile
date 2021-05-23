import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
	providedIn: 'root'
})
export class UserServiceService {

	currentUserData:any
	currentRole:any

	server : string = 'http://localhost/php-folder/';

	constructor() { }

	getStudentData(){
		axios.post('http://localhost/php-folder/get_student.php',JSON.stringify({u_id:this.currentUserData.u_id})).then(res => {
			this.currentUserData.student = res.data.student[0]
		})
	}
}
