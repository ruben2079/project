import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorySettingsCardComponent } from './directory-settings-card.component';

describe('DirectorySettingsCardComponent', () => {
  let component: DirectorySettingsCardComponent;
  let fixture: ComponentFixture<DirectorySettingsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorySettingsCardComponent]
    });
    fixture = TestBed.createComponent(DirectorySettingsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
