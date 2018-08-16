import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCard, MatCardModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AlertModule } from 'ngx-bootstrap/alert';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './auth/components/login-form/login-form.component';
import { AuthService } from './auth/services/auth.service';
import { AuthEffects } from './auth/store/effects/auth.effects';
import { reducer } from './auth/store/reducer/auth';
import { reducers } from './auth/store/reducer/index';
const storeInitialState = {};

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
