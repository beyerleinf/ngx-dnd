import {DataTransferEffect} from './data-transfer-effect';
import {DragImage} from './drag-image';

export class DragDropConfig {
  public onDragStartClass: string = 'dnd-drag-start';
  public onDragEnterClass: string = 'dnd-drag-enter';
  public onDragOverClass: string = 'dnd-drag-over';
  public onSortableDragClass: string = 'dnd-sortable-drag';

  public dragEffect: DataTransferEffect = DataTransferEffect.MOVE;
  public dropEffect: DataTransferEffect = DataTransferEffect.MOVE;
  public dragCursor: string = 'move';
  public dragImage: DragImage;
  public defaultCursor: string = 'pointer';
}
