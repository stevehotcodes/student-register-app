import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStudentFormComponent } from './register-student-form.component';

describe('RegisterStudentFormComponent', () => {
  let component: RegisterStudentFormComponent;
  let fixture: ComponentFixture<RegisterStudentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterStudentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterStudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
