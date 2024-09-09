import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamAlertBarComponent } from './exam-alert-bar.component';

describe('ExamAlertBarComponent', () => {
  let component: ExamAlertBarComponent;
  let fixture: ComponentFixture<ExamAlertBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamAlertBarComponent]
    });
    fixture = TestBed.createComponent(ExamAlertBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
