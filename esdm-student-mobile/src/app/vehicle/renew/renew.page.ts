import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.page.html',
  styleUrls: ['./renew.page.scss'],
})
export class RenewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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

}
