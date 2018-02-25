import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { EntriesModule } from '../pages/entries/entries.module';
import { EntriesService } from '../services/entries.service';

import * as fromEntries from '../pages/entries/entries.reducer';

export interface State {
  entries: fromEntries.State;
}

const reducers = {
  entries: fromEntries.reducer
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    EntriesModule,
    IonicModule.forRoot(AppComponent),
    IonicStorageModule.forRoot(),
    HttpModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    DashboardComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EntriesService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
