import {Component, signal} from '@angular/core';
import {CharacterListComponent} from '../../compontents/dragonBall/character-list/character-list.component';
import {Character} from '../../interfaces/character.interfaces';



@Component({
  selector: 'copy-dragonball-page',
  templateUrl: './copy-dragonball-page.component.html',
  styles: ``
})
export class CopyDragonballPageComponent {


  name = signal<string>("");
  power = signal<number>(0);

  listCharacters = signal<Character[]>([
    {id: 1, name: "Goku", power: 9001},
    {id: 2, name: "Vegeta", power: 9000},
  ])

  addNewCharacter() {

    if (!this.name() || !this.power() || this.power() <= 0) {
      console.log("No podemos guardar nada")
      return
    }

    const newCharacter: Character = {
      id: this.listCharacters().length + 1,
      name: this.name(),
      power: this.power()

    }

    this.listCharacters.update(values => {
      return [...values, newCharacter];
    });

    this.resetFilds();
  }

  resetFilds() {
    this.power.set(0)
    this.name.set("")
  }

}
