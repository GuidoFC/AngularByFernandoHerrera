import { Component } from '@angular/core';
import {GiftListComponent} from '../../components/gift-list/gift-list.component';

@Component({
  selector: 'app-trending-page',
  imports: [
    GiftListComponent
  ],
  standalone: true,
  templateUrl: './trending-page.component.html',
  styles: ``
})
export default class TrendingPageComponent {

}
