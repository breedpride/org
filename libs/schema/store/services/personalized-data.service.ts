import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageSummary } from '@bh/types';
import { environment } from '@breedpride/api';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonalizedDataService {
  private _currentPersonalizedPage: ReplaySubject<PageSummary> =
    new ReplaySubject<PageSummary>(1);
  // globalStore = inject(SpaceStore);
  // public personalizedPage: PageSummary;
  constructor(private http: HttpClient) {
    // const userStream$ = this._userService.user$;
    // const publicDataStream = this.globalStore.responseResult$;
    // const currentUrlStream = this.globalStore.url$;
    // // PersonalizedData will be always updated
    // combineLatest([userStream$, publicDataStream, currentUrlStream]).subscribe(
    //   ([user, publicData, currentUrl]) => {
    //     console.log(user, publicData, currentUrl);
    //     if (user && publicData.data.Url && currentUrl) {
    //       //Public data loaded
    //       if (publicData.data.Url === currentUrl) {
    //         if (!publicData.personalData) {
    //           this.getPrivateUrlData(currentUrl);
    //         } else {
    //           this.personalizedData = publicData.personalData[0];
    //         }
    //       }
    //     }
    //   }
    // );
  }

  public dislike(likedUrl: string): void {
    this.likeOrDislike(likedUrl, false);
  }

  public favorite(pageUrl: string, value: boolean): void {
    this.makeAction(pageUrl, value, 'favorite');
  }

  //-------------
  // Private page data loading
  // TODO - get private data
  // TODO - post page vising - better with token - /mybe cookies before
  // TODO - cookies actions
  //Load personalized Data for page if main page was loaded before user login
  public async getPrivateUrlData(slug: string): Promise<any> {
    const suffix = 'action/get';
    this.http
      .post(`${environment.api.url}${suffix}`, {
        urls: [slug],
      })
      .subscribe((data: any) => {
        console.log('Personalization Service response /' + slug);
        console.log(data);
        this.personalizedData = data.result;
      });
  }

  public like(likedUrl: string): void {
    this.likeOrDislike(likedUrl, true);
  }

  public likeOrDislike(likedUrl: string, like: boolean): void {
    this.makeAction(likedUrl, like, 'like');
  }
  public makeAction(pageUrl: string, value: boolean, type: string): void {
    const url = 'action/do';
    this.http
      .post(`${environment.api.url}${url}`, {
        data: value,
        type: type,
        url: pageUrl,
      })
      .subscribe((response: any) => {
        console.log(response);
        this.getPrivateUrlData(response.result.data.url);
        //TODO getNew DataSummary for page (likes )
      });
  }

  set personalizedData(value: PageSummary) {
    this._currentPersonalizedPage.next(value);
  }

  get personalizedData$(): Observable<PageSummary> {
    return this._currentPersonalizedPage.asObservable();
  }

  public visit(visitedUrl: string): void {
    const url = 'action/do';
    this.http
      .post(`${environment.api.url}${url}`, {
        type: 'visit',
        url: visitedUrl,
      })
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
