import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
  ],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'], // Corrected styleUrls
})
export class IndexComponent {
  title = 'Exclusive E-commerce';

  categories = [
    'Woman’s Fashion',
    'Men’s Fashion',
    'Electronics',
    'Home & Lifestyle',
    'Medicine',
    'Sports & Outdoor',
    'Baby’s & Toys',
    'Groceries & Pets',
    'Health & Beauty',
  ];

  flashSales = [
    {
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      oldPrice: 160,
      discount: 40,
      rating: 88,
      image: 'assets/images/Frame-611.png',
      width: 500,
      height: 500,
    },
    {
      name: 'AK-900 Wired Keyboard',
      price: 960,
      oldPrice: 1160,
      discount: 35,
      rating: 75,
      image: 'assets/images/ak-900-01-500x500-1.png',
      width: 400,
      height: 300,
    },
    {
      name: 'IPS LCD Gaming Monitor',
      price: 370,
      oldPrice: 400,
      discount: 30,
      rating: 99,
      image: 'assets/images/g27cq4-500x500-1.png',
      width: 500,
      height: 500,
    },
    {
      name: 'S-Series Comfort Chair',
      price: 375,
      oldPrice: 400,
      discount: 25,
      rating: 99,
      image: 'assets/images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash-1.png',
      width: 500,
      height: 500,
    },
  ];

  countdown = {
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  };

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }
}
