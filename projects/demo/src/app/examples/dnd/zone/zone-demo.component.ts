import {Component} from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-zone-demo',
  templateUrl: './zone-demo.component.html',
})
export class ZoneDemoComponent {
  tsCode = require('!!raw-loader!./zone.component.ts');
  htmlCode = require('!!raw-loader!./zone.component.html');
}
