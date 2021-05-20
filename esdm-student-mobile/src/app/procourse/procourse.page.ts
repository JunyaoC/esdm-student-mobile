import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procourse',
  templateUrl: './procourse.page.html',
  styleUrls: ['./procourse.page.scss'],
})
export class ProcoursePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  backHome(){
  	this.router.navigate(['./home'])
  }

  visitService(path){
		this.router.navigate(['./procourse/courselist'])
	}

  history(path){
		this.router.navigate(['./procourse/coursehistory'])
	}

  report(path){
    this.router.navigate(['./procourse/reportissue'])
  }

}