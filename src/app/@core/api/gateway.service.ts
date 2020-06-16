import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gateway } from 'src/app/models/gateway';
import { GlobalConstants } from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  http: HttpClient;
  private path = 'http://localhost:8083/gateway/';

  constructor(http: HttpClient) {
    this.http = http;
   }

  getAllGateways(): Observable<Gateway[]> {
    return this.http.get<Gateway[]>(this.path);
  }

  createGateway(gateway: Gateway): Observable<Gateway> {
    return this.http.post<Gateway>(this.path, gateway);
  }

  deleteGateway(gatewayId: string): Observable<any> {
    return this.http.delete(this.path + gatewayId);
  }

  updateGateway(gatewayId: string | number, changes: Partial<Gateway>): Observable<any> {
    return this.http.put(this.path + gatewayId, changes);
  }
}
