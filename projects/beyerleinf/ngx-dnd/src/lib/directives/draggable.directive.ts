import {ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';

import {DragDropConfig, DragImage} from '../config';
import {DragDropData} from '../models';
import {DragDropService} from '../service';

import {AbstractDirective} from './abstract';

/* tslint:disable directive-selector no-output-on-prefix */
@Directive({selector: '[dnd-draggable]'})
export class DraggableDirective extends AbstractDirective {
  @Input('dragEnabled')
  set draggable(value: boolean) {
    this.dragEnabled = !!value;
  }

  @Input('dropZones')
  set dropzones(value: string[]) {
    this.dropZones = value;
  }

  @Input('effectAllowed')
  set effectallowed(value: string) {
    this.effectAllowed = value;
  }

  @Input('effectCursor')
  set effectcursor(value: string) {
    this.effectCursor = value;
  }

  @Input() dragData: any;
  @Input() dragImage: string|DragImage|Function;
  @Input() cloneItem: boolean;

  @Output() onDragStart: EventEmitter<DragDropData> = new EventEmitter();
  @Output() onDragEnd: EventEmitter<DragDropData> = new EventEmitter<DragDropData>();
  @Output() onDragSuccess: EventEmitter<any> = new EventEmitter<any>();

  constructor(
      elementReference: ElementRef, dragDropService: DragDropService, config: DragDropConfig, cdr: ChangeDetectorRef) {
    super(elementReference, dragDropService, config, cdr);
    this.defaultCursor = this.element.style.cursor;
    this.dragEnabled = true;
  }

  dragStartCallback(): void {
    this.dragDropService.isDragged = true;
    this.dragDropService.dragData = this.dragData;
    this.dragDropService.onDragSuccessCallback = this.onDragSuccess;
    this.element.classList.add(this.config.onDragStartClass);
  }

  dragEndCallback(event: MouseEvent): void {
    this.dragDropService.isDragged = false;
    this.dragDropService.dragData = null;
    this.dragDropService.onDragSuccessCallback = null;
    this.element.classList.remove(this.config.onDragStartClass);
    this.onDragEnd.emit({dragData: this.dragData, mouseEvent: event});
  }
}
