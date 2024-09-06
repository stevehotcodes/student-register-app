import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../interfaces/types';

@Injectable({
  providedIn: 'root'
})
export class RegisterStudentService {
  baseUrl:string=`http://localhost:5122/api/Students`
  constructor(private http:HttpClient) { }

  registerStudent(newStudentDetails:IStudent){
    return this.http.post(this.baseUrl,newStudentDetails)
  }
}
