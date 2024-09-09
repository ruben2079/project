import { Component } from '@angular/core';
import * as data from './footer.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {
  footerData = Array.from(data);
}
