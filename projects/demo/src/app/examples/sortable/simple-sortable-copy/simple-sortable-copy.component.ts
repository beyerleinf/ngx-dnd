import {Component} from '@angular/core';

class Widget {
  constructor(public name: string) {}
}

@Component({selector: 'demo-simple-sortable-copy', templateUrl: './simple-sortable-copy.component.html'})
export class SimpleSortableCopyComponent {
  sourceList: Widget[] =
      [new Widget('1'), new Widget('2'), new Widget('3'), new Widget('4'), new Widget('5'), new Widget('6')];

  targetList: Widget[] = [];
  addTo($event: any) {
    this.targetList.push($event.dragData);
  }
}
