import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingLayoutComponent } from './components/landing-layout/landing-layout.component';
import { AboutComponent } from './pages/about/about.component';

import { HomeModule } from './pages/home/home.module';



const routes: Routes = [
    {
        path: '', component: LandingLayoutComponent, children: [
            { path: '', loadChildren: () => HomeModule },
            { path: 'about', component: AboutComponent }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
