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

	fetchStudent(){
		let body = {
	      u_id:'2',
	    }

	    axios.post(this.server + 'student-data.php', JSON.stringify(body)).then((res:any) => {
	    	console.log(res.data)
	    	// this.currentUserData.student = res.data.student
	    })

	}
}
