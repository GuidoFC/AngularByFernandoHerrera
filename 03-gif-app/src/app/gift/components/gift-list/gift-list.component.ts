import { Component } from '@angular/core';
import {GiftListItemComponent} from './gift-list-item/gift-list-item.component';

@Component({
  selector: 'gift-list',
  imports: [
    GiftListItemComponent
  ],
  standalone: true,
  templateUrl: './gift-list.component.html',
  styles: ``
})
export class GiftListComponent {

}
