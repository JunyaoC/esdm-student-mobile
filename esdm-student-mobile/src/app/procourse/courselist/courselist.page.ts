import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { ToastController } from '@ionic/angular';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.page.html',
  styleUrls: ['./courselist.page.scss'],
})
export class CourselistPage implements OnInit {

  server : string = 'http://localhost/php-folder/';
  procourse_list:any = [];

  constructor(private router:Router, private toastController:ToastController, public us:UserServiceService) { }


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

    async doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
    this.fetchCourselist(0);
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

  async presentToast(message:any ,color:any) {
		const toast = await this.toastController.create({
			color: color,
			message: message,
			duration: 2000
		});
		toast.present();
	}
  
  

}
