import {ModuleWithProviders, NgModule} from '@angular/core';

import {DragDropConfig} from './config';
import {DraggableDirective, DraggableHandleDirective, DroppableDirective} from './directives';
import {SortableContainerDirective, SortableDirective, SortableHandleDirective} from './directives';

const providers = [DragDropConfig];

@NgModule({
  imports: [],
  declarations: [
    DraggableDirective, DraggableHandleDirective, DroppableDirective, SortableContainerDirective, SortableDirective,
    SortableHandleDirective
  ],
  providers: providers,
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
