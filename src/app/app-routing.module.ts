import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },

  {
    path:'contacto',
    component:ContactoComponent
  },

  {
    path:'servicios',
    component:ServiciosComponent
  },

  {
    path:'**',
    component:NotfoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
