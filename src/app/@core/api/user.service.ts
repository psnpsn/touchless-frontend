import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/users');
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('', user);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete('api' + userId);
  }

  updateUser(userId: string, changes: Partial<User>): Observable<any> {
    return this.http.put('' + userId, changes);
  }

}
