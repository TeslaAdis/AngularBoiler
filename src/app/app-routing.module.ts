import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingModule } from './layouts/landing/landing.module';
import { AdminModule } from './layouts/admin/admin.module';

import { AuthGuard } from './core/guards/auth-guard';

const routes: Routes = [
  { path: '', loadChildren: () => LandingModule },
  { path: 'admin', loadChildren: () => AdminModule, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
