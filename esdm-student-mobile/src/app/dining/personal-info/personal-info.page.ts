import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserServiceService } from '../../user-service.service';
import axios from 'axios';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {

  server : string = 'http://localhost/php-folder/';
  user_list :any = [];

  constructor(private router:Router,public alertController: AlertController,public us:UserServiceService) { }

  ngOnInit() {
     this.fetchUser(0);
  }

  fetchUser(event){

    let body = {
      action:'fetch_user',
      student_id : this.us.currentUserData.u_id,
    }

    axios.post(this.server + 'dining/user.php', JSON.stringify(body)).then((res:any) => {
      this.user_list = [...res.data.user]

      console.log(this.user_list);

      if(event != 0){
        event.target.complete();
      }
    })

  }


  showLegalInfo() {

    this.alertController.create({
      header: 'Legal Information',
      subHeader: '',
      message: '<p>This product includes software from ESDM Project. Copyright(c) 2021.<br><br>Unless required by the applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</p>',
      buttons: ['OK']
    }).then(res => {

      res.present();
    });

  }

  showContact() {

    this.alertController.create({
      header: 'Contact us via',
      subHeader: '',
      message: '<p>Email: admin@utm.my</p><p>Hotline Number: 088-985698</p>',
      buttons: ['OK']
    }).then(res => {

      res.present();
    });

  }



  home(){
  	  this.router.navigate(['dining'])
  }

  history(){
  	  this.router.navigate(['dining/order-history'])
  }

  personal(){
  	  this.router.navigate(['dining/personal-info'])
  }

  cart(){
      this.router.navigate(['dining/cart'])
  }



  orderpage(){
    this.router.navigate(['dining/order'])
  }


}
