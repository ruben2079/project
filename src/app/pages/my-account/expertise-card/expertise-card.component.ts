import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';

@Component({
  selector: 'app-expertise-card',
  templateUrl: './expertise-card.component.html',
  styleUrls: ['./expertise-card.component.scss']
})
export class ExpertiseCardComponent {

isloading: any = true;
 areaOfExpertiseSelectOptionsList: any=[];
publishingExperienceSelectOptionsList: any=[];
teachingExperienceSelectOptionsList:any=[];
expertParticipationSelectOptionsList:any=[];
areaValue = "Area";
publishValue = "Publish";
teachingValue = "Teaching";
expertValue = "Expert";
areaOfExpertiseSelectOptionsFromControl: FormControl<any>;
publishingExperienceSelectOptionsFromControl: FormControl<any>;
teachingExperienceSelectOptionsFromControl: FormControl<any>;
expertParticipationSelectOptionsFromControl: FormControl<any>;

selectedAreaOfExpertise: any[] = [];
selectedPublishingExperience: any;
selectedTeachingExperience: any;
selectedExpertParticipation: any;
private destroyed$ = new Subject<void>();
  areaofExpertise: any=[];
  publishingExperience: any=[];
  teachingExperience: any=[];
  expertParticipation: any=[];
expertiseForm: FormGroup<any>;

constructor( private vfService:VfRemotingManagerService, private router:Router, private sanitizer: DomSanitizer){}

ngOnInit(){
  this.getProfileExpertiseInfo();
}
 getProfileExpertiseInfo() {
    this.vfService.getProfileExpertiseInfo().pipe(takeUntil(this.destroyed$)).subscribe((expertise:any) => {
        if(expertise){
        this.isloading = false;
        this.areaOfExpertiseSelectOptionsList =  expertise.areaOfExpertiseSelectOptions;
        let sanitizedString = expertise.memberExpertiseInfo.areaofExpertise ? this.sanitizeString(expertise.memberExpertiseInfo.areaofExpertise) : "";
        let secondaryChap:any = sanitizedString ? sanitizedString.split(';') : "";
        this.selectedAreaOfExpertise = secondaryChap ? secondaryChap: [];

        this.publishingExperienceSelectOptionsList = expertise.publishingExperienceSelectOptions;
       // let sanitizedStrings = expertise.memberExpertiseInfo.publishingExperience ? this.sanitizeString(expertise.memberExpertiseInfo.publishingExperience) : "";
        let publishingExperience:any = expertise.memberExpertiseInfo.publishingExperience ? expertise.memberExpertiseInfo.publishingExperience.split(';') : "";
        this.selectedPublishingExperience = publishingExperience ? publishingExperience: [];

        this.teachingExperienceSelectOptionsList = expertise.teachingExperienceSelectOptions;
    //    let sanitizedStr = expertise.memberExpertiseInfo.teachingExperience  ? this.sanitizeString(expertise.memberExpertiseInfo.teachingExperience) : "";
        let teachingExperience:any = expertise.memberExpertiseInfo.teachingExperience ? expertise.memberExpertiseInfo.teachingExperience.split(';') : "";
        this.selectedTeachingExperience = teachingExperience ? teachingExperience: [];

        this.expertParticipationSelectOptionsList = expertise.expertParticipationSelectOptions;
      //  let sanitizedStrr =expertise.memberExpertiseInfo.expertParticipation ? this.sanitizeString(expertise.memberExpertiseInfo.expertParticipation) : "";
        let expertParticipation:any = expertise.memberExpertiseInfo.expertParticipation ? expertise.memberExpertiseInfo.expertParticipation.split(';') : "";
        this.selectedExpertParticipation = expertParticipation ? expertParticipation: [];
        }
      });
  }

 sanitizeString(input: string): string {
    // Replace specific HTML entities with their corresponding characters
    const sanitizedString = input.replace(/&amp;/g, '&');  
    return sanitizedString;
  }
  setProfileExpertiseInfo(event:any, value:any){
    this.areaofExpertise  =  value === 'Area' ? event.value : this.selectedAreaOfExpertise;
    this.publishingExperience =  value === 'Publish' ? event.value: this.selectedPublishingExperience;
    this.teachingExperience =  value === 'Teaching' ? event.value:this.selectedTeachingExperience ;
    this.expertParticipation =  value === 'Expert' ? event.value: this.selectedExpertParticipation ;

  let memberExpertiseInfo={
     areaofExpertise: this.areaofExpertise.join(';'),
     publishingExperience:this.publishingExperience.join(';'),
     teachingExperience:this.teachingExperience.join(';'),
     expertParticipation:this.expertParticipation.join(';')
   }
  this.vfService.setProfileExpertiseInfo(memberExpertiseInfo)
  .pipe(takeUntil(this.destroyed$)).subscribe((profileExpInfo) => {
  console.log("profileInfo",profileExpInfo);
  });
}

seeAll() {
this.router.navigate(['/events']);  
}
}
