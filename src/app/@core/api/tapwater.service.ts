import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tapwater } from 'src/app/models/tapwater';
import { GlobalConstants } from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class TapwaterService {

  http: HttpClient;
  private path = GlobalConstants.api + 'tapwater';

  constructor(http: HttpClient) {
    this.http = http;
   }

  getAllTapwaters(): Observable<Tapwater[]> {
    return this.http.get<Tapwater[]>(this.path);
  }

  createTapwater(tapwater: Tapwater): Observable<Tapwater> {
    return this.http.post<Tapwater>(this.path, tapwater);
  }

  deleteTapwater(tapwaterId: string): Observable<any> {
    return this.http.delete(this.path + tapwaterId);
  }

  updateTapwater(tapwaterId: string | number, changes: Partial<Tapwater>): Observable<any> {
    return this.http.put(this.path + tapwaterId, changes);
  }
}
