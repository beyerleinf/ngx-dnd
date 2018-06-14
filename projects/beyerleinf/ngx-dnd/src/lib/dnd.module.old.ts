import {ModuleWithProviders, NgModule} from '@angular/core';

import {DragDropConfig} from './config';
import {DraggableDirective, DraggableHandleDirective, DroppableDirective} from './directives';
import {SortableContainerDirective, SortableDirective, SortableHandleDirective} from './directives';

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
}
