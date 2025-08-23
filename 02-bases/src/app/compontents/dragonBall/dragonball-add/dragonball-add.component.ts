import {Component, output, signal} from '@angular/core';
import {Character} from '../../../interfaces/character.interfaces';

@Component({
  selector: 'dragonball-add',
  imports: [],
  standalone: true,
  templateUrl: './dragonball-add.component.html',
  styles: ``
})
export class DragonballAddComponent {

  name = signal<string>("");
  power = signal<number>(0);

  newCharaterOutput = output<Character>()

  addNewCharacter() {

    if (!this.name() || !this.power() || this.power() <= 0) {
      console.log("No podemos guardar nada")
      return
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 100) + 1,
      name: this.name(),
      power: this.power()

    }

    // this.listCharacters.update(values => {
    //   return [...values, newCharacter];
    // });

    console.log("nuevo personaje: " + JSON.stringify(newCharacter))

    this.newCharaterOutput.emit(newCharacter)

    this.resetFilds();
  }

  resetFilds() {
    this.power.set(0)
    this.name.set("")
  }
}
