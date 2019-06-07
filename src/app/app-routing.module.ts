import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutDetailComponent } from './produt-detail/produt-detail.component'
import { ProdutItemComponent } from './produt-item/produt-item.component';
import { Component404Component } from './component404/component404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: '**' ,component:Component404Component},
  {path: 'product/:id', component: ProdutItemComponent, 
  },
  {path: 'products', component: ProdutDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
