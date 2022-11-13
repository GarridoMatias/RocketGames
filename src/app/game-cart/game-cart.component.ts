import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { GameCartService } from '../game-cart.service';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-game-cart',
  templateUrl: './game-cart.component.html',
  styleUrls: ['./game-cart.component.scss']
})
export class GameCartComponent implements OnInit {

  games : Game[] =[];

  constructor(private cart: GameCartService) {
      // Subscribe to cartService changes
      this.cart.items.subscribe(data => {
        this.games = data;
      });
    }

  removeToCart(game:Game):void{

    this.cart.removeToCart(game);
    game.agregado= !game.agregado;
  }

  ngOnInit(): void {
  }

}
