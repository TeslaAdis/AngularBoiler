import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { FormHelperService } from 'src/app/core/services/form-helper.service';
import { UserService } from 'src/app/core/authentication/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFormSubmited: boolean;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder,
    public formHelper: FormHelperService,
    private user: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }


  public login(): void {
    this.loginFormSubmited = true;
    if (this.loginForm.valid) {
      this.user.login({
        firstName: 'Lorem',
        lastName: 'Ipsum',
        email: this.loginForm.get('email').value,
        image: null
      });
      this.dialogRef.close();
    }
  }

}
