import {Component, inject} from '@angular/core';
import {CharacterListComponent} from '../../compontents/dragonBall/character-list/character-list.component';
import {DragonballAddComponent} from '../../compontents/dragonBall/dragonball-add/dragonball-add.component';
import {DragonballService} from '../../services/dragonball.service';


@Component({
  selector: 'copy-dragonball-page',
  templateUrl: './copy-dragonball-page.component.html',
  standalone: true,
  imports: [CharacterListComponent, DragonballAddComponent],
  styles: ``
})
export class CopyDragonballPageComponent {

  public dragonBallService = inject(DragonballService)

}
