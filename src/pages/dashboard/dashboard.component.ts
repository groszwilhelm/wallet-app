import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { EntriesComponent } from '../entries/entries.component';
import { EntriesService } from '../../services/entries.service';
import { IEntry } from '../../interfaces/entry.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  public entries: Array<IEntry> = [];

  constructor(public navCtrl: NavController, private entriesService: EntriesService) { }

  ionViewWillEnter() {
    this.entriesService.getEntries()
      .then((entries: Array<IEntry>) => {
        this.entries = entries;
      });
  }

  /**
   * Method that
   */
  public goToAddEntries(): void {
    this.navCtrl.push(EntriesComponent);
  }

  handleClick(entry: IEntry) {
    console.log(entry);
  }
}
