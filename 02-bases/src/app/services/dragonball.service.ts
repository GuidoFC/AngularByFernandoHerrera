import {Injectable, signal} from '@angular/core';
import {Character} from '../interfaces/character.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

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
