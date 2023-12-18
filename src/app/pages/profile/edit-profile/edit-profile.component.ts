import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  loading : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
