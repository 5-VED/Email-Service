import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule, SharedModule],
  exports: [SignUpComponent, SignInComponent],
})
export class AuthModule {}
