import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(html: string) {
    // console.log('!!!!!!!!!!!!!! HTML', html);
    const res = this.sanitizer.bypassSecurityTrustHtml(html);
    // console.log('!!!!!!!!!!!!!!RES', res);
    return res;
  }
}
