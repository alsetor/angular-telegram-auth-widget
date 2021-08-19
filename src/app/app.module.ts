import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TelegramWidgetModule } from './telegram-widget/telegram-widget.module';

@NgModule({
  imports: [BrowserModule, FormsModule, TelegramWidgetModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
