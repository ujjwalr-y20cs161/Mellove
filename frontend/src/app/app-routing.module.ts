import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentComponent } from './authent/authent.component';
import { FallbackComponent } from './fallback/fallback.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { PlayerComponent } from './player/player.component';
import { AppComponent } from './app.component';
import { MiniplayerComponent } from './miniplayer/miniplayer.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: '', redirectTo: '/authent', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'search', component: SearchComponent },
      { path: '', component: PlayerComponent },
    ]
  },
  {
    path: 'authent',
    component: AuthentComponent,
    children: [
      { path: 'main', redirectTo: 'main', pathMatch: "full" },
      { path: 'register', redirectTo: 'register', pathMatch: 'full'}
    ]
  },
  { path: '**', component: FallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
