import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CustomDataDemoComponent} from './examples/dnd/custom-data/custom-data-demo.component';
import {CustomFunctionDemoComponent} from './examples/dnd/custom-function/custom-function-demo.component';
import {BasketDemoComponent} from './examples/dnd/shopping-basket/basket-demo.component';
import {SimpleDemoComponent} from './examples/dnd/simple/simple-demo.component';
import {ZoneDemoComponent} from './examples/dnd/zone/zone-demo.component';
import {EmbeddedComponent} from './examples/sortable/embedded/embedded.component';
import {MultiComponent} from './examples/sortable/multi/multi.component';
import {RecycleMultiComponent} from './examples/sortable/recycle-multi/recycle-multi.component';
import {SimpleSortableCopyComponent} from './examples/sortable/simple-sortable-copy/simple-sortable-copy.component';
import {SimpleComponent} from './examples/sortable/simple/simple.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dnd-simple'},
  {
    path: 'dnd',
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/'},
      {path: 'simple', component: SimpleDemoComponent},
      {path: 'zones', component: ZoneDemoComponent},
      {path: 'custom-data', component: CustomDataDemoComponent},
      {path: 'custom-function', component: CustomFunctionDemoComponent},
      {path: 'shopping-basket', component: BasketDemoComponent},
      {path: '**', redirectTo: '/'},
    ]
  },
  {
    path: 'sortable',
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/'},
      {path: 'simple', component: SimpleComponent},
      {path: 'recycle-multi', component: RecycleMultiComponent},
      {path: 'simple-copy', component: SimpleSortableCopyComponent},
      {path: 'multi', component: MultiComponent},
      {path: 'embedded', component: EmbeddedComponent},
      {path: '**', redirectTo: '/'},
    ]
  },
  {path: '**', redirectTo: '/'},
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
