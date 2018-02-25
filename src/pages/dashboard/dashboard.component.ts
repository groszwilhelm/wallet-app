import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { EntriesComponent } from '../entries/entries.component';
import { IEntry } from '../../interfaces/entry.interface';
import { State } from '../../app/app.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  public entries: Array<IEntry> = [];
  public state;
  private general$;

  constructor(public navCtrl: NavController, private store: Store<any>) {
    this.general$ = store.select((state: State) => state.entries);
    this.general$.subscribe((state) => {
      this.state = state;
      this.entries = state.entries;
    });
  }

  ionViewWillEnter() {

  }

  public goToAddEntries(): void {
    this.navCtrl.push(EntriesComponent);
  }

  handleClick(entry: IEntry) {
    console.log(entry);
  }
}
