import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.page.html',
  styleUrls: ['./issue.page.scss'],
})
export class IssuePage implements OnInit {

  constructor(private router:Router) { }

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';

  ngOnInit() {
  }
  backHome(){
  	this.router.navigate(['./procourse'])
  }
  report(path){
		this.router.navigate(['./procourse/reportissue'])
	}

  history(path){
		this.router.navigate(['./procourse/historyissue'])
	}

}
