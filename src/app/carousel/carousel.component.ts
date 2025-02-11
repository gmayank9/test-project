import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  carouselImages = [
    'https://via.placeholder.com/1200x300/000000/FFFFFF?text=Banner+1',
    'https://via.placeholder.com/1200x300/FF0000/FFFFFF?text=Banner+2',
    'https://via.placeholder.com/1200x300/00FF00/FFFFFF?text=Banner+3',
  ];
  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
    }, 3000);
  }
  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
