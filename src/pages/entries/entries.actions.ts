import { Action } from '@ngrx/store';
import { IEntry } from '../../interfaces/entry.interface';

export const INCOME = '[Entries] Add Income';
export const EXPENSE = '[Entries] Add Expense';
export const GET_ENTRIES = '[Entries] Get Entries';
export const GET_ENTRIES_SUCCESS = '[Entries] Get Entries Success';
export const REMOVE_ENTRIES = '[Entries] Remove Entries';
export const UPDATE_ENTRIES = '[Entries] Update Entries';
export const UPDATE_ENTRIES_SUCCESS = '[Entries] Update Entries Success';

export class Income implements Action {
  readonly type = INCOME;

  constructor(public payload: IEntry) { }
}

export class Expense implements Action {
  readonly type = EXPENSE;

  constructor(public payload: IEntry) { }
}

export class GetEntries implements Action {
  readonly type = GET_ENTRIES;

  constructor() { }
}

export class GetEntriesSuccess implements Action {
  readonly type = GET_ENTRIES_SUCCESS;

  constructor(public payload: Array<IEntry>) { }
}

export class UpdateEntries implements Action {
  readonly type = UPDATE_ENTRIES;

  constructor(public payload: IEntry) { }
}

// export class UpdateEntriesSuccess implements Action {
//   readonly type = UPDATE_ENTRIES_SUCCESS;

//   constructor(public payload: Array<IEntry>) { }
// }

export class RemoveEntries implements Action {
  readonly type = REMOVE_ENTRIES;

  constructor() { }
}

export type All = Income | Expense | GetEntries | GetEntriesSuccess | RemoveEntries;
