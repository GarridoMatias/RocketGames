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

  ngOnInit(): void {
  }
  upCantidad():void{
    if(this.max>this.cantidad){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }
  downCantidad():void{
    if(this.cantidad>0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }

  }

}
