import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ProdutItemComponent } from './produt-item/produt-item.component';
import { ProdutDetailComponent } from './produt-detail/produt-detail.component';
import { StarsComponent } from './stars/stars.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Component404Component } from './component404/component404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    SearchComponent,
    HomeComponent,
    ProdutItemComponent,
    ProdutDetailComponent,
    StarsComponent,
    Component404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
