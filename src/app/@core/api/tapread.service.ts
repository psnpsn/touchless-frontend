import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tapread } from 'src/app/models/tapread';
import { GlobalConstants } from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class TapreadService {

  http: HttpClient;
  private path = 'http://localhost:8091/tapread/';

  constructor(http: HttpClient) {
    this.http = http;
   }

  getAllTapreads(): Observable<Tapread[]> {
    return this.http.get<Tapread[]>(this.path);
  }

  createTapread(tapread: Tapread): Observable<Tapread> {
    console.log('Tapread :');
    console.log(tapread);
    return this.http.post<Tapread>(this.path, tapread);
  }

  deleteTapread(tapreadId: string): Observable<any> {
    return this.http.delete(this.path + tapreadId);
  }

  updateTapread(tapreadId: string | number, changes: Partial<Tapread>): Observable<any> {
    return this.http.put(this.path + tapreadId, changes);
  }
}
