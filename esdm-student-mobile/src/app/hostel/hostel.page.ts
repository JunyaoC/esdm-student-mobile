import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.page.html',
  styleUrls: ['./hostel.page.scss'],
})
export class HostelPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
   registerPage() {
    this.route.navigate(['hostel/registration']);
  }
     electricPage() {
    this.route.navigate(['hostel/electric']);
  }
   complaintPage() {
    this.route.navigate(['hostel/complaint']);
  }
}
