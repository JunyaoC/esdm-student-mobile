import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {
  server : string = "http://localhost/php-folder/";
  ticket_records:any =[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.fetchTicket(0);
  }

  govehicle(){
  	this.router.navigate(['./vehicle'])
  }

  fetchTicket(event){
    let body={
      action: 'show_ticket',
    }
    axios.post(this.server+'vehicle/ticket.php', JSON.stringify(body)).then((res:any)=>{
      this.ticket_records = [...res.data.ticket]

       console.log(this.ticket_records);
    })

  }

}
