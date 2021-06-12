import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  constructor(private router:Router, public us:UserServiceService) { }

  ngOnInit() {
  }

  backHealth(){
  	this.router.navigate(['./health'])
  }
}
