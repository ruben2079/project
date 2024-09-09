import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDirectoryCardComponent } from './member-directory-card.component';

describe('MemberDirectoryCardComponent', () => {
  let component: MemberDirectoryCardComponent;
  let fixture: ComponentFixture<MemberDirectoryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberDirectoryCardComponent]
    });
    fixture = TestBed.createComponent(MemberDirectoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
