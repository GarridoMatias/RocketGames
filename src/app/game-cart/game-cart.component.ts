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

  cartList$: Observable<Game[]>;
  constructor(private cart: GameCartService) {
    this.cartList$ = cart.cartList.asObservable();
    }

  removeToCart(game:Game):void{

    this.cart.removeToCart(game);
  }

  ngOnInit(): void {
  }

}
