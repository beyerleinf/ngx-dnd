import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'demo-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  sections: Array<{name: string, components: Array<{name: string, route: string}>}> = [
    {
      name: 'Drag & Drop',
      components:
          [
            {
              name: 'Simple',
              route: '/dnd/simple',
            },
            {
              name: 'Zones',
              route: '/dnd/zones',
            },
            {
              name: 'Shopping Basket',
              route: '/dnd/shopping-basket',
            },
            {
              name: 'Custom Data',
              route: '/dnd/custom-data',
            },
            {
              name: 'Custom Function',
              route: '/dnd/custom-function',
            },
          ],
    },
    {
      name: 'Sortable',
      components:
          [
            {
              name: 'Simple',
              route: '/sortable/simple',
            },
            {
              name: 'Multi',
              route: '/sortable/multi',
            },
            {
              name: 'Embedded',
              route: '/sortable/embedded',
            },
            {
              name: 'Recycle Multi',
              route: '/sortable/recycle-multi',
            },
            {
              name: 'Simple Sortable Copy',
              route: '/sortable/simple-sortable-copy',
            },
          ],
    },
  ];

  constructor(private router: Router) {}

  isActive(currentRoute: string): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute.split('/')), true);
  }
}
