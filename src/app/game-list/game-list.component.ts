import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GameCartService } from '../game-cart.service';
import { Game } from './Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games : Game[] = [
  
  {
    "nombre": "BloodBorne",
    "imagen": "./assets/images/001juego-bloodborne.jpg",
    "descripcion": "Explora un mundo totalmente devastado, en el que solo pequeños grupos de personas han conseguido mantenerse con vida. Sobrevive como puedas en este juego apocalíptico.",
    "tipo" : " genero",
    "precio": 1,
    "stock": 100,
    "destacado": true,
    "agregado" : false,
    "cantidad" : 0,
  },
  {
    "nombre": "Harry Potter y la Piedra Filosofal",
    "imagen": "./assets/images/002juego-harrypotter.jpg",
    "descripcion": "Podrás crear tu propio personaje y vivir de primera mano todo lo que significa estudiar en esta mágica escuela. Compartirás clases con los profesores más conocidos que trabajan allí.",
    "tipo" : " genero",
    "precio": 1900,
    "stock": 100,
    "destacado": false,
    "agregado" : false,
    "cantidad" : 0,
  },
  {
    "nombre": "Sackboy: A Big Adventure",
    "imagen": "./assets/images/003juego-sackboy.jfif",
    "descripcion": "Una aventura a lo grande es en sus mecánicas. Saltar, golpear, esquivar y obetener objetos son las acciones básicas que nos van a acompañar durante toda la aventura.",
    "tipo" : " genero",
    "precio": 12,
    "stock": 100,
    "destacado": false,
    "agregado" : false,
    "cantidad" : 0,
  },
  {
    "nombre": "Mario Kart",
    "imagen": "./assets/images/004juego-mariokart.jpg",
    "descripcion": "Recorre los niveles de este mundo retro y encuentra la súper hoja que te dará el poder de volar. Esquiva los obstáculos, recoge las monedas y frutas y defiéndete de los enemigos con las habilidades de Mario",
    "tipo" : " genero",
    "precio": 123,
    "stock": 100,
    "destacado": false,
    "agregado" : false,
    "cantidad" : 0,
  },
  {
    "nombre": "Plantas & Zombies 3",
    "imagen": "./assets/images/005juego-plantszombies3.jpg",
    "descripcion": "Tiene como objetivo llevaros de vuelta al Patio, el lugar donde empezó todo. Tus personajes favoritos están ahí, con nuevos giros emocionantes que podrás descubrir",
    "tipo" : " genero",
    "precio": 3,
    "stock": 100,
    "destacado": false,
    "agregado" : false,
    "cantidad" : 0,
  },
  {
    "nombre": "Stumble Guys",
    "imagen": "./assets/images/006juego-stumbleguys.jpg",
    "descripcion": "¡Siente la adrenalina a flor de piel mientras participas en asombrosas carreras de plataformas y obstáculos en el juego Stumble Guys Multiplayer Royale y luchas por ser el primero en cruzar la línea de meta sano y salvo! ",
    "tipo" : " genero",
    "precio": 11,
    "stock": 100,
    "destacado": false,
    "agregado" : false,
    "cantidad" : 0,
  },
  {
    "nombre": "A Game of Thrones",
    "imagen": "./assets/images/007juego-got.jpg",
    "descripcion": "Un juego de estrategia: Crea el ejército más poderoso y ataca a tus vecinos para demostrar tu fuerza. Una simulación medieval: expande y cultiva tierras con un rico sistema de producción para construir tu reino. ",
    "tipo" : " genero",
    "precio": 1,
    "stock": 100,
    "destacado": false,
    "agregado" : false,
    "cantidad" : 0,
  },
  {
    "nombre": "God of War",
    "imagen": "./assets/images/008juego-godofwar.jpg",
    "descripcion": "God of War mezcla luchas encarnizadas con pequeñas dosis de puzzles y plataforma. El personaje puede realizar un gran número de combos y poderes durante el transcurso del viaje, que irá aprendiendo avanzando el juego y mejorando sus cualidades.",
    "tipo" : " genero",
    "precio": 2,
    "stock": 100,
    "destacado": false,
    "agregado" : false,
    "cantidad" : 0,
  },
  {
    "nombre": "Minecraft",
    "imagen": "./assets/images/001juego-bloodborne.jpg",
    "descripcion": "Es una combinación entre ir creando minas y picando en ellas para conseguir los elementos necesarios para mejorar tu equipo y posibilidades. El modo creativo es radicalmente diferente, si bien la base del juego sigue siendo la misma.",
    "tipo" : " genero",
    "precio": 412,
    "stock": 100,
    "destacado": false,
    "agregado" : false,
    "cantidad" : 0,
  },
  {
    "nombre": "Escuadron S6",
    "imagen": "./assets/images/001juego-bloodborne.jpg",
    "descripcion": "Apex Legends se desarrolla en un universo envolvente en el que la historia evoluciona continuamente, los mapas cambian en cada temporada y nuevas leyendas se unen a la lucha.",
    "tipo" : " genero",
    "precio": 11,
    "stock": 100,
    "destacado": false,
    "agregado" : false,
    "cantidad" : 0,
  }
]


  constructor(private cart: GameCartService) {}

  ngOnInit(): void {
  }

  addToCart(game: Game): void{
    this.cart.addToCart(game);
    game.stock-= game.cantidad;
    game.cantidad = 0;
  }


}

