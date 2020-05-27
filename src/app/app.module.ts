import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageListComponent } from './components/page-list/page-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';


@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    SearchBarComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
