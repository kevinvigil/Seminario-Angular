import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineHomeComponent } from './wine-home/wine-home.component';
import { WineCartComponent } from './wine-cart/wine-cart.component';
import { IntegerInputComponent } from './integer-input/integer-input.component';
import { AboutWineComponent } from './about-wine/about-wine.component';

@NgModule({
  declarations: [
    AppComponent,
    WineListComponent,
    WineHomeComponent,
    WineCartComponent,
    IntegerInputComponent,
    AboutWineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}