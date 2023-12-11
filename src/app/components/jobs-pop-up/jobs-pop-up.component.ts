import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-pop-up',
  templateUrl: './jobs-pop-up.component.html',
  styleUrls: ['./jobs-pop-up.component.css']
})
export class JobsPopUpComponent implements OnInit {

  constructor() { }

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
