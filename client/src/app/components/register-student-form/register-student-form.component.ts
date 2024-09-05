import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-student-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './register-student-form.component.html',
  styleUrl: './register-student-form.component.css'
})
export class RegisterStudentFormComponent implements OnInit{
  studentForm!:FormGroup

  constructor(private fb:FormBuilder){}

ngOnInit(): void {
  this.studentForm=this.fb.group(
    {
     
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      standard: ['', Validators.required],
    
    }
  )
}



  onSubmit(){
    console.log("I am form input")
  }

}
