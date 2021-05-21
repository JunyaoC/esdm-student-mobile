import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reportissue',
  templateUrl: './reportissue.page.html',
  styleUrls: ['./reportissue.page.scss'],
})
export class ReportissuePage implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private router:Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
	  this.loginForm = this.fb.group({
	      matric: ['',  [Validators.required,
      Validators.pattern('[A-Z0-9]+'), Validators.maxLength(9)]],
	      title: ['', Validators.required]
	});
  }
  isValidInput(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
}

  backProcourse(){
  	this.router.navigate(['./procourse'])
  }
  

}
