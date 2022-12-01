import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  @Input()
  cantidad!: number;
  @Input()
  max!: number;

  @Output()
  cantidadChange : EventEmitter<number> = new EventEmitter<number>;

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
  upCantidad():void{
    if(this.max>this.cantidad){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    } else {
      this.cantidad= this.max;
      this.cantidadChange.emit(this.cantidad);
      this.maxReached.emit("Se alcanzo el limite");
    }
  }
  downCantidad():void{
    if(this.cantidad>0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    } else {
      this.maxReached.emit("Se alcanzo el limite");
    }

  }
  changeCantidad(event: { key: any; }): void{
    console.log(event.key);
    this.cantidadChange.emit(this.cantidad);
  }

}
