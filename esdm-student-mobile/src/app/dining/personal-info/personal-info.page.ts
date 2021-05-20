import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  home(){
  	  this.router.navigate(['dining'])
  }

  history(){
  	  this.router.navigate(['dining/order-history'])
  }

  personal(){
  	  this.router.navigate(['dining/personal-info'])
  }
}