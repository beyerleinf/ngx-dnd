import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import {DragDropConfig} from '../config';
import {DraggableDirective, DroppableDirective} from '../directives';
import {DragDropService} from '../service';

import {Container2, triggerEvent} from './dnd-component.factory';

describe('Drag and Drop with draggable data', () => {
  let fixture: ComponentFixture<Container2>;
  let dragDropService: DragDropService;
  let config: DragDropConfig;
  let container: Container2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraggableDirective, DroppableDirective, Container2],
      providers: [DragDropConfig, DragDropService]
    });

    fixture = TestBed.createComponent(Container2);
    fixture.detectChanges();

    dragDropService = getTestBed().get(DragDropService);
    config = getTestBed().get(DragDropConfig);

    container = <Container2>fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(fixture).toBeDefined();
  });

  it('It should add the "draggable" attribute', (done: any) => {
    const dragElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dragId');

    expect(dragElem).toBeDefined();
    expect(dragElem.attributes[<any>'draggable']).toBeTruthy();

    done();
  });

  it('Drag events should add/remove the draggable data to/from the DragDropService', (done: any) => {
    const dragElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dragId');

    expect(dragDropService.dragData).not.toBeDefined();

    triggerEvent(dragElem, 'dragstart', 'MouseEvent');
    fixture.detectChanges();
    expect(dragDropService.dragData).toBeDefined();

    triggerEvent(dragElem, 'dragend', 'MouseEvent');
    fixture.detectChanges();
    expect(dragDropService.dragData).toBeNull();

    done();
  });

  it('Drag events should add/remove the expected classes to the target element', (done: any) => {
    const dragElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dragId');

    expect(dragElem.classList.contains(config.onDragStartClass)).toBeFalsy();

    triggerEvent(dragElem, 'dragstart', 'MouseEvent');
    fixture.detectChanges();
    expect(dragElem.classList.contains(config.onDragStartClass)).toBeTruthy();

    triggerEvent(dragElem, 'dragend', 'MouseEvent');
    fixture.detectChanges();
    expect(dragElem.classList.contains(config.onDragStartClass)).toBeFalsy();

    done();
  });

  it('Drag start event should not be activated if drag is not enabled', (done: any) => {
    container.dragEnabled = false;
    fixture.detectChanges();

    const dragElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dragId');

    expect(dragDropService.dragData).not.toBeDefined();
    expect(dragElem.classList.contains(config.onDragStartClass)).toBeFalsy();

    triggerEvent(dragElem, 'dragstart', 'MouseEvent');
    fixture.detectChanges();
    expect(dragDropService.dragData).not.toBeDefined();
    expect(dragElem.classList.contains(config.onDragStartClass)).toBeFalsy();

    done();
  });

  it('Drop events should add/remove the expected classes to the target element', (done: any) => {
    const dragElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dragId');
    const dropElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dropId');

    expect(dropElem.classList.contains(config.onDragEnterClass)).toBeFalsy();
    expect(dropElem.classList.contains(config.onDragOverClass)).toBeFalsy();

    // The drop events should not work before a drag is started on an element with the correct drop-zone
    triggerEvent(dropElem, 'dragenter', 'MouseEvent');
    fixture.detectChanges();
    expect(dropElem.classList.contains(config.onDragEnterClass)).toBeFalsy();

    triggerEvent(dragElem, 'dragstart', 'MouseEvent');
    triggerEvent(dropElem, 'dragenter', 'MouseEvent');
    fixture.detectChanges();
    expect(dropElem.classList.contains(config.onDragEnterClass)).toBeTruthy();
    expect(dropElem.classList.contains(config.onDragOverClass)).toBeFalsy();

    triggerEvent(dropElem, 'dragover', 'MouseEvent');
    fixture.detectChanges();
    expect(dropElem.classList.contains(config.onDragEnterClass)).toBeTruthy();
    expect(dropElem.classList.contains(config.onDragOverClass)).toBeTruthy();

    triggerEvent(dropElem, 'dragleave', 'MouseEvent');
    fixture.detectChanges();
    expect(dropElem.classList.contains(config.onDragEnterClass)).toBeFalsy();
    expect(dropElem.classList.contains(config.onDragOverClass)).toBeFalsy();

    triggerEvent(dropElem, 'dragover', 'MouseEvent');
    triggerEvent(dropElem, 'dragenter', 'MouseEvent');
    triggerEvent(dropElem, 'drop', 'MouseEvent');
    fixture.detectChanges();
    expect(dropElem.classList.contains(config.onDragEnterClass)).toBeFalsy();
    expect(dropElem.classList.contains(config.onDragOverClass)).toBeFalsy();

    done();
  });

  it('Drop event should activate the onDropSuccess and onDragSuccess callbacks', (done: any) => {
    const dragElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dragId');
    const dropElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dropId');

    let dragCount: number = 0, dropCount: number = 0;
    container.drag.subscribe(
        ($event: any) => {
          dragCount++;
        },
        (error: any) => {},
        () => {
          // Here is a function called when stream is complete
          expect(dragCount).toBe(0);
        });

    container.drop.subscribe(
        ($event: any) => {
          dropCount++;
        },
        (error: any) => {},
        () => {
          // Here is a function called when stream is complete
          expect(dropCount).toBe(0);
        });

    triggerEvent(dragElem, 'dragstart', 'MouseEvent');
    triggerEvent(dragElem, 'dragend', 'MouseEvent');
    triggerEvent(dragElem, 'dragstart', 'MouseEvent');
    triggerEvent(dropElem, 'drop', 'MouseEvent');
    fixture.detectChanges();

    expect().nothing();
    done();
  });

  it('The onDropSuccess callback should receive the dragged data as parameter', (done: any) => {
    const dragData = {id: 1, name: 'Hello'};

    container.dragData = dragData;
    fixture.detectChanges();

    const dragElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dragId');
    const dropElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dropId');

    container.drag.subscribe(($event: any) => {
      expect($event.dragData).toBe(dragData);
    });
    container.drop.subscribe(($event: any) => {
      expect($event.dragData).toBe(dragData);
    });

    triggerEvent(dragElem, 'dragstart', 'MouseEvent');
    triggerEvent(dropElem, 'drop', 'MouseEvent');
    fixture.detectChanges();

    done();
  });
});
