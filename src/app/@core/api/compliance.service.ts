import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compliance } from 'src/app/models/compliance';
import { GlobalConstants } from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class ComplianceService {

  http: HttpClient;
  private path = GlobalConstants.api + 'compliance/compliance/';

  constructor(http: HttpClient) {
    this.http = http;
   }

  getAllCompliances(): Observable<Compliance[]> {
    return this.http.get<Compliance[]>(this.path);
  }

  createCompliance(compliance: Compliance): Observable<Compliance> {
    console.log('Compliance :');
    console.log(compliance);
    return this.http.post<Compliance>(this.path, compliance);
  }

  deleteCompliance(complianceId: string): Observable<any> {
    return this.http.delete(this.path + complianceId);
  }

  updateCompliance(complianceId: string | number, changes: Partial<Compliance>): Observable<any> {
    return this.http.put(this.path + complianceId, changes);
  }
}
