import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios'; 

@Component({
  selector: 'app-renew',
  templateUrl: './renew.page.html',
  styleUrls: ['./renew.page.scss'],
})
export class RenewPage implements OnInit {
  server : string = "http://localhost/php-folder/";
  renew_records:any =[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.fetchSticker(0);
  }

  govehicle(){
  	this.router.navigate(['./vehicle'])
  }

  public submit() {
    //console.log(this.registrationForm.value);
    this.router.navigate(['./vehicle/payment'])
     //    this._apiService.submit(this.registrationForm.value).then((res:any) =>{
     //   console.log("SUCCESS ===",res);
     // },(error: any) => {
     //   console.log("ERROR ===",error);
     // })
   }

   fetchSticker(event){
    let body={
      action: 'show_record',
    }

    
    axios.post(this.server+'vehicle/renew.php', JSON.stringify(body)).then((res:any)=>{
      this.renew_records = [...res.data.record]
      console.log(res);
       //console.log(this.renew_records);
    })

  }

}
