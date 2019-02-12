import {ElementRef} from '@angular/core';

import {DragDropConfig} from '../../config/drag-drop-config';
import {DragDropService} from '../../service/drag-drop/drag-drop.service';

import {AbstractDirective} from './abstract.directive';

export abstract class AbstractHandleDirective {
  element: HTMLElement;

  constructor(
      elementReference: ElementRef, public dragDropService: DragDropService, public config: DragDropConfig,
      private directive: AbstractDirective) {
    this.element = elementReference.nativeElement;
    this.directive.dragHandle = this.element;
  }
}
