import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotiAppComponent } from './spoti-app.component';

const routes: Routes = [
  {
    path: '',
    component: SpotiAppComponent,
    children: [
      {
        path: '',
        loadChildren: './home-spoti/home-spoti.module#HomeSpotiModule'
      },
      {
        path: 'search',
        loadChildren: './search/search.module#SearchModule'
      },
      {
        path: 'artista',
        loadChildren: './artista/artista.module#ArtistaModule'
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotiAppRoutingModule { }
