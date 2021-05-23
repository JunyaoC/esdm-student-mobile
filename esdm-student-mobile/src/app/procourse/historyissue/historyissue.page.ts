import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import axios from 'axios';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-historyissue',
  templateUrl: './historyissue.page.html',
  styleUrls: ['./historyissue.page.scss'],
})
export class HistoryissuePage implements OnInit {

  
  constructor(private router:Router,public alertController: AlertController,public us:UserServiceService) { }
  server : string = 'http://localhost/php-folder/';
  list_issue:any = [];
  id:any ="";

   async doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
    this.fetchIssuelist(0);
  }



  ngOnInit() {
  this.fetchIssuelist(0);
  }

  backProcourse(){
  	this.router.navigate(['./procourse/issue'])
  }

  fetchIssuelist(event){
    let body = {
      action:'list_issue',
      student: this.us.currentUserData.student.student_matric,
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
  async delete(index)
  {
    
    let body = {
      id: index,
      action: 'issue_delete',
    }

    
    axios.post(this.server + 'procourse/reportissue.php', JSON.stringify(body)).then((res:any) => {

      console.log(res);

    })


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure to <strong>delete</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    
    await alert.present();
    

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

  }


}
