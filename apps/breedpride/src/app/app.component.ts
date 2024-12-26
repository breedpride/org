import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectNavigationEnd } from 'ngxtension/navigation-end';
import { take } from 'rxjs';
// import { AppStore } from '@bh/app';
@Component({
  imports: [CommonModule, RouterModule],
  providers: [],
  selector: 'app-root',
  template: `<router-outlet /> `
})
export class AppComponent {
  #source$ = injectNavigationEnd();
  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.#source$.pipe(take(1)).subscribe(() => {
      this._document.body.classList.add('breedpride-splash-screen-hidden');
    });
  }
}
