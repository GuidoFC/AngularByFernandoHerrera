import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {GiftSideMenuHeaderComponent} from '../../components/gift-side-menu-header/gift-side-menu-header.component';
import {GiftSideMenuOptionsComponent} from '../../components/gift-side-menu-options/gift-side-menu-options.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    RouterOutlet,
    GiftSideMenuHeaderComponent,
    GiftSideMenuOptionsComponent
  ],
  standalone: true,
  templateUrl: './dashboard-page.component.html',
  styles: ``
})
export default class DashboardPageComponent {

}
