import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaysComponentComponent } from './days-component/days-component.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { PlayerComponentComponent } from './player-component/player-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DaysComponentComponent,
    DetailComponentComponent,
    PlayerComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // donde va a cargar la aplicacion
})
export class AppModule { }
