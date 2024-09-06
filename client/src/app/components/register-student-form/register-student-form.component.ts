import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterStudentService } from '../../services/register-student.service';
import { first } from 'rxjs/operators';
import { DisplayStudentListComponent } from '../display-student-list/display-student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EventEmitter } from 'stream';
import { DisplayStudentService } from '../../services/display-student.service';


@Component({
  selector: 'app-register-student-form',
   imports: [FormsModule, ReactiveFormsModule, DisplayStudentListComponent, HttpClientModule],
  standalone: true,
  templateUrl: './register-student-form.component.html',
  styleUrls: ['./register-student-form.component.css'] // Corrected to styleUrls
})
export class RegisterStudentFormComponent implements OnInit {
  studentForm!: FormGroup;
  @ViewChild('registerFormDirective') registerFormDirective! :NgForm
  @Output()studentAdded :EventEmitter<void>=new EventEmitter<void>()
  studentList:any[]=[]

  constructor(
    private fb: FormBuilder,
    private registerStudentSvc: RegisterStudentService,
    private displayStudentService:DisplayStudentService
  ) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      standard: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      this.registerStudentSvc.registerStudent(this.studentForm.value)
        .pipe(first())
        .subscribe(
          (result) => {
            console.log(result);
            this.studentForm.reset();
            this.studentAdded.emit();  // Emit the event once the student is registered
         
            
          },
          (error) => {
            console.error('Error registering student:', error);
          }
        );
    }
  }

  
  
  onStudentAdded(){
    this.displayStudentService.getStudents(1,10).subscribe((data)=>{
      this.studentList=data
    })
  }



}
