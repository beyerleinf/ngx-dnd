import {ModuleWithProviders, NgModule} from '@angular/core';

import {DragDropConfig} from './config';
// import {DragDropConfig} from './dnd.config';
// import {DragDropService, dragDropServiceFactory, DragDropSortableService, dragDropSortableServiceFactory} from
// './dnd.service'; import {DraggableComponent, DraggableHandleComponent} from './draggable.component'; import
// {DroppableComponent} from './droppable.component'; import {SortableComponent, SortableContainer,
// SortableHandleComponent} from './sortable.component';

import {DraggableDirective, DraggableHandleDirective, DroppableDirective} from './directives';
import {SortableContainerDirective, SortableDirective, SortableHandleDirective} from './directives';
import {DragDropService, dragDropServiceFactory, DragDropSortableService, dragDropSortableServiceFactory} from './service';

// export * from './abstract.component';
// export * from './dnd.config';
// export * from './dnd.service';
// export * from './draggable.component';
// export * from './droppable.component';
// export * from './sortable.component';

export * from './config';
export * from './directives';
export * from './models';
export * from './service';

export let providers = [
  DragDropConfig, {provide: DragDropService, useFactory: dragDropServiceFactory},
  {provide: DragDropSortableService, useFactory: dragDropSortableServiceFactory, deps: [DragDropConfig]}
];

@NgModule({
  declarations: [
    DraggableDirective, DraggableHandleDirective, DroppableDirective, SortableContainerDirective, SortableDirective,
    SortableHandleDirective
  ],
  exports: [
    DraggableDirective, DraggableHandleDirective, DroppableDirective, SortableContainerDirective, SortableDirective,
    SortableHandleDirective
  ],

})
export class DndModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: DndModule, providers: providers};
  }
}
