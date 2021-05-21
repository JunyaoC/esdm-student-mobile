import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.page.html',
  styleUrls: ['./courselist.page.scss'],
})
export class CourselistPage implements OnInit {

  // server : string = 'http://localhost/esdm-student-mobile-main/php-folder/';

  constructor(private router:Router) { }


  ngOnInit() {
  }

  backProcourse(){
  	this.router.navigate(['./procourse'])
  }
  viewDetails()
  {
    this.router.navigate(['./procourse/courselist/details'])
  }
  
  

}
