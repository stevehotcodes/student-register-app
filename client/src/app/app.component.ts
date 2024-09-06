import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterStudentFormComponent } from './components/register-student-form/register-student-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayStudentListComponent } from './components/display-student-list/display-student-list.component';
import { DisplayStudentService } from './services/display-student.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegisterStudentFormComponent,DisplayStudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
  


}
