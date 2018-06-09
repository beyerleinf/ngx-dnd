import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {ComponentWrapper} from './component-wrapper/component-wrapper.component';
// import {PageWrapper} from './page-wrapper/page-wrapper.component';
import {SideNavComponent} from './side-nav/side-nav.component';

// import {Analytics} from './analytics/analytics';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule, RouterModule,
    // ComponentWrapper,
    // PageWrapper,
    SideNavComponent,
    // NgbModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    // ComponentWrapper,
    // PageWrapper,
    SideNavComponent
  ],
  //   providers: [Analytics]
})
export class SharedModule {
}
