import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

export const componentsList: string[] = [
  'Accordion', 'Alert', 'Buttons', 'Carousel', 'Collapse', 'Datepicker', 'Dropdown', 'Modal', 'Pagination', 'Popover',
  'Progressbar', 'Rating', 'Tabs', 'Timepicker', 'Tooltip', 'Typeahead'
];

@Component({
  selector: 'demo-side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {
  @Input() activeTab: string;
  components = componentsList;

  constructor(private router: Router) {}

  isActive(currentRoute: any[]): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute), true);
  }
}
