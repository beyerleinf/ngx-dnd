import {ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {FormArray} from '@angular/forms';

import {DragDropConfig} from '../config';
import {DragDropService, DragDropSortableService} from '../service';
import {SortableArrayHandler, SortableFormArrayHandler} from '../util';

import {AbstractDirective} from './abstract.directive';

/* tslint:disable directive-selector no-output-on-prefix */
@Directive({selector: '[dnd-sortable-container]'})
export class SortableContainerDirective extends AbstractDirective {
  @Input('dragEnabled')
  set draggable(value: boolean) {
    this.dragEnabled = !!value;
  }

  private _sortableData: Array<any>|FormArray = [];
  private sortableHandler: SortableFormArrayHandler|SortableArrayHandler;

  @Input()
  set sortableData(sortableData: Array<any>|FormArray) {
    this._sortableData = sortableData;
    if (sortableData instanceof FormArray) {
      this.sortableHandler = new SortableFormArrayHandler();
    } else {
      this.sortableHandler = new SortableArrayHandler();
    }
    //
    this.dropEnabled = !!this._sortableData;
    // console.log("collection is changed, drop enabled: " + this.dropEnabled);
  }
  get sortableData(): Array<any>|FormArray {
    return this._sortableData;
  }

  @Input('dropZones')
  set dropzones(value: Array<string>) {
    this.dropZones = value;
  }

  constructor(
      elemRef: ElementRef, dragDropService: DragDropService, config: DragDropConfig, cdr: ChangeDetectorRef,
      private _sortableDataService: DragDropSortableService) {
    super(elemRef, dragDropService, config, cdr);
    this.dragEnabled = false;
  }

  _onDragEnterCallback(event: Event) {
    if (this._sortableDataService.isDragged) {
      const item: any = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
      // Check does element exist in sortableData of this Container
      if (this.indexOf(item) === -1) {
        // Let's add it
        // console.log('Container._onDragEnterCallback. drag node [' + this._sortableDataService.index.toString() + ']
        // over parent node'); Remove item from previouse list
        this._sortableDataService.sortableContainer.removeItemAt(this._sortableDataService.index);
        if (this._sortableDataService.sortableContainer._sortableData.length === 0) {
          this._sortableDataService.sortableContainer.dropEnabled = true;
        }
        // Add item to new list
        this.insertItemAt(item, 0);
        this._sortableDataService.sortableContainer = this;
        this._sortableDataService.index = 0;
      }
      // Refresh changes in properties of container component
      this.detectChanges();
    }
  }

  getItemAt(index: number): any {
    return this.sortableHandler.getItemAt(this._sortableData, index);
  }

  indexOf(item: any): number {
    return this.sortableHandler.indexOf(this._sortableData, item);
  }

  removeItemAt(index: number): void {
    this.sortableHandler.removeItemAt(this._sortableData, index);
  }

  insertItemAt(item: any, index: number) {
    this.sortableHandler.insertItemAt(this._sortableData, item, index);
  }
}
