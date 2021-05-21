import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { 
    // this.headers = new HttpHeaders();
    // this.headers.append("Accept",'application/json');
    // this.headers.append("Content-Type",'application/json');
    // this.headers.append("Access-Control-Allow-Origin",'*');

    
  }

  // addVehicle(data){
  //   return this.http.post('http://localhost/esdm-student-mobile-main/php-folder/createvehicle.php',data);
  // }
  // submit(registrationForm){
  //   return axios.post('http://localhost/esdm-student-mobile/php-folder/createvehicle.php',registrationForm.value);
  // }
}
