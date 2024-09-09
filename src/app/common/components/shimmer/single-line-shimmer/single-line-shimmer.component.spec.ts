import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLineComponent } from './single-line-shimmer.component';

describe('SingleLineComponent', () => {
  let component: SingleLineComponent;
  let fixture: ComponentFixture<SingleLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleLineComponent]
    });
    fixture = TestBed.createComponent(SingleLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
