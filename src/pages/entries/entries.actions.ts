import { Action } from '@ngrx/store';
import { IEntry } from '../../interfaces/entry.interface';

export const INCOME = '[Entries] Add Income';
export const EXPENSE = '[Entries] Add Expense';

export class Income implements Action {
  readonly type = INCOME;

  constructor(public payload: IEntry) { }
}

export class Expense implements Action {
  readonly type = EXPENSE;

  constructor(public payload: IEntry) { }
}

export type All = Income | Expense;
