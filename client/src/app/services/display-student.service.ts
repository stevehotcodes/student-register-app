import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { IStudent } from '../interfaces/types';

@Injectable({
  providedIn: 'root'
})
export class DisplayStudentService {


  baseUrl:string=`http://localhost:5122/api/Students`


  constructor(private http:HttpClient) { }
  getStudents(page: number, pageSize: number):Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this.baseUrl +`?page=${page}&size=${pageSize}`)

  }

  private handleError(error:any):Observable<never>{
    console.log('an error occured ',error)
    throw error
  }
  

}
