import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from './game-list/Game';

@Injectable({
  providedIn: 'root'
})
export class GameCartService {

  private _cartList:Game[]= [];
  private cartList:BehaviorSubject<Game[]>= new BehaviorSubject(this._cartList);
  public items : Observable<Game[]> = this.cartList.asObservable();

  constructor() { }

  removeToCart(game: Game){
    let gameBuscar = this._cartList.find((buscado) => buscado.nombre == game.nombre);
    game.agregado= !game.agregado;


    if(gameBuscar){
      this._cartList = this._cartList.filter((gameBorrar)=> gameBorrar.nombre !== game.nombre);
    }
    this.cartList.next(this._cartList);

  }

  addToCart(game: Game) {

    let item = this._cartList.find((buscado) => buscado.nombre == game.nombre);

    if(!item){
      this._cartList.push({... game});
    game.agregado= !game.agregado;

    }else{

    }

    this.cartList.next(this._cartList);
  }

}
