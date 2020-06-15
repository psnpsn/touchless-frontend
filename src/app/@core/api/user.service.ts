import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { GlobalConstants } from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http: HttpClient;
  private path = GlobalConstants.api + 'user';

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.path, user);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete(this.path + '/' + userId);
  }

  updateUser(userId: string | number, changes: Partial<User>): Observable<any> {
    return this.http.put(this.path + '/' + userId, changes);
  }

}
