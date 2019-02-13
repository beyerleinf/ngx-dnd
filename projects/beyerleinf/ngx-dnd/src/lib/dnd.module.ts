import {NgModule} from '@angular/core';

import {DraggableHandleDirective} from './directives/draggable-handle.directive';
import {DraggableDirective} from './directives/draggable.directive';
import {DroppableDirective} from './directives/droppable.directive';
import {SortableContainerDirective} from './directives/sortable-container.directive';
import {SortableHandleDirective} from './directives/sortable-handle.directive';
import {SortableDirective} from './directives/sortable.directive';


@NgModule({
  declarations: [
    DraggableDirective,
    DraggableHandleDirective,
    DroppableDirective,
    SortableContainerDirective,
    SortableDirective,
    SortableHandleDirective,
  ],
  exports: [
    DraggableDirective,
    DraggableHandleDirective,
    DroppableDirective,
    SortableContainerDirective,
    SortableDirective,
    SortableHandleDirective,
  ],

})
export class DndModule {}
