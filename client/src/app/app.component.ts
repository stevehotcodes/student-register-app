import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterStudentFormComponent } from './components/register-student-form/register-student-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegisterStudentFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
