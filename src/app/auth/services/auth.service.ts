import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { Authenticate, User } from '../models/user';

export const heroes = [
  {
    id: 1,
    name: 'Whirlwind',
  },
  {
    id: 2,
    name: 'Bombastic',
    addresses: [
      {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
    ]
  },
  {
    id: 3,
    name: 'Magneta',
    addresses: [ ]
  },
];
@Injectable()
export class AuthService {

  constructor() {
  }

  public login({username, password}: Authenticate):Observable<User>  {

    if (username !== 'test') {
      return _throw('Invalid username or password');
    }
    return of({
      name: username,
      password: password
    })
  }

  public logout() {
    return of(true);
  }
}
