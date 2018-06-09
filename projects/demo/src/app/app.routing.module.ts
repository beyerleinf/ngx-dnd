import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CustomDataComponent} from './examples/dnd/custom-data/custom-data.component';
import {CustomFunctionComponent} from './examples/dnd/custom-function/custom-function.component';
import {ShoppingBasketComponent} from './examples/dnd/shopping-basket/shopping-basket.component';
import {SimpleDemoComponent} from './examples/dnd/simple/simple-demo.component';
import {ZoneComponent} from './examples/dnd/zone/zone.component';
import {EmbeddedComponent} from './examples/sortable/embedded/embedded.component';
import {MultiComponent} from './examples/sortable/multi/multi.component';
import {RecycleMultiComponent} from './examples/sortable/recycle-multi/recycle-multi.component';
import {SimpleSortableCopyComponent} from './examples/sortable/simple-sortable-copy/simple-sortable-copy.component';
import {SimpleComponent} from './examples/sortable/simple/simple.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dnd-simple'}, {path: 'dnd-simple', component: SimpleDemoComponent},
  {path: 'dnd-zone', component: ZoneComponent}, {path: 'dnd-custom-data', component: CustomDataComponent},
  {path: 'dnd-custom-function', component: CustomFunctionComponent},
  {path: 'dnd-shopping-basket', component: ShoppingBasketComponent},
  {path: 'sortable-simple', component: SimpleComponent},
  {path: 'sortable-recycle-multi', component: RecycleMultiComponent},
  {path: 'sortable-simple-copy', component: SimpleSortableCopyComponent},
  {path: 'sortable-multi', component: MultiComponent}, {path: 'sortable-embedded', component: EmbeddedComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
