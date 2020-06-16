import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from 'src/app/models/sensor';
import { GlobalConstants } from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  http: HttpClient;
  private path = 'http://localhost:8085/sensor/';

  constructor(http: HttpClient) {
    this.http = http;
   }

  getAllSensors(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.path);
  }

  createSensor(sensor: Sensor): Observable<Sensor> {
    return this.http.post<Sensor>(this.path, sensor);
  }

  deleteSensor(sensorId: string): Observable<any> {
    return this.http.delete(this.path + sensorId);
  }

  updateSensor(sensorId: string | number, changes: Partial<Sensor>): Observable<any> {
    return this.http.put(this.path + sensorId, changes);
  }
}
