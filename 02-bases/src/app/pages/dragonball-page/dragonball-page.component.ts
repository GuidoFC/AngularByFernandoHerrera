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


  name = signal<string>("Pedros");
  power = signal<number>(50050);

  characters = signal<Character[]>([
    {id: 1, name: "Goku", power: 9001},
    {id: 2, name: "Vegeta", power: 9000},
    {id: 3, name: "Piccolo", power: 8000},
    {id: 4, name: "Yamcha", power: 300},
  ])

  addNewCharacter() {

    this.characters.update(values => {
      return [...values,  {id: this.characters().length + 1, name: this.name(), power: this.power()}];
    });
  }

}
