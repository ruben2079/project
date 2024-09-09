import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CpdEditDialogComponent } from './cpd-edit-dialog.component';

describe('CpdEditDialogComponent', () => {
  let component: CpdEditDialogComponent;
  let fixture: ComponentFixture<CpdEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpdEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpdEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
