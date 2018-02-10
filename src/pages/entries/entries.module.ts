import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';

import { EntriesComponent } from './entries.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
  declarations: [
    EntriesComponent,
    IncomeComponent,
    ExpenseComponent
  ],
  imports: [
    IonicPageModule.forChild(EntriesComponent),
    FormsModule
  ],
  entryComponents: [
    IncomeComponent,
    ExpenseComponent
  ]
})
export class EntriesModule {}
