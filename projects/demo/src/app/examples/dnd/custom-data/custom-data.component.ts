import {Component} from '@angular/core';

@Component({selector: 'demo-custom-data', templateUrl: './custom-data.component.html'})
export class CustomDataComponent {
  transferData: Object = {id: 1, msg: 'Hello'};
  receivedData: Array<any> = [];

  transferDataSuccess($event: any) {
    this.receivedData.push($event);
  }
}
