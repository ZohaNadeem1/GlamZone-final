import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SideMenuList } from '../../core/user.side.menu';

@Component({
  selector: 'app-profile-side',
  templateUrl: './profile-side.component.html',
  styleUrls: ['./profile-side.component.css']
})
export class ProfileSideComponent implements OnInit {

  items ?: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = SideMenuList;
    }

}
