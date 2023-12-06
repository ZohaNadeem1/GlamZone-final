import { Component, Input, OnInit } from '@angular/core';
import { Parlour } from 'src/app/model/parlour.model';

@Component({
  selector: 'app-parlour-card',
  templateUrl: './parlour-card.component.html',
  styleUrls: ['./parlour-card.component.css']
})
export class ParlourCardComponent implements OnInit {

  @Input() parlourCardDetails ?: Parlour;

  constructor() { }

  ngOnInit() {
  }

}
