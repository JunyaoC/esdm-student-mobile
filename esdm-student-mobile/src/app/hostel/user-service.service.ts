import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UserServiceService {

	currentUserData:any
	currentRole:any

	constructor() { }

	getStudentData(){
		axios.post('http://localhost/php-folder/get_student.php', JSON.stringify(u_id.this.currentUserData.u_id)).then((res:any) => {
			this.currentUserData.student = res.data.student[0]
			console.log(this.currentUserData)
		)}
	}
}
