import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCardShimmerComponent } from './program-card-shimmer.component';

describe('ProgramCardShimmerComponent', () => {
  let component: ProgramCardShimmerComponent;
  let fixture: ComponentFixture<ProgramCardShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramCardShimmerComponent]
    });
    fixture = TestBed.createComponent(ProgramCardShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
