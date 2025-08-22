import {Component, signal} from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styles: ``
})
export class DragonballPageComponent {


  name = signal<string>("");
  power = signal<number>(0);

  listCharacters = signal<Character[]>([
    {id: 1, name: "Goku", power: 9001},
    {id: 2, name: "Vegeta", power: 9000},
    {id: 3, name: "Piccolo", power: 8000},
    {id: 4, name: "Yamcha", power: 300},
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
