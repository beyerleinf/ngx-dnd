import {ChangeDetectorRef, ElementRef} from '@angular/core';

import {DragDropConfig} from '../config';
import {DragDropService} from '../service';

import {AbstractDirective} from './abstract.directive';

export class AbstractHandleDirective {
  _elem: HTMLElement;
  constructor(
      elemRef: ElementRef, public _dragDropService: DragDropService, public _config: DragDropConfig,
      private _Component: AbstractDirective, private _cdr: ChangeDetectorRef) {
    this._elem = elemRef.nativeElement;
    this._Component.setDragHandle(this._elem);
  }
}
