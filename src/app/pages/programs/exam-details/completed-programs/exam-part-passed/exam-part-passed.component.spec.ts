import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPartPassedComponent } from './exam-part-passed.component';

describe('ExamPartPassedComponent', () => {
  let component: ExamPartPassedComponent;
  let fixture: ComponentFixture<ExamPartPassedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamPartPassedComponent]
    });
    fixture = TestBed.createComponent(ExamPartPassedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
