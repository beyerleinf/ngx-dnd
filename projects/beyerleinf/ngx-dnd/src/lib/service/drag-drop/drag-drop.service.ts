import {EventEmitter, Injectable} from '@angular/core';
import {DragDropData} from '../../models';

@Injectable()
export class DragDropService {
  allowedDropZones: string[] = [];
  onDragSuccessCallback: EventEmitter<DragDropData>;
  dragData: any;
  isDragged: boolean;
}

export function dragDropServiceFactory(): DragDropService {
  return new DragDropService();
}
