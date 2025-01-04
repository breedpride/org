import { AsyncPipe, CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  inject,
  Inject,
  signal,
  ViewChild,
  viewChild,
  viewChildren,
  AfterViewInit,
  contentChildren,
  effect,
  contentChild,
} from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatOption, MatSelect } from '@angular/material/select';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { injectNavigationEnd } from 'ngxtension/navigation-end';
import { take } from 'rxjs';
import { MaterialComponent } from './material/material.component';
import { ButtonModule } from 'primeng/button';

import { Map } from 'immutable';
import {
  addDoc,
  collection,
  doc,
  Firestore,
  getDoc,
  getFirestore,
  setDoc,
} from '@angular/fire/firestore';
import { EditorComponent } from '@sesan07/ngx-formly-editor';
import { EditorService } from '@sesan07/ngx-formly-editor/lib/editor.service';
import { Store } from '@ngrx/store';
import { getState } from '@ngrx/signals';
// import { AppStore } from '@bh/app';
@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    // RouterLink,
    // MatIcon,
    MaterialComponent,
    ButtonModule,
  ],
  providers: [],
  styles: `
  $app-header-height: 64px;

:host {
    display: block;
    height: 100%;
}

.app-header {
    height: $app-header-height - 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.app-editor-container {
    height: calc(100% - $app-header-height);
}

.app-title {
    font-size: 1.25em;
    font-weight: 500;
}

.app-actions {
    display: flex;
    align-items: center;
    column-gap: 16px;
}
  `,
  selector: 'bh-editor',
  template: `
    <div class="app-header">
      <div class="app-title">App</div>
      <div class="app-actions">
        <p-button (onClick)="onSubmitClick()">Save</p-button>
        <mat-form-field subscriptSizing="dynamic">
          <mat-label>Formly UI</mat-label>
          <mat-select [(value)]="v">
            <mat-option value="material"> Material </mat-option>
            <mat-option value="bootstrap"> Bootstrap </mat-option>
          </mat-select>
        </mat-form-field>
        <!-- <a
          href="https://github.com/sesan07/formly-editor"
          target="_blank"
          mat-icon-button
        > -->
        <!-- <mat-icon svgIcon="github"></mat-icon>
        </a> -->
      </div>
    </div>
    <div class="app-editor-container">
      <app-material></app-material>
    </div>
  `,
})
export class EditorContainerComponent implements AfterViewInit {
  public viewChild = viewChild(EditorComponent);
  @ViewChild(EditorComponent, { static: true })
  childComponent!: EditorComponent;

  ngAfterViewInit() {
    const privateService = (this.childComponent as any)
      ._editorService as EditorService;
    console.log(privateService);
    effect(() => {
      console.log(this.viewChild());
      console.log(this.cmp(), 'cmp');
    });
  }
  // service = inject(EditorService);

  constructor() {}

  store = inject(Store);

  // public viewChild = this.viewChild<MaterialComponent>();

  cmp = contentChild(EditorComponent);
  private firestore = inject(Firestore);

  // private firebase = inject(Firebase);
  public async onSubmitClick() {
    const cmp2 = this.cmp();
    // console.log(this.service);
    // console.log(this.service);
    console.log(cmp2);
    // console.log(this.store)
    // // cmp2._editorService

    // const ref = localStorage.getItem('editor-material') || ({} as any);
    // console.log(ref);
    // const collectionRef = collection(this.firestore, `refs/`);
    // // const mm = Map(ref);
    // console.log();
    // await addDoc(
    //   collectionRef,
    //   { formMap: ref.formMap, activeFormId: ref.activeFormId },
    //   // userName: this.auth.currentUser ? this.auth.currentUser.email : 'Anonymous'
    // ).then(e => {
    //   console.log('Document successfully written! e');
    // });
    // this.dialogRef.close();
  }

  save() {
    const collectionRef = collection(
      this.firestore,
      'collectionA/docB/collectionC',
    );

    //  collectionRef..then(snapshot => {
    //  }
    const ref = localStorage.getItem('editor-material');
    const data = ref ? ref : [];
    // firestoreExport(collectionRef).then(data => console.log(data));

    console.log('ref', ref);
    // collection(this.firestore,'refs',)
    const d = doc(this.firestore, 'refs');

    // setDoc(formly, { ref: ref }).then(e => {
    //   console.log('Document written with ID: ', e);
    // });
    const db = this.firestore;
    const importJSON = async () => {
      // for await (const user of data) {
      //   // doc(db, 'users').converter(user);
      //   // collection(db, 'users').converter( d=> await (const )set(user);
      // }
    };

    importJSON();

    // getDoc(d).then(e=> set({ ref: ref?.formMap });
    // collection(this.firestore, formly) 'refs');
    const formly = doc(this.firestore, 'refs');
    getDoc(formly).then(docSnap => {
      if (docSnap.exists()) {
        //
      } else {
        setDoc(formly, { ref: ref }).then(e => {
          console.log('Document written with ID: ', e);
        });
      }
    });
  }
  v = 'material';
  // signal('material');
}
