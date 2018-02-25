import * as EntriesAction from './entries.actions';
import { IEntry } from '../../interfaces/entry.interface';

export interface State {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
  entries: Array<IEntry>;
  date: Date;
}

const initialState: State = {
  totalIncome: 0,
  totalExpenses: 0,
  balance: 0,
  entries: [],
  date: new Date(),
};

export function reducer(state = initialState, action: EntriesAction.All) {
  switch (action.type) {
    case EntriesAction.INCOME: {
      const entries = state.entries.slice();
      entries.push(action.payload);
      return {
        ...state,
        totalIncome: (state.totalIncome + +action.payload.value).toFixed(2),
        balance: (state.balance + +action.payload.value).toFixed(2),
        entries: entries
      };
    }
    case EntriesAction.EXPENSE: {
      const entries = state.entries.slice();
      entries.push(action.payload);
      return {
        ...state,
        totalExpenses: (state.totalExpenses + +action.payload.value).toFixed(2),
        balance: (state.totalIncome - (state.totalExpenses + +action.payload.value)).toFixed(2),
        entries: entries
      };
    }
    default:
      return state;
  }
}
