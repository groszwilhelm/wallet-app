import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveEntries } from '../entries/entries.actions';

@Component({
  selector: 'app-settings',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>
          Settings Page
        </ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding style="background-color: rgb(241, 241, 241);">
      <button ion-button block color="danger" id="removeStoredData" (click)="removeStoredData()" type="submit">
        Remove stored data
        <ion-icon style="margin-left: 10px;" name="trash"></ion-icon>
      </button>
    </ion-content>`
})

export class SettingsComponent {
  constructor(private store: Store<any>) {}

  removeStoredData() {
    this.store.dispatch(new RemoveEntries());
  }
}
