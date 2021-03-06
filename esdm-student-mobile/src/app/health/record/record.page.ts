import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../user-service.service';
import axios from 'axios';
import * as moment from 'moment';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  slots:any
  viewMode:boolean = true

  noActive:boolean = false
  noPast:boolean = false


  constructor(private router:Router, public us:UserServiceService) { }

  ngOnInit() {
    this.fetchSlots();
  }

  backHealth(){
  	this.router.navigate(['./health'])
  }


  fetchSlots(){

    let body = {
      action:'list_student_slot',
      u_id:this.us.currentUserData.u_id
    }

    axios.post(this.server + '/health/health-student.php', JSON.stringify(body)).then((res:any) => {
      
      this.slots = [...res.data.slots]

      this.slots.forEach( _slot => {

        if( moment().format('x') > moment(_slot.slot_datetime).format('x')){  //unixtimestamp
          _slot.active = false;
        }else{
          _slot.active = true;
        }
      })

      this.slots.sort((a, b) => (a.slot_datetime > b.slot_datetime) ? 1 : -1)

      this.noPast = [...this.slots.filter(_s => !_s.active)].length == 0 ? true : false;
      this.noActive = [...this.slots.filter(_s => _s.active)].length == 0 ? true : false;

    })
  }

}
