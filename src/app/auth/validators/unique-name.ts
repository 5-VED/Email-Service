import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { catchError, map, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})

export class UniqueName implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (formControl: FormControl) => {
    const { value } = formControl;

    return this.authService.userNameAvailable(value).pipe(
      map((value) => {
        if (value) {
          return null;
        }
      }),
      catchError((err) => {
        if (err.error.username) {
          return of({ nonUniqueUserName: true });
        } else {
          return of({ noNetworkConnection: true });
        }
      })
    );
  };
}
