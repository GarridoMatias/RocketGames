import { RocketgamesGamesComponent } from './rocketgames-games/rocketgames-games.component';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { RocketgamesAboutComponent } from './rocketgames-about/rocketgames-about.component';
import { RocketgamesContactoComponent } from './rocketgames-contacto/rocketgames-contacto.component';
import { RocketgamesHomeComponent } from './rocketgames-home/rocketgames-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component:RocketgamesHomeComponent,
  },
  {
    path: 'games',
    component:RocketgamesGamesComponent,
  },
  {
    path : 'about',
    component:RocketgamesAboutComponent,
  },
  {
    path : 'contacto',
    component:RocketgamesContactoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
