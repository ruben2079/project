import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExamAlertsModalComponent } from './exam-alerts-modal/exam-alerts-modal.component';
import { DashboardDataService } from 'src/app/services/dashboard-data/dashboard-data.service';
import { Subject, of, switchMap, takeUntil, pipe } from 'rxjs';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';

@Component({
  selector: 'app-exam-alerts-card',
  templateUrl: './exam-alerts-card.component.html',
  styleUrls: ['./exam-alerts-card.component.scss']
})
export class ExamAlertsCardComponent {
  @Input() dashCard?: any;
  @Input() dashboardCardDetails?: any;
  @Input() examAlertsList?: any[];

  private unsubscribe$ = new Subject<void>();

  constructor(public dialog: MatDialog, private dashboardDataService: DashboardDataService, private vfService: VfRemotingManagerService) {
  }

  ngOnInit(): void {
    this.dashboardDataService.getExamAlertsInfo().pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      this.dashboardCardDetails = data;
    });

    this.dashboardDataService.getExamAlertsList().pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      this.examAlertsList = data;
    });

    console.log("exam-alerts-card", this.dashboardCardDetails);
    console.log("exam-alerts-card - examAlertsList", this.examAlertsList);
  }

  openExamAlertsModal() {
    this.dialog.open(ExamAlertsModalComponent, {
      data: {
        dashCard: this.dashCard,
        dashboardCardDetails: this.dashboardCardDetails,
        examAlertsList: this.examAlertsList
      }
    });
  }


}
