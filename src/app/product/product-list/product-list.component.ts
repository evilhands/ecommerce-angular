import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [CommonModule, ProductItemComponent],
})
export class ProductListComponent {
  $productList!: Observable<any[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.$productList = this.productService.getAllProducts();
  }
}
