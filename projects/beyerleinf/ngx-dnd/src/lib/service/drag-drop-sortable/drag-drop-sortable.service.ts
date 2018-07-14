import {Injectable} from '@angular/core';

import {DragDropConfig} from '../../config';
import {SortableContainerDirective} from '../../directives';
import {isPresent} from '../../util';

@Injectable({providedIn: 'root'})
export class DragDropSortableService {
  /**
   * The last element that was marked sortable.
   *
   * @memberof DragDropSortableService
   */
  private _element: HTMLElement;

  index: number;

  sortableContainer: SortableContainerDirective;

  isDragged: boolean;

  /**
   *Creates an instance of DragDropSortableService.
   * @param config The DragDropConfig.
   * @memberof DragDropSortableService
   */
  constructor(private config: DragDropConfig) {}

  /**
   * Gets the last element that was marked sortable.
   *
   * @readonly
   * @memberof DragDropSortableService
   */
  get element(): HTMLElement {
    return this._element;
  }

  /**
   * Assigns the `onSortableDragClass` to the given element.
   *
   * @param e The element to assign the CSS class to.
   * @memberof DragDropSortableService
   */
  markSortable(e: HTMLElement): void {
    if (isPresent(this._element)) {
      this._element.classList.remove(this.config.onSortableDragClass);
    }

    if (isPresent(e)) {
      this._element = e;
      this._element.classList.add(this.config.onSortableDragClass);
    }
  }
}

export function dragDropSortableServiceFactory(config: DragDropConfig): DragDropSortableService {
  return new DragDropSortableService(config);
}
