import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonLDService {
  static orgSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer service',
      telephone: '01293019413',
    },
    name: 'Google',
    url: 'https://google.com',
  });
  static scriptType = 'application/json+ld';

  static websiteSchema = (url?: string, name?: string) => {
    return {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      name: name || 'Google',
      sameAs: [
        'https://facebook.com/google',
        'https://instagram.com/google',
        'https://twitter.com/google',
      ],
      url: url || 'https://google.com',
    };
  };

  constructor(@Inject(DOCUMENT) private _document: Document) {}

  insertSchema(
    schema: Record<string, any>,
    className = 'structured-data'
  ): void {
    let script;
    let shouldAppend = false;
    if (this._document.head.getElementsByClassName(className).length) {
      script = this._document.head.getElementsByClassName(className)[0];
    } else {
      script = this._document.createElement('script');
      shouldAppend = true;
    }
    script.setAttribute('class', className);
    (script as HTMLScriptElement).type = JsonLDService.scriptType;
    (script as HTMLScriptElement).text = JSON.stringify(schema);
    if (shouldAppend) {
      this._document.head.appendChild(script);
    }
  }

  removeStructuredData(): void {
    const els: HTMLElement[] = [];
    ['structured-data', 'structured-data-org'].forEach((c) => {
      els.push(
        ...Array.from(this._document.head.getElementsByClassName(c)).map(
          (el) => el as HTMLElement
        )
      );
    });
    els.forEach((el) => this._document.head.removeChild(el));
  }
}
