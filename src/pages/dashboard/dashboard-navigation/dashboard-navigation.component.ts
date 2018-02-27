import { Component, OnInit } from '@angular/core';

import { DashboardComponent } from '../dashboard.component';
import { SettingsComponent } from '../../settings/settings.component';

@Component({
  selector: 'app-dashboard-navogation',
  template: `
    <ion-tabs>
        <ion-tab tabIcon="ios-list-box" [root]="dashboard"></ion-tab>
        <ion-tab tabIcon="compass" [root]="dashboard"></ion-tab>
        <ion-tab tabIcon="analytics" [root]="dashboard"></ion-tab>
        <ion-tab tabIcon="settings" [root]="settings"></ion-tab>
    </ion-tabs>`
})

export class DashboardNavigationComponent {
  public dashboard = DashboardComponent;
  public settings = SettingsComponent;
}
