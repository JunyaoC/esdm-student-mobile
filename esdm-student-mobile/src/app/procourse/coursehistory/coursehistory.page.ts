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
  
  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  history_list:any = [];

  constructor(private router:Router,public us:UserServiceService) { }




  ngOnInit() {
    // this.doRefresh(0);
    this.fetchHistorylist(0);

  }
    

  async doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
    this.fetchHistorylist(0);
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