import {Component} from '@angular/core';

declare var require: any;

@Component({selector: 'demo-simple-demo', templateUrl: './simple-demo.component.html'})
export class SimpleDemoComponent {
  tsCode: string = require('!!raw-loader!./dnd-simple.component');
}
