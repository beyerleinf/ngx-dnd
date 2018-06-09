import {Injectable} from '@angular/core';

import {DragDropConfig} from '../../config';
import {SortableContainerDirective} from '../../directives/sortable-container.directive';
import {isPresent} from '../../util';

@Injectable({providedIn: 'root', useFactory: dragDropSortableServiceFactory, deps: [DragDropConfig]})
export class DragDropSortableService {
  index: number;
  sortableContainer: SortableContainerDirective;
  isDragged: boolean;

  private _elem: HTMLElement;
  public get elem(): HTMLElement {
    return this._elem;
  }

  constructor(private _config: DragDropConfig) {}

  markSortable(elem: HTMLElement) {
    if (isPresent(this._elem)) {
      this._elem.classList.remove(this._config.onSortableDragClass);
    }
    if (isPresent(elem)) {
      this._elem = elem;
      this._elem.classList.add(this._config.onSortableDragClass);
    }
  }
}

export function dragDropSortableServiceFactory(config: DragDropConfig): DragDropSortableService {
  return new DragDropSortableService(config);
}
