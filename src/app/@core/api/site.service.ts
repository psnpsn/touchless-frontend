import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from 'src/app/models/site';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  http: HttpClient;
  private path = GlobalConstants.api + 'site';

  constructor(http: HttpClient) {
    this.http = http;
   }

  getAllSites(): Observable<Site[]> {
    return this.http.get<Site[]>(this.path);
  }

  createSite(site: Site): Observable<Site> {
    return this.http.post<Site>(this.path, site);
  }

  deleteSite(siteId: string): Observable<any> {
    return this.http.delete(this.path + siteId);
  }

  updateSite(siteId: string | number, changes: Partial<Site>): Observable<any> {
    return this.http.put(this.path + siteId, changes);
  }
}
