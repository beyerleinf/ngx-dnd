import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import {DragDropConfig} from '../config/drag-drop-config';
import {SortableContainerDirective} from '../directives/sortable-container.directive';
import {SortableHandleDirective} from '../directives/sortable-handle.directive';
import {SortableDirective} from '../directives/sortable.directive';
import {DragDropSortableService} from '../service/drag-drop-sortable/drag-drop-sortable.service';
import {DragDropService} from '../service/drag-drop/drag-drop.service';

import {Container6, triggerEvent} from './dnd-component.factory';

describe('Sortable Drag and Drop with handle', () => {
  let fixture: ComponentFixture<Container6>;
  let container: Container6;
  let sortableService: DragDropSortableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortableContainerDirective, SortableDirective, SortableHandleDirective, Container6],
      providers: [DragDropConfig, DragDropService, DragDropSortableService]
    });

    fixture = TestBed.createComponent(Container6);
    fixture.detectChanges();

    sortableService = getTestBed().get(DragDropSortableService);

    container = <Container6>fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(fixture).toBeDefined();
  });

  it('The elements of the list should be draggable by handle', () => {
    const values: Array<string> = ['one', 'two', 'three', 'four'];

    container.sortableList = values;
    fixture.detectChanges();

    const ulElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('ul');

    expect(ulElem).toBeDefined('A ul element should be defined');
    expect(ulElem.children.length).toBe(values.length, `The ul element should have ${values.length} children`);

    expect(sortableService.sortableContainer)
        .not.toBeDefined('sortableService.sortableContainer should not be defined');
    expect(sortableService.index).not.toBeDefined('sortableService.index should not be defined');

    triggerEvent(<HTMLElement>ulElem.children[0].querySelector('.handle'), 'mousedown', 'MouseEvent');
    triggerEvent(<HTMLElement>ulElem.children[0], 'dragstart', 'MouseEvent');
    fixture.detectChanges();
    expect(sortableService.sortableContainer.sortableData).toBe(values);
    expect(sortableService.index).toBe(0);
  });

  it('The elements of the list should not be draggable by non-handle', () => {
    const values: Array<string> = ['one', 'two', 'three', 'four'];

    container.sortableList = values;
    fixture.detectChanges();

    const ulElem: HTMLElement = fixture.elementRef.nativeElement.querySelector('ul');

    expect(ulElem).toBeDefined('A ul element should be defined');
    expect(ulElem.children.length).toBe(values.length, `The ul element should have ${values.length} children`);

    expect(sortableService.sortableContainer)
        .not.toBeDefined('sortableService.sortableContainer should not be defined');
    expect(sortableService.index).not.toBeDefined('sortableService.index should not be defined');

    triggerEvent(<HTMLElement>ulElem.children[0].querySelector('.non-handle'), 'mousedown', 'MouseEvent');
    triggerEvent(<HTMLElement>ulElem.children[0], 'dragstart', 'MouseEvent');
    fixture.detectChanges();

    expect(sortableService.sortableContainer)
        .not.toBeDefined('sortableService.sortableContainer should not be defined');
    expect(sortableService.index).not.toBeDefined('sortableService.index should not be defined');
  });
});
