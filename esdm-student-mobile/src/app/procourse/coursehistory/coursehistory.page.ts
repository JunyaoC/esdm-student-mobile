import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursehistory',
  templateUrl: './coursehistory.page.html',
  styleUrls: ['./coursehistory.page.scss'],
})
export class CoursehistoryPage implements OnInit {

  constructor(private router:Router) { }


  ngOnInit() {
  }

  backProcourse(){
  	this.router.navigate(['./procourse'])
  }

}
