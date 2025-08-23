import {Component, signal} from '@angular/core';
import {CharacterListComponent} from '../../compontents/dragonBall/character-list/character-list.component';
import {Character} from '../../interfaces/character.interfaces';
import {DragonballAddComponent} from '../../compontents/dragonBall/dragonball-add/dragonball-add.component';


@Component({
  selector: 'copy-dragonball-page',
  templateUrl: './copy-dragonball-page.component.html',
  standalone: true,
  imports: [CharacterListComponent, DragonballAddComponent],
  styles: ``
})
export class CopyDragonballPageComponent {


  listCharacters = signal<Character[]>([
    {id: 1, name: "Goku", power: 9001},
    {id: 2, name: "Vegeta", power: 9000},
  ])

  addNewCharacterList(insertNewCharacter: Character) {
    this.listCharacters.update(value => {
      return [...value, insertNewCharacter]
    })
  }


}
