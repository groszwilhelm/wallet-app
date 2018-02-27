import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import {
  GetEntries,
  GET_ENTRIES,
  INCOME,
  Income,
  GetEntriesSuccess,
  EXPENSE,
  Expense,
  REMOVE_ENTRIES,
  RemoveEntries
} from './entries.actions';
import { EntriesService } from '../../services/entries.service';
import { IEntry } from '../../interfaces/entry.interface';

import { tap, switchMap } from 'rxjs/operators';

@Injectable()
export class EntriesEffects {

  @Effect() entries$: Observable<Action> = this.actions$.ofType(GET_ENTRIES)
    .pipe(
      tap((action: GetEntries) => {
        console.log('[EntriesEffects] get entries');
      }),
      switchMap((action: GetEntries) => {
        return this.entriesService.getEntries()
          .then((data: Array<IEntry>) => {
            return new GetEntriesSuccess(data);
          });
      }));

  @Effect({ dispatch: false }) income$: Observable<Action> = this.actions$.ofType(INCOME)
    .pipe(
      tap((action: Income) => {
        console.log('[EntriesEffects] add income');
        this.entriesService.setEntry(action.payload);
      }));

  @Effect({ dispatch: false }) expense$: Observable<Action> = this.actions$.ofType(EXPENSE)
    .pipe(
      tap((action: Expense) => {
        console.log('[EntriesEffects] add expense');
        this.entriesService.setEntry(action.payload);
      }));

  @Effect() removeEntries$: Observable<Action> = this.actions$.ofType(REMOVE_ENTRIES)
    .pipe(
      tap((action: RemoveEntries) => {
        console.log('[EntriesEffects] remove all entries');
      }),
      switchMap((action: RemoveEntries) => {
        return this.entriesService.removeEntries()
          .then(() => {
            return new GetEntries();
          });
      }));

  constructor(
    private actions$: Actions,
    private entriesService: EntriesService
  ) { }
}
