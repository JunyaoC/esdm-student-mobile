import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios'; 

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
server : string = "https://esdm-php-divio.us.aldryn.io/php-folder/";
sticker_records:any =[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.fetchSticker(0);
  }

  govehicle(){
  	this.router.navigate(['./vehicle'])
  }

  fetchSticker(event){
    let body={
      action: 'show_history',
    }
    axios.post(this.server+'vehicle/vehicle.php', JSON.stringify(body)).then((res:any)=>{
      this.sticker_records = [...res.data.vehicle]

       console.log(this.sticker_records);
    })

  }

}
