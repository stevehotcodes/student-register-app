import { TestBed } from '@angular/core/testing';

import { DisplayStudentService } from './display-student.service';

describe('DisplayStudentService', () => {
  let service: DisplayStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
