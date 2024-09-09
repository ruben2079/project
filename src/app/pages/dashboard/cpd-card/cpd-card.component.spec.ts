import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpdCardComponent } from './cpd-card.component';

describe('CpdCardComponent', () => {
  let component: CpdCardComponent;
  let fixture: ComponentFixture<CpdCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpdCardComponent]
    });
    fixture = TestBed.createComponent(CpdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
