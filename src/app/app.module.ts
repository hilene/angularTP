import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SearchBoxComponentComponent } from './search-box-component/search-box-component.component';
import { SearchBoxComponent2Component } from './search-box-component-2/search-box-component-2.component';
import { SearchBoxComponent3Component } from './search-box-component-3/search-box-component-3.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SearchBoxComponentComponent,
    SearchBoxComponent2Component,
    SearchBoxComponent3Component,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
