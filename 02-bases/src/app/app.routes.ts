import { Routes } from '@angular/router';
import {CounterPageComponent} from './pages/counter/counter-page.component';
import {HeroPageComponent} from './pages/hero/hero-page/hero-page.component';
import {DragonballPageComponent} from './pages/dragonball-page/dragonball-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
    title: 'página principal',
  },
  {
    path: 'hero',
    component: HeroPageComponent,
    title: 'Home details',
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent,
    title: 'Home details',
  },
  {
    path: '**',
    redirectTo: ''
  }
];
