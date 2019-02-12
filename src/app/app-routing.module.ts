import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RarebitsComponent} from './rarebits/rarebits.component';

const routes: Routes = [{ path: 'products', component: RarebitsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
