import {Component} from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-simple-demo',
  templateUrl: './simple-demo.component.html',
})
export class SimpleDemoComponent {
  tsCode = require('!!raw-loader!./dnd-simple.component.ts');
  htmlCode = require('!!raw-loader!./dnd-simple.component.html');
}
