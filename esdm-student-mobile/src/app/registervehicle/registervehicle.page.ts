import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-registervehicle',
  templateUrl: './registervehicle.page.html',
  styleUrls: ['./registervehicle.page.scss'],
})
export class RegistervehiclePage implements OnInit {
  // platenumber: any;
  // vmodel: any;
  // vcolor: any;
  // vtype: any;
  constructor(private formBuilder: FormBuilder,private router: Router,public _apiService: ApiService) { }
  get platenumber() {
    return this.registrationForm.get("platenumber");
  }
  get vmodel() {
    return this.registrationForm.get('vmodel');
  }
  get vcolor() {
    return this.registrationForm.get('vcolor');
  }
  get vtype() {
    return this.registrationForm.get('vtype');
  }

  public errorMessages = {
    platenumber: [
      { type: 'required', message: 'Plate number is required' },
      { type: 'maxlength', message: 'Plate number cannot be longer than 8 characters' }
    ],
    vmodel: [
      { type: 'required', message: 'Vehicle model is required' }
    ],
    vcolor: [
      { type: 'required', message: 'Vehicle color is required' }
    ],
    vtype: [
      { type: 'required', message: 'Type of vehicle is required' }
    ]
  };
  registrationForm = this.formBuilder.group({
    platenumber: ['', [Validators.required, Validators.maxLength(8)]],
    vmodel: [
      '',
      [
        Validators.required
      ]
    ],
    vcolor: [
      '',
      [
        Validators.required
      ]
    ],
    vtype: [
      '',
      [
        Validators.required
      ]
    ]

  });
  public submit() {
   console.log(this.registrationForm.value);

    //    this._apiService.submit(this.registrationForm.value).then((res:any) =>{
    //   console.log("SUCCESS ===",res);
    // },(error: any) => {
    //   console.log("ERROR ===",error);
    // })
  }

  ngOnInit() {
  }

  govehicle(){
  	this.router.navigate(['./vehicle'])
  }

  addVehicle(){
    let data={
      // platenumber: this.platenumber,
      // vmodel: this.vmodel,
      // vcolor: this.vcolor,
      // vtype: this.vtype
      // platenumber: JSON.stringify(this.platenumber),
      // vmodel: JSON.stringify(this.vmodel),
      // vcolor: JSON.stringify(this.vcolor),
      // vtype: JSON.stringify(this.vtype),
    }

    // this._apiService.addVehicle(data).subscribe((res:any) =>{
    //   console.log("SUCCESS ===",res);
    // },(error: any) => {
    //   console.log("ERROR ===",error);
    // })
 //   console.log(this.platenumber, this.vmodel, this.vcolor, this.vtype);
  }

}

