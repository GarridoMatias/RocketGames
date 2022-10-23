import { RocketgamesGamesComponent } from './rocketgames-games/rocketgames-games.component';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { RocketgamesAboutComponent } from './rocketgames-about/rocketgames-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full',
  },
  {
    path: 'games',
    component:RocketgamesGamesComponent,
  },
  {
    path : 'about',
    component:RocketgamesAboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
