import {Component} from "@angular/core";

@Component({
    template:`
    <h1>Hola Mundo</h1>
    <h2>Counter Component Page</h2>
    <p>Counter: {{counter}}</p>
    <button (click)="increment(1)" >+1</button>
    `
})
export class CounterPageComponent{
counter = 10;

  increment(value: number) {
    this.counter += value;
  }
}
