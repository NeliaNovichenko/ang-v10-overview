import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FaceRectResponse } from '../models/face-rect-response.model';
import { FACE_RECT_API_KEY } from '../utils/api-key';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class FaceRectService {

  private readonly requestURL = '/process-file.json';

  constructor(private httpClient: HttpClient) { }

  public sendImage(image: File) {
    const headers = new HttpHeaders()
      .append('X-RapidAPI-Host', 'apicloud-facemark.p.rapidapi.com')
      .append('X-RapidAPI-Key', FACE_RECT_API_KEY)
      .append('Content-Type', 'application/x-www-form-urlencoded');

    const body =  new FormData().append('image', image);

    return this.httpClient.post<FaceRectResponse>(this.requestURL, body, { headers })
      .pipe(
        retry(2),
        catchError(err => {
          console.log(err);
          return of(null);
      }));
  }
}
