import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../../user-service.service';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  college_records:any = [];
  block_records:any = [];
  room_records:any = [];
  user_name=this.us.currentUserData.u_name;
  selectedOption;
  selectedOptionR;
  selectedOptionB;

  constructor(private route: Router,public us:UserServiceService) { }

  ngOnInit() {
    this.fetchCollege();
    this.fetchBlock();
    this.fetchRoom();
  }

  fetchCollege(){
    let body = {
      action:'list_college',
    }

    axios.post(this.server + 'hostel/open-registration.php', JSON.stringify(body)).then((res:any) => {

      this.college_records = [...res.data.colleges]
      console.log(this.college_records);
    })

  }
  fetchBlock(){
    let body = {
      action:'list_block',
    }

    axios.post(this.server + 'hostel/open-registration.php', JSON.stringify(body)).then((res:any) => {

      this.block_records = [...res.data.blocks]
      console.log(this.block_records);
    })

  }

  fetchRoom(){
    let body = {
      action:'list_room',
    }

    axios.post(this.server + 'hostel/open-registration.php', JSON.stringify(body)).then((res:any) => {

      this.room_records = [...res.data.rooms]
     console.log(this.room_records);
    })

  }

  registerdetail(){
    this.route.navigate(['hostel/registration/kuota-pengetua/register/register-detail'], {queryParams:{ kolej_id : this.selectedOption.kolej_id,block_id : this.selectedOptionB.block_id,room_id : this.selectedOptionR.room_id } });

    //this.route.navigate(['hostel/registration/kuota-pengetua/register/register-detail']);
  }


}
