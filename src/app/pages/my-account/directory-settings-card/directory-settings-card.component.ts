import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';

@Component({
  selector: 'app-directory-settings-card',
  templateUrl: './directory-settings-card.component.html',
  styleUrls: ['./directory-settings-card.component.scss']
})
export class DirectorySettingsCardComponent {
isloading: boolean = true;
orgExpertiseFlag: any = true;
showTitle: any = true;
memberOPTFlag: any = true;
allowContact: any = true;
private destroyed$ = new Subject<void>();
memberDirectorySettings: {  
  isOptedIn: boolean;
  showAdditionalDetails: boolean;
  showJobInformation: boolean;
  showProfessionalBackground: boolean;
  isDirectoryConnectEnabled: boolean;
};
  isOptedIn: boolean;
  showJobInformation:boolean;
  showProfessionalBackground: boolean;
  showAdditionalDetails: boolean;
  isDirectoryConnectEnabled:boolean;
constructor( private vfService:VfRemotingManagerService, private router:Router){}

ngOnInit(){
  this. getMemberDirectorySettingsFormInfo();
}
getMemberDirectorySettingsFormInfo() {
  this.vfService.getMemberDirectorySettingsFormInfo().pipe(takeUntil(this.destroyed$)).subscribe((directory:any) => {
      if(directory){
      this.isloading = false;
      console.log(" getMemberDirectorySettingsFormInfo"+ directory.memberDirectorySettingsInfo.memberDirectorySettings);
      this.isOptedIn =  directory.memberDirectorySettingsInfo.memberDirectorySettings.isOptedIn;
      this.showJobInformation = directory.memberDirectorySettingsInfo.memberDirectorySettings.showJobInformation;
      this.showProfessionalBackground = directory.memberDirectorySettingsInfo.memberDirectorySettings.showProfessionalBackground;
      this.showAdditionalDetails =  directory.memberDirectorySettingsInfo.memberDirectorySettings.showAdditionalDetails;
      this.isDirectoryConnectEnabled = directory.memberDirectorySettingsInfo.memberDirectorySettings.isDirectoryConnectEnabled;
      }
    });
}

setMemberDirectorySettingsFormInfo(){
if(!this.isOptedIn){
  this.showJobInformation = false;
  this.showProfessionalBackground = false;
  this.showAdditionalDetails = false;
  this.isDirectoryConnectEnabled = false;
}

  const directorySettings = {
    isOptedIn:  this.isOptedIn,
    showAdditionalDetails: this.showAdditionalDetails,
    showJobInformation: this.showJobInformation,
    showProfessionalBackground: this.showProfessionalBackground,
    isDirectoryConnectEnabled:this.isDirectoryConnectEnabled
  }
    this.vfService.setMemberDirectorySettingsFormInfo(directorySettings)
  .pipe(takeUntil(this.destroyed$)).subscribe((directoryFormInfo) => {
  console.log("directoryFormInfo",directoryFormInfo);
  });
}
}
