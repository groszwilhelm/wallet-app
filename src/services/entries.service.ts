import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';

import { IEntry } from '../interfaces/entry.interface';

@Injectable()
export class EntriesService {
  private entries: Array<IEntry> = [];
  private baseUrl = 'http://localhost:8087';
  private endpoint = '/entries';

  constructor(private storage: Storage, private http: Http) {}

  public setEntry(entry: IEntry): void {
    entry.id = guid();
    this.entries.push(entry);
    this.storage.set('entries', this.entries);
  }

  public getEntries(): Promise<Array<IEntry>> {
    return this.storage.get('entries')
      .then((storedEntries: Array<IEntry>) => {
        this.entries = storedEntries === null ? [] : storedEntries;
        return this.entries.slice();
      });
  }

  public update(entry: IEntry): Promise<any> {
    return new Promise((resolve, reject) => {
      const matchedEntry: IEntry[] = this.entries.filter((storedEntry: IEntry) => storedEntry.id === entry.id);
      if (matchedEntry[0]) {
        for (let i = 0; i < this.entries.length; i++) {
          if (this.entries[i] === matchedEntry[0]) {
            this.entries[i] = entry;
          }
        }
        this.storage.clear();
        this.storage.set('entries', this.entries),
        resolve();
      }
    });
  }

  public removeEntries(): Promise<any> {
    return this.storage.clear();
  }
}

/**
 * Function that generates guid
*/
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
