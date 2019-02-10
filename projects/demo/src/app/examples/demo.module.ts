import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DndModule} from '@beyerleinf/ngx-dnd';

import {SharedModule} from '../shared/shared.module';

import {CustomDataComponent} from './dnd/custom-data/custom-data.component';
import {CustomFunctionComponent} from './dnd/custom-function/custom-function.component';
import {BasketDemoComponent} from './dnd/shopping-basket/basket-demo.component';
import {ShoppingBasketComponent} from './dnd/shopping-basket/shopping-basket.component';
import {DndSimpleComponent} from './dnd/simple/dnd-simple.component';
import {SimpleDemoComponent} from './dnd/simple/simple-demo.component';
import {ZoneDemoComponent} from './dnd/zone/zone-demo.component';
import {ZoneComponent} from './dnd/zone/zone.component';
import {EmbeddedComponent} from './sortable/embedded/embedded.component';
import {MultiComponent} from './sortable/multi/multi.component';
import {RecycleMultiComponent} from './sortable/recycle-multi/recycle-multi.component';
import {SimpleSortableCopyComponent} from './sortable/simple-sortable-copy/simple-sortable-copy.component';
import {SimpleComponent} from './sortable/simple/simple.component';
import { CustomFunctionDemoComponent } from './dnd/custom-function/custom-function-demo.component';
import { CustomDataDemoComponent } from './dnd/custom-data/custom-data-demo.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DndModule.forRoot(),
    SharedModule,
  ],
  declarations: [
    SimpleDemoComponent,
    SimpleComponent,
    ZoneComponent,
    CustomDataComponent,
    CustomFunctionComponent,
    ShoppingBasketComponent,
    SimpleComponent,
    MultiComponent,
    RecycleMultiComponent,
    EmbeddedComponent,
    SimpleSortableCopyComponent,
    DndSimpleComponent,
    ZoneDemoComponent,
    BasketDemoComponent,
    CustomFunctionDemoComponent,
    CustomDataDemoComponent,
  ],
  exports: [
    SimpleDemoComponent,
    SimpleComponent,
    ZoneComponent,
    CustomDataComponent,
    CustomFunctionComponent,
    ShoppingBasketComponent,
    SimpleComponent,
    MultiComponent,
    RecycleMultiComponent,
    EmbeddedComponent,
    SimpleSortableCopyComponent,
    DndSimpleComponent,
    DndModule,
    ZoneDemoComponent,
    BasketDemoComponent,
  ]
})
export class DemoDndModule {
}
