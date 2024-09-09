import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-exam-alerts-modal',
  templateUrl: './exam-alerts-modal.component.html',
  styleUrls: ['./exam-alerts-modal.component.scss']
})
export class ExamAlertsModalComponent {
  public notifications: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log(this.data.dashCard);
    console.log(this.data.dashboardCardDetails);
    console.log("examAlertsList", this.data.examAlertsList);
    this.notifications = this.data.examAlertsList.notifications;
  }
}
