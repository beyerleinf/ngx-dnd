import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import {DragDropConfig} from '../config/drag-drop-config';
import {DraggableDirective} from '../directives/draggable.directive';
import {DroppableDirective} from '../directives/droppable.directive';
import {DragDropService} from '../service/drag-drop/drag-drop.service';

import {Container, triggerEvent} from './dnd-component.factory';

describe('Drag and Drop without draggable data', () => {
  let fixture: ComponentFixture<Container>;
  let config: DragDropConfig;
  let container: Container;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraggableDirective, DroppableDirective, Container],
      providers: [DragDropConfig, DragDropService]
    });

    config = getTestBed().get(DragDropConfig);

    fixture = TestBed.createComponent(Container);
    fixture.detectChanges();
    container = <Container>fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(fixture).toBeDefined();
  });

  it('Drop events should not be activated on the wrong drop-zone', (done: any) => {
    const dragElemOne: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dragIdOne');
    const dropElemTwo: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dropIdTwo');

    triggerEvent(dragElemOne, 'dragstart', 'MouseEvent');
    triggerEvent(dropElemTwo, 'dragenter', 'MouseEvent');
    fixture.detectChanges();
    expect(dropElemTwo.classList.contains(config.onDragEnterClass))
        .toBeFalsy('dropElemTwo.classList should not contain config.onDragEnterClass');

    triggerEvent(dropElemTwo, 'dragover', 'MouseEvent');
    fixture.detectChanges();
    expect(dropElemTwo.classList.contains(config.onDragOverClass))
        .toBeFalsy('dropElemTwo.classList should not contain config.onDragOverClass');

    let dragCount: number = 0, dropCount: number = 0;
    container.dragOne.subscribe(
        ($event: any) => {
          dragCount++;
        },
        (error: any) => {},
        () => {
          // Here is a function called when stream is complete
          expect(dragCount).toBe(0);
        });

    container.dropTwo.subscribe(
        ($event: any) => {
          dropCount++;
        },
        (error: any) => {},
        () => {
          // Here is a function called when stream is complete
          expect(dropCount).toBe(0);
        });
    triggerEvent(dropElemTwo, 'drop', 'MouseEvent');
    fixture.detectChanges();

    done();
  });

  it('Drop events should be activated on the same drop-zone', (done: any) => {
    const dragElemOne: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dragIdOne');
    const dropElemOne: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dropIdOne');

    triggerEvent(dragElemOne, 'dragstart', 'MouseEvent');
    triggerEvent(dropElemOne, 'dragenter', 'MouseEvent');
    fixture.detectChanges();
    expect(dropElemOne.classList.contains(config.onDragEnterClass)).toBeTruthy();

    triggerEvent(dropElemOne, 'dragover', 'MouseEvent');
    fixture.detectChanges();
    expect(dropElemOne.classList.contains(config.onDragOverClass)).toBeTruthy();

    let dragCount: number = 0, dropCount: number = 0;
    container.dragOne.subscribe(
        ($event: any) => {
          dragCount++;
        },
        (error: any) => {},
        () => {
          // Here is a function called when stream is complete
          expect(dragCount).toBe(1);
        });

    container.dropOne.subscribe(
        ($event: any) => {
          dropCount++;
        },
        (error: any) => {},
        () => {
          // Here is a function called when stream is complete
          expect(dropCount).toBe(1);
        });
    triggerEvent(dropElemOne, 'drop', 'MouseEvent');
    fixture.detectChanges();

    done();
  });

  it('Drop events on multiple drop-zone', (done: any) => {
    const dragElemOneTwo: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dragIdOneTwo');
    const dropElemOneTwo: HTMLElement = fixture.elementRef.nativeElement.querySelector('#dropIdOneTwo');

    triggerEvent(dragElemOneTwo, 'dragstart', 'MouseEvent');
    triggerEvent(dropElemOneTwo, 'dragenter', 'MouseEvent');
    fixture.detectChanges();
    expect(dropElemOneTwo.classList.contains(config.onDragEnterClass)).toBeTruthy();

    triggerEvent(dropElemOneTwo, 'dragover', 'MouseEvent');
    fixture.detectChanges();
    expect(dropElemOneTwo.classList.contains(config.onDragOverClass)).toBeTruthy();

    let dragCount: number = 0, dropCount: number = 0;
    container.dragOne.subscribe(
        ($event: any) => {
          dragCount++;
        },
        (error: any) => {},
        () => {
          // Here is a function called when stream is complete
          expect(dragCount).toBe(1);
        });

    container.dropOne.subscribe(
        ($event: any) => {
          dropCount++;
        },
        (error: any) => {},
        () => {
          // Here is a function called when stream is complete
          expect(dropCount).toBe(1);
        });
    triggerEvent(dropElemOneTwo, 'drop', 'MouseEvent');
    fixture.detectChanges();

    done();
  });
});
