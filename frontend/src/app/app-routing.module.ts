import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentComponent } from './authent/authent.component';
import { FallbackComponent } from './fallback/fallback.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { PlayerComponent } from './player/player.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'search', component: SearchComponent }, 
  { path: 'player', component: PlayerComponent },
  { path: 'authent', component: AuthentComponent },
  { path: '**', component: FallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
