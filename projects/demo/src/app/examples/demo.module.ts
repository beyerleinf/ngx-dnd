import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DndModule} from '@beyerleinf/ngx-dnd';
import {PrismComponent} from 'angular-prism';

import {CustomDataComponent} from './dnd/custom-data/custom-data.component';
import {CustomFunctionComponent} from './dnd/custom-function/custom-function.component';
import {ShoppingBasketComponent} from './dnd/shopping-basket/shopping-basket.component';
import {DndSimpleComponent} from './dnd/simple/dnd-simple.component';
import {SimpleDemoComponent} from './dnd/simple/simple-demo.component';
import {ZoneComponent} from './dnd/zone/zone.component';
import {EmbeddedComponent} from './sortable/embedded/embedded.component';
import {MultiComponent} from './sortable/multi/multi.component';
import {RecycleMultiComponent} from './sortable/recycle-multi/recycle-multi.component';
import {SimpleSortableCopyComponent} from './sortable/simple-sortable-copy/simple-sortable-copy.component';
import {SimpleComponent} from './sortable/simple/simple.component';

@NgModule({
  imports: [CommonModule, FormsModule, DndModule.forRoot()],
  declarations: [
    PrismComponent, SimpleDemoComponent, SimpleComponent, ZoneComponent, CustomDataComponent, CustomFunctionComponent,
    ShoppingBasketComponent, SimpleComponent, MultiComponent, RecycleMultiComponent, EmbeddedComponent,
    SimpleSortableCopyComponent, DndSimpleComponent
  ],
  exports: [
    SimpleDemoComponent, SimpleComponent, ZoneComponent, CustomDataComponent, CustomFunctionComponent,
    ShoppingBasketComponent, SimpleComponent, MultiComponent, RecycleMultiComponent, EmbeddedComponent,
    SimpleSortableCopyComponent, DndSimpleComponent, DndModule
  ]
})
export class DemoDndModule {
}
