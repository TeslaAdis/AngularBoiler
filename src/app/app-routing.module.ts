import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingModule } from './layouts/landing/landing.module';
import { AdminModule } from './layouts/admin/admin.module';

import { AuthGuard } from './core/guards/auth-guard';

// I am lazy loading both layouts, you should exclude default module from lay loading
// and just add it to app.module in imports. (Its important to have different parent paths between modules)
// as we have '' for default and '/admin/*' for admin layout
const routes: Routes = [
  { path: '', loadChildren: () => LandingModule },
  { path: 'admin', loadChildren: () => AdminModule, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
