import {EventEmitter, Injectable} from '@angular/core';
import {DragDropData} from '../../models/drag-drop-data.model';

@Injectable({providedIn: 'root'})
export class DragDropService {
  allowedDropZones: string[] = [];
  onDragSuccessCallback: EventEmitter<DragDropData>;
  dragData: any;
  isDragged: boolean;
}
