import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GameCartService } from '../game-cart.service';
import { GameDataService } from '../game-data.service';
import { Game } from './Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})

// https://i.postimg.cc/5yK0MFgq/000destacado.jpg
// https://postimg.cc/ftShskWB personaje06
// https://i.postimg.cc/T1sRsv2t/cargando.jpg
// https://i.postimg.cc/sg7VTLkJ/img-DESCRIPCION-100.jpg
// https://i.postimg.cc/633xxbmg/img-DESCRIPCION-100.png
// https://i.postimg.cc/tRvCJWdF/imgs-STARS-1-100.jpg
// https://i.postimg.cc/76sDCrzq/imgs-STARS-1-100.jpg
// https://i.postimg.cc/QxR8kDyt/imgs-STARS-2-100.jpg
// https://i.postimg.cc/fy1NK75F/imgs-STARS-2-100.jpg
// https://i.postimg.cc/WzdVgYmg/imgs-STARS-3-100.jpg
// https://i.postimg.cc/9XkCCVVp/imgs-STARS-4-100.jpg
// https://i.postimg.cc/C1LSLxzv/imgs-STARS-4-100.jpg
// https://i.postimg.cc/xTbYd71S/personaje-1-100.jpg
// https://i.postimg.cc/BnT0TKFY/personaje-2-100.jpg
// https://i.postimg.cc/Njqt24K2/personaje-3-100.jpg
// https://i.postimg.cc/fbMhBRjw/personaje-4-100.jpg
// https://i.postimg.cc/wBFYPY0D/personaje-5-100.jpg
// https://i.postimg.cc/JnP7bBfV/006personaje.webp
// https://i.postimg.cc/RhJrN69T/personaje-6-100.jpg
// https://i.postimg.cc/HxhDY4Gx/personaje-7-100.jpg
// https://i.postimg.cc/XqRRFjY6/personaje-8-100.jpg
// https://postimg.cc/JDZdKXzV personaje-7-100
// https://postimg.cc/64hbxNZM personaje-8-100

// https://i.postimg.cc/05hjZ76P/starciticenpage-100.jpg



export class GameListComponent implements OnInit {
  games: Game[] = [];

  constructor(
    private cart: GameCartService,
    private gamesDataService : GameDataService) {
  }

  ngOnInit(): void {
    this.gamesDataService.getAll()
    .subscribe(games => this.games = games);
  }

  addToCart(game: Game): void {
    this.cart.addToCart(game);
    game.agregado= !game.agregado;

  }
  removeToCart(game:Game):void{
    this.cart.removeToCart(game);

  }
}
