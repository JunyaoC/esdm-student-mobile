import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kuota-pengetua',
  templateUrl: './kuota-pengetua.page.html',
  styleUrls: ['./kuota-pengetua.page.scss'],
})
export class KuotaPengetuaPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  KPregister(){
    this.route.navigate(['hostel/registration/kuota-pengetua/register']);
  }

}
