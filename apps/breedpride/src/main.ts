import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {removeRxDatabase} from 'rxdb';
import { environment, DATABASE_NAME } from "@bh/rxdb";

bootstrapApplication(AppComponent, appConfig).catch((err) => {
  removeRxDatabase(DATABASE_NAME, environment.getRxStorage());
  console.error(err);
});
