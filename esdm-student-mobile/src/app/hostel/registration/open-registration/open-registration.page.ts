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
  selectedOption;
  matricNo;

  constructor(private router:Router) { }

  ngOnInit() {
    this.fetchCollege();
  }

  fetchCollege(){
    let body = {
      action:'list_college',
    }

    axios.post(this.server + 'hostel/open-registration.php', JSON.stringify(body)).then((res:any) => {

      this.college_records = [...res.data.colleges]

      // console.log(this.college_records);

    })

  }
  submitCollege(){
    let body = {
      kolej_id : this.selectedOption.kolej_id,
      matric:this.matricNo,
      action:'select_college',
    }
    axios.post(this.server + 'hostel/open-registration.php', JSON.stringify(body)).then((res:any) => {

     console.log(res);

    })
  }



}
