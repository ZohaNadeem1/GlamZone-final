import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  products = [1,2,3,4,5];

  responsiveOptions ?: any[];

  constructor() {}

  ngOnInit() {
      

      this.responsiveOptions = [
          {
              breakpoint: '1024px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '768px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '560px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

}
