import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UserServiceService {

	currentUserData:any
	currentRole:any

	constructor() { }
}
