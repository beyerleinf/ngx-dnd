import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {HighlightModule} from 'ngx-highlightjs';

import {CodeComponent} from './code/code.component';
import {SideNavComponent} from './side-nav/side-nav.component';

export function hljsLanguages() {
  return [
    {
      name: 'typescript',
      func: typescript,
    },
    {
      name: 'xml',
      func: xml,
    },
  ];
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HighlightModule.forRoot({
      languages: hljsLanguages,
    }),
    TabsModule.forRoot(),
  ],
  exports: [
    CommonModule,
    RouterModule,
    SideNavComponent,
    FormsModule,
    TabsModule,
    CodeComponent,
  ],
  declarations: [
    SideNavComponent,
    CodeComponent,
  ],
})
export class SharedModule {
}
