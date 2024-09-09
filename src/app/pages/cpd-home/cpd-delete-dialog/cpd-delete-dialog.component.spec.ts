import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CpdDeleteDialogComponent } from './cpd-delete-dialog.component';

describe('CpdDeleteDialogComponent', () => {
  let component: CpdDeleteDialogComponent;
  let fixture: ComponentFixture<CpdDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpdDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpdDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
