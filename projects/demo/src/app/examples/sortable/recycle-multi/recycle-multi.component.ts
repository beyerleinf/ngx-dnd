import {Component} from '@angular/core';

@Component({selector: 'demo-recycle-multi', templateUrl: './recycle-multi.component.html'})
export class RecycleMultiComponent {
  listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
  listRecycled: Array<string> = [];
}
