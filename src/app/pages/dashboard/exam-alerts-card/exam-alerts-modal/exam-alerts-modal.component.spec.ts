import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamAlertsModalComponent } from './exam-alerts-modal.component';

describe('ExamAlertsModalComponent', () => {
  let component: ExamAlertsModalComponent;
  let fixture: ComponentFixture<ExamAlertsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamAlertsModalComponent]
    });
    fixture = TestBed.createComponent(ExamAlertsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
