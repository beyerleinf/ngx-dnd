import {ChangeDetectorRef, Directive, ElementRef} from '@angular/core';

import {DragDropConfig} from '../config';
import {DragDropService} from '../service';

import {AbstractHandleDirective} from './abstract-handle.directive';
import {DraggableDirective} from './draggable.directive';

/* tslint:disable directive-selector */
@Directive({selector: '[dnd-draggable-handle]'})
export class DraggableHandleDirective extends AbstractHandleDirective {
  constructor(
      elemRef: ElementRef, dragDropService: DragDropService, config: DragDropConfig, _Component: DraggableDirective,
      cdr: ChangeDetectorRef) {
    super(elemRef, dragDropService, config, _Component, cdr);
  }
}
