import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.page.html',
  styleUrls: ['./complaint.page.scss'],
})
export class ComplaintPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  formPage() {
    this.route.navigate(['hostel/complaint/complaint-form']);
  }
  historyPage() {
    this.route.navigate(['hostel/complaint/complaint-history']);
  }

}
