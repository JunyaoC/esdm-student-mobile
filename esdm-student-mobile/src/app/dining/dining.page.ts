import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-dining',
  templateUrl: './dining.page.html',
  styleUrls: ['./dining.page.scss'],
})
export class DiningPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  backHome(){
  	this.router.navigate(['./home'])
  }

  checkMenu(){
     this.router.navigate(['dining/food'])
  }
  // backHome() {
  //   this.route.navigate(['./home']);
  // }

}
