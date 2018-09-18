import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingModule } from './landing/landing.module';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  { path: '', loadChildren: () => LandingModule },
  { path: 'dashboard', loadChildren: () => AdminModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
