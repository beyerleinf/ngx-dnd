import {Component} from '@angular/core';

class Container {
  constructor(public id: number, public name: string, public widgets: Array<Widget>) {}
}

class Widget {
  constructor(public name: string) {}
}

@Component({selector: 'demo-embedded', templateUrl: './embedded.component.html'})
export class EmbeddedComponent {
  dragOperation: boolean = false;

  containers: Array<Container> = [
    new Container(1, 'Container 1', [new Widget('1'), new Widget('2')]),
    new Container(2, 'Container 2', [new Widget('3'), new Widget('4')]),
    new Container(3, 'Container 3', [new Widget('5'), new Widget('6')])
  ];

  widgets: Array<Widget> = [];
  addTo($event: any) {
    if ($event) {
      this.widgets.push($event.dragData);
    }
  }
}
