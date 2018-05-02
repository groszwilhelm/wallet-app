import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, App, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { IEntry } from '../../../interfaces/entry.interface';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { Income, UpdateEntries } from '../entries.actions';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html'
})

export class IncomeComponent implements OnInit {
  public entry: IEntry = {
    id: null,
    value: '',
    description: '',
    type: 'income',
    date: null
  };
  private edit = false;
  @ViewChild('form') formRef: NgForm;

  constructor(private appCtrl: App, private store: Store<any>, private navParams: NavParams, private navCtrl: NavController) {
    console.log(navParams.get('entry'));
  }

  ngOnInit() {
    if (this.navParams.get('entry')) {
      this.edit = true;
      const { id, value, description } = this.navParams.get('entry');
      this.entry.id = id;
      this.entry.value = value;
      this.entry.description = description;
    }
  }

  public submitChanges(): void {
    const date = new Date();
    const formatedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

    this.entry.date = formatedDate;

    if (this.navParams.get('entry')) {
      this.store.dispatch(new UpdateEntries(this.entry));
      this.getToRoot();
      return;
    }

    this.store.dispatch(new Income(this.entry));
    this.getToRoot();
  }

  public getToRoot() {
    if (this.navParams.get('entry')) {
      return this.navCtrl.pop();
    } else {
      this.appCtrl.getRootNavs()[0].pop();
    }
  }
}
