import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router'; 
import axios from 'axios';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.page.html',
  styleUrls: ['./dining.page.scss'],
})
 
export class DiningPage implements OnInit {

  server : string = 'https://esdm-php-divio.us.aldryn.io/php-folder/';
  restaurant_records:any = [];
  restaurant_id : string ;

  constructor(private router:Router) { }

  ngOnInit() {

    this.fetchRestaurant(0);

  }

  backHome(){
  	this.router.navigate(['./home'])
  }

  checkMenu(index){
    this.router.navigate(['dining/food'],{queryParams:{restaurant_id:index}})
  }

  fetchRestaurant(event){
    let body = {
      action:'list_restaurant',
    }

    axios.post(this.server + 'dining/restaurant.php', JSON.stringify(body)).then((res:any) => {
      this.restaurant_records = [...res.data.restaurant]

      console.log(res);

      if(event != 0){
        event.target.complete();
      }
    })
  }

}
