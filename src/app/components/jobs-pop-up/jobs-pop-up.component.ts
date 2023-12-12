import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any; // Declare $ to use jQuery



@Component({
  selector: 'app-jobs-pop-up',
  templateUrl: './jobs-pop-up.component.html',
  styleUrls: ['./jobs-pop-up.component.css']
})
export class JobsPopUpComponent implements OnInit {

 constructor(private route : Router) { }

  ngOnInit() {
  }

  loading: boolean = false;

  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }

}
