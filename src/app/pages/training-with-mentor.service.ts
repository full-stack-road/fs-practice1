import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TrainingWithMentor } from './trainingWithMentor';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TrainingWithMentorService {

  private trainingWithMentorUrl = 'api/trainingWithMentors';  // URL to web api

  constructor(
    private http: HttpClient) {
  }

  getTrainingWithMentors(): Observable<TrainingWithMentor[]> {
    return this.http.get<TrainingWithMentor[]>(this.trainingWithMentorUrl)
      .pipe(
        tap(_ => this.log("fetched trainings with mentor")),
        catchError(this.handleError<TrainingWithMentor[]>('getTrainingWithMentors', [])
        )
      );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a trainingWithMentorService message with the MessageService */
  private log(message: String) {
    // this.messageService.add(`trainingWithMentorService: ${message}`);
    console.log(message);
  }
}
