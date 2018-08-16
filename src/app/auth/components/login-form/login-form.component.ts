import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Authenticate } from '../../models/user';
import { AuthState } from '../../store/reducer/index';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy, OnChanges {
  public loginForm: FormGroup;
  @Input()
  public errorMessage: string;

  @Input()
  public pending: boolean;

  @Output()
  public onLogin = new EventEmitter<Authenticate>();

  constructor(private fb: FormBuilder,
              private _store: Store<AuthState>) {
  }

  public ngOnInit() {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  public ngOnDestroy() {
  }

  public ngOnChanges() {
    if (this.pending) {
      this.loginForm.disable();
    }
  }

  public onSubmit() {
    if (this.loginForm.valid) {
      this.onLogin.emit(this.loginForm.value);
    }
  }
}
