import { NgModule } from '@angular/core';

import { Routes,RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';


export const routes: Routes = [
  { path: '**', component: NotFoundComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
