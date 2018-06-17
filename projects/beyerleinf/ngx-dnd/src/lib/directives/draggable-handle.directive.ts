import {ChangeDetectorRef, Directive, ElementRef} from '@angular/core';

import {DragDropConfig} from '../config';
import {DragDropService} from '../service';

import {AbstractHandleDirective} from './abstract';
import {DraggableDirective} from './draggable.directive';

/* tslint:disable directive-selector */
@Directive({selector: '[dnd-draggable-handle'})
export class DraggableHandleDirective extends AbstractHandleDirective {
  constructor(
      elementReference: ElementRef, dragDropService: DragDropService, config: DragDropConfig,
      directive: DraggableDirective, cdr: ChangeDetectorRef) {
    super(elementReference, dragDropService, config, directive, cdr);
  }
}
