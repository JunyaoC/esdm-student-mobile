import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-procourse',
  templateUrl: './procourse.page.html',
  styleUrls: ['./procourse.page.scss'],
})
export class ProcoursePage implements OnInit {

  server : string = 'http://localhost/php-folder/';
  announcement_records:any = [];

  constructor(private router:Router) { }

  ngOnInit() {
    this.fetchAnnouncement(0);
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

  fetchAnnouncement(event){
    let body = {
      action:'list_announcement',
    }

    axios.post(this.server + 'procourse/announcement.php', JSON.stringify(body)).then((res:any) => {
      this.announcement_records = [...res.data.announcement]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })

  }

}