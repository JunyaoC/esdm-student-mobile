import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-registersticker',
  templateUrl: './registersticker.page.html',
  styleUrls: ['./registersticker.page.scss'],
})
export class RegisterstickerPage implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router) { }
  get platenumber() {
    return this.registrationForm.get("platenumber");
  }
  get college() {
    return this.registrationForm.get('college');
  }
  get applydate() {
    return this.registrationForm.get('applydate');
  }
  get sfee() {
    return this.registrationForm.get('sfee');
  }

  ngOnInit() {
  }


  public errorMessages = {
    platenumber: [
      { type: 'required', message: 'Plate number is required' },
      { type: 'maxlength', message: 'Plate number cannot be longer than 8 characters' }
    ],
    college: [
      { type: 'required', message: 'College is required' }
    ],
    applydate: [
      { type: 'required', message: 'Apply date is required' }
    ],
    sfee: [
      { type: 'required', message: 'Amount is required' }
    ]
  };
  registrationForm = this.formBuilder.group({
    platenumber: ['', [Validators.required, Validators.maxLength(8)]],
    college: [
      '',
      [
        Validators.required
      ]
    ],
    applydate: [
      '',
      [
        Validators.required
      ]
    ],
    sfee: [
      '',
      [
        Validators.required
      ]
    ]

  });

  public submit() {
    console.log(this.registrationForm.value);
    this.router.navigate(['./vehicle/payment'])
     //    this._apiService.submit(this.registrationForm.value).then((res:any) =>{
     //   console.log("SUCCESS ===",res);
     // },(error: any) => {
     //   console.log("ERROR ===",error);
     // })
   }

   govehicle(){
  	this.router.navigate(['./vehicle/registervehicle'])
  }

}
