import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionReceivedComponent } from './submission-received.component';

describe('SubmissionReceivedComponent', () => {
  let component: SubmissionReceivedComponent;
  let fixture: ComponentFixture<SubmissionReceivedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmissionReceivedComponent]
    });
    fixture = TestBed.createComponent(SubmissionReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
