import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './game-list/Game';

@Injectable({
  providedIn: 'root'
})
export class GameCartService {

  private _cartList:Game[]= [];
  cartList:BehaviorSubject<Game[]>= new BehaviorSubject(this._cartList);

  constructor() { }

  removeToCart(game: Game){
    game.agregado = !game.agregado;
    let gameBuscar = this._cartList.find((buscado) => buscado.nombre == game.nombre);

    if(gameBuscar){
      this._cartList = this._cartList.filter((gameBorrar)=> gameBorrar.nombre !== game.nombre);
    }
    this.cartList.next(this._cartList);

  }

  addToCart(game: Game) {

    let item = this._cartList.find((buscado) => buscado.nombre == game.nombre);

    if(!item){
      this._cartList.push({... game});
    }else{
      game.agregado= !game.agregado;
    }

    this.cartList.next(this._cartList);
  }

}
