import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService {

  constructor() { }

  public getUser(id: number): Observable<User> {
    return of({
        id,
        name: 'Super User',
      } as User);
  }
}
