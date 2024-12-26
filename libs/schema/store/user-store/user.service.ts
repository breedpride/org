import { inject, Injectable } from '@angular/core';
import { FormFieldCode } from '@bh/consts';
import { Contact } from '@bh/entity/config';
import { byAny, ME } from '@bh/superfield';
import { ApiService } from '@breedpride/api';
import { ComponentStore } from '@ngrx/component-store';
import { AuthService, SimpleUser } from '@bp/auth-store';
import { Observable, take } from 'rxjs';


// TODO -settings config
export interface UserState {
  contact: Contact | null;
}
@Injectable({
  providedIn: 'root',
})
export class UserService extends ComponentStore<UserState> {
  private authService = inject(AuthService);
  private api = inject(ApiService);
  get user$(): Observable<SimpleUser> {
    return this.authService.user$;
  }
  constructor() {
    super({ contact: null });
    // TODO - userSettings change (refresh Current User)
    this.user$
      .pipe
      // pairwise(),
      // map(([prev, next]) => next)
      ()
      .subscribe((user) => {
        if (!user) {
          return;
        } else {
          console.log('user', user);
        }
        // TODO - check if user loaded
        // if (user.id === this.state().contact?.Id) {
        const config = {
          entitySchemaName: 'Contact',
          id: 'userContact',
          component: FormFieldCode.AUTOCOMPLETE,
          readony: true,
        };
        this.api
          .selectTopOne<Contact>(config, byAny('Id', ME))
          .pipe(take(1))
          .subscribe((contact) => {
            if (contact) {
              console.log('contact', contact);
              this.setContact(contact);
            }

            // TODO - need ref for action copy with refLink
          });
      });
  }
  readonly contact = this.selectSignal((state) => state.contact);

  readonly setContact = this.updater((state, contact: Contact) => ({
    ...state,
    contact,
  }));
}
