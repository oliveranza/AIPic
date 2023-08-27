import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lowercase.validator';
import { SignupService } from './signup.service';

@Component({
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  signupFrom: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService
  ) {}

  ngOnInit(): void {
    this.signupFrom = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          lowerCaseValidator,
        ],
        this.signupService.validateUsername()
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(14),
        ],
      ],
    });
  }
}
