import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateProfileFormComponent } from './update-profile-form.component';

describe('UpdateProfileFormComponent', () => {
  let component: UpdateProfileFormComponent;
  let fixture: ComponentFixture<UpdateProfileFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProfileFormComponent]
    });
    fixture = TestBed.createComponent(UpdateProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
