import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavShimmerComponent } from './side-nav-shimmer.component';

describe('SideNavShimmerComponent', () => {
  let component: SideNavShimmerComponent;
  let fixture: ComponentFixture<SideNavShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavShimmerComponent]
    });
    fixture = TestBed.createComponent(SideNavShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
