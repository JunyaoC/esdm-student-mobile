import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import axios from 'axios';
import * as moment from 'moment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})

export class AppointmentPage implements OnInit {

	server : string = 'http://localhost/php-folder/';
	slots = []
	selectedDate:any
	todayDate

  constructor(private router:Router, public us:UserServiceService) { }

  ngOnInit() {
  	this.todayDate = moment().format('YYYY-MM-DD');
  	this.selectedDate = moment().format('YYYY-MM-DD');
  	this.fetchSlots();
  }

  backHealth(){
  	this.router.navigate(['./health'])
  }

  fetchSlots(){

  	let body = {
      action:'list_slot',
      start_date:moment(this.selectedDate).format("YYYY-MM-DD HH:mm:ss"),
      end_date:moment(this.selectedDate).set({h:23,m:59,s:59}).format("YYYY-MM-DD HH:mm:ss")
    }

    axios.post(this.server + '/health/health-student.php', JSON.stringify(body)).then((res:any) => {
    	console.log(res.data)
      this.slots = [...res.data.slots].filter( _x => {
        if(moment(_x.slot_datetime).format('x') >= moment().format('x')){
          return _x
        }
      })

      this.slots.sort((a, b) => (a.slot_datetime > b.slot_datetime) ? 1 : -1)

    })
  }

    selectSlot(slot){
    	this.router.navigate(['./booking'],{queryParams:{slot:JSON.stringify(slot)}})
    }

}
