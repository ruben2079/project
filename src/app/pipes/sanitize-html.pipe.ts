import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'sanitizeHtml', pure: false })
export class SanitizeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(data: any): string | null {
    if (data) {
      return decodeHtml(data);
    } else {
      return null;
    }
  }
}

function decodeHtml(html: string) {
  var txt = document.createElement('textarea');

  txt.innerHTML = html;
  return txt.value;
}
