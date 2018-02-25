import { Component, OnInit } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { EntriesService } from '../../../services/entries.service';
import { IEntry } from '../../../interfaces/entry.interface';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { Income } from '../entries.actions';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html'
})

export class IncomeComponent {

  constructor(private entriesService: EntriesService, private appCtrl: App, private store: Store<any>) { }

  public submitChanges(entry: IEntry): void {
    const date = new Date();
    const formatedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

    entry.date = formatedDate;
    entry.type = 'income';
    this.store.dispatch(new Income(entry));
    this.entriesService.setEntry(entry);
    this.appCtrl.getRootNavs()[0].pop();
  }

  public getToRoot() {
    this.appCtrl.getRootNavs()[0].pop();
  }
}
