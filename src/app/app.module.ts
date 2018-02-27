import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { EntriesModule } from '../pages/entries/entries.module';
import { EntriesService } from '../services/entries.service';

import * as fromEntries from '../pages/entries/entries.reducer';
import { EntriesEffects } from '../pages/entries/entries.effects';
import { DashboardNavigationComponent } from '../pages/dashboard/dashboard-navigation/dashboard-navigation.component';
import { SettingsComponent } from '../pages/settings/settings.component';

export interface State {
  entries: fromEntries.State;
}

const reducers = {
  entries: fromEntries.reducer
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardNavigationComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    EntriesModule,
    IonicModule.forRoot(AppComponent),
    IonicStorageModule.forRoot(),
    HttpModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([EntriesEffects])
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    DashboardComponent,
    DashboardNavigationComponent,
    SettingsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EntriesService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
