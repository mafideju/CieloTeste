import { Component } from '@angular/core';
import { WikiService } from './service/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchResults = [];
  constructor(private wiki: WikiService) {}

  onSubmitForm(searchTerm: string) {
    this.wiki
      .onFormSubmitService(searchTerm)
      .subscribe((response) => {
        this.searchResults = response;
      });
  }
}
