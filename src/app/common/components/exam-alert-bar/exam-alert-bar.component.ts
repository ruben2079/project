import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';
import { SalesforceDatePipe } from 'src/app/pipes/salesforce-date.pipe';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';

@Component({
  selector: 'app-exam-alert-bar',
  templateUrl: './exam-alert-bar.component.html',
  styleUrls: ['./exam-alert-bar.component.scss']
})
export class ExamAlertBarComponent implements OnInit {
  public examAlertInfo: any;
  public message: any;
  public cta: any;
  public mobileCta: any;
  public isLoaded: boolean = false;
  public hideAlert: boolean = false;

  private destroyed$ = new Subject<void>();

  constructor(private vfService: VfRemotingManagerService, private salesforceDatePipe: SalesforceDatePipe, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAlertBarInfo();
  }

  getAlertBarInfo() {
    this.vfService.getAlertBarInfo()
    .pipe(takeUntil(this.destroyed$)).subscribe((data: any) => {
      if (data instanceof Error) {
        console.error(data);
        return;
      }
      
      this.examAlertInfo = data;
      let isFRM = data.examType === 'FRM'
      let formattedDate = this.salesforceDatePipe.transform(data.deadline);

      switch (data.route) { 
        case 'Complete Payment': // Unpaid
          this.message = `Your ${data.examType} ${isFRM ? 'Part ' + data.examPart + ' ': ''}registration is not complete until payment is finalized.`;
          this.cta = "Pay Now";
          this.mobileCta = "Complete Exam Payment";
          break;
        case 'Exam Scheduling': // Scheduling Incomplete
          this.message = `Please finish scheduling your ${data.examType} Exam before ${formattedDate}.`;
          this.cta = "Finish Now";
          this.mobileCta = "Scheduling Incomplete";
          break;
        case 'Exam Detail': // Results Available
          this.message = `Your ${data.examType} ${isFRM ? 'Part ' + data.examPart + ' ': ''}results are now available.`;
          this.cta = "View Results";
          this.mobileCta = "Exam Results Available";
          break;           
        case 'Submit CV': // CV Expiring Soon
          this.message = `To become an FRM-Certified Professional, you must submit work experience by ${formattedDate}`;
          this.cta = "Submit Experience";
          this.mobileCta = "Work Experience Deadline Coming Soon";
          break;
        case 'Exam Registration': // Exam Registration
          if(data.alertStatus === 'Enrollment Expiring Soon') { // Enrollment Expiring Soon
            this.message = `Sign up for FRM Exam Part II by ${formattedDate} to keep your program enrollment active.`;
            this.cta = "Register now";
            this.mobileCta = "FRM Enrollment Expiring Soon";
          } else if (data.alertStatus === 'Enrollment Expired') { //Enrollment Expired
            this.message = 'Your enrollment in the FRM program has expired.'
            this.cta = "Register Again";
            this.mobileCta = "Enrollment Expired";
          } else if(data.alertStatus === 'Scheduling Expired') { //Scheduling Expired
            this.message = `Your ${data.examType} ${isFRM ? 'Part ' + data.examPart + ' ': ''}registration has expired.`;
            this.cta = "Register Again";
            this.mobileCta = "Registration Expired";
          }
          break;
        default:
          break;
      }
      this.isLoaded = true;
    })
  }

  close() {
    this.hideAlert = true;
  }
}
