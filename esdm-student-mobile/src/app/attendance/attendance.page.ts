import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import axios from 'axios';
import * as moment from 'moment';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  server : string = 'http://localhost/php-folder/';
  attendance_records:any = []

  constructor(private router:Router, public userService:UserServiceService,public loadingController: LoadingController) { }

  ngOnInit() {

    this.fetchAttendance(0);

    
  }

  fetchAttendance(event){
    let body = {
       u_id: '2',
      action:'list_attendance',
    }

    axios.post(this.server + '/attendance/attendance-student.php', JSON.stringify(body)).then((res:any) => {
      this.attendance_records = [...res.data.attendance]
      this.attendance_records.forEach( _r => {
        _r.attendance_timestamp = moment(_r.attendance_timestamp).add(8,'hours')
      })

      if(event != 0){
        event.target.complete();
      }
    })

  }

  backHome(){
  	this.router.navigate(['./home'])
  }

  openCamera(){
  	// console.log(this.userService.currentUserData)

    this.signAttendance(0)
  }

  async signAttendance(class_id){

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Signing Attendance',
      duration: 2000
    });
    await loading.present();

    let body = {
      action:'sign_attendance',
        u_id: '2',
        class_id: '1',
    }


    axios.post(this.server + '/attendance/attendance-student.php', JSON.stringify(body)).then((res:any) => {
      console.log(res.data);
      this.loadingController.dismiss();
      this.fetchAttendance(0);
    })
  }

}
