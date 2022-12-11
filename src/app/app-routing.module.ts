import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetsListComponent } from './components/projets/projets-list/projets-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: ProjetsListComponent
  },
  {
    path: 'projets',
    component: ProjetsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
