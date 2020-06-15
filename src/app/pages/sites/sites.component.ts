import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SiteStoreState } from 'src/app/@store/site';
import { Observable } from 'rxjs';
import { Site } from 'src/app/models/site';
import { selectAllSites } from 'src/app/@store/site/selectors';
import { GetSitesRequestAction } from 'src/app/@store/site/actions';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {

  sites$: Observable<Site[]>;


  constructor(private store: Store<SiteStoreState.State>) { }

  ngOnInit(): void {
    this.store.dispatch(GetSitesRequestAction());

    this.sites$ = this.store.select(selectAllSites);
  }

}
