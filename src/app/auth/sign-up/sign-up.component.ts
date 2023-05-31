import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueName } from '../validators/unique-name';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  authForm: FormGroup = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-Z0-9]+$/),
        ],
        [this.uniqueName.validate]
      ),
      password: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.required,
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.required,
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  constructor(
    private matchPassword: MatchPassword,
    private uniqueName: UniqueName
  ) {}

  ngOnInit(): void {}

  convertToFormControl(absCtrl: AbstractControl): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }
}
