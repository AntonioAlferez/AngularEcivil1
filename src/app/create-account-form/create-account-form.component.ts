import { UserDto } from './../models/user-dto';

import { Component, OnInit } from '@angular/core';
import { UserTrans } from '../transictions/user-trans';
//import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent implements OnInit {

  user: UserDto;
  passOk: boolean;
  passColor: string;
  password: string;
  password2: string;
  accept: boolean;
  //myForm: FormGroup;

  constructor(){
    this.passOk = false;
    this.passColor="black";
    this.accept = false;
    this.user = new UserDto();
  }
  ngOnInit() {

    /*this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      organization: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      accept: new FormControl(),
    });*/
  }

  onSignIn(form: NgForm){
    this.checkPass(form.value.password, form.value.password2);
    if(!this.passOk){
      this.passColor = "red";
    }
  }
  
  checkPass(pass1: string, pass2: string){

    if(pass1 == pass2){
      this.passOk = true;
    }
  }
  
}
