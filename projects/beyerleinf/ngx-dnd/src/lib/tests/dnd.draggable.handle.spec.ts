import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import {DragDropConfig} from '../config';
import {DraggableDirective, DraggableHandleDirective, DroppableDirective} from '../directives';
import {DragDropService} from '../service';

import {Container5, triggerEvent} from './dnd-component.factory';

describe('Drag and Drop with handle', () => {
  let fixture: ComponentFixture<Container5>;
  let dragDropService: DragDropService;
  let config: DragDropConfig;
  let container: Container5;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraggableDirective, DroppableDirective, DraggableHandleDirective, Container5],
      providers: [DragDropConfig, DragDropService]
    });

    fixture = TestBed.createComponent(Container5);
    fixture.detectChanges();

    dragDropService = getTestBed().get(DragDropService);
    config = getTestBed().get(DragDropConfig);

    container = <Container5>fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(fixture).toBeDefined();
  });

  it('Drag start event should be activated if dragged by handle', (done: any) => {
    const dragElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dragId');
    const handleElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('#handle');

    expect(dragDropService.dragData).not.toBeDefined('dragDropService.dragData should not be defined');

    triggerEvent(handleElem, 'mousedown', 'MouseEvent');
    triggerEvent(dragElem, 'dragstart', 'MouseEvent');
    fixture.detectChanges();
    expect(dragDropService.dragData).toBeDefined('dragDropService.dragData should be defined');

    triggerEvent(dragElem, 'dragend', 'MouseEvent');
    triggerEvent(handleElem, 'mouseup', 'MouseEvent');
    fixture.detectChanges();
    expect(dragDropService.dragData).toBeNull('dragDropService.dragData should be null');

    done();
  });

  it('Drag start event should not be activated if dragged not by handle', (done: any) => {
    container.dragEnabled = false;
    fixture.detectChanges();

    const dragElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dragId');
    const nonHandleElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('#non-handle');

    expect(dragDropService.dragData).not.toBeDefined();
    expect(dragElem.classList.contains(config.onDragStartClass))
        .toBeFalsy('dragElem.classList should not contain config.onDragStartClass');

    triggerEvent(nonHandleElem, 'mousedown', 'MouseEvent');
    triggerEvent(dragElem, 'dragstart', 'MouseEvent');
    fixture.detectChanges();
    expect(dragDropService.dragData).not.toBeDefined();
    expect(dragElem.classList.contains(config.onDragStartClass))
        .toBeFalsy('dragElem.classList should not contain config.onDragStartClass');

    done();
  });
});
