import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { DragDropConfig } from '../config/drag-drop-config';
import { DragDropData } from '../models/drag-drop-data.model';
import { DragDropService } from '../service/drag-drop/drag-drop.service';

import { AbstractDirective } from './abstract/abstract.directive';

/* tslint:disable directive-selector no-output-on-prefix */
@Directive({ selector: '[dnd-draggable]' })
export class DraggableDirective extends AbstractDirective {
  @Input() dragData: any;

  @Output() onDragStart: EventEmitter<DragDropData>;
  @Output() onDragEnd: EventEmitter<DragDropData>;
  @Output() onDragSuccess: EventEmitter<any>;

  constructor(
    elementReference: ElementRef,
    dragDropService: DragDropService,
    config: DragDropConfig,
    cdr: ChangeDetectorRef
  ) {
    super(elementReference, dragDropService, config, cdr);

    this.onDragStart = new EventEmitter<DragDropData>();
    this.onDragEnd = new EventEmitter<DragDropData>();
    this.onDragSuccess = new EventEmitter<any>();

    this.defaultCursor = this.element.style.cursor;
    this.dragEnabled = true;
  }

  dragStartCallback(event: MouseEvent): void {
    this.dragDropService.isDragged = true;
    this.dragDropService.dragData = this.dragData;
    this.dragDropService.onDragSuccessCallback = this.onDragSuccess;
    this.element.classList.add(this.config.onDragStartClass);
    this.onDragStart.emit({ dragData: this.dragData, mouseEvent: event });
  }

  dragEndCallback(event: MouseEvent): void {
    this.dragDropService.isDragged = false;
    this.dragDropService.dragData = null;
    this.dragDropService.onDragSuccessCallback = null;
    this.element.classList.remove(this.config.onDragStartClass);
    this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
  }
}
