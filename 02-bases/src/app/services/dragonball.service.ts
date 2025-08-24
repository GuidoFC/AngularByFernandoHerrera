import {effect, Injectable, signal} from '@angular/core';
import {Character} from '../interfaces/character.interfaces';

function loadLocalStorage(): Character[] {

  const listCharater = localStorage.getItem('listCharacters');
  return listCharater ? JSON.parse(listCharater) : []
}


@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  listCharacters = signal<Character[]>(loadLocalStorage())


  saveToLocalStorage = effect(() => {
    localStorage.setItem("listCharacters", JSON.stringify(this.listCharacters()));

  })

  addNewCharacterList(insertNewCharacter: Character) {

    this.listCharacters.update(value => {
      return [...value, insertNewCharacter]
    })

  }
}
