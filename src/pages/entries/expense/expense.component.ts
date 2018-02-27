import { Component, OnInit } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { IEntry } from '../../../interfaces/entry.interface';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { Expense } from '../entries.actions';
import { DashboardNavigationComponent } from '../../dashboard/dashboard-navigation/dashboard-navigation.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html'
})

export class ExpenseComponent {

  constructor(public appCtrl: App, private store: Store<any>, private navCtrl: NavController) { }

  public submitChanges(entry: IEntry): void {
    const date = new Date();
    const formatedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

    entry.date = formatedDate;
    entry.type = 'expense';
    this.store.dispatch(new Expense(entry));
    this.appCtrl.getRootNavs()[0].pop();
  }

  public getToRoot() {
    // this.appCtrl.getRootNavs()[0].pop();
    // this.appCtrl.getRootNavs()[0].pop();
    this.appCtrl.getRootNavs()[0].pop();
  }
}
