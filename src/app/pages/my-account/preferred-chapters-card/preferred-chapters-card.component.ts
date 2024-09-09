import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';

@Component({
  selector: 'app-preferred-chapters-card',
  templateUrl: './preferred-chapters-card.component.html',
  styleUrls: ['./preferred-chapters-card.component.scss']
})
export class PreferredChaptersCardComponent {
  primaryChapterFromControl: FormControl = new FormControl();
 secondaryChapterFromControl = new FormControl();


searchtext: any;
private destroyed$ = new Subject<void>();
  primaryChapterList: any=[];
  secondaryChapterList: any=[];
selectedPrimaryChapter: any=[];
selectedSecondaryChapter: any;
isloading: any =true;

constructor( private vfService:VfRemotingManagerService, private router:Router){}

ngOnInit(){
  this.getProfileChaptersInfo()
}
 getProfileChaptersInfo() {
    this.vfService.getProfileChaptersInfo()
      .pipe(takeUntil(this.destroyed$)).subscribe((chapters) => {
        if(chapters){
            this.primaryChapterList = chapters.chapters;
            this.secondaryChapterList = chapters.chapters;
            this.selectedPrimaryChapter = chapters?.chapterPrimary ? chapters?.chapterPrimary: "";
            this.selectedSecondaryChapter = chapters?.chapterSecondary ? chapters?.chapterSecondary: "";
            this.isloading = false;
        }
      });
  }

  setProfileChaptersInfo(){
      const chapterPrimary  = this.selectedPrimaryChapter;
      const chapterSecondary= this.selectedSecondaryChapter;
    this.vfService.setProfileChaptersInfo(chapterPrimary,chapterSecondary)
    .pipe(takeUntil(this.destroyed$)).subscribe((profileInfo) => {
    console.log("profileInfo",profileInfo);
    });
  }
seeAll() {
  this.router.navigate(['/events']);  }
}
