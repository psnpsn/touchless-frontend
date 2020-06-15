import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wristband } from 'src/app/models/wristband';
import { GlobalConstants } from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class WristbandService {

  http: HttpClient;
  private path = GlobalConstants.api + 'wristband';

  constructor(http: HttpClient) {
    this.http = http;
   }

  getAllWristbands(): Observable<Wristband[]> {
    return this.http.get<Wristband[]>(this.path);
  }

  createWristband(wristband: Wristband): Observable<Wristband> {
    return this.http.post<Wristband>(this.path, wristband);
  }

  deleteWristband(wristbandId: string): Observable<any> {
    return this.http.delete(this.path + wristbandId);
  }

  updateWristband(wristbandId: string | number, changes: Partial<Wristband>): Observable<any> {
    return this.http.put(this.path + wristbandId, changes);
  }
}
