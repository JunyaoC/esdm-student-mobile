import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportissue',
  templateUrl: './reportissue.page.html',
  styleUrls: ['./reportissue.page.scss'],
})
export class ReportissuePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  backProcourse(){
  	this.router.navigate(['./procourse'])
  }
  

}
