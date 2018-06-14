import {ModuleWithProviders, NgModule} from '@angular/core';

import {DragDropConfig} from './config';
import {DraggableDirective, DraggableHandleDirective, DroppableDirective} from './directives';
import {SortableContainerDirective, SortableDirective, SortableHandleDirective} from './directives';
import {DragDropService, dragDropServiceFactory, DragDropSortableService, dragDropSortableServiceFactory} from './service';

const providers = [
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
  ]
})
export class DndModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: DndModule, providers: providers};
  }
}
