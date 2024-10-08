import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProfileCardComponent } from './member-profile-card.component';

describe('MemberProfileCardComponent', () => {
  let component: MemberProfileCardComponent;
  let fixture: ComponentFixture<MemberProfileCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberProfileCardComponent]
    });
    fixture = TestBed.createComponent(MemberProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
