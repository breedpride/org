import { inject, Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Observable, Observer } from 'rxjs';
import { EntityStore } from '@bh/entity-store';

@Injectable({
  providedIn: 'root',
})
export class BPConfirmationService {
  confirmationService = inject(ConfirmationService);

  spaceEditorExit(spaceStore: EntityStore) {
    const hasChanges =
      spaceStore.entityForm().dirty && spaceStore.entityForm().touched;
    return !hasChanges || this.confirmEditorExit();
  }
  confirmCreation(action?: {
    header?: string;
    icon?: string;
    message?: string;
  }) {
    return this.confirmAction({
      header: 'Create confirmation',
      icon: 'pi pi-info-circle',
      message: 'The record will be created. Do you want to create this data?',
      ...action,
    });
  }
  confirmEditorExit() {
    return this.confirmAction({
      header: 'Edit-form exit confirmation',
      icon: 'pi pi-info-circle',
      message:
        'There is an unsaved data in the form. Do you want to quit without saving?',
    });
  }
  confirmDelete() {
    return this.confirmAction({
      header: 'Delete confirmation',
      icon: 'pi pi-info-circle',
      message: 'The record will be deleted. Do you want to delete this data?',
    });
  }
  confirmAction = (obj: {
    header?: string;
    icon?: string;
    message?: string;
    accept?: () => void;
    reject?: () => void;
  }): Observable<boolean> => {
    return new Observable<boolean>((observer: Observer<boolean>) => {
      this.confirmationService.confirm({
        accept: () => {
          observer.next(true); // User accepted
          observer.complete();
        },

        reject: () => {
          observer.next(false); // User rejected
          observer.complete();
        },
        ...obj,
      });
    });
  };
}
