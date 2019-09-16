import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TrainingHistory } from './trainingHistory';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TrainingHistoryService {

  private trainingHistoryUrl = 'api/trainingHistorys';  // URL to web api

  constructor(
    private http: HttpClient) {
  }

  getTrainingHistorys(): Observable<TrainingHistory[]> {
    return this.http.get<TrainingHistory[]>(this.trainingHistoryUrl)
      .pipe(
        tap(_ => this.log("fetched trainings history")),
        catchError(this.handleError<TrainingHistory[]>('getTrainingHistorys', [])
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

  /** Log a trainingHistoryService message with the MessageService */
  private log(message: String) {
    // this.messageService.add(`trainingHistoryService: ${message}`);
    console.log(message);
  }
}
