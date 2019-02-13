import {ChangeDetectorRef, Directive, ElementRef, EventEmitter, Output} from '@angular/core';

import {DragDropConfig} from '../config/drag-drop-config';
import {DragDropData} from '../models/drag-drop-data.model';
import {DragDropService} from '../service/drag-drop/drag-drop.service';
import {isPresent} from '../util';

import {AbstractDirective} from './abstract/abstract.directive';

/* tslint:disable directive-selector no-output-on-prefix */
@Directive({selector: '[dnd-droppable]'})
export class DroppableDirective extends AbstractDirective {
  @Output() onDropSuccess: EventEmitter<DragDropData> = new EventEmitter<DragDropData>();
  @Output() onDragEnter: EventEmitter<DragDropData> = new EventEmitter<DragDropData>();
  @Output() onDragOver: EventEmitter<DragDropData> = new EventEmitter<DragDropData>();
  @Output() onDragLeave: EventEmitter<DragDropData> = new EventEmitter<DragDropData>();

  constructor(
      elementReference: ElementRef, dragDropService: DragDropService, config: DragDropConfig, cdr: ChangeDetectorRef) {
    super(elementReference, dragDropService, config, cdr);

    this.dropEnabled = true;
  }

  dragEnterCallback(event: MouseEvent): void {
    if (this.dragDropService.isDragged) {
      this.element.classList.add(this.config.onDragEnterClass);
      this.onDragEnter.emit({dragData: this.dragDropService.dragData, mouseEvent: event});
    }
  }

  dragOverCallback(event: MouseEvent): void {
    if (this.dragDropService.isDragged) {
      this.element.classList.add((this.config.onDragOverClass));
      this.onDragOver.emit({dragData: this.dragDropService.dragData, mouseEvent: event});
    }
  }

  dragLeaveCallback(event: MouseEvent): void {
    if (this.dragDropService.isDragged) {
      this.element.classList.remove(this.config.onDragOverClass);
      this.element.classList.remove(this.config.onDragEnterClass);
      this.onDragLeave.emit({dragData: this.dragDropService.dragData, mouseEvent: event});
    }
  }

  dropCallback(event: MouseEvent): void {
    const dataTransfer = (event as any).dataTransfer;

    if (this.dragDropService.isDragged || (isPresent(dataTransfer) && isPresent(dataTransfer.files))) {
      this.onDropSuccess.emit({dragData: this.dragDropService.dragData, mouseEvent: event});

      if (isPresent(this.dragDropService.onDragSuccessCallback)) {
        this.dragDropService.onDragSuccessCallback.emit({dragData: this.dragDropService.dragData, mouseEvent: event});
      }

      this.element.classList.remove(this.config.onDragOverClass);
      this.element.classList.remove(this.config.onDragEnterClass);
    }
  }
}
