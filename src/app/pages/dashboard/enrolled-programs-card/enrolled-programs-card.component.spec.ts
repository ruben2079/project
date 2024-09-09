import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledProgramsCardComponent } from './enrolled-programs-card.component';

describe('EnrolledProgramsCardComponent', () => {
  let component: EnrolledProgramsCardComponent;
  let fixture: ComponentFixture<EnrolledProgramsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrolledProgramsCardComponent]
    });
    fixture = TestBed.createComponent(EnrolledProgramsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
