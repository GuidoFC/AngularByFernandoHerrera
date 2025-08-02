import {Component} from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html'
})
export class CounterPageComponent{
counter = 10;

  increment(value: number) {
    this.counter += value;
  }

  reset() {
    this.counter =10 ;
  }
}
