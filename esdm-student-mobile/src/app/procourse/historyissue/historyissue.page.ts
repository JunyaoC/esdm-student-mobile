import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-historyissue',
  templateUrl: './historyissue.page.html',
  styleUrls: ['./historyissue.page.scss'],
})
export class HistoryissuePage implements OnInit {


  constructor(private router:Router) { }
  server : string = 'http://localhost/php-folder/';

  ngOnInit() {
  }

  backProcourse(){
  	this.router.navigate(['./procourse/issue'])
  }

}
