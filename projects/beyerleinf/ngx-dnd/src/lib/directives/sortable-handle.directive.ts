import {Directive, ElementRef} from '@angular/core';

import {DragDropConfig} from '../config/drag-drop-config';
import {DragDropService} from '../service/drag-drop/drag-drop.service';

import {AbstractHandleDirective} from './abstract/abstract-handle.directive';
import {SortableDirective} from './sortable.directive';

/* tslint:disable directive-selector */
@Directive({selector: '[dnd-sortable-handle]'})
export class SortableHandleDirective extends AbstractHandleDirective {
  constructor(
      elementRef: ElementRef, dragDropService: DragDropService, config: DragDropConfig, directive: SortableDirective) {
    super(elementRef, dragDropService, config, directive);
  }
}
