import {Component} from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-custom-data-demo',
  templateUrl: './custom-data-demo.component.html',
})
export class CustomDataDemoComponent {
  tsCode = require('!!raw-loader!./custom-data.component.ts');
  htmlCode = require('!!raw-loader!./custom-data.component.html');
}
