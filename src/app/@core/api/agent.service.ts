import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent } from 'src/app/models/agent';
import { GlobalConstants } from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  http: HttpClient;
  private path = GlobalConstants.api + 'agent/agent/';

  constructor(http: HttpClient) {
    this.http = http;
   }

  getAllAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.path);
  }

  createAgent(agent: Agent): Observable<Agent> {
    console.log('Agent :');
    console.log(agent);
    return this.http.post<Agent>(this.path, agent);
  }

  deleteAgent(agentId: string): Observable<any> {
    return this.http.delete(this.path + agentId);
  }

  updateAgent(agentId: string | number, changes: Partial<Agent>): Observable<any> {
    return this.http.put(this.path + agentId, changes);
  }
}
