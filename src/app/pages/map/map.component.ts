import { Component, OnInit } from '@angular/core';
import { AuthStoreState } from 'src/app/@store/auth';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthUserProfile, selectAuthIsAuthenticated } from 'src/app/@store/auth/selectors';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  getUser: Observable<any>;
  getIsAuthenticated: Observable<any>;

  constructor(private store: Store<AuthStoreState.State>) {
    this.getUser = this.store.select(selectAuthUserProfile);
    this.getIsAuthenticated = this.store.select(selectAuthIsAuthenticated);
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('access_token'));
    console.log(localStorage.getItem('scope'));
    console.log(localStorage.getItem('isAuthenticated'));
    this.getUser.subscribe( user => {
      console.log(user);
    });
    this.getIsAuthenticated.subscribe( user => {
      console.log(user);
    });
  }

}
