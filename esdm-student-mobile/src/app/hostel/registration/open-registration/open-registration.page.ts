import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router'; 
import axios from 'axios';

@Component({
  selector: 'app-open-registration',
  templateUrl: './open-registration.page.html',
  styleUrls: ['./open-registration.page.scss'],
})
export class OpenRegistrationPage implements OnInit {

	server : string = 'http://localhost/php-folder/';
  college_records:any = [];

  constructor(private router:Router) { }

  ngOnInit() {
  }
  fetchCollege(){
    let body = {
      action:'list_college',
    }

    axios.post(this.server + 'hostel/open-registration.php', JSON.stringify(body)).then((res:any) => {
      
      this.college_records = res.data.colleges;

    })

  }

}
