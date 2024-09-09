import { Component } from '@angular/core';
import { CareerInfo, ProfileDemographicsContactInfo, ProfileDemographicsFormInfo } from 'src/app/common/interfaces/career-info';
import { PersonalInfo } from 'src/app/common/interfaces/member-profile';
import { DashboardDataService } from 'src/app/services/dashboard-data/dashboard-data.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {
  personalInfo: PersonalInfo;
  careerContactInfo: ProfileDemographicsContactInfo;
  
  constructor(private utilities: UtilitiesService, private dashboardDataService: DashboardDataService, private vfService: VfRemotingManagerService) {
  }

  ngOnInit(): void {
    this.getCareerInfo();
    this.getProfileInfo();

  }

  getCareerInfo() {
    this.vfService.getProfileDemographicsFormInfo()
    .subscribe((data: CareerInfo) => {
      this.careerContactInfo = data.profileDemographicsContactInfo;
    });
  }

  getProfileInfo() {
    this.vfService.getProfilePersonalFormInfo()
    .subscribe((data) => {
      this.personalInfo = data.personalInfo;
    });
  }

  updateProfile(): void {
    this.utilities.updateProfileModalData(true);
  }
}

