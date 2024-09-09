import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-directory-card',
  templateUrl: './member-directory-card.component.html',
  styleUrls: ['./member-directory-card.component.scss']
})
export class MemberDirectoryCardComponent {
searchtext: string;


  constructor(private route:Router){}
  seeAll() {
    this.route.navigate(['/member-directory'],  {queryParams: { text: this.searchtext } })
  }
  
}
