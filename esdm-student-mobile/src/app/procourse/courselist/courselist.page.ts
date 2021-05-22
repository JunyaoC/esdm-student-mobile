import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.page.html',
  styleUrls: ['./courselist.page.scss'],
})
export class CourselistPage implements OnInit {

  server : string = 'http://localhost/php-folder/';
  procourse_list:any = [];

  constructor(private router:Router) { }


  ngOnInit() {
    this.fetchCourselist(0);
  }

  backProcourse(){
  	this.router.navigate(['./procourse'])
  }
  viewDetails(index)
  {
    
    this.router.navigate(['./procourse/courselist/details'],{queryParams:{procourse_code:index}})

  }

  fetchCourselist(event){
    let body = {
      action:'list_procourse',
    }

    axios.post(this.server + 'procourse/courselist.php', JSON.stringify(body)).then((res:any) => {
      this.procourse_list = [...res.data.procourse]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })

  }
  
  

}
