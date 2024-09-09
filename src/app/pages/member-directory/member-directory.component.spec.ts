import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDirectoryComponent } from './member-directory.component';

describe('MemberDirectoryComponent', () => {
  let component: MemberDirectoryComponent;
  let fixture: ComponentFixture<MemberDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberDirectoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemberDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
