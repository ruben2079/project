import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss']
})
export class HelpCenterComponent {
 constructor(private route:ActivatedRoute){}

 ngOnInit(){
  this.route.data.subscribe((data:any) => {
    document.title = data.title || 'Default Title';
  });
 }
}
