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
    this.entries.push(entry);
    this.storage.set('entries', this.entries);
    this.http.post(this.baseUrl + this.endpoint, entry)
      .subscribe((data) => {
        console.log(data);
      });
  }

  public getEntries(): Promise<Array<IEntry>> {
    return this.storage.get('entries')
      .then((storedEntries: Array<IEntry>) => {
        this.entries = storedEntries === null ? [] : storedEntries;
        return this.entries.slice();
      });
  }
}
