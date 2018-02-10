import { Component, OnInit } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { EntriesService } from '../../../services/entries.service';
import { IEntry } from '../../../interfaces/entry.interface';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html'
})

export class IncomeComponent {

  constructor(private entriesService: EntriesService, private appCtrl: App) { }

  public submitChanges(entry: IEntry): void {
    const date = new Date();
    const formatedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

    entry.date = formatedDate;
    entry.type = 'income';
    this.entriesService.setEntry(entry);
    this.appCtrl.getRootNavs()[0].pop();
  }

  public getToRoot() {
    this.appCtrl.getRootNavs()[0].pop();
  }
}
