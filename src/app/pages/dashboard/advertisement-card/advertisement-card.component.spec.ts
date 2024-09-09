import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementCardComponent } from './advertisement-card.component';

describe('AdvertisementCardComponent', () => {
  let component: AdvertisementCardComponent;
  let fixture: ComponentFixture<AdvertisementCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementCardComponent]
    });
    fixture = TestBed.createComponent(AdvertisementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
