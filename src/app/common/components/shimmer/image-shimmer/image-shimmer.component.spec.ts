import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageShimmerComponent } from './image-shimmer.component';

describe('ImageShimmerComponent', () => {
  let component: ImageShimmerComponent;
  let fixture: ComponentFixture<ImageShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageShimmerComponent]
    });
    fixture = TestBed.createComponent(ImageShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
