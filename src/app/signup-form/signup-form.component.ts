import { UserNameValidators } from './username.validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent  {
  form = new FormGroup(
    {
      username: new FormControl('',
        [Validators.required,
      //  Validators.minLength(3),
      //  UserNameValidators.cannotContainSpace
        ],
        UserNameValidators.shouldBeUnique
        ),
      password: new FormControl('', Validators.required)
    },

  );
  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
  login()
  {

  }
}
