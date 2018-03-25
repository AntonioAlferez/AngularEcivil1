
import { Component, OnInit } from '@angular/core';
import { UserTrans } from '../transictions/user-trans';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent implements OnInit {

  myForm: FormGroup;

  ngOnInit() {

    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      organization: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      accept: new FormControl(),
    });
  }

}
