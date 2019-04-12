import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotiAppComponent } from './spoti-app.component';

const routes: Routes = [
  {
    path: '',
    component: SpotiAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotiAppRoutingModule { }
