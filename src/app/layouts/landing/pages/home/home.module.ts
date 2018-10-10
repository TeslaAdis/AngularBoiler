import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeHeadingComponent } from './components/home-heading/home-heading.component';
import { HomeProductsComponent } from './components/home-products/home-products.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { HomeProductItemComponent } from './components/home-products/home-product-item/home-product-item.component';
import { HomeInformationComponent } from './components/home-information/home-information.component';
import { HomeClientsComponent } from './components/home-clients/home-clients.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent },
        ])
    ],
    declarations: [
        HomeComponent,
        HomeHeadingComponent,
        HomeProductsComponent,
        HomeFooterComponent,
        HomeProductItemComponent,
        HomeInformationComponent,
        HomeClientsComponent
    ],
    exports: [
        HomeComponent,
        HomeHeadingComponent,
        HomeProductsComponent,
        HomeFooterComponent,
        HomeProductItemComponent
    ]
})
export class HomeModule { }
