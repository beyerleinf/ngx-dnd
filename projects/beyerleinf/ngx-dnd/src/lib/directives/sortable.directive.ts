import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { DragDropConfig } from '../config/drag-drop-config';
import { DragDropSortableService } from '../service/drag-drop-sortable/drag-drop-sortable.service';
import { DragDropService } from '../service/drag-drop/drag-drop.service';

import { AbstractDirective } from './abstract/abstract.directive';
import { SortableContainerDirective } from './sortable-container.directive';

/* tslint:disable directive-selector no-output-on-prefix */
@Directive({ selector: '[dnd-sortable]' })
export class SortableDirective extends AbstractDirective {
  @Input() sortableIndex: number;
  @Input() dragData: any;

  @Output() onDragSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDragStart: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDragOver: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDragEnd: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDropSuccess: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    elementRef: ElementRef,
    dragDropService: DragDropService,
    config: DragDropConfig,
    private sortableContainer: SortableContainerDirective,
    private sortableDataService: DragDropSortableService,
    cdr: ChangeDetectorRef
  ) {
    super(elementRef, dragDropService, config, cdr);
    this.dropZones = this.sortableContainer.dropZones;
    this.dragEnabled = true;
    this.dropEnabled = true;
  }

  dragStartCallback(): void {
    this.sortableDataService.isDragged = true;
    this.sortableDataService.sortableContainer = this.sortableContainer;
    this.sortableDataService.index = this.sortableIndex;
    this.sortableDataService.markSortable(this.element);

    this.dragDropService.isDragged = true;
    this.dragDropService.dragData = this.dragData;
    this.dragDropService.onDragSuccessCallback = this.onDragSuccess;

    this.onDragStart.emit(this.dragDropService.dragData);
  }

  dragOverCallback(): void {
    if (
      this.sortableDataService.isDragged &&
      this.element !== this.sortableDataService.element
    ) {
      this.sortableDataService.sortableContainer = this.sortableContainer;
      this.sortableDataService.index = this.sortableIndex;
      this.sortableDataService.markSortable(this.element);
      this.onDragOver.emit(this.dragDropService.dragData);
    }
  }

  dragEndCallback(): void {
    this.sortableDataService.isDragged = false;
    this.sortableDataService.sortableContainer = null;
    this.sortableDataService.index = null;
    this.sortableDataService.markSortable(null);

    this.dragDropService.isDragged = false;
    this.dragDropService.dragData = null;
    this.dragDropService.onDragSuccessCallback = null;

    this.onDragEnd.emit(this.dragDropService.dragData);
  }

  dragEnterCallback(): void {
    if (this.sortableDataService.isDragged) {
      this.sortableDataService.markSortable(this.element);
      if (
        this.sortableIndex !== this.sortableDataService.index ||
        this.sortableDataService.sortableContainer.sortableData !==
          this.sortableContainer.sortableData
      ) {
        const item: any = this.sortableDataService.sortableContainer.getItemAt(
          this.sortableDataService.index
        );

        this.sortableDataService.sortableContainer.removeItemAt(
          this.sortableDataService.index
        );
        if (
          this.sortableDataService.sortableContainer.sortableData.length === 0
        ) {
          this.sortableDataService.sortableContainer.dropEnabled = true;
        }

        this.sortableContainer.insertItemAt(item, this.sortableIndex);
        if (this.sortableContainer.dropEnabled) {
          this.sortableContainer.dropEnabled = false;
        }
        this.sortableDataService.sortableContainer = this.sortableContainer;
        this.sortableDataService.index = this.sortableIndex;
        this.detectChanges();
      }
    }
  }

  dropCallback(): void {
    if (this.sortableDataService.isDragged) {
      this.onDropSuccess.emit(this.dragDropService.dragData);
      if (this.dragDropService.onDragSuccessCallback) {
        this.dragDropService.onDragSuccessCallback.emit(
          this.dragDropService.dragData
        );
      }

      this.sortableContainer.detectChanges();
    }
  }
}
