import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Programs } from 'src/app/common/interfaces/programs';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-enrolled-programs-card',
  templateUrl: './enrolled-programs-card.component.html',
  styleUrls: ['./enrolled-programs-card.component.scss']
})
export class EnrolledProgramsCardComponent implements OnInit {
  @Input() dashCard?: any;
  @Input() dashboardCardDetails?: Programs;

  constructor(private utilities: UtilitiesService, private router: Router) {}

  ngOnInit(): void {
    console.log("enrolled-programs-card - dashCard", this.dashCard);
    console.log("enrolled-programs-card - dashboardCardDetails", this.dashboardCardDetails);
  }

  getProgramDisplayName(programType: string): string {
    return this.utilities.getProgramDisplayName(programType);
  }

  navigateToMyPrograms() {
    this.router.navigate(['programs']);
  }
}
