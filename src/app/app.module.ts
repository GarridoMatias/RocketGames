import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';

import { FormsModule } from '@angular/forms';
import { RocketgamesGamesComponent } from './rocketgames-games/rocketgames-games.component';
import { RocketgamesAboutComponent } from './rocketgames-about/rocketgames-about.component';
import { RocketgamesContactoComponent } from './rocketgames-contacto/rocketgames-contacto.component';
import { RocketgamesHomeComponent } from './rocketgames-home/rocketgames-home.component';
import { AppRoutingModule } from './app-routing.module';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { GameCartComponent } from './game-cart/game-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    RocketgamesGamesComponent,
    RocketgamesAboutComponent,
    InputIntegerComponent,
    GameCartComponent,
    RocketgamesContactoComponent,
    RocketgamesHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
