import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytesResumable,
} from '@angular/fire/storage';

import { getAuth } from '@angular/fire/auth';
import imageCompression from 'browser-image-compression';
import { EMPTY, from, Observable, Subject } from 'rxjs';
@Injectable()
export class FileService {
  private storage: Storage = inject(Storage);
  private http: HttpClient = inject(HttpClient);
  fileLink: Subject<string> = new Subject<string>();

  //TODO rework
  getDownloadUrlByFilePath(filePath: string): Observable<any> {
    // return this._storage.ref(filePath).getDownloadURL();
    return EMPTY;
  }

  getExtensionByType(type: string): string {
    const attr = type.substring(type.indexOf('/') + 1);
    if (attr) {
      return '.' + attr;
    }
    return '';
  }

  getFilePath(file: File) {
    return this.getRndName() + this.getExtensionByType(file.type);
  }

  getRndName(length = 13): string {
    return Math.random()

      .toString(length + 2)
      .substring(2);
  }

  uploadAvatar(file: File, schemaName: string, entityId: string): void {
    const allowedTypes = ['image/jpeg', 'image/png'];
    // if (!allowedTypes.includes(file.type)) {
    //   return;
    // }
    const filePath = `${getAuth()?.currentUser?.uid}/${this.getFilePath(file)}`;
    console.log(`File upload. Before upload, file size is: ${file.size}`);
    from(
      imageCompression(file, {
        maxSizeMB: 5,
        useWebWorker: true,
      })
    ).subscribe((e) => {
      console.log(`File upload. After upload, file size is: ${e.size}`);
      this.uploadFileToStore(e, filePath);
    });
    // this.uploadFileToStore(file, filePath);
  }

  uploadFileToStore(file: File, filePath: string): void {
    const storageRef = ref(this.storage, filePath);

    uploadBytesResumable(storageRef, file).then((e) => {
      console.log('File upload. Upload task was complete');

      getDownloadURL(e.ref).then((link) => {
        console.log(link);
        this.fileLink.next(link);
      });
    });
  }
}
