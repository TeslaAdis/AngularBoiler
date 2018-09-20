import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingLayoutComponent } from './components/landing-layout/landing-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
    {
        path: '', component: LandingLayoutComponent, children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
