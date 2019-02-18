import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of, throwError} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {catchError, tap} from 'rxjs/operators';

export class Canine {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  dogBreed: string;
  dogUrl: string;
  dogHeight: string;
  dogWeight: string;
  dogTemperament: string;
  dogPopularity: string;
  dogDescription: string;
  dogAbout: string;
  dogExpectancy: string;
  dogGroup: string;
  dogImageUrl: string;
  giphyUrl: string;
  href: string;
  id: number;
}

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()  // injects HttpClient into class constructor
export class CanineService {

  public API = '//localhost:8080';
  public CANINE_API = this.API + '/canines';
  canines: Canine[];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Canine[]> {
    return this.http.get(this.CANINE_API)
      .map((data: any) => {
        return data['_embedded']['canines'] as Canine[];
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  get(id: string) {
    return this.http.get(this.CANINE_API + '/' + id);
  }

  getByBreed(breed: string): Observable<Canine> {
    return this.http.get(this.CANINE_API + '/search/byBreed?dogBreed=' + breed)
    .map((data: any) => {
      return data['_embedded']['canines'][0] as Canine;
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  getByBreedInitial(letter: string): Observable<Canine[]> {
    return this.http.get(this.CANINE_API  + '/search/byBreedInitial?dogBreed=' + letter)
      .map((data: any) => {
        return data['_embedded']['canines'] as Canine[];
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  // save(canine: any): Observable<any> {
  //   let result: Observable<Object>;
  //   if (canine['href']) {
  //     result = this.http.put(canine.href, canine);
  //   } else {
  //     result = this.http.post(this.CANINE_API, canine);
  //   }
  //   return result;
  // }

  // remove(href: string) {
  //   return this.http.delete(href);
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
