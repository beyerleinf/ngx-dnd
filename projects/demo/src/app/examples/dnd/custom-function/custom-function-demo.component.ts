import {Component} from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-custom-function-demo',
  templateUrl: './custom-function-demo.component.html',
})
export class CustomFunctionDemoComponent {
  tsCode = require('!!raw-loader!./custom-function.component.ts');
  htmlCode = require('!!raw-loader!./custom-function.component.html');
}
