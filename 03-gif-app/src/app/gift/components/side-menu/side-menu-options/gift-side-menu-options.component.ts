import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

interface menuOption {
  label: string
  sublabel: string
  icon: string
  route: string
}

@Component({
  selector: 'gift-side-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true,
  templateUrl: './gift-side-menu-options.component.html',
  styles: ``
})
export class GiftSideMenuOptionsComponent {

  linkMenuOption: menuOption[] = [
    {
      label: 'Search',
      sublabel: 'Busqueda',
      icon: 'fa-solid fa-magnifying-glass',
      route: '/dashboard/search'
    },
    {
      label: 'Treding',
      sublabel: 'Mas popular',
      icon: 'fa-solid fa-fire',
      route: '/dashboard/trending'
    }
  ]
}
