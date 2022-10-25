import { Injectable } from '@angular/core';
import { Game } from './game-list/Game';

@Injectable({
  providedIn: 'root'
})
export class GameCartService {

  cartList: Game[] = [];

  constructor() { }

  addToCart(game: Game) {
  
    let item = this.cartList.find((buscado) => buscado.nombre == game.nombre);
  
    if(!item){
      this.cartList.push({... game});
    }else{
      item.cantidad+= game.cantidad;
    }

  }

}
