import {EventEmitter, Injectable} from '@angular/core';
import {DragDropData} from '../../models';

@Injectable({providedIn: 'root', useFactory: dragDropServiceFactory})
export class DragDropService {
  allowedDropZones: string[] = [];
  onDragSuccessCallback: EventEmitter<DragDropData>;
  dragData: any;
  isDragged: boolean;
}

export function dragDropServiceFactory(): DragDropService {
  return new DragDropService();
}
