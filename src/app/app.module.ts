import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChannelByDateComponent } from './components/channel-by-date/channel-by-date.component';
import { ChannelTileComponent } from './components/channel-tile/channel-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelByDateComponent,
    ChannelTileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
