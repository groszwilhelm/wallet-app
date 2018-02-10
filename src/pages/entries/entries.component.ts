import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EntriesService } from '../../services/entries.service';
import { IEntry } from '../../interfaces/entry.interface';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';

@Component({
  selector: 'app-entries',
  templateUrl: 'entries.component.html',
})
export class EntriesComponent {
  public income;
  public expense;

  constructor() {
    this.income = IncomeComponent;
    this.expense = ExpenseComponent;
  }
}
