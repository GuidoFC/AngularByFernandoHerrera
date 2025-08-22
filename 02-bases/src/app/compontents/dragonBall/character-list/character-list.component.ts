import {Component, input} from '@angular/core';
import {Character} from '../../../interfaces/character.interfaces';

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  standalone: true
})
export class CharacterListComponent {


  listCharacters = input.required<Character[]>()
  listName = input.required<String>();
}
