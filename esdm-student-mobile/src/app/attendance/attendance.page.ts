import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  backHome(){
  	this.router.navigate(['./home'])
  }

}
