import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-kuota-pengetua',
  templateUrl: './kuota-pengetua.page.html',
  styleUrls: ['./kuota-pengetua.page.scss'],
})
export class KuotaPengetuaPage implements OnInit {

  server : string = 'http://localhost/php-folder/';
  register_detail;
  status;

  constructor(private route: Router) { }

  ngOnInit() {
    this.register();
    this.verify();
  }

  register(){
    let body ={
      action:'check-register',
    }

    axios.post(this.server + 'hostel/control-register.php', JSON.stringify(body)).then((res:any) => {

      this.register_detail = res.data.detail;
      console.log(res);

    })
  }

  verify(){
    let body ={
      action:'check_kpstatus',
    }

    axios.post(this.server + 'hostel/control-register.php', JSON.stringify(body)).then((res:any) => {

      this.status = res.data.detail;
      console.log(res);

    })
  }

  KPregister(){
    this.route.navigate(['hostel/registration/kuota-pengetua/register']);
  }

}
