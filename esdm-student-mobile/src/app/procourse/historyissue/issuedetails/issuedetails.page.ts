import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import axios from 'axios';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-issuedetails',
  templateUrl: './issuedetails.page.html',
  styleUrls: ['./issuedetails.page.scss'],
})
export class IssuedetailsPage implements OnInit {


  constructor(private router:Router,public alertController: AlertController,private activatedRoute: ActivatedRoute) { }

  server : string = 'http://localhost/php-folder/';
  id:any;
  issue_detail:any = [];

  ngOnInit() {
  	this.activatedRoute.queryParams.subscribe(params => {
      let issue_id = params['issue_id'];
      this.id=issue_id;
      this.fetchissue(0);
    });
  }

   backCourse(){
  	this.router.navigate(['./procourse/historyissue'])
  }

  fetchissue(event){
    let body = {
      action:'issue_detail',
      id:this.id,
    }

    axios.post(this.server + 'procourse/reportissue.php', JSON.stringify(body)).then((res:any) => {
      this.issue_detail = [...res.data.issue_detail]

      if(event != 0){
        event.target.complete();
      }
    })

  }
  

}
