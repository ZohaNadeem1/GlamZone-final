import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AddJobComponent } from '../add-job/add-job.component';
import { AddServiceComponent } from '../add-service/add-service.component';

@Component({
  selector: 'app-profile-side',
  templateUrl: './profile-side.component.html',
  styleUrls: ['./profile-side.component.css']
})
export class ProfileSideComponent implements OnInit {

  items ?: MenuItem[];

  @ViewChild(AddJobComponent) addJobComponent ?: AddJobComponent;
  @ViewChild(AddServiceComponent) addServiceComponent ?: AddServiceComponent;

  constructor() { }

  ngOnInit() {
    this.items = [
       {
           label: 'Dashboard',
           icon: 'pi pi-fw pi-box',
           routerLink: ['/profile']
       },
       {
           label: 'Profile',
           icon: 'pi pi-fw pi-user',
           items: [
            
            {
                label: 'View Profile',
                icon: 'pi pi-fw pi-user',
                routerLink: ['view']
            },
               {
                   label: 'Edit Profile',
                   icon: 'pi pi-fw pi-user-edit',
                   routerLink: ['edit']
               }
           ]
       },
     {
       label: 'Parlour',
       icon: 'pi pi-fw pi-palette',
       routerLink: [],
       items: [
           {
               label: 'View Parlour',
               icon: 'pi pi-fw pi-align-right',
               routerLink: ['view/parlour']
            },
            {
                label: 'Edit Parlour',
                icon: 'pi pi-fw pi-file-edit',
                routerLink: ['edit/parlour']
            }
       ]
   },
   {
       label: 'Services',
       icon: 'pi pi-fw pi-th-large',
       items: [
        {
            label: 'Add Service',
            command: () => { this.addServiceComponent?.toogleDialog() },
            icon: 'pi pi-fw pi-align-left'
        },
           {
               routerLink: ['services'],
               label: 'All Services',
               icon: 'pi pi-fw pi-align-left',
           },
           {
               label: 'Disbaled Services',
               icon: 'pi pi-fw pi-align-left',
               routerLink: ['edit/parlour']
           }
       ]
   },
   {
       label: 'Jobs',
       icon: 'pi pi-fw pi-verified',
       items: [
           {
               label: 'Add Job',
               command: () => { this.addJobComponent?.toogleDialog() },
               icon: 'pi pi-fw pi-align-left'
           },
           {
               routerLink: ['jobs'],
               label: 'Posted Jobs',
               icon: 'pi pi-fw pi-align-left'
           },
           {
               label: 'Closed Jobs',
               icon: 'pi pi-fw pi-align-left'
           }
       ]
   }
    
   ];;
  }

  addJobDialog(){
     this.addJobComponent?.toogleDialog();
  }



}
