import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-coursehistory',
  templateUrl: './coursehistory.page.html',
  styleUrls: ['./coursehistory.page.scss'],
})
export class CoursehistoryPage implements OnInit {
  
  server : string = 'http://localhost/php-folder/';
  history_list:any = [];

  constructor(private router:Router) { }


  ngOnInit() {
    this.fetchHistorylist(0);
  }

  backProcourse(){
  	this.router.navigate(['./procourse'])
  }

  viewDetails()
  {
    this.router.navigate(['./procourse/coursehistory/details'])
  }
  
  fetchHistorylist(event){
    let body = {
      action:'list_history',
    }

    axios.post(this.server + 'procourse/history.php', JSON.stringify(body)).then((res:any) => {
      this.history_list = res.data.history

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })

  }
}