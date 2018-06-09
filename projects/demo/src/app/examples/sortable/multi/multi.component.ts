import {Component} from '@angular/core';

@Component({selector: 'demo-multi', templateUrl: './multi.component.html'})
export class MultiComponent {
  listBoxers: Array<string> = [
    'Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey',
    'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'
  ];
  listTeamOne: Array<string> = [];
  listTeamTwo: Array<string> = [];
}
