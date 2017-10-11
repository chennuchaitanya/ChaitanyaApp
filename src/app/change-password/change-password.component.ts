import { PasswordValidators } from './password.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form= new FormGroup({
    'old-password': new FormControl('', Validators.required, PasswordValidators.oldPasswordMatch),
    'new-password': new FormControl('', Validators.required),
    'confirm-password': new FormControl('', Validators.required)

  }, PasswordValidators.passwordMatch );

  get password(){
    return this.form.get('old-password');
  }
  get newPassword(){
    return this.form.get('new-password');
  }
  get confirmPassword(){
    return this.form.get('confirm-password');
  }

}
