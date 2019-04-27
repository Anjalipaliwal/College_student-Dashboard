import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Students } from '../shared/students';
import { Notification } from '../shared/notification';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  //giving base url for  routing//
  apiURL = 'http://localhost:5400';
  constructor(private http:HttpClient) { }
  //giving type of json//
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  //method forfetching  notifications from json//
  getNotifications(): Observable<Notification> {
    return this.http.get<Notification>(this.apiURL + '/notifications')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch students list//
  getStudents(): Observable<Students> {
    return this.http.get<Students>(this.apiURL + '/students')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch one student on basis of id//
  getStudent(id): Observable<Students> {
    return this.http.get<Students>(this.apiURL + '/students/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create student //
  createStudent(student): Observable<Students> {
    return this.http.post<Students>(this.apiURL + '/students', JSON.stringify(student), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update student //
  updateStudent(id, student): Observable<Students> {
    return this.http.put<Students>(this.apiURL + '/students/' + id, JSON.stringify(student), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete student from json list //
  deleteStudent(id){
    return this.http.delete<Students>(this.apiURL + '/students/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
