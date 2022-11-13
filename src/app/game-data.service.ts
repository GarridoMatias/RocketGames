import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Game } from './game-list/Game';
import { HttpHeaders } from '@angular/common/http';

const URL = 'https://637115740785877861763df0.mockapi.io/games';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(private http : HttpClient) { }

  public getAll():Observable<Game[]>{
    return this.http.get<Game[]>(URL)
              .pipe(
                tap( (games: Game[])=> games.forEach(game => game.cantidad = 0 ))
              );
  }
  public get(){

  }


  addGame(game: Game): Observable<Game[]> {
    return this.http.post<Game[]>(URL, game, httpOptions);
  }
}


