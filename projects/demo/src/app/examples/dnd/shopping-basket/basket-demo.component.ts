import {Component} from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-basket-demo',
  templateUrl: './basket-demo.component.html',
})
export class BasketDemoComponent {
  tsCode = require('!!raw-loader!./shopping-basket.component.ts');
  htmlCode = require('!!raw-loader!./shopping-basket.component.html');
}
