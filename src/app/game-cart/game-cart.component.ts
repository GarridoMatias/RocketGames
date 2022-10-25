import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';

@Component({
  selector: 'app-game-cart',
  templateUrl: './game-cart.component.html',
  styleUrls: ['./game-cart.component.scss']
})
export class GameCartComponent implements OnInit {

  constructor(private cart: GameCartService) {}

  ngOnInit(): void {
  }

}
