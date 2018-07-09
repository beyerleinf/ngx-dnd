import {ChangeDetectorRef, Directive, ElementRef} from '@angular/core';

import {DragDropConfig} from '../config';
import {DragDropService} from '../service';

import {AbstractHandleDirective} from './abstract';
import {SortableDirective} from './sortable.directive';

/* tslint:disable directive-selector */
@Directive({selector: '[dnd-sortable-handle'})
export class SortableHandleDirective extends AbstractHandleDirective {
  constructor(
      elementRef: ElementRef, dragDropService: DragDropService, config: DragDropConfig, directive: SortableDirective,
      cdr: ChangeDetectorRef) {
    super(elementRef, dragDropService, config, directive, cdr);
  }
}
