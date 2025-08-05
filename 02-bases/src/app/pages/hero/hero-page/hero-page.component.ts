import {Component, computed, inject, signal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-hero-page',
  imports: [ReactiveFormsModule, UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent {

  name = signal<string>("Ironman")
  age = signal<number>(45)

  private fb = inject(FormBuilder)

  myForm = this.fb.group({

    edadCambiar: [0],
  })

  heroDescription = computed(() =>{
    return `EL nombre es: ${this.name()} y su edad es: ${this.age()}`;

  })



  changeHero(){
    this.age.set(22)
    this.name.set("Spiderman")
  }

  resetForm() {
    this.age.set(45)
    this.name.set("Ironman")
  }

  changeAge() {
    this.age.set(<number>this.myForm.controls['edadCambiar'].value)
  }
}
