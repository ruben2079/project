import { Component, Input } from '@angular/core';
import { fadeIn } from 'src/app/common/components/animations/fadein';

@Component({
  selector: 'app-submission-received',
  templateUrl: './submission-received.component.html',
  styleUrls: ['./submission-received.component.scss'],
  animations: [fadeIn]
})
export class SubmissionReceivedComponent {
  @Input() examPartType: string = '';
  @Input() programsDetailInfo: any;
  @Input() title: string = '';
  @Input() isDataLoaded: boolean = false;
  @Input() action1: any = () => {};

  public examPartInfo: any;

  get cardTitle(): string {
    if (this.title === 'examPart1') {
      return `${this.programsDetailInfo.programType } Exam Part I`;
    } else if (this.title === 'examPart2') {
      return `${this.programsDetailInfo.programType } Exam Part II`;
    } else {
      return `Exam Details`;
    }
  }

  ngOnInit(): void {
    console.log('SubmissionReceivedComponent - program', this.programsDetailInfo);
    console.log('SubmissionReceivedComponent - examPartInfo', this.examPartInfo);
  }
}
