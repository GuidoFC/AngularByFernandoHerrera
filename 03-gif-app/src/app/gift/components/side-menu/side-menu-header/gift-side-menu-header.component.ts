import { Component } from '@angular/core';
import {environment} from '@enviroment/environment';
// import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'gift-side-menu-header',
  imports: [],
  standalone: true,
  templateUrl: './gift-side-menu-header.component.html',
  styles: ``
})
export class GiftSideMenuHeaderComponent {

  enviroment = environment
}
