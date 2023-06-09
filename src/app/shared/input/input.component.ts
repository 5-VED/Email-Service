import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() control: FormControl;

  constructor() {}

  ngOnInit(): void {}

  showError() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors
  }
}
