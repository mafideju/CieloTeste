import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

import { WikiResponse } from '../models/wiki-response';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) { }

  onFormSubmitService(searchTerm: string) {
    return this.http.get<WikiResponse>(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action: 'query',
        list: 'search',
        format: 'json',
        utf8: '3',
        srsearch: searchTerm,
        origin: '*'
      }
    }).pipe(pluck('query', 'search'));
  }
}

// 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&utf=3&srsearch=Nelson'
