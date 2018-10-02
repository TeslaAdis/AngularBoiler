import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { FormHelperService } from '../../../core/services/form-helper.service';
import { UserService } from '../../../core/services/user.service';
import { valueMatch } from '../../../shared/validators/valueMatch';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerFormSubmited: boolean;

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    private fb: FormBuilder,
    public formHelper: FormHelperService,
    private user: UserService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required, , valueMatch('password')]],
    });
  }

  public register(): void {
    this.registerFormSubmited = true;
    if (this.registerForm.valid) {
      this.user.login({
        firstName: this.registerForm.get('firstName').value,
        lastName: this.registerForm.get('lastName').value,
        email: this.registerForm.get('email').value,
        image: null
      });
      this.dialogRef.close();
    }
  }

}
