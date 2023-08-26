import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentComponent } from './authent/authent.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { PlayerComponent } from './player/player.component';
import { FallbackComponent } from './fallback/fallback.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentComponent,
    MainComponent,
    SearchComponent,
    PlayerComponent,
    FallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
