import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthStoreState } from 'src/app/@store/auth';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthState } from 'src/app/@store/auth/selectors';
import { AuthLoginAction } from 'src/app/@store/auth/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  user: User = {} as any;
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(private store: Store<AuthStoreState.State>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit(): void {
    console.log(this.user);
    const payload = {
      username: this.user.username,
      password: this.user.password
    };
    this.store.dispatch(AuthLoginAction({payload}));  
  }

}
