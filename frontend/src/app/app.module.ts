import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentComponent } from './authent/authent.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { PlayerComponent } from './player/player.component';
import { FallbackComponent } from './fallback/fallback.component';
import { MiniplayerComponent } from './miniplayer/miniplayer.component';
import { NavigateComponent } from './navigate/navigate.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentComponent,
    MainComponent,
    SearchComponent,
    PlayerComponent,
    FallbackComponent,
    MiniplayerComponent,
    NavigateComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
