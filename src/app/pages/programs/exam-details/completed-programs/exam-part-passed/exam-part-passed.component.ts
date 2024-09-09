import { Component, Input } from '@angular/core';
import { fadeIn } from 'src/app/common/components/animations/fadein';

@Component({
  selector: 'app-exam-part-passed',
  templateUrl: './exam-part-passed.component.html',
  styleUrls: ['./exam-part-passed.component.scss'],
  animations: [fadeIn]
})
export class ExamPartPassedComponent{
  @Input() programsDetailInfo: any;
  @Input() title: string = '';
  @Input() isDataLoaded: boolean = false;
  @Input() status?: string = '';
  @Input() message: string = '';
  @Input() cardType: string = '';
  @Input() bothExamPartsPassed: boolean;

  public shareFRMURL: string = "";

  ngOnInit(): void {
    console.log('programsDetailInfo', this.programsDetailInfo);

    let publicURL = "https://garp--devjan2024.sandbox.my.site.com"
    let digitalBadgeFrmURL = "/DigitalBadgeFRM";
    // this.shareFRMURL = publicURL + digitalBadgeFrmURL + "?id=" + this.userData.contactData.Id; TODO: Fetch Contact ID
    this.shareFRMURL = 'http://www.linkedin.com'


  }

  shareBadge() {
    window.open(this.shareFRMURL, '_blank');
  }

  get cardTitle(): string {
    if (this.title === 'examPart1') {
      return `${this.programsDetailInfo.programType } Exam Part I`;
    } else if (this.title === 'examPart2') {
      return `${this.programsDetailInfo.programType } Exam Part II`;
    } else {
      return this.title;
    }
  }

  payByCC() {
    return;
  }
}
