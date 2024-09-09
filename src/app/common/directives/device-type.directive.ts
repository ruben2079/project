import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Directive({
  selector: '[deviceType]'
})
export class DeviceTypeDirective implements OnInit, OnDestroy {
  @Input('deviceType') deviceType: string = '';
  private destroy$ = new Subject<void>();

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private breakpointService: BreakpointService) { }

  ngOnInit(): void {
    this.breakpointService.deviceType$.pipe(
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(value => {
      this.viewContainer.clear();
      if (value === this.deviceType) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}