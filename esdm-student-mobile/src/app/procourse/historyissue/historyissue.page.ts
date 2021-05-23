import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import axios from 'axios';
import { UserServiceService } from '../../user-service.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-historyissue',
  templateUrl: './historyissue.page.html',
  styleUrls: ['./historyissue.page.scss'],
})
export class HistoryissuePage implements OnInit {

  
  constructor(private router:Router,public alertController: AlertController,public us:UserServiceService,private toastController:ToastController,private storage: Storage) { }
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
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm?',
      message: 'Once delete cannnot retrieve back your problem.',
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
            this.deleteissue(index);
          }
        }
      ]
    });
    
    await alert.present();
    

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

  }

    async deleteissue(index)
    {
      let body = {
        id: index,
        action: 'issue_delete',
      }

      axios.post(this.server + 'procourse/reportissue.php', JSON.stringify(body)).then((res:any) => {

        console.log(res);

        if(res.data.success==true) {
          
          this.presentToast('Successfully delete the issue.', 'success');
          this.router.navigate(['./procourse/issue']);
        
        } else {
          this.presentToast('Cannot delete the issue', 'danger');
          this.router.navigate(['./procourse/historyissue']);
        }


      })

    }





  async presentToast(message:any ,color:any) {
		const toast = await this.toastController.create({
			color: color,
			message: message,
			duration: 2000
		});
		toast.present();
	}


}
