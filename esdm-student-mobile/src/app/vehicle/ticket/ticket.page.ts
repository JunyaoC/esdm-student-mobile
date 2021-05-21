import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  govehicle(){
  	this.router.navigate(['./vehicle'])
  }

}
