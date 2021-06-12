import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserServiceService } from '../user-service.service';
import axios from 'axios';

@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.page.html',
  styleUrls: ['./hostel.page.scss'],
})
export class HostelPage implements OnInit {
server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  phase_info:any = [];
  constructor(private route: Router, public us:UserServiceService) { }

  ngOnInit() {
    this.CheckPhase();
  }
    CheckPhase(){
    let body = {
      action:'phase_period',
    }

    axios.post(this.server + 'hostel/phase.php', JSON.stringify(body)).then((res:any) => {

      this.phase_info = [...res.data.detail]
      console.log(res);

    })

  }
   registerPage() {
    this.route.navigate(['hostel/registration']);
  }
     electricPage() {
    this.route.navigate(['hostel/electric/electric-list']);
  }
   complaintPage() {
    this.route.navigate(['hostel/complaint']);
  }
}
