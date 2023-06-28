import { Routes } from '@angular/router';
import { ProductItemComponent } from './product/product-item/product-item.component';


export const routes: Routes = [
    { path: '', component: ProductItemComponent },
    { path: 'home', component: ProductItemComponent },
];
