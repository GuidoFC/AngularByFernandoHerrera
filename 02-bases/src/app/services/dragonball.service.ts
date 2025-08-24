import {effect, Injectable, signal} from '@angular/core';
import {Character} from '../interfaces/character.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  listCharacters = signal<Character[]>([
    {id: 1, name: "Goku", power: 9001},
    {id: 2, name: "Vegeta", power: 9000},
  ])

  chargeListCharacter = effect(() => {

    let retrievedObject = localStorage.getItem('listCharacters')!;

    this.listCharacters.set(JSON.parse(retrievedObject))

  })



  addNewCharacterList(insertNewCharacter: Character) {

    this.listCharacters.update(value => {
      return [...value, insertNewCharacter]
    })

    localStorage.setItem("listCharacters", JSON.stringify(this.listCharacters()));
  }
}
