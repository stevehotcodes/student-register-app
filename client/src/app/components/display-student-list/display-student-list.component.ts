import { Component, OnInit, Output } from '@angular/core';
import { IStudent } from '../../interfaces/types';
import { DisplayStudentService } from '../../services/display-student.service';
import { NgFor, NgIf } from '@angular/common';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-display-student-list',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './display-student-list.component.html',
  styleUrl: './display-student-list.component.css'
})
export class DisplayStudentListComponent implements OnInit{
  studentList:IStudent[]=[];
  errorMessage?:string


  
  constructor(private displayStudentService:DisplayStudentService){}

  ngOnInit():void{
    this.fetchStudents();

  }

  fetchStudents(){
    this.displayStudentService.getStudents(1,10).subscribe((data)=>this.studentList=data)
  }

  onStudentAdded(): void {
    this.fetchStudents();  // Refresh the student list after a student is added
  }

}
