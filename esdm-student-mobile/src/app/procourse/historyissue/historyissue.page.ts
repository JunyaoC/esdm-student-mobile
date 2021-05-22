import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import axios from 'axios';


@Component({
  selector: 'app-historyissue',
  templateUrl: './historyissue.page.html',
  styleUrls: ['./historyissue.page.scss'],
})
export class HistoryissuePage implements OnInit {


  constructor(private router:Router,public alertController: AlertController) { }
  server : string = 'http://localhost/php-folder/';
  list_issue:any = [];
  id:any ="";


  ngOnInit() {
  this.fetchIssuelist(0);
  }

  backProcourse(){
  	this.router.navigate(['./procourse/issue'])
  }

  fetchIssuelist(event){
    let body = {
      action:'list_issue',
    }

    axios.post(this.server + 'procourse/reportissue.php', JSON.stringify(body)).then((res:any) => {
      this.list_issue = [...res.data.issue]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })

  }

  async details(issue){

      const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Issue Answered',
      message: `${issue.issue_answer}`,
      buttons: ['Done']
    });
    await alert.present();
  }

  edit(index)
  {
    
    this.router.navigate(['./procourse/historyissue/issuedetails'],{queryParams:{issue_id:index}})

  }


}
