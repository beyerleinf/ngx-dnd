import {ModuleWithProviders, NgModule} from '@angular/core';

import {DragDropConfig} from './dnd.config';
import {DragDropService, dragDropServiceFactory, DragDropSortableService, dragDropSortableServiceFactory} from './dnd.service';
import {DraggableComponent, DraggableHandleComponent} from './draggable.component';
import {DroppableComponent} from './droppable.component';
import {SortableComponent, SortableContainer, SortableHandleComponent} from './sortable.component';

export * from './abstract.component';
export * from './dnd.config';
export * from './dnd.service';
export * from './draggable.component';
export * from './droppable.component';
export * from './sortable.component';

export let providers = [
  DragDropConfig, {provide: DragDropService, useFactory: dragDropServiceFactory},
  {provide: DragDropSortableService, useFactory: dragDropSortableServiceFactory, deps: [DragDropConfig]}
];

@NgModule({
  declarations: [
    DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent,
    SortableHandleComponent
  ],
  exports: [
    DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent,
    SortableHandleComponent
  ],

})
export class DndModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: DndModule, providers: providers};
  }
}
