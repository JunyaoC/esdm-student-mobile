import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  backHome(){
  	this.router.navigate(['./home'])
  }

  goregistervehicle(){
  	this.router.navigate(['./registervehicle'])
  }



}
