import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';
import * as moment from 'moment';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-class-schedule',
  templateUrl: './class-schedule.page.html',
  styleUrls: ['./class-schedule.page.scss'],
})
export class ClassSchedulePage implements OnInit {

	classes
	server : string = 'http://localhost:4896/php-folder/';

  constructor(private router:Router,private localNotifications: LocalNotifications) { }

  ngOnInit() {
  	this.fetchUpcoming(0);

  	this.localNotifications.on('trigger').subscribe( () => {
  		this.fetchUpcoming(0)
  	})
  }

   backHome(){
  	this.router.navigate(['./attendance'])
  }

  fetchUpcoming(event){
  	let body = {
      u_id: '2',
      action:'fetch_upcoming_class',
    }

    axios.post(this.server + '/attendance/attendance-student.php', JSON.stringify(body)).then((res:any) => {
      this.classes = [...res.data.upcoming]
      this.classes.forEach( async _r => {
        _r.class_time = moment(_r.class_time)
        _r.notification_scheduled = await this.localNotifications.isScheduled(_r.class_id)
        
      })

      console.log(this.classes);

      if(event != 0){
        event.target.complete();
      }
    })
  }

   scheduleNotification(_class){
  	console.log(_class)

  	this.localNotifications.schedule({
	  id: Number(_class.class_id),
	  title: `Class for ${_class.subject_name} starting soon.`,
	  text: `Time: ${moment(_class.class_time).format('hh:mm A')}`,
	  trigger: {at: moment(_class.class_time).subtract(1,'minutes').toDate()},
	});

	this.fetchUpcoming(0);
  }

  removeNotification(_class){
  	this.localNotifications.clear(Number(_class.class_id)).then( () => {
  		this.fetchUpcoming(0);
  	})
  }



}
