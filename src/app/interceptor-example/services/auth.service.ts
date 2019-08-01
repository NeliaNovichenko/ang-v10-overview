import { Injectable, ErrorHandler } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { delay, catchError, tap, map } from 'rxjs/operators';
import { User, UserLoginModel } from '../models';
import { HttpClient } from '@angular/common/http';
import { JwtService } from './jwt.service';

const userResponse: User = {
  firstName: 'Nelia',
  lastName: 'Novichenko',
  id: '153'
};
// tslint:disable-next-line:max-line-length
const tokenResponse = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NThjYWYyNS03OTc3LTQ0OWItYTI5MC1lMmMzMDI5NWI4ODQiLCJpYXQiOiIxNTY0NjYwMTIzIiwiZXhwIjoxNTY0NjYwNzIzLCJpc3MiOiJsb2NhbGhvc3Q6NDQzNTciLCJhdWQiOiJsb2NhbGhvc3Q6NDIwMCJ9.CFlkX3v70UoCfNKd9Y09XDKbFXFxgKyCafttKEfgRok';

const response = {
  user: userResponse,
  token: tokenResponse
};


@Injectable()
export class AuthService {

  private currentUser$ = new BehaviorSubject<User>(null);

  constructor(private httpClient: HttpClient,
              private jwtService: JwtService) {
  }

  public isSignedIn(): Observable<boolean> {
    return this.currentUser$.pipe(
      map(currentUser => !!currentUser)
    );
  }

  public signIn(loginModel: UserLoginModel): Observable<User> {
    const PATH = 'https://localhost:44357/api/auth/sign-in';

    // return this.httpClient.post<>()
    return of(response).pipe(
      tap(({user, token}) => {
        this.jwtService.persistToken(token);
        this.currentUser$.next(user as User);
      }),
      catchError(error => {
        alert(error);
        return of(null);
      })
    );
  }

  public signOut(): Observable<void> {
    return of(null).pipe(
      delay(1500),
      tap(() => {
        this.currentUser$.next(null);
        this.jwtService.clearToken();
      })
    );
  }

  public getCurrentUser(): Observable<User> {
    return this.currentUser$.asObservable();
  }

}
