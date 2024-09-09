import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CpdViewDialogComponent } from './cpd-view-dialog.component';

describe('CpdViewDialogComponent', () => {
  let component: CpdViewDialogComponent;
  let fixture: ComponentFixture<CpdViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpdViewDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpdViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
