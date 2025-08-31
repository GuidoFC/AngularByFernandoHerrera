import {Component, input} from '@angular/core';

@Component({
  selector: 'gift-list-item',
  imports: [],
  standalone: true,
  templateUrl: './gift-list-item.component.html',
  styles: ``
})
export class GiftListItemComponent {

  imageUrls = input.required<string []>();


}
