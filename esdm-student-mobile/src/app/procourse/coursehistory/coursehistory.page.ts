import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-coursehistory',
  templateUrl: './coursehistory.page.html',
  styleUrls: ['./coursehistory.page.scss'],
})
export class CoursehistoryPage implements OnInit {
  
  server : string = 'http://localhost/php-folder/';
  history_list:any = [];

  constructor(private router:Router,public us:UserServiceService) { }


  ngOnInit() {
    this.fetchHistorylist(0);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  backProcourse(){
  	this.router.navigate(['./procourse'])
  }
  viewDetails(index)
  {

    this.router.navigate(['./procourse/coursehistory/details'],{queryParams:{regHis_id:index}})

  }

  
  fetchHistorylist(event){
    let body = {
      action:'list_history',
      student: this.us.currentUserData.student.student_matric,
    }

    axios.post(this.server + 'procourse/history.php', JSON.stringify(body)).then((res:any) => {
      this.history_list = [...res.data.history]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })

  }
}