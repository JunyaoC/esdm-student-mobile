import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {

  constructor(private router:Router, public us:UserServiceService) { }

  ngOnInit() {
  }

  directions:any = [
	{
		iconPath:"assets/icon/calendar.svg",
		label:"Clinic Schedule",
		route:"schedule"
	},
	{
		iconPath:"assets/icon/appointment.svg",
		label:"Book Appointment",
		route:"appointment"
	},
	{
		iconPath:"assets/icon/record.svg",
		label:"Appointment Details",
		route:"record"
	}

	]


  directPage(path){
		this.router.navigate(['./' + path])
	}

	backHome(){
	  	this.router.navigate(['./home'])
	  }

}
