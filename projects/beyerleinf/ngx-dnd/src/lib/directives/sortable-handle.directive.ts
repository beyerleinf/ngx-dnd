import {ChangeDetectorRef, Directive, ElementRef} from '@angular/core';

import {DragDropConfig} from '../config';
import {DragDropService} from '../service';

import {AbstractHandleDirective} from './abstract-handle.directive';
import {SortableDirective} from './sortable.directive';

/* tslint:disable directive-selector */
@Directive({selector: '[dnd-sortable-handle]'})
export class SortableHandleDirective extends AbstractHandleDirective {
  constructor(
      elemRef: ElementRef, dragDropService: DragDropService, config: DragDropConfig, _Component: SortableDirective,
      cdr: ChangeDetectorRef) {
    super(elemRef, dragDropService, config, _Component, cdr);
  }
}
