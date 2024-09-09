import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamAlertsCardComponent } from './exam-alerts-card.component';

describe('ExamAlertsCardComponent', () => {
  let component: ExamAlertsCardComponent;
  let fixture: ComponentFixture<ExamAlertsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamAlertsCardComponent]
    });
    fixture = TestBed.createComponent(ExamAlertsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
