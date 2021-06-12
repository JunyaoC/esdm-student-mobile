import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
	providedIn: 'root'
})
export class UserServiceService {

	currentUserData:any
	currentRole:any

	constructor() { }

	getStudentData(){
		axios.post('https://esdm-php-divio.us.aldryn.io/php-folder/get_student.php', JSON.stringify({u_id:this.currentUserData.u_id})).then(res => {

      this.currentUserData = res.data.student[0]
      console.log(this.currentUserData);

    })
	}
}
