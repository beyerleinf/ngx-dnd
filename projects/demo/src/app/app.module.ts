import 'prismjs/prism';
import 'prismjs/components/prism-typescript';

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {DemoDndModule} from './examples/demo.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule, AppRoutingModule, DemoDndModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
