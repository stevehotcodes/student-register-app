import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStudentListComponent } from './display-student-list.component';

describe('DisplayStudentListComponent', () => {
  let component: DisplayStudentListComponent;
  let fixture: ComponentFixture<DisplayStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayStudentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
