import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsersPage } from '../models/users-page';
import { UserResponse } from '../models/user-response';
import { UserCreateRequestModel } from '../models/user-create-request-model';
import { UserCreateResponseModel } from '../models/user-create-response-model';

@Injectable()
export class ReqResService {
  readonly baseUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<UsersPage> {
    const url = `${this.baseUrl}?page=${page}`;
    return this.http.get<UsersPage>(url);
  }

  getUser(id: number): Observable<UserResponse> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<UserResponse>(url);
  }

  createUser(
    user: UserCreateRequestModel
  ): Observable<UserCreateResponseModel> {
    return this.http.post<UserCreateResponseModel>(this.baseUrl, user);
  }

  deleteUser(id: number): Observable<string> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<string>(url);
  }
}
