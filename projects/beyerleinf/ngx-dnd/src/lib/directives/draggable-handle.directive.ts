import {Directive, ElementRef} from '@angular/core';

import {DragDropConfig} from '../config/drag-drop-config';
import {DragDropService} from '../service/drag-drop/drag-drop.service';

import {AbstractHandleDirective} from './abstract/abstract-handle.directive';
import {DraggableDirective} from './draggable.directive';

/* tslint:disable directive-selector */
@Directive({selector: '[dnd-draggable-handle]'})
export class DraggableHandleDirective extends AbstractHandleDirective {
  constructor(
      elementReference: ElementRef, dragDropService: DragDropService, config: DragDropConfig,
      directive: DraggableDirective) {
    super(elementReference, dragDropService, config, directive);
  }
}
