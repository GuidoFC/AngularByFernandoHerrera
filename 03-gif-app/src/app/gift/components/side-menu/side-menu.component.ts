import { Component } from '@angular/core';
import {GiftSideMenuOptionsComponent} from './side-menu-options/gift-side-menu-options.component';
import {GiftSideMenuHeaderComponent} from './side-menu-header/gift-side-menu-header.component';

@Component({
  selector: 'side-menu',
  imports: [
    GiftSideMenuHeaderComponent,
    GiftSideMenuOptionsComponent
  ],
  standalone: true,
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

}
