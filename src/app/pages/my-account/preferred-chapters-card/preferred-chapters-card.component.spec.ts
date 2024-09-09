import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredChaptersCardComponent } from './preferred-chapters-card.component';

describe('PreferredChaptersCardComponent', () => {
  let component: PreferredChaptersCardComponent;
  let fixture: ComponentFixture<PreferredChaptersCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreferredChaptersCardComponent]
    });
    fixture = TestBed.createComponent(PreferredChaptersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
