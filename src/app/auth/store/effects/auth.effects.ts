import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import 'rxjs/Rx';
import { AuthService } from '../../services/auth.service';
import { AuthActionTypes, Login, LoginFailure, LoginSuccess } from '../actions/auth';

/* The @Effect() decorator provides metadata to register observable side-effects in the effects class.
Registered effects provide new actions provided by the source Observable to the store.*/

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {
  }

  @Effect()
  public load$ = this.actions$
    .ofType(AuthActionTypes.Login)
    .switchMap((action: Login) => {
      return this.authService.login(action.payload)
        .map((data) => {
          this.router.navigate(['/dashboard']);
          return new LoginSuccess(data);
        })
        .catch((error) => {
          return of(new LoginFailure(error));
        });
    });

}
