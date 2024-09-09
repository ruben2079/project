import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpdChartComponent } from './cpd-chart.component';

describe('CpdChartComponent', () => {
  let component: CpdChartComponent;
  let fixture: ComponentFixture<CpdChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpdChartComponent]
    });
    fixture = TestBed.createComponent(CpdChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
