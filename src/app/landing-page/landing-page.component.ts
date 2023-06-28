import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductListComponent } from "../product/product-list/product-list.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    imports: [CommonModule, ProductListComponent]
})
export class LandingPageComponent {
  $productList: Observable<any> | undefined;
}
