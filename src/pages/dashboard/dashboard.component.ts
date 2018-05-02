import { Component, OnInit } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { EntriesComponent } from '../entries/entries.component';
import { IEntry } from '../../interfaces/entry.interface';
import { State } from '../../app/app.module';
import { GetEntries } from '../entries/entries.actions';
import { IncomeComponent } from '../entries/income/income.component';
import { ExpenseComponent } from '../entries/expense/expense.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  public dashboard;
  public entries: Array<IEntry> = [];
  public state;
  private general$;

  constructor(public navCtrl: NavController, private store: Store<any>, private app: App) {
    this.general$ = store.select((state: State) => state.entries);
    this.general$.subscribe((state) => {
      this.state = state;
      this.entries = state.entries;
    });
  }

  ionViewWillEnter() {
    this.store.dispatch(new GetEntries());
  }

  public goToAddEntries(): void {
    this.app.getRootNavs()[0].push(EntriesComponent);
  }

  handleClick(entry: IEntry) {
    if (entry.type === 'income') {
      this.navCtrl.push(IncomeComponent, {
        entry
      });
    } else
    if (entry.type === 'expense') {
      this.navCtrl.push(ExpenseComponent, {
        entry
      });
    }
  }
}
