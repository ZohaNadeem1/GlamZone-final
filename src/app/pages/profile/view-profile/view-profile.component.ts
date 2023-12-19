import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  editProfile(){
      this.route.navigate(['profile/edit', 123])
  }

}
