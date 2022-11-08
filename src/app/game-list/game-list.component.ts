import { Component, OnInit } from '@angular/core';

import { GameCartService } from '../game-cart.service';
import { Game } from './Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
});

// https://postimg.cc/gLRdVjfn 000destacado
// https://postimg.cc/ftShskWB personaje06
// https://postimg.cc/gLvFw5Zh cargando
// https://postimg.cc/yD64dLYJ imgDESCRIPCION-100
// https://postimg.cc/CZWQj7Ys imgDESCRIPCION-100
// https://postimg.cc/DmsKYWMz imgsSTARS-1-100
// https://postimg.cc/2bZgJJTt imgsSTARS-1-100
// https://postimg.cc/nCGfpyZb imgsSTARS-2-100
// https://postimg.cc/0KGF5wTd imgsSTARS-2-100
// https://postimg.cc/MfJg8DFp imgsSTARS-4-100
// https://postimg.cc/PLcBShbZ imgsSTARS-4-100
// https://postimg.cc/fJZ128dH personaje-1-100
// https://postimg.cc/21SMm32h personaje-2-100
// https://postimg.cc/SJr3wc7m personaje-3-100
// https://postimg.cc/bZVMv8BM personaje-4-100
// https://postimg.cc/kVVH6zr5 personaje-5-100
// https://postimg.cc/64KbPQ87 personaje-6-100
// https://postimg.cc/JDZdKXzV personaje-7-100
// https://postimg.cc/64hbxNZM personaje-8-100

// https://postimg.cc/NL7Qj97z starciticenpage-100







export class GameListComponent implements OnInit {
  games: Game[] = [
    {
      nombre: 'BloodBorne',
      imagen: 'https://postimg.cc/k279Snwg',
      descripcion:
        'Explora un mundo totalmente devastado, en el que solo pequeños grupos de personas han conseguido mantenerse con vida. Sobrevive como puedas en este juego apocalíptico.',
      tipo: ' genero',
      precio: 1,
      stock: 100,
      destacado: true,
      agregado: false,
      cantidad: 0,
    },
    {
      nombre: 'Harry Potter y la Piedra Filosofal',
      imagen: 'https://postimg.cc/K4gZSpRx',
      descripcion:
        'Podrás crear tu propio personaje y vivir de primera mano todo lo que significa estudiar en esta mágica escuela. Compartirás clases con los profesores más conocidos que trabajan allí.',
      tipo: ' genero',
      precio: 1900,
      stock: 100,
      destacado: false,
      agregado: false,
      cantidad: 0,
    },
    {
      nombre: 'Sackboy: A Big Adventure',
      imagen: 'https://postimg.cc/06QstcTg',
      descripcion:
        'Una aventura a lo grande es en sus mecánicas. Saltar, golpear, esquivar y obetener objetos son las acciones básicas que nos van a acompañar durante toda la aventura.',
      tipo: ' genero',
      precio: 12,
      stock: 100,
      destacado: false,
      agregado: false,
      cantidad: 0,
    },
    {
      nombre: 'Mario Kart',
      imagen: 'https://postimg.cc/9D12tvNt',
      descripcion:
        'Recorre los niveles de este mundo retro y encuentra la súper hoja que te dará el poder de volar. Esquiva los obstáculos, recoge las monedas y frutas y defiéndete de los enemigos con las habilidades de Mario',
      tipo: ' genero',
      precio: 123,
      stock: 100,
      destacado: false,
      agregado: false,
      cantidad: 0,
    },
    {
      nombre: 'Plantas & Zombies 3',
      imagen: 'https://postimg.cc/dLPJqRyd',
      descripcion:
        'Tiene como objetivo llevaros de vuelta al Patio, el lugar donde empezó todo. Tus personajes favoritos están ahí, con nuevos giros emocionantes que podrás descubrir',
      tipo: ' genero',
      precio: 3,
      stock: 100,
      destacado: false,
      agregado: false,
      cantidad: 0,
    },
    {
      nombre: 'Stumble Guys',
      imagen: 'https://postimg.cc/18WxNDfv',
      descripcion:
        '¡Siente la adrenalina a flor de piel mientras participas en asombrosas carreras de plataformas y obstáculos en el juego Stumble Guys Multiplayer Royale y luchas por ser el primero en cruzar la línea de meta sano y salvo! ',
      tipo: ' genero',
      precio: 11,
      stock: 100,
      destacado: false,
      agregado: false,
      cantidad: 0,
    },
    {
      nombre: 'A Game of Thrones',
      imagen: 'https://postimg.cc/4m6snK60',
      descripcion:
        'Un juego de estrategia: Crea el ejército más poderoso y ataca a tus vecinos para demostrar tu fuerza. Una simulación medieval: expande y cultiva tierras con un rico sistema de producción para construir tu reino. ',
      tipo: ' genero',
      precio: 1,
      stock: 100,
      destacado: false,
      agregado: false,
      cantidad: 0,
    },
    {
      nombre: 'God of War',
      imagen: 'https://postimg.cc/FfBQw0vY',
      descripcion:
        'God of War mezcla luchas encarnizadas con pequeñas dosis de puzzles y plataforma. El personaje puede realizar un gran número de combos y poderes durante el transcurso del viaje, que irá aprendiendo avanzando el juego y mejorando sus cualidades.',
      tipo: ' genero',
      precio: 2,
      stock: 100,
      destacado: false,
      agregado: false,
      cantidad: 0,
    },
    {
      nombre: 'Minecraft',
      imagen: 'https://postimg.cc/0Kg1yxbx',
      descripcion:
        'Es una combinación entre ir creando minas y picando en ellas para conseguir los elementos necesarios para mejorar tu equipo y posibilidades. El modo creativo es radicalmente diferente, si bien la base del juego sigue siendo la misma.',
      tipo: ' genero',
      precio: 412,
      stock: 100,
      destacado: false,
      agregado: false,
      cantidad: 0,
    },
    {
      nombre: 'Escuadron S6',
      imagen: 'https://postimg.cc/ppHtN2wJ',
      descripcion:
        'Apex Legends se desarrolla en un universo envolvente en el que la historia evoluciona continuamente, los mapas cambian en cada temporada y nuevas leyendas se unen a la lucha.',
      tipo: ' genero',
      precio: 11,
      stock: 100,
      destacado: false,
      agregado: false,
      cantidad: 0,
    },
  ];

  constructor(private cart: GameCartService) {}

  ngOnInit(): void {}

  addToCart(game: Game): void {
    this.cart.addToCart(game);
    game.stock -= game.cantidad;
    game.cantidad = 0;
  }
}
