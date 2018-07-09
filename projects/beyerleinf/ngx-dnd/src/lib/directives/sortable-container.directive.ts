import {ChangeDetectorRef, Directive, ElementRef, Input} from '@angular/core';
import {FormArray} from '@angular/forms';

import {DragDropConfig} from '../config';
import {DragDropService, DragDropSortableService} from '../service';
import {SortableArrayHandler, SortableFormArrayHandler} from '../util';

import {AbstractDirective} from './abstract';

/* tslint:disable directive-selector */
@Directive({selector: '[dnd-sortable-container]'})
export class SortableContainerDirective extends AbstractDirective {
  private _sortableData: any[]|FormArray;
  private _sortableHandler: SortableFormArrayHandler|SortableArrayHandler;

  @Input()
  set sortableData(sortableData: Array<any>|FormArray) {
    this._sortableData = sortableData;
    if (sortableData instanceof FormArray) {
      this._sortableHandler = new SortableFormArrayHandler();
    } else {
      this._sortableHandler = new SortableArrayHandler();
    }

    this.dropEnabled = !!this._sortableData;
  }

  get sortableData(): Array<any>|FormArray {
    return this._sortableData;
  }

  constructor(
      elementRef: ElementRef, dragDropService: DragDropService, config: DragDropConfig, cdr: ChangeDetectorRef,
      private sortableDataService: DragDropSortableService) {
    super(elementRef, dragDropService, config, cdr);
    this._sortableData = [];
    this.dragEnabled = false;
  }

  dragEnterCallback(event: Event): void {
    if (this.sortableDataService.isDragged) {
      const item = this.sortableDataService.sortableContainer.getItemAt(this.sortableDataService.index);

      if (this.indexOf(item === -1)) {
        this.sortableDataService.sortableContainer.removeItemAt(this.sortableDataService.index);

        if (this.sortableDataService.sortableContainer.sortableData.length === 0) {
          this.sortableDataService.sortableContainer.dropEnabled = true;
        }

        this.insertItemAt(item, 0);
        this.sortableDataService.sortableContainer = this;
        this.sortableDataService.index = 0;
      }

      this.detectChanges();
    }
  }

  getItemAt(index: number): any {
    return this._sortableHandler.getItemAt(this._sortableData, index);
  }

  indexOf(item: any): number {
    return this._sortableHandler.indexOf(this._sortableData, item);
  }

  removeItemAt(index: number): void {
    this._sortableHandler.removeItemAt(this._sortableData, index);
  }

  insertItemAt(item: any, index: number) {
    this._sortableHandler.insertItemAt(this._sortableData, item, index);
  }
}
