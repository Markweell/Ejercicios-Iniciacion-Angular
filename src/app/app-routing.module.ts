import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: './views/usuarios/usuarios.module#UsuariosModule'
  },
  {
    path: 'pipe',
    loadChildren: './views/pipe/pipe.module#PipeModule'
  },
  {
    path: 'spotiApp',
    loadChildren: './views/spoti-app/spoti-app.module#SpotiAppModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
