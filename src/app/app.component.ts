import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Authenticate } from './auth/models/user';
import { Login } from './auth/store/actions/auth';
import { getError, getLoginPending, getUser, State } from './auth/store/reducer/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public error$ = this._store.select(getError);
  public pending$ = this._store.select(getLoginPending);
  private user$: Subscription;

  constructor(private _store: Store<State>) {
    this.userSubscriber= this.userSubscriber.bind(this);
  }

  public ngOnInit() {
    this.user$ = this._store.select(getUser).subscribe(this.userSubscriber);

  }

  public onLogin(event: Authenticate) {
    this._store.dispatch(new Login(event))
  }

  private userSubscriber(user) {
    if(!user) {
      return;
    }
  }
}
